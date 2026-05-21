/**
 * Fix logos that have non-transparent backgrounds.
 * Goal: every logo must have a transparent background so
 * `filter: brightness(0) invert(1)` renders it as a clean white mark.
 *
 * Strategy per logo:
 *  - mymiracle    → download SVG directly (transparent by default)
 *  - regeljelease → download SVG directly
 *  - maximizd     → visit site, find actual SVG/transparent PNG
 *  - dreamfit     → visit site, find actual SVG/transparent PNG
 *  - thefightcompany → visit site, find actual logo (not header screenshot)
 *  - devideovakvrouw → visit site, find better version
 */

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { URL } from 'url';

const OUT_DIR = '/Users/serdartufan/funnelvision/public/logos';

async function download(fileUrl, destPath) {
  return new Promise((resolve, reject) => {
    const proto = new URL(fileUrl).protocol === 'https:' ? https : http;
    const file = fs.createWriteStream(destPath);
    proto.get(fileUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        try { fs.unlinkSync(destPath); } catch {}
        return download(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => {
      try { fs.unlinkSync(destPath); } catch {}
      reject(err);
    });
  });
}

async function goto(page, url) {
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1500);
  } catch { /* partial load is fine */ }
}

// Log all <img> sources on a page for inspection
async function logImgs(page) {
  return page.evaluate(() =>
    Array.from(document.querySelectorAll('img'))
      .map(img => ({ src: img.src, alt: img.alt, nw: img.naturalWidth, nh: img.naturalHeight }))
      .filter(i => i.src && !i.src.startsWith('data:'))
      .slice(0, 15)
  );
}

const browser = await chromium.launch({ headless: true });
const updates = {}; // filename → new filename if changed

// ── 1. MYMIRACLE — download SVG directly (transparent bg) ─────────────────
console.log('\n→ 1/6 mymiracle (SVG download)');
try {
  await download('https://www.mymiracle.nl/MyMiracle_Full_Color.svg', path.join(OUT_DIR, 'mymiracle.svg'));
  const stat = fs.statSync(path.join(OUT_DIR, 'mymiracle.svg'));
  console.log(`  ✅ mymiracle.svg — ${(stat.size / 1024).toFixed(1)}KB`);
  updates.mymiracle = 'mymiracle.svg';
} catch (e) {
  console.log(`  ❌ ${e.message}`);
}

// ── 2. REGELJELEASE — download dark SVG directly ──────────────────────────
console.log('\n→ 2/6 regeljelease (SVG download)');
try {
  await download('https://www.regeljelease.nl/static/logo-6EMZQZ73.svg', path.join(OUT_DIR, 'regeljelease.svg'));
  const stat = fs.statSync(path.join(OUT_DIR, 'regeljelease.svg'));
  console.log(`  ✅ regeljelease.svg — ${(stat.size / 1024).toFixed(1)}KB`);
  updates.regeljelease = 'regeljelease.svg';
} catch (e) {
  console.log(`  ❌ ${e.message}`);
}

