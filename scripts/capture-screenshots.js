import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const SCREENSHOT_DIR = path.resolve('docs/screenshots');

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function captureScreenshots() {
  await ensureDir(SCREENSHOT_DIR);
  console.log('Starting browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // 1. Homepage & Light Mode (Default)
  console.log('Capturing: design_preview.png');
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'design_preview.png') });

  // 2. RTL & Dark Mode
  console.log('Capturing: rtl_dark_mode.png');
  // Wait for the hydration to complete
  await page.waitForSelector('button[aria-label="Settings"]', { timeout: 5000 }).catch(() => {});
  
  // Turn on dark mode (via HTML class or local storage)
  await page.evaluate(() => {
    localStorage.setItem('theme', 'dark');
    // Set language to Arabic to trigger RTL
    localStorage.setItem('i18nextLng', 'ar');
    document.documentElement.classList.add('dark');
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  });
  
  await page.reload({ waitUntil: 'networkidle0' });
  // Scroll down slightly
  await page.evaluate(() => window.scrollBy(0, 300));
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'rtl_dark_mode.png') });

  // 3. Mobile Showcase
  console.log('Capturing: mobile_showcase.png');
  // Reset back to normal and light mode for mobile
  await page.evaluate(() => {
    localStorage.removeItem('theme');
    localStorage.setItem('i18nextLng', 'de');
    document.documentElement.classList.remove('dark');
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = 'de';
  });
  await page.setViewport({ width: 400, height: 800 });
  await page.reload({ waitUntil: 'networkidle0' });
  
  // Click hamburger menu
  const menuButton = await page.$('button.md\\:hidden'); // Tailwind md:hidden
  if (menuButton) {
    await menuButton.click();
    await new Promise(r => setTimeout(r, 500)); // wait for animation
  }
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'mobile_showcase.png') });

  // 4. News Filter
  console.log('Capturing: news_filter.png');
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto('http://localhost:5173/news', { waitUntil: 'networkidle0' });
  // Click on a filter category if it exists
  const filters = await page.$$('button');
  for (const f of filters) {
    const text = await page.evaluate(el => el.textContent, f);
    if (text?.includes('Event') || text?.includes('Nachrichten')) {
      await f.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 500)); // wait for filter animation
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'news_filter.png') });

  // 5. Project Filter
  console.log('Capturing: project_filter.png');
  await page.goto('http://localhost:5173/projekte/uebersicht', { waitUntil: 'networkidle0' });
  // Wait a moment for rendering
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'project_filter.png') });

  // 6. Services Page
  console.log('Capturing: services_overview.png');
  await page.goto('http://localhost:5173/services', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'services_overview.png') });

  console.log('Done! Screenshots saved to docs/screenshots/');
  await browser.close();
  process.exit(0);
}

captureScreenshots().catch(err => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
