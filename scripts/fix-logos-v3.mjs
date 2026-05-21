import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { URL } from 'url';

const OUT_DIR = '/Users/serdartufan/funnelvision/public/logos';

async function downloadFile(fileUrl, destPath) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(fileUrl);
    const protocol = parsedUrl.protocol === 'https:' ? https : http;
    const file = fs.createWriteStream(destPath);
    protocol.get(fileUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        try { fs.unlinkSync(destPath); } catch {}
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

const browser = await chromium.launch({ headless: true });

// ── 1. DREAMFIT — download the actual logo PNG directly ──────────────────────
// The logo URL is known: /wp-content/uploads/2022/08/Schermafbeelding-2024-01-24-om-14.33.28.png
// It's only 138x38 but that's what the site uses. At 4x DPR screenshot of JUST this img element.
console.log('\n→ dreamfit.nl (targeted logo fix)');
try {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 4 });
  const page = await ctx.newPage();
  await page.goto('https://dreamfit.nl/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(1500);

  // Find smallest img in header area (that's the logo, not a hero image)
  const logoInfo = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('header img, nav img, .menu-logo img, .site-logo img'));
    // Sort by natural area ascending, pick the smallest that's still reasonable
    const ranked = imgs
      .filter(img => img.naturalWidth > 0 && img.naturalWidth < 400 && img.naturalHeight < 200)
      .map(img => ({ el: img, area: img.naturalWidth * img.naturalHeight, src: img.src, alt: img.alt }))
      .sort((a, b) => a.area - b.area);
    return ranked.slice(0, 3).map(r => ({ src: r.src, alt: r.alt, area: r.area }));
  });
  console.log('  Small logo candidates:', JSON.stringify(logoInfo, null, 2));

  // Get the actual element and screenshot at 4x
  const logoEl = await page.evaluateHandle(() => {
    const imgs = Array.from(document.querySelectorAll('header img, nav img, .menu-logo img, .site-logo img'));
    return imgs.find(img => img.naturalWidth > 0 && img.naturalWidth < 400 && img.naturalHeight < 200) || null;
  });

  const isNull = await logoEl.evaluate(el => el === null);
  if (!isNull) {
    await logoEl.screenshot({ path: path.join(OUT_DIR, 'dreamfit.png') });
    const stat = fs.statSync(path.join(OUT_DIR, 'dreamfit.png'));
    const dims = await logoEl.evaluate(el => ({ nw: el.naturalWidth, nh: el.naturalHeight }));
    console.log(`  ✅ dreamfit.png — ${(stat.size / 1024).toFixed(1)}KB | natural: ${dims.nw}x${dims.nh} | screenshot: ${dims.nw * 4}x${dims.nh * 4}`);
  } else {
    // Try direct download of the known URL
    const logoUrl = 'https://dreamfit.nl/wp-content/uploads/2022/08/Schermafbeelding-2024-01-24-om-14.33.28.png';
    await downloadFile(logoUrl, path.join(OUT_DIR, 'dreamfit.png'));
    const stat = fs.statSync(path.join(OUT_DIR, 'dreamfit.png'));
    console.log(`  ✅ dreamfit.png (direct download) — ${(stat.size / 1024).toFixed(1)}KB`);
  }
  await ctx.close();
} catch (e) {
  console.log(`  ❌ ${e.message.slice(0, 100)}`);
}

