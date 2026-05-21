import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE_URL || "http://localhost:5500";
mkdirSync("screenshots/mobile", { recursive: true });

const devices = [
  { name: "android-small", width: 360, height: 800, ua: "Mozilla/5.0 (Linux; Android)" },
  { name: "iphone-se", width: 375, height: 667, ua: "Mozilla/5.0 (iPhone)" },
  { name: "iphone-14", width: 390, height: 844, ua: "Mozilla/5.0 (iPhone)" },
  { name: "iphone-15-pro-max", width: 430, height: 932, ua: "Mozilla/5.0 (iPhone)" },
];

const routes = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "service-detail", path: "/services/implant-supported" },
  { name: "gallery", path: "/gallery" },
  { name: "about", path: "/about" },
  { name: "contact", path: "/contact" },
];

const issues = [];

const browser = await chromium.launch({
  executablePath:
    "C:\\Users\\ahmad\\AppData\\Local\\ms-playwright\\chromium-1223\\chrome-win64\\chrome.exe",
});

for (const dev of devices) {
  console.log(`\n=== ${dev.name} ${dev.width}x${dev.height} ===`);
  const ctx = await browser.newContext({
    viewport: { width: dev.width, height: dev.height },
    deviceScaleFactor: 2,
    userAgent: dev.ua,
    isMobile: true,
    hasTouch: true,
  });
  const page = await ctx.newPage();
  for (const r of routes) {
    const consoleErrors = [];
    page.on("console", (m) => m.type() === "error" && consoleErrors.push(m.text()));
    try {
      await page.goto(BASE + r.path, { waitUntil: "networkidle", timeout: 30000 });
      // Scroll to trigger lazy images
      await page.evaluate(async () => {
        const h = document.body.scrollHeight;
        const step = window.innerHeight * 0.7;
        for (let y = 0; y < h; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 120));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(800);

      // Check for horizontal overflow (a common mobile bug)
      const overflow = await page.evaluate(() => {
        const docW = document.documentElement.scrollWidth;
        const viewW = document.documentElement.clientWidth;
        return docW > viewW + 1 ? { docW, viewW, diff: docW - viewW } : null;
      });
      if (overflow) {
        issues.push({ device: dev.name, route: r.path, type: "h-overflow", ...overflow });
      }

      const file = `screenshots/mobile/${dev.name}-${r.name}.png`;
      await page.screenshot({ path: file, fullPage: true });
      const status = overflow ? `OVERFLOW(+${overflow.diff}px)` : "ok";
      console.log(`  [${status}] ${r.path}`);
    } catch (e) {
      console.error(`  [FAIL] ${r.path}: ${e.message}`);
      issues.push({ device: dev.name, route: r.path, type: "error", message: e.message });
    }
  }
  await ctx.close();
}
await browser.close();

console.log("\n=== ISSUES ===");
console.log(issues.length ? JSON.stringify(issues, null, 2) : "(none)");
