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

async function goto(page, url) {
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 25000 });
    await page.waitForTimeout(1500);
  } catch {
    // try networkidle fallback
    try { await page.waitForLoadState('networkidle', { timeout: 5000 }); } catch {}
  }
}

const browser = await chromium.launch({ headless: true });
const results = {};

// ── 1. DREAMFIT (logo is only 138x38 — screenshot at 4x DPR for crisp output) ──
console.log('\n→ 1/6 dreamfit.nl');
try {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 4 });
  const page = await ctx.newPage();
  await goto(page, 'https://dreamfit.nl/');
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);

  const el = await page.$('[class*="logo"] img, header img, nav img');
  if (el) {
    await el.screenshot({ path: path.join(OUT_DIR, 'dreamfit.png') });
    const stat = fs.statSync(path.join(OUT_DIR, 'dreamfit.png'));
    console.log(`  ✅ dreamfit.png — ${(stat.size / 1024).toFixed(1)}KB (4x DPR screenshot)`);
    results.dreamfit = stat.size;
  } else {
    console.log('  ⚠️ No logo element found');
  }
  await ctx.close();
} catch (e) {
  console.log(`  ❌ Error: ${e.message.slice(0, 80)}`);
}

// ── 2. CAGEDFIGHT (Shopify CDN — increase width param for higher res) ─────────
console.log('\n→ 2/6 cagedfight.com');
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await goto(page, 'https://www.cagedfight.com/');
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);

  const logoSrc = await page.evaluate(() => {
    const imgs = document.querySelectorAll('header img, nav img');
    for (const img of imgs) {
      // prefer the black version (Zwart = black in Dutch)
      if (img.src && img.src.includes('Zwart')) return img.src;
    }
    for (const img of imgs) {
      if (img.src) return img.src;
    }
    return null;
  });

  if (logoSrc) {
    // Shopify CDN: replace &width=500 with &width=1200 for higher res
    const hiResUrl = logoSrc.replace(/&width=\d+/, '&width=1200').replace(/\?width=\d+/, '?width=1200');
    console.log(`  Logo URL: ${hiResUrl}`);
    await downloadFile(hiResUrl, path.join(OUT_DIR, 'cagedfight.png'));
    const stat = fs.statSync(path.join(OUT_DIR, 'cagedfight.png'));
    console.log(`  ✅ cagedfight.png — ${(stat.size / 1024).toFixed(1)}KB`);
    results.cagedfight = stat.size;
  } else {
    // Fallback: screenshot header
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 3 });
    const p2 = await ctx.newPage();
    await goto(p2, 'https://www.cagedfight.com/');
    const el = await p2.$('header img, nav img');
    if (el) {
      await el.screenshot({ path: path.join(OUT_DIR, 'cagedfight.png') });
      const stat = fs.statSync(path.join(OUT_DIR, 'cagedfight.png'));
      console.log(`  ✅ cagedfight.png — ${(stat.size / 1024).toFixed(1)}KB (3x screenshot)`);
      results.cagedfight = stat.size;
    }
    await ctx.close();
  }
  await page.close();
} catch (e) {
  console.log(`  ❌ Error: ${e.message.slice(0, 80)}`);
}

