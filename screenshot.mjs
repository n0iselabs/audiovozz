import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';

const OUT = 'C:/Projects/NoiseLabs/repositories/audiovozz/screenshots';
await mkdir(OUT, { recursive: true });

const browser = await puppeteer.launch({
  headless: true,
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

async function shot(name, url, viewport) {
  const page = await browser.newPage();
  await page.setViewport(viewport);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: true });
  await page.close();
  console.log(`✓ ${name}.png`);
}

// Desktop full page
await shot('desktop-full', 'http://localhost:8080', { width: 1440, height: 900 });

// Viewport-only shots of key sections (desktop)
const browser2 = await puppeteer.launch({
  headless: true,
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  args: ['--no-sandbox'],
});

async function shotViewport(name, url, viewport, scrollY = 0) {
  const page = await browser2.newPage();
  await page.setViewport(viewport);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1200));
  if (scrollY > 0) await page.evaluate((y) => window.scrollTo(0, y), scrollY);
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: `${OUT}/${name}.png` });
  await page.close();
  console.log(`✓ ${name}.png`);
}

await shotViewport('desktop-hero', 'http://localhost:8080', { width: 1440, height: 860 }, 0);
await shotViewport('desktop-trust', 'http://localhost:8080', { width: 1440, height: 860 }, 900);
await shotViewport('desktop-jurandy', 'http://localhost:8080', { width: 1440, height: 860 }, 3800);
await shotViewport('desktop-location', 'http://localhost:8080', { width: 1440, height: 860 }, 5200);
await shotViewport('desktop-footer', 'http://localhost:8080', { width: 1440, height: 860 }, 7500);

// Mobile full page
await shot('mobile-full', 'http://localhost:8080', { width: 390, height: 844 });
await shotViewport('mobile-hero', 'http://localhost:8080', { width: 390, height: 844 }, 0);

await browser.close();
await browser2.close();
console.log('Done. Screenshots in:', OUT);