// ── 3. MAXIMIZD — find transparent logo on the site ───────────────────────
console.log('\n→ 3/6 maximizd.com');
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await goto(page, 'https://maximizd.com/');
  const imgs = await logImgs(page);
  console.log('  Imgs:', JSON.stringify(imgs.slice(0, 6), null, 2));

  // Find the SVG logo link inline (not img tag)
  const svgInfo = await page.evaluate(() => {
    // Check for inline SVG or SVG object/embed
    const svgEl = document.querySelector('header svg, nav svg, .logo svg, [class*="logo"] svg, header a svg');
    if (svgEl) {
      return { type: 'inline-svg', outerHTML: svgEl.outerHTML.slice(0, 200) };
    }
    // Check for object/embed
    const obj = document.querySelector('object[data*=".svg"], embed[src*=".svg"]');
    if (obj) return { type: 'object', src: obj.getAttribute('data') || obj.getAttribute('src') };
    return null;
  });
  console.log('  SVG info:', svgInfo);

  // Try to find any SVG img
  const logoSrc = await page.evaluate(() => {
    const candidates = [
      ...document.querySelectorAll('header img, nav img, [class*="logo"] img, img[alt*="maximizd" i], img[src*="logo" i], img[src*="svg"]')
    ];
    for (const el of candidates) {
      if (el.src && !el.src.startsWith('data:')) return el.src;
    }
    return null;
  });
  console.log('  Logo src:', logoSrc);

  let saved = false;
  if (logoSrc) {
    const absUrl = logoSrc.startsWith('http') ? logoSrc : new URL(logoSrc, 'https://maximizd.com/').href;
    if (absUrl.includes('.svg')) {
      await download(absUrl, path.join(OUT_DIR, 'maximizd.svg'));
      const stat = fs.statSync(path.join(OUT_DIR, 'maximizd.svg'));
      console.log(`  ✅ maximizd.svg — ${(stat.size / 1024).toFixed(1)}KB`);
      updates.maximizd = 'maximizd.svg';
      saved = true;
    } else {
      await download(absUrl, path.join(OUT_DIR, 'maximizd.png'));
      const stat = fs.statSync(path.join(OUT_DIR, 'maximizd.png'));
      console.log(`  ✅ maximizd.png — ${(stat.size / 1024).toFixed(1)}KB`);
      saved = true;
    }
  }

  // Fallback: screenshot with 4x DPR + transparent background
  if (!saved && svgInfo?.type === 'inline-svg') {
    const ctx2 = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 4 });
    const p2 = await ctx2.newPage();
    await goto(p2, 'https://maximizd.com/');
    const svgEl = await p2.$('header svg, nav svg, .logo svg, [class*="logo"] svg, header a svg');
    if (svgEl) {
      await svgEl.screenshot({ path: path.join(OUT_DIR, 'maximizd.png'), omitBackground: true });
      const stat = fs.statSync(path.join(OUT_DIR, 'maximizd.png'));
      console.log(`  ✅ maximizd.png — ${(stat.size / 1024).toFixed(1)}KB (SVG element, transparent, 4x)`);
    }
    await ctx2.close();
  }

  await page.close();
} catch (e) {
  console.log(`  ❌ ${e.message.slice(0, 100)}`);
}

// ── 4. DREAMFIT — find transparent logo ──────────────────────────────────
console.log('\n→ 4/6 dreamfit.nl');
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await goto(page, 'https://dreamfit.nl/');
  const imgs = await logImgs(page);
  console.log('  All imgs:', JSON.stringify(imgs, null, 2));

  // Check for SVG logo
  const svgLogoSrc = await page.evaluate(() => {
    // Look for SVG in img tags
    for (const img of document.querySelectorAll('img')) {
      if (img.src?.includes('.svg') && (img.src.includes('logo') || img.closest('header') || img.closest('nav'))) {
        return img.src;
      }
    }
    return null;
  });
  console.log('  SVG logo src:', svgLogoSrc);

  // The known logo is 138x38 PNG with white bg — check if a retina/SVG version exists
  // by looking at srcset
  const srcsetInfo = await page.evaluate(() => {
    const imgs = document.querySelectorAll('[class*="logo"] img, header img');
    return Array.from(imgs).map(img => ({
      src: img.src,
      srcset: img.srcset,
      alt: img.alt
    }));
  });
  console.log('  Srcset info:', JSON.stringify(srcsetInfo, null, 2));

  if (svgLogoSrc) {
    const absUrl = svgLogoSrc.startsWith('http') ? svgLogoSrc : new URL(svgLogoSrc, 'https://dreamfit.nl/').href;
    await download(absUrl, path.join(OUT_DIR, 'dreamfit.svg'));
    const stat = fs.statSync(path.join(OUT_DIR, 'dreamfit.svg'));
    console.log(`  ✅ dreamfit.svg — ${(stat.size / 1024).toFixed(1)}KB`);
    updates.dreamfit = 'dreamfit.svg';
  } else {
    // The logo has a white background — screenshot logo element with omitBackground
    const ctx2 = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 4 });
    const p2 = await ctx2.newPage();
    await goto(p2, 'https://dreamfit.nl/');
    // Make logo background transparent before screenshotting
    const logoEl = await p2.evaluateHandle(() => {
      const imgs = Array.from(document.querySelectorAll('header img, [class*="logo"] img, nav img'));
      // pick the smallest (most likely the actual logo, not a hero)
      return imgs.filter(img => img.naturalWidth < 400 && img.naturalHeight < 200)[0] || null;
    });
    const isNull = await logoEl.evaluate(el => el === null);
    if (!isNull) {
      // Set white pixels to transparent using CSS filter trick won't work here
      // Instead: set background of img to transparent and use omitBackground screenshot
      await logoEl.evaluate(el => {
        el.style.background = 'transparent';
        el.style.mixBlendMode = 'multiply'; // this makes white disappear on white canvas
      });
      // Actually omitBackground on screenshot removes the browser default white bg
      await logoEl.screenshot({ path: path.join(OUT_DIR, 'dreamfit.png'), omitBackground: true });
      const stat = fs.statSync(path.join(OUT_DIR, 'dreamfit.png'));
      const dims = await logoEl.evaluate(el => ({ nw: el.naturalWidth, nh: el.naturalHeight }));
      console.log(`  ✅ dreamfit.png — ${(stat.size / 1024).toFixed(1)}KB | ${dims.nw}x${dims.nh} (transparent, 4x)`);
    }
    await ctx2.close();
  }
  await page.close();
} catch (e) {
  console.log(`  ❌ ${e.message.slice(0, 100)}`);
}

