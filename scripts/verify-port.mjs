import { chromium } from "playwright-core";

const URL = process.argv[2] || "http://localhost:4321/";
const browser = await chromium.launch({
  executablePath:
    "C:\\Users\\ahmad\\AppData\\Local\\ms-playwright\\chromium-1223\\chrome-win64\\chrome.exe",
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto(URL, { waitUntil: "networkidle", timeout: 30000 });
await page.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight * 0.6) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 200));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(2000);

const title = await page.title();
const heroText = await page.locator("h1").first().textContent();
const headerLogo = await page.locator("header img").first().getAttribute("alt");

console.log("URL:", URL);
console.log("Title:", title);
console.log("H1:", heroText?.trim());
console.log("Header logo alt:", headerLogo);

await page.screenshot({ path: "screenshots/live-verify-top.png", fullPage: false });
await page.screenshot({ path: "screenshots/live-verify-full.png", fullPage: true });
console.log("Screenshot saved to screenshots/live-verify.png");

await browser.close();
