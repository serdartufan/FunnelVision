import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { URL } from 'url';

const OUT_DIR = path.join('/Users/serdartufan/funnelvision/public/logos');
fs.mkdirSync(OUT_DIR, { recursive: true });

const sites = [
  { url: 'https://thefightcompany.nl/',           name: 'thefightcompany.png' },
  { url: 'https://www.cagedfight.com/',           name: 'cagedfight.png' },
  { url: 'https://dreamfit.nl/',                  name: 'dreamfit.png' },
  { url: 'https://verpoorten-vitality.nl/',       name: 'verpoorten-vitality.png' },
  { url: 'https://www.mymiracle.nl/',             name: 'mymiracle.png' },
  { url: 'https://www.devideovakvrouw.nl/',       name: 'devideovakvrouw.png' },
  { url: 'https://www.channelorange.nl/',         name: 'channelorange.png' },
  { url: 'https://www.regeljelease.nl/',          name: 'regeljelease.png' },
  { url: 'https://maximizd.com/',                 name: 'maximizd.png' },
  { url: 'https://www.redmarketing.biz/',         name: 'redmarketing.png' },
];

// Download a file from a URL to a local path
async function downloadFile(fileUrl, destPath) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(fileUrl);
    const protocol = parsedUrl.protocol === 'https:' ? https : http;
    const file = fs.createWriteStream(destPath);
    protocol.get(fileUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

// Try to find logo img src on the page
async function findLogoSrc(page, baseUrl) {
  return await page.evaluate(() => {
    const selectors = [
      // by class/id containing 'logo'
      'header img[class*="logo"]',
      'header img[id*="logo"]',
      'header img[src*="logo"]',
      'nav img[class*="logo"]',
      'nav img[id*="logo"]',
      'nav img[src*="logo"]',
      '.logo img',
      '#logo img',
      '[class*="logo"] img',
      '[id*="logo"] img',
      // by alt
      'img[alt*="logo" i]',
      'img[alt*="Logo" i]',
      // header first img fallback
      'header img',
      'nav img',
      '.navbar img',
      '.nav img',
      '.header img',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el && el.src) return el.src;
      if (el && el.getAttribute('data-src')) return el.getAttribute('data-src');
    }
    // SVG logo links
    const svgLogoLink = document.querySelector('header a svg, nav a svg, .logo svg, .navbar a svg');
    if (svgLogoLink) return '__SVG__';
    return null;
  });
}

// Screenshot just the header area
async function screenshotHeader(page, destPath) {
  try {
    const headerEl = await page.$('header, nav, .header, .navbar, .site-header');
    if (headerEl) {
      await headerEl.screenshot({ path: destPath });
      return true;
    }
    // fallback: top of page
    await page.screenshot({ path: destPath, clip: { x: 0, y: 0, width: 1280, height: 120 } });
    return true;
  } catch {
    return false;
  }
}

// Try to find SVG logo and save as PNG via screenshot
async function captureSvgLogo(page, destPath) {
  try {
    const svgEl = await page.$('header a svg, nav a svg, .logo svg, .navbar a svg, [class*="logo"] svg, header svg');
    if (svgEl) {
      await svgEl.screenshot({ path: destPath });
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

const results = [];

const browser = await chromium.launch({ headless: true });

for (const site of sites) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const destPath = path.join(OUT_DIR, site.name);
  let status = 'failed';
  let note = '';

  try {
    console.log(`\n→ ${site.url}`);
    await page.goto(site.url, { waitUntil: 'networkidle', timeout: 30000 });

    // Dismiss cookie banners / overlays
    await page.keyboard.press('Escape');
    await page.waitForTimeout(800);

    const logoSrc = await findLogoSrc(page, site.url);

    if (logoSrc === '__SVG__') {
      console.log('  SVG logo found, screenshotting...');
      const ok = await captureSvgLogo(page, destPath);
      status = ok ? 'svg-screenshot' : 'failed';
      note = ok ? 'SVG captured via screenshot' : 'SVG not capturable';
    } else if (logoSrc) {
      console.log(`  Logo src: ${logoSrc}`);
      // Resolve relative URLs
      const absUrl = logoSrc.startsWith('http') ? logoSrc : new URL(logoSrc, site.url).href;
      // Check if SVG file → screenshot the element instead
      if (absUrl.includes('.svg')) {
        const svgEl = await page.$(`img[src*="${new URL(absUrl).pathname.split('/').pop()}"]`);
        if (svgEl) {
          await svgEl.screenshot({ path: destPath });
          status = 'svg-screenshot';
          note = 'SVG img saved as PNG screenshot';
        } else {
          await downloadFile(absUrl, destPath.replace('.png', '.svg'));
          status = 'downloaded-svg';
          note = 'Saved as .svg (rename if needed)';
        }
      } else {
        await downloadFile(absUrl, destPath);
        status = 'downloaded';
        note = 'Logo image downloaded';
      }
    } else {
      console.log('  No logo found — screenshotting header...');
      const ok = await screenshotHeader(page, destPath);
      status = ok ? 'header-screenshot' : 'failed';
      note = ok ? 'Header screenshot saved (no logo element found)' : 'All methods failed';
    }
  } catch (err) {
    note = err.message.slice(0, 80);
    console.log(`  ERROR: ${note}`);
    // Try header screenshot as last resort
    try {
      const ok = await screenshotHeader(page, destPath);
      if (ok) { status = 'header-screenshot'; note += ' → header screenshot saved'; }
    } catch {}
  }

  results.push({ site: site.url, file: site.name, status, note });
  console.log(`  ${status}: ${note}`);
  await page.close();
}

await browser.close();

console.log('\n\n═══════════════════════════════════════════════════════');
console.log('OVERZICHT LOGO DOWNLOADS');
console.log('═══════════════════════════════════════════════════════');
for (const r of results) {
  const icon = r.status === 'downloaded' ? '✅' : r.status.includes('screenshot') ? '📸' : r.status === 'downloaded-svg' ? '📁' : '❌';
  console.log(`${icon}  ${r.file.padEnd(30)} ${r.status.padEnd(20)} ${r.note}`);
}
