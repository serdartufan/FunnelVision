import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { URL } from 'url';

const OUT_DIR = path.join('/Users/serdartufan/funnelvision/public/logos');

async function downloadFile(fileUrl, destPath) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(fileUrl);
    const protocol = parsedUrl.protocol === 'https:' ? https : http;
    const file = fs.createWriteStream(destPath);
    protocol.get(fileUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlinkSync(destPath);
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => {
      try { fs.unlinkSync(destPath); } catch {}
      reject(err);
    });
  });
}

// Find the best logo element on the page and return info about it
async function findBestLogo(page) {
  return await page.evaluate(() => {
    const selectors = [
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
      'img[alt*="logo" i]',
      'img[alt*="Logo" i]',
      'header img',
      'nav img',
    ];
    const results = [];
    for (const sel of selectors) {
      const els = document.querySelectorAll(sel);
      for (const el of els) {
        if (el.src && !el.src.startsWith('data:')) {
          const rect = el.getBoundingClientRect();
          results.push({
            src: el.src,
            alt: el.alt || '',
            width: rect.width,
            height: rect.height,
            naturalWidth: el.naturalWidth,
            naturalHeight: el.naturalHeight,
            selector: sel,
          });
        }
      }
      if (results.length > 0) break;
    }
    // Also scan all imgs for any with 'logo' in src
    if (results.length === 0) {
      for (const el of document.querySelectorAll('img')) {
        if (el.src && (el.src.includes('logo') || el.src.includes('Logo')) && !el.src.startsWith('data:')) {
          const rect = el.getBoundingClientRect();
          results.push({
            src: el.src,
            alt: el.alt || '',
            width: rect.width,
            height: rect.height,
            naturalWidth: el.naturalWidth,
            naturalHeight: el.naturalHeight,
            selector: 'img[src*=logo fallback]',
          });
        }
      }
    }
    return results;
  });
}

const browser = await chromium.launch({ headless: true });

// ── 1. DREAMFIT ──────────────────────────────────────────────────────────────
console.log('\n→ dreamfit.nl');
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://dreamfit.nl/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.keyboard.press('Escape');
  await page.waitForTimeout(800);

  const logos = await findBestLogo(page);
  console.log('  Found logos:', JSON.stringify(logos.slice(0, 3), null, 2));

  let saved = false;
  for (const logo of logos) {
    const absUrl = logo.src.startsWith('http') ? logo.src : new URL(logo.src, 'https://dreamfit.nl/').href;
    try {
      if (absUrl.includes('.svg')) {
        // Screenshot the SVG element at 3x DPR for quality
        const el = await page.$(`img[src*="${new URL(absUrl).pathname.split('/').pop()}"]`);
        if (el) {
          await page.setViewportSize({ width: 1440, height: 900 });
          // Use CDP to set device scale factor
          const destPath = path.join(OUT_DIR, 'dreamfit.png');
          await el.screenshot({ path: destPath, scale: 'device' });
          const stat = fs.statSync(destPath);
          console.log(`  Saved dreamfit.png (${stat.size} bytes) via SVG screenshot`);
          saved = true;
          break;
        }
      } else {
        const destPath = path.join(OUT_DIR, 'dreamfit.png');
        await downloadFile(absUrl, destPath);
        const stat = fs.statSync(destPath);
        console.log(`  Saved dreamfit.png (${stat.size} bytes) downloaded from ${absUrl}`);
        saved = true;
        break;
      }
    } catch (e) {
      console.log(`  Failed: ${e.message}`);
    }
  }

  if (!saved) {
    // Header screenshot fallback
    const el = await page.$('header, .header, nav, .navbar, .site-header');
    if (el) {
      await el.screenshot({ path: path.join(OUT_DIR, 'dreamfit.png') });
      console.log('  Saved dreamfit.png via header screenshot');
    }
  }
  await page.close();
}

// ── 2. CAGEDFIGHT ────────────────────────────────────────────────────────────
console.log('\n→ cagedfight.com');
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://www.cagedfight.com/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.keyboard.press('Escape');
  await page.waitForTimeout(800);

  const logos = await findBestLogo(page);
  console.log('  Found logos:', JSON.stringify(logos.slice(0, 3), null, 2));

  let saved = false;
  for (const logo of logos) {
    const absUrl = logo.src.startsWith('http') ? logo.src : new URL(logo.src, 'https://www.cagedfight.com/').href;
    try {
      if (absUrl.includes('.svg')) {
        const el = await page.$(`img[src*="${new URL(absUrl).pathname.split('/').pop()}"]`);
        if (el) {
          await el.screenshot({ path: path.join(OUT_DIR, 'cagedfight.png') });
          const stat = fs.statSync(path.join(OUT_DIR, 'cagedfight.png'));
          console.log(`  Saved cagedfight.png (${stat.size} bytes)`);
          saved = true;
          break;
        }
      } else {
        const destPath = path.join(OUT_DIR, 'cagedfight.png');
        await downloadFile(absUrl, destPath);
        const stat = fs.statSync(destPath);
        console.log(`  Saved cagedfight.png (${stat.size} bytes)`);
        saved = true;
        break;
      }
    } catch (e) {
      console.log(`  Failed: ${e.message}`);
    }
  }

  if (!saved) {
    const el = await page.$('header, .header, nav, .navbar');
    if (el) {
      await el.screenshot({ path: path.join(OUT_DIR, 'cagedfight.png') });
      console.log('  Saved cagedfight.png via header screenshot');
    }
  }
  await page.close();
}