// ── 3. DEVIDEOVAKVROUW (200x275 is fine, just re-download the source) ─────────
console.log('\n→ 3/6 devideovakvrouw.nl');
try {
  // Direct download of the known URL
  const logoUrl = 'https://www.devideovakvrouw.nl/wp-content/uploads/2024/08/Videovakvrouw-logo.png';
  await downloadFile(logoUrl, path.join(OUT_DIR, 'devideovakvrouw.png'));
  const stat = fs.statSync(path.join(OUT_DIR, 'devideovakvrouw.png'));
  console.log(`  ✅ devideovakvrouw.png — ${(stat.size / 1024).toFixed(1)}KB`);
  results.devideovakvrouw = stat.size;
} catch (e) {
  console.log(`  ❌ Error: ${e.message.slice(0, 80)}`);
  // Playwright fallback
  try {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 3 });
    const page = await ctx.newPage();
    await goto(page, 'https://www.devideovakvrouw.nl/');
    const el = await page.$('header img[src*="logo"], nav img[src*="logo"], [class*="logo"] img');
    if (el) {
      await el.screenshot({ path: path.join(OUT_DIR, 'devideovakvrouw.png') });
      const stat = fs.statSync(path.join(OUT_DIR, 'devideovakvrouw.png'));
      console.log(`  ✅ devideovakvrouw.png — ${(stat.size / 1024).toFixed(1)}KB (3x screenshot)`);
      results.devideovakvrouw = stat.size;
    }
    await ctx.close();
  } catch (e2) {
    console.log(`  ❌ Fallback error: ${e2.message.slice(0, 80)}`);
  }
}

// ── 4. REGELJELEASE (site was slow — use domcontentloaded, longer wait) ───────
console.log('\n→ 4/6 regeljelease.nl');
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  try {
    await page.goto('https://www.regeljelease.nl/', { waitUntil: 'domcontentloaded', timeout: 40000 });
  } catch {
    console.log('  Load timeout, using partial page...');
  }
  await page.waitForTimeout(2000);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);

  const logoInfo = await page.evaluate(() => {
    const all = Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src, alt: img.alt, naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight
    })).filter(i => i.src && !i.src.startsWith('data:'));
    return all.slice(0, 10);
  });
  console.log('  Found imgs:', JSON.stringify(logoInfo.slice(0, 5), null, 2));

  // Find logo URL
  const logoSrc = await page.evaluate(() => {
    const selectors = ['[class*="logo"] img', 'header img', 'nav img', '.navbar img', 'img[alt*="regel" i]'];
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el?.src && !el.src.startsWith('data:')) return el.src;
    }
    return null;
  });

  if (logoSrc) {
    console.log(`  Logo: ${logoSrc}`);
    const absUrl = logoSrc.startsWith('http') ? logoSrc : new URL(logoSrc, 'https://www.regeljelease.nl/').href;
    if (absUrl.includes('.svg')) {
      // Screenshot SVG element
      const el = await page.$(`img[src="${logoSrc}"]`);
      if (el) {
        await el.screenshot({ path: path.join(OUT_DIR, 'regeljelease.png') });
      }
    } else {
      await downloadFile(absUrl, path.join(OUT_DIR, 'regeljelease.png'));
    }
    const stat = fs.statSync(path.join(OUT_DIR, 'regeljelease.png'));
    console.log(`  ✅ regeljelease.png — ${(stat.size / 1024).toFixed(1)}KB`);
    results.regeljelease = stat.size;
  } else {
    // Screenshot full header
    const el = await page.$('header, nav, .site-header, .header');
    if (el) {
      await el.screenshot({ path: path.join(OUT_DIR, 'regeljelease.png') });
      const stat = fs.statSync(path.join(OUT_DIR, 'regeljelease.png'));
      console.log(`  ✅ regeljelease.png — ${(stat.size / 1024).toFixed(1)}KB (header screenshot)`);
      results.regeljelease = stat.size;
    }
  }
  await page.close();
} catch (e) {
  console.log(`  ❌ Error: ${e.message.slice(0, 100)}`);
}

