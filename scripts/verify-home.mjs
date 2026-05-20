import { chromium } from "playwright-core";

const browser = await chromium.launch({
  executablePath:
    "C:\\Users\\ahmad\\AppData\\Local\\ms-playwright\\chromium-1223\\chrome-win64\\chrome.exe",
});
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

await page.goto("http://localhost:3010/", { waitUntil: "networkidle", timeout: 30000 });

// Scroll to gallery preview, wait longer
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.4));
await page.waitForTimeout(3000);
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);

const audit = await page.evaluate(() => {
  return Array.from(document.querySelectorAll("img"))
    .map((i) => ({
      src: i.currentSrc || i.src,
      ok: i.complete && i.naturalHeight > 0,
      w: i.naturalWidth,
      h: i.naturalHeight,
    }));
});

console.log("Total images:", audit.length);
console.log("OK:", audit.filter((x) => x.ok).length);
console.log("Broken:", audit.filter((x) => !x.ok).length);
for (const i of audit.filter((x) => !x.ok)) console.log("  -", i.src.slice(0, 100));

await page.screenshot({ path: "screenshots/00-home-desktop.png", fullPage: true });
console.log("Screenshot saved.");

await browser.close();
