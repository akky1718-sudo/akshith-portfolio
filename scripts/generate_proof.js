import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';

const PORT = 8765;
const DIST_DIR = path.resolve(process.cwd(), 'dist');
const SCREENSHOTS_DIR = path.resolve(process.cwd(), 'proof_screenshots');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

function getBrowserPath() {
  const paths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  ];
  for (const p of paths) {
    if (fs.existsSync(p)) return p;
  }
  throw new Error('No Chrome or Edge browser found');
}

function startServer() {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.pdf': 'application/pdf',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
    '.ttf': 'font/ttf',
  };

  const server = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0];
    if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
    
    const safePath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, '');
    const filePath = path.join(DIST_DIR, safePath);

    fs.readFile(filePath, (err, data) => {
      if (err) {
        fs.readFile(path.join(DIST_DIR, 'index.html'), (err2, data2) => {
          if (err2) {
            res.writeHead(404);
            res.end('Not found');
            return;
          }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data2);
        });
        return;
      }
      const ext = path.extname(filePath);
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });

  return new Promise((resolve) => {
    server.listen(PORT, '127.0.0.1', () => {
      console.log(`Server listening on http://127.0.0.1:${PORT}`);
      resolve(server);
    });
  });
}

async function run() {
  const server = await startServer();
  const browserPath = getBrowserPath();
  console.log(`Using browser: ${browserPath}`);

  const browser = await puppeteer.launch({
    executablePath: browserPath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
    await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'networkidle0', timeout: 30000 });

    console.log('Capturing section screenshots...');

    // 1. Hero
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, '01_hero.png'),
      clip: { x: 0, y: 0, width: 1440, height: 860 }
    });

    async function captureSection(selector, filename) {
      const el = await page.$(selector);
      if (el) {
        await page.evaluate(element => {
          element.scrollIntoView({ behavior: 'instant', block: 'start' });
        }, el);
        await new Promise(r => setTimeout(r, 600));
        await el.screenshot({ path: path.join(SCREENSHOTS_DIR, filename) });
        console.log(`Captured ${filename}`);
      }
    }

    await captureSection('#about', '02_about.png');
    await captureSection('#skills', '03_skills.png');
    await captureSection('#experience', '04_experience.png');
    await captureSection('#projects', '05_projects.png');

    // Click "View Details" on Project 1 to open Modal
    try {
      const projectSec = await page.$('#projects');
      if (projectSec) {
        await page.evaluate(el => el.scrollIntoView({ behavior: 'instant', block: 'center' }), projectSec);
        await new Promise(r => setTimeout(r, 400));
      }

      const buttons = await page.$$('button');
      for (const btn of buttons) {
        const text = await page.evaluate(el => el.innerText, btn);
        if (text && text.includes('View Details')) {
          await btn.click();
          await new Promise(r => setTimeout(r, 700));
          
          const modalDialog = await page.$('div[role="dialog"]');
          if (modalDialog) {
            const innerCard = await modalDialog.$('div.relative.w-full');
            if (innerCard) {
              await innerCard.screenshot({ path: path.join(SCREENSHOTS_DIR, '05b_project_modal.png') });
              console.log('Captured 05b_project_modal.png (Modal Dialog)');
            } else {
              await modalDialog.screenshot({ path: path.join(SCREENSHOTS_DIR, '05b_project_modal.png') });
            }
          }
          await page.keyboard.press('Escape');
          await new Promise(r => setTimeout(r, 400));
          break;
        }
      }
    } catch (e) {
      console.warn('Could not capture modal:', e.message);
    }

    await captureSection('#certifications', '06_certifications.png');
    await captureSection('#education', '07_education.png');
    await captureSection('#achievements', '08_achievements.png');
    await captureSection('#contact', '09_contact.png');

    // Mobile viewport screenshots
    console.log('Capturing mobile view...');
    const mobilePage = await browser.newPage();
    await mobilePage.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await mobilePage.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 600));
    await mobilePage.screenshot({
      path: path.join(SCREENSHOTS_DIR, '11_mobile_hero.png'),
      clip: { x: 0, y: 0, width: 390, height: 844 }
    });

    try {
      const menuBtn = await mobilePage.$('button[aria-label*="navigation menu"]');
      if (menuBtn) {
        await menuBtn.click();
        await new Promise(r => setTimeout(r, 400));
        await mobilePage.screenshot({
          path: path.join(SCREENSHOTS_DIR, '12_mobile_menu.png'),
          clip: { x: 0, y: 0, width: 390, height: 600 }
        });
        console.log('Captured 12_mobile_menu.png');
      }
    } catch (e) {
      console.warn('Could not capture mobile menu:', e.message);
    }

    console.log('Screenshots updated successfully!');

  } finally {
    await browser.close();
    server.close();
  }
}

run().catch(err => {
  console.error('Error running screenshot capture:', err);
  process.exit(1);
});