// ── 3. DEVIDEOVAKVROUW ────────────────────────────────────────────────────────
console.log('\n→ devideovakvrouw.nl');
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://www.devideovakvrouw.nl/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.keyboard.press('Escape');
  await page.waitForTimeout(800);

  const logos = await findBestLogo(page);
  console.log('  Found logos:', JSON.stringify(logos.slice(0, 3), null, 2));

  let saved = false;
  for (const logo of logos) {
    const absUrl = logo.src.startsWith('http') ? logo.src : new URL(logo.src, 'https://www.devideovakvrouw.nl/').href;
    try {
      if (absUrl.includes('.svg')) {
        const el = await page.$(`img[src*="${new URL(absUrl).pathname.split('/').pop()}"]`);
        if (el) {
          await el.screenshot({ path: path.join(OUT_DIR, 'devideovakvrouw.png') });
          const stat = fs.statSync(path.join(OUT_DIR, 'devideovakvrouw.png'));
          console.log(`  Saved devideovakvrouw.png (${stat.size} bytes)`);
          saved = true;
          break;
        }
      } else {
        const destPath = path.join(OUT_DIR, 'devideovakvrouw.png');
        await downloadFile(absUrl, destPath);
        const stat = fs.statSync(destPath);
        console.log(`  Saved devideovakvrouw.png (${stat.size} bytes)`);
        saved = true;
        break;
      }
    } catch (e) {
      console.log(`  Failed: ${e.message}`);
    }
  }

  if (!saved) {
    const el = await page.$('header, .header, nav, .navbar');
    if (el) {
      await el.screenshot({ path: path.join(OUT_DIR, 'devideovakvrouw.png') });
      console.log('  Saved devideovakvrouw.png via header screenshot');
    }
  }
  await page.close();
}

// ── 4. REGELJELEASE ───────────────────────────────────────────────────────────
console.log('\n→ regeljelease.nl');
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://www.regeljelease.nl/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.keyboard.press('Escape');
  await page.waitForTimeout(800);

  const logos = await findBestLogo(page);
  console.log('  Found logos:', JSON.stringify(logos.slice(0, 3), null, 2));

  let saved = false;
  for (const logo of logos) {
    const absUrl = logo.src.startsWith('http') ? logo.src : new URL(logo.src, 'https://www.regeljelease.nl/').href;
    try {
      if (absUrl.includes('.svg')) {
        const el = await page.$(`img[src*="${new URL(absUrl).pathname.split('/').pop()}"]`);
        if (el) {
          await el.screenshot({ path: path.join(OUT_DIR, 'regeljelease.png') });
          const stat = fs.statSync(path.join(OUT_DIR, 'regeljelease.png'));
          console.log(`  Saved regeljelease.png (${stat.size} bytes)`);
          saved = true;
          break;
        }
      } else {
        const destPath = path.join(OUT_DIR, 'regeljelease.png');
        await downloadFile(absUrl, destPath);
        const stat = fs.statSync(destPath);
        console.log(`  Saved regeljelease.png (${stat.size} bytes)`);
        saved = true;
        break;
      }
    } catch (e) {
      console.log(`  Failed: ${e.message}`);
    }
  }

  if (!saved) {
    const el = await page.$('header, .header, nav, .navbar');
    if (el) {
      await el.screenshot({ path: path.join(OUT_DIR, 'regeljelease.png') });
      console.log('  Saved regeljelease.png via header screenshot');
    }
  }
  await page.close();
}

// ── 5. MYMIRACLE (was too small at 96x48) ────────────────────────────────────
console.log('\n→ mymiracle.nl');
{
  // Use 3x device pixel ratio for much higher resolution
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 3,
  });
  const page = await context.newPage();
  await page.goto('https://www.mymiracle.nl/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.keyboard.press('Escape');
  await page.waitForTimeout(800);

  // Log all imgs to find the best one
  const allImgs = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      alt: img.alt,
      class: img.className,
      width: img.naturalWidth,
      height: img.naturalHeight,
    })).filter(i => i.src && !i.src.startsWith('data:')).slice(0, 10);
  });
  console.log('  All imgs:', JSON.stringify(allImgs, null, 2));

  const logos = await findBestLogo(page);
  console.log('  Logo candidates:', JSON.stringify(logos, null, 2));

  let saved = false;

  // Try to find the logo element and screenshot at 3x
  const logoEl = await page.$('header img, nav img, [class*="logo"] img, img[alt*="logo" i], img[alt*="miracle" i]');
  if (logoEl) {
    const destPath = path.join(OUT_DIR, 'mymiracle.png');
    await logoEl.screenshot({ path: destPath });
    const stat = fs.statSync(destPath);
    console.log(`  Saved mymiracle.png (${stat.size} bytes) at 3x DPR`);
    saved = true;
  }

  if (!saved) {
    for (const logo of logos) {
      const absUrl = logo.src.startsWith('http') ? logo.src : new URL(logo.src, 'https://www.mymiracle.nl/').href;
      try {
        const destPath = path.join(OUT_DIR, 'mymiracle.png');
        await downloadFile(absUrl, destPath);
        const stat = fs.statSync(destPath);
        console.log(`  Saved mymiracle.png (${stat.size} bytes) downloaded`);
        saved = true;
        break;
      } catch (e) {
        console.log(`  Failed: ${e.message}`);
      }
    }
  }

  if (!saved) {
    const el = await page.$('header, .header, nav');
    if (el) {
      await el.screenshot({ path: path.join(OUT_DIR, 'mymiracle.png') });
      console.log('  Saved mymiracle.png via header screenshot at 3x');
    }
  }

  await context.close();
}

