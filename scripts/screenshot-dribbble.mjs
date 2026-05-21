import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join('/Users/serdartufan/Desktop/screenshots');

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  userAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
});

console.log('Navigating to Dribbble...');
await page.goto('https://dribbble.com/tags/hero-animation', {
  waitUntil: 'networkidle',
  timeout: 30000,
});

// Dismiss any cookie/login modals if present
await page.keyboard.press('Escape');
await page.waitForTimeout(1500);

// Screenshot 1: above the fold
console.log('Screenshot 1...');
await page.screenshot({ path: path.join(outDir, 'dribbble-hero-1.png'), fullPage: false });

// Scroll to ~900px
await page.evaluate(() => window.scrollTo({ top: 900, behavior: 'smooth' }));
await page.waitForTimeout(1500);
console.log('Screenshot 2...');
await page.screenshot({ path: path.join(outDir, 'dribbble-hero-2.png'), fullPage: false });

// Scroll to ~1800px
await page.evaluate(() => window.scrollTo({ top: 1800, behavior: 'smooth' }));
await page.waitForTimeout(1500);
console.log('Screenshot 3...');
await page.screenshot({ path: path.join(outDir, 'dribbble-hero-3.png'), fullPage: false });

// Scroll to ~2700px
await page.evaluate(() => window.scrollTo({ top: 2700, behavior: 'smooth' }));
await page.waitForTimeout(1500);
console.log('Screenshot 4...');
await page.screenshot({ path: path.join(outDir, 'dribbble-hero-4.png'), fullPage: false });

await browser.close();
console.log('Done. Saved dribbble-hero-1.png through dribbble-hero-4.png');