// ── 5. MYMIRACLE (was 96x48 at 1x — use 4x DPR) ─────────────────────────────
console.log('\n→ 5/6 mymiracle.nl');
try {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 4 });
  const page = await ctx.newPage();
  await goto(page, 'https://www.mymiracle.nl/');
  await page.keyboard.press('Escape');
  await page.waitForTimeout(800);

  // Log all imgs
  const allImgs = await page.evaluate(() =>
    Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src, alt: img.alt, nw: img.naturalWidth, nh: img.naturalHeight
    })).filter(i => i.src && !i.src.startsWith('data:')).slice(0, 10)
  );
  console.log('  All imgs:', JSON.stringify(allImgs, null, 2));

  // Try direct download of the actual source (not SVG screenshot)
  const logoSrc = await page.evaluate(() => {
    const selectors = [
      'header img', 'nav img', '.logo img', '[class*="logo"] img',
      'img[alt*="logo" i]', 'img[alt*="miracle" i]'
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el?.src && !el.src.startsWith('data:')) return el.src;
    }
    return null;
  });

  if (logoSrc) {
    console.log(`  Logo src: ${logoSrc}`);
    const absUrl = logoSrc.startsWith('http') ? logoSrc : new URL(logoSrc, 'https://www.mymiracle.nl/').href;

    if (!absUrl.includes('.svg')) {
      // Download the actual file (might be a proper PNG at high res)
      await downloadFile(absUrl, path.join(OUT_DIR, 'mymiracle.png'));
      const stat = fs.statSync(path.join(OUT_DIR, 'mymiracle.png'));
      if (stat.size >= 5000) {
        console.log(`  ✅ mymiracle.png — ${(stat.size / 1024).toFixed(1)}KB (downloaded)`);
        results.mymiracle = stat.size;
      } else {
        // Too small, screenshot at 4x instead
        const el = await page.$(`img[src*="${new URL(absUrl).pathname.split('/').pop()}"]`);
        if (el) {
          await el.screenshot({ path: path.join(OUT_DIR, 'mymiracle.png') });
          const stat2 = fs.statSync(path.join(OUT_DIR, 'mymiracle.png'));
          console.log(`  ✅ mymiracle.png — ${(stat2.size / 1024).toFixed(1)}KB (4x screenshot)`);
          results.mymiracle = stat2.size;
        }
      }
    } else {
      // SVG — screenshot the element at 4x
      const el = await page.$(`img[src*="${new URL(absUrl).pathname.split('/').pop()}"]`);
      if (el) {
        await el.screenshot({ path: path.join(OUT_DIR, 'mymiracle.png') });
        const stat = fs.statSync(path.join(OUT_DIR, 'mymiracle.png'));
        console.log(`  ✅ mymiracle.png — ${(stat.size / 1024).toFixed(1)}KB (SVG at 4x)`);
        results.mymiracle = stat.size;
      }
    }
  }

  if (!results.mymiracle) {
    // Last resort: header screenshot
    const el = await page.$('header, nav, .site-header');
    if (el) {
      await el.screenshot({ path: path.join(OUT_DIR, 'mymiracle.png') });
      const stat = fs.statSync(path.join(OUT_DIR, 'mymiracle.png'));
      console.log(`  ✅ mymiracle.png — ${(stat.size / 1024).toFixed(1)}KB (header screenshot at 4x)`);
      results.mymiracle = stat.size;
    }
  }
  await ctx.close();
} catch (e) {
  console.log(`  ❌ Error: ${e.message.slice(0, 100)}`);
}