// ── 6. CHANNELORANGE (full logo, not just orange part) ───────────────────────
console.log('\n→ channelorange.nl');
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://www.channelorange.nl/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.keyboard.press('Escape');
  await page.waitForTimeout(800);

  // Log all imgs in header/nav
  const allImgs = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('header img, nav img, [class*="logo"] img, img')).map(img => ({
      src: img.src,
      alt: img.alt,
      class: img.className,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
    })).filter(i => i.src && !i.src.startsWith('data:')).slice(0, 15);
  });
  console.log('  All header/nav imgs:', JSON.stringify(allImgs, null, 2));

  let saved = false;

  // Look for non-white version of the logo (check footer, about page, etc.)
  const footerImgs = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('footer img, [class*="footer"] img')).map(img => ({
      src: img.src,
      alt: img.alt,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
    })).filter(i => i.src && !i.src.startsWith('data:'));
  });
  console.log('  Footer imgs:', JSON.stringify(footerImgs, null, 2));

  // Try downloading any logo that seems right
  for (const img of [...allImgs, ...footerImgs]) {
    if (img.src && (img.src.includes('logo') || img.src.includes('Logo') || img.alt?.toLowerCase().includes('channel'))) {
      const absUrl = img.src;
      try {
        const destPath = path.join(OUT_DIR, 'channelorange.png');
        if (absUrl.includes('.svg')) {
          // Screenshot the element
          const el = await page.$(`img[src="${absUrl}"], img[src*="${new URL(absUrl).pathname.split('/').pop()}"]`);
          if (el) {
            // Set bg to white to capture white text? No — let's check if there's a dark version
            await el.screenshot({ path: destPath });
            const stat = fs.statSync(destPath);
            console.log(`  Saved channelorange.png (${stat.size} bytes) as SVG screenshot`);
            saved = true;
            break;
          }
        } else {
          await downloadFile(absUrl, destPath);
          const stat = fs.statSync(destPath);
          console.log(`  Saved channelorange.png (${stat.size} bytes) downloaded from ${absUrl}`);
          saved = true;
          break;
        }
      } catch (e) {
        console.log(`  Failed for ${absUrl}: ${e.message}`);
      }
    }
  }

  // If not saved: screenshot just the logo element with a white/light background
  if (!saved) {
    // Try to find the logo and screenshot it
    const logoEl = await page.$('[class*="logo"], header a img, nav a img, .navbar-brand img, #logo img, header img');
    if (logoEl) {
      // Add white bg for screenshot
      await page.evaluate(el => {
        el.style.background = '#ffffff';
        el.style.padding = '8px';
      }, logoEl);
      await logoEl.screenshot({ path: path.join(OUT_DIR, 'channelorange.png') });
      console.log('  Saved channelorange.png via logo element screenshot (white bg)');
      saved = true;
    }
  }

  if (!saved) {
    // Screenshot header section with white bg
    await page.evaluate(() => {
      const header = document.querySelector('header, nav, .header, .navbar');
      if (header) header.style.background = '#ffffff';
    });
    await page.waitForTimeout(300);
    const el = await page.$('header, nav, .header, .navbar');
    if (el) {
      await el.screenshot({ path: path.join(OUT_DIR, 'channelorange.png') });
      console.log('  Saved channelorange.png via header screenshot');
    }
  }

  await page.close();
}

await browser.close();

// ── FINAL REPORT ─────────────────────────────────────────────────────────────
console.log('\n\n═══════════════════════════════════════════════════════');
console.log('FINAL FILE SIZES');
console.log('═══════════════════════════════════════════════════════');
const files = ['dreamfit.png', 'cagedfight.png', 'devideovakvrouw.png', 'regeljelease.png', 'mymiracle.png', 'channelorange.png'];
for (const f of files) {
  const p = path.join(OUT_DIR, f);
  try {
    const stat = fs.statSync(p);
    const ok = stat.size >= 5000 ? '✅' : '⚠️ TOO SMALL';
    console.log(`${ok} ${f.padEnd(30)} ${(stat.size / 1024).toFixed(1)}KB`);
  } catch {
    console.log(`❌ ${f} — not found`);
  }
}