// ── 5. THEFIGHTCOMPANY — find actual logo file ────────────────────────────
console.log('\n→ 5/6 thefightcompany.nl');
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await goto(page, 'https://thefightcompany.nl/');
  const imgs = await logImgs(page);
  console.log('  All imgs:', JSON.stringify(imgs, null, 2));

  const logoSrc = await page.evaluate(() => {
    const selectors = [
      'header img[src*="logo"]', 'nav img[src*="logo"]',
      '[class*="logo"] img', 'img[alt*="logo" i]', 'img[alt*="fight" i]',
      'header img', 'nav img'
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el?.src && !el.src.startsWith('data:') && el.naturalWidth < 400 && el.naturalHeight < 200) {
        return el.src;
      }
    }
    // Any reasonably-sized logo
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el?.src && !el.src.startsWith('data:')) return el.src;
    }
    return null;
  });
  console.log('  Logo src:', logoSrc);

  if (logoSrc) {
    const absUrl = logoSrc.startsWith('http') ? logoSrc : new URL(logoSrc, 'https://thefightcompany.nl/').href;
    const issvg = absUrl.includes('.svg');
    const dest = path.join(OUT_DIR, issvg ? 'thefightcompany.svg' : 'thefightcompany.png');
    if (issvg) {
      await download(absUrl, dest);
      updates.thefightcompany = 'thefightcompany.svg';
    } else {
      // Try screenshot with omitBackground for transparency
      const ctx2 = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 3 });
      const p2 = await ctx2.newPage();
      await goto(p2, 'https://thefightcompany.nl/');
      const el = await p2.$(`img[src*="${new URL(absUrl).pathname.split('/').pop().split('?')[0]}"]`);
      if (el) {
        await el.screenshot({ path: dest, omitBackground: true });
      } else {
        await download(absUrl, dest);
      }
      await ctx2.close();
    }
    const stat = fs.statSync(dest);
    console.log(`  ✅ ${path.basename(dest)} — ${(stat.size / 1024).toFixed(1)}KB`);
  }
  await page.close();
} catch (e) {
  console.log(`  ❌ ${e.message.slice(0, 100)}`);
}

// ── 6. DEVIDEOVAKVROUW — find transparent logo ───────────────────────────
console.log('\n→ 6/6 devideovakvrouw.nl');
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await goto(page, 'https://www.devideovakvrouw.nl/');
  const imgs = await logImgs(page);
  console.log('  All imgs:', JSON.stringify(imgs.slice(0, 6), null, 2));
  // The known logo is 200x275 orange/white — check current transparency
  // If it already looks OK in the logowall (orange marks → white), no change needed
  // If not: screenshot with omitBackground
  const logoEl = await page.$('header img[src*="logo"], img[alt*="logo" i]');
  if (logoEl) {
    const ctx2 = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 3 });
    const p2 = await ctx2.newPage();
    await goto(p2, 'https://www.devideovakvrouw.nl/');
    const el2 = await p2.$('header img[src*="logo"], img[alt*="logo" i]');
    if (el2) {
      await el2.screenshot({ path: path.join(OUT_DIR, 'devideovakvrouw.png'), omitBackground: true });
      const stat = fs.statSync(path.join(OUT_DIR, 'devideovakvrouw.png'));
      console.log(`  ✅ devideovakvrouw.png — ${(stat.size / 1024).toFixed(1)}KB (omitBackground)`);
    }
    await ctx2.close();
  }
  await page.close();
} catch (e) {
  console.log(`  ❌ ${e.message.slice(0, 100)}`);
}

await browser.close();

// ── REPORT ────────────────────────────────────────────────────────────────
console.log('\n\n════════════════════════════════════════════');
console.log('UPDATES TO MAKE IN page.tsx:');
console.log('════════════════════════════════════════════');
for (const [key, val] of Object.entries(updates)) {
  console.log(`  ${key}.png → ${val}`);
}

console.log('\nFINAL FILES:');
for (const f of fs.readdirSync(OUT_DIR).sort()) {
  const stat = fs.statSync(path.join(OUT_DIR, f));
  console.log(`  ${f.padEnd(35)} ${(stat.size / 1024).toFixed(1)}KB`);
}