// ── 6. CHANNELORANGE (white text on dark — screenshot on white bg) ─────────────
console.log('\n→ 6/6 channelorange.nl');
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await goto(page, 'https://www.channelorange.nl/');
  await page.keyboard.press('Escape');
  await page.waitForTimeout(800);

  // Log all images
  const allImgs = await page.evaluate(() =>
    Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src, alt: img.alt, nw: img.naturalWidth, nh: img.naturalHeight, cls: img.className.slice(0, 50)
    })).filter(i => i.src && !i.src.startsWith('data:')).slice(0, 15)
  );
  console.log('  All imgs:', JSON.stringify(allImgs, null, 2));

  // Find the header/nav element and set its bg to white
  const headerBg = await page.evaluate(() => {
    const header = document.querySelector('header, nav, .header, .navbar, .site-header, #header');
    return header ? window.getComputedStyle(header).backgroundColor : null;
  });
  console.log('  Header bg:', headerBg);

  // Find logo src
  const logoSrc = await page.evaluate(() => {
    const selectors = [
      'header img', 'nav img', '.logo img', '[class*="logo"] img', '.navbar img',
      'img[alt*="channel" i]', 'img[alt*="orange" i]', 'img[src*="logo" i]'
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el?.src && !el.src.startsWith('data:')) return el.src;
    }
    return null;
  });
  console.log('  Logo src:', logoSrc);

  let saved = false;

  if (logoSrc) {
    const absUrl = logoSrc.startsWith('http') ? logoSrc : new URL(logoSrc, 'https://www.channelorange.nl/').href;

    if (!absUrl.includes('.svg')) {
      // Download and check size
      await downloadFile(absUrl, path.join(OUT_DIR, 'channelorange.png'));
      const stat = fs.statSync(path.join(OUT_DIR, 'channelorange.png'));
      console.log(`  Downloaded: ${(stat.size / 1024).toFixed(1)}KB`);
      if (stat.size >= 3000) {
        console.log(`  ✅ channelorange.png — ${(stat.size / 1024).toFixed(1)}KB`);
        results.channelorange = stat.size;
        saved = true;
      }
    }

    if (!saved) {
      // For SVG or small file: screenshot the logo element, but first set WHITE background on parent
      await page.evaluate(() => {
        // Force white bg on header/nav to make white text visible
        const els = document.querySelectorAll('header, nav, .header, .navbar, .site-header');
        for (const el of els) {
          el.style.backgroundColor = '#ffffff';
          el.style.setProperty('background', '#ffffff', 'important');
        }
      });
      await page.waitForTimeout(300);

      const logoEl = await page.$('[class*="logo"] img, header img, nav img');
      if (logoEl) {
        // Get parent container for better context
        const parent = await logoEl.evaluateHandle(el => el.closest('a') || el.closest('div') || el.parentElement);
        await parent.screenshot({ path: path.join(OUT_DIR, 'channelorange.png') });
        const stat = fs.statSync(path.join(OUT_DIR, 'channelorange.png'));
        console.log(`  ✅ channelorange.png — ${(stat.size / 1024).toFixed(1)}KB (white bg screenshot)`);
        results.channelorange = stat.size;
        saved = true;
      }
    }
  }

  if (!saved) {
    // Force white bg on entire page header and screenshot it
    await page.evaluate(() => {
      const header = document.querySelector('header, nav, .header, .navbar');
      if (header) {
        header.style.setProperty('background', '#ffffff', 'important');
        header.style.setProperty('background-color', '#ffffff', 'important');
      }
    });
    await page.waitForTimeout(300);
    const el = await page.$('header, nav, .site-header, .header');
    if (el) {
      await el.screenshot({ path: path.join(OUT_DIR, 'channelorange.png') });
      const stat = fs.statSync(path.join(OUT_DIR, 'channelorange.png'));
      console.log(`  ✅ channelorange.png — ${(stat.size / 1024).toFixed(1)}KB (forced-white header)`);
      results.channelorange = stat.size;
    }
  }

  await page.close();
} catch (e) {
  console.log(`  ❌ Error: ${e.message.slice(0, 100)}`);
}

await browser.close();

// ── FINAL REPORT ──────────────────────────────────────────────────────────────
console.log('\n\n═══════════════════════════════════════════════════════');
console.log('FINAL REPORT');
console.log('═══════════════════════════════════════════════════════');
const allFiles = fs.readdirSync(OUT_DIR).filter(f => f.endsWith('.png') || f.endsWith('.svg'));
for (const f of allFiles) {
  const stat = fs.statSync(path.join(OUT_DIR, f));
  const ok = stat.size >= 5000 ? '✅' : '⚠️';
  console.log(`${ok} ${f.padEnd(35)} ${(stat.size / 1024).toFixed(1)}KB`);
}