// ── 2. REGELJELEASE — use the dark logo SVG (not the phone icon) ─────────────
// Known: logo-6EMZQZ73.svg (dark, 175x32) and logo-white-QN2T23M4.svg (white, 254x52)
// The dark one (logo-6EMZQZ73) is better for brightness(0) invert(1)
console.log('\n→ regeljelease.nl (use dark logo SVG)');
try {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 4 });
  const page = await ctx.newPage();
  try {
    await page.goto('https://www.regeljelease.nl/', { waitUntil: 'domcontentloaded', timeout: 35000 });
  } catch {
    console.log('  Partial load, proceeding...');
  }
  await page.waitForTimeout(2000);

  const logoInfo = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img'))
      .filter(img => img.src && (img.src.includes('logo') || img.alt?.toLowerCase().includes('regel')))
      .map(img => ({ src: img.src, alt: img.alt, nw: img.naturalWidth, nh: img.naturalHeight }));
  });
  console.log('  Logo imgs:', JSON.stringify(logoInfo, null, 2));

  // Pick the non-white, non-phone logo
  const darkLogoUrl = logoInfo.find(l => l.src.includes('logo') && !l.src.includes('white') && !l.src.includes('phone'))?.src;
  const whiteLogoUrl = logoInfo.find(l => l.src.includes('logo-white') || l.src.includes('logo_white'))?.src;
  const anyLogoUrl = darkLogoUrl || logoInfo.find(l => l.src.includes('logo'))?.src;

  console.log('  Dark logo URL:', darkLogoUrl);
  console.log('  Any logo URL:', anyLogoUrl);

  if (anyLogoUrl) {
    // Screenshot the SVG element at 4x DPR
    const logoEl = await page.$(`img[src="${anyLogoUrl}"], img[src*="${new URL(anyLogoUrl).pathname.split('/').pop()}"]`);
    if (logoEl) {
      await logoEl.screenshot({ path: path.join(OUT_DIR, 'regeljelease.png') });
      const stat = fs.statSync(path.join(OUT_DIR, 'regeljelease.png'));
      const dims = await logoEl.evaluate(el => ({ nw: el.naturalWidth, nh: el.naturalHeight }));
      console.log(`  ✅ regeljelease.png — ${(stat.size / 1024).toFixed(1)}KB | natural: ${dims.nw}x${dims.nh}`);
    } else {
      console.log('  Could not find logo element by src, trying header screenshot...');
      const el = await page.$('header, nav');
      if (el) {
        await el.screenshot({ path: path.join(OUT_DIR, 'regeljelease.png') });
        const stat = fs.statSync(path.join(OUT_DIR, 'regeljelease.png'));
        console.log(`  ✅ regeljelease.png — ${(stat.size / 1024).toFixed(1)}KB (header)`);
      }
    }
  }
  await ctx.close();
} catch (e) {
  console.log(`  ❌ ${e.message.slice(0, 100)}`);
}

// ── 3. CHANNELORANGE — download the BLACK version of the logo ────────────────
// Found: logo+zwart-1920w.png (zwart = black, 1080x148) — this is the dark/visible version
console.log('\n→ channelorange.nl (black logo version)');
try {
  const blackLogoUrl = 'https://lirp.cdn-website.com/bc489f49/dms3rep/multi/opt/logo+zwart-1920w.png';
  await downloadFile(blackLogoUrl, path.join(OUT_DIR, 'channelorange.png'));
  const stat = fs.statSync(path.join(OUT_DIR, 'channelorange.png'));
  console.log(`  ✅ channelorange.png (black logo) — ${(stat.size / 1024).toFixed(1)}KB`);
} catch (e) {
  console.log(`  ❌ ${e.message.slice(0, 100)}`);
  // Fallback: Playwright
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto('https://www.channelorange.nl/', { waitUntil: 'domcontentloaded', timeout: 25000 });
    await page.waitForTimeout(1500);
    const el = await page.$('img.secondary-image, img[class*="secondary"]');
    if (el) {
      await el.screenshot({ path: path.join(OUT_DIR, 'channelorange.png') });
      const stat = fs.statSync(path.join(OUT_DIR, 'channelorange.png'));
      console.log(`  ✅ channelorange.png (black, via screenshot) — ${(stat.size / 1024).toFixed(1)}KB`);
    }
    await page.close();
  } catch (e2) {
    console.log(`  ❌ Fallback failed: ${e2.message.slice(0, 80)}`);
  }
}

await browser.close();

// ── FINAL REPORT ──────────────────────────────────────────────────────────────
console.log('\n\n═══════════════════════════════════════════════════════');
console.log('FINAL SIZES');
console.log('═══════════════════════════════════════════════════════');
const allFiles = fs.readdirSync(OUT_DIR).filter(f => f.endsWith('.png') || f.endsWith('.svg'));
for (const f of allFiles.sort()) {
  const stat = fs.statSync(path.join(OUT_DIR, f));
  const ok = stat.size >= 3000 ? '✅' : '⚠️';
  console.log(`${ok} ${f.padEnd(35)} ${(stat.size / 1024).toFixed(1)}KB`);
}
