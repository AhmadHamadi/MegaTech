import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";
import path from "node:path";

const BASE = process.env.BASE_URL || "http://localhost:3010";
const OUT = path.resolve("screenshots");
mkdirSync(OUT, { recursive: true });

const routes = [
  { name: "00-home", path: "/" },
  { name: "01-services", path: "/services" },
  { name: "02-svc-complete", path: "/services/complete-dentures" },
  { name: "03-svc-partial", path: "/services/partial-dentures" },
  { name: "04-svc-implant", path: "/services/implant-supported" },
  { name: "05-svc-immediate", path: "/services/immediate-dentures" },
  { name: "06-svc-relines", path: "/services/relines-repairs" },
  { name: "07-gallery", path: "/gallery" },
  { name: "08-testimonials", path: "/testimonials" },
  { name: "09-about", path: "/about" },
  { name: "10-contact", path: "/contact" },
  { name: "11-not-found", path: "/this-page-does-not-exist" },
];

const mobile = [
  { name: "m00-home", path: "/" },
  { name: "m10-contact", path: "/contact" },
];

const issues = [];

async function waitForImages(page) {
  // Scroll through the page first to trigger lazy-loaded images
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    const step = window.innerHeight * 0.8;
    for (let y = 0; y < h; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 100));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(300);
  await page.evaluate(async () => {
    const imgs = Array.from(document.querySelectorAll("img"));
    await Promise.all(
      imgs.map((img) =>
        img.complete && img.naturalHeight > 0
          ? Promise.resolve()
          : new Promise((res) => {
              img.addEventListener("load", res, { once: true });
              img.addEventListener("error", res, { once: true });
              setTimeout(res, 15000);
            }),
      ),
    );
  });
}

async function imgAudit(page) {
  return page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll("img"));
    return imgs
      .map((i) => ({
        src: i.currentSrc || i.src,
        ok: i.complete && i.naturalHeight > 0,
        w: i.naturalWidth,
        h: i.naturalHeight,
      }))
      .filter((x) => !x.ok);
  });
}

async function capture(page, route, vp) {
  const url = BASE + route.path;
  const consoleErrors = [];
  const onErr = (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  };
  page.on("console", onErr);

  try {
    // Warm-up pass — let Next.js optimize images on first visit
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
    await page.waitForLoadState("networkidle", { timeout: 30000 }).catch(() => {});
    await waitForImages(page);

    // Real capture
    await page.goto(url + "?_t=" + Date.now(), { waitUntil: "networkidle", timeout: 30000 });
    await waitForImages(page);
    await page.waitForTimeout(500);

    const brokenImgs = await imgAudit(page);
    const file = path.join(OUT, `${route.name}-${vp}.png`);
    await page.screenshot({ path: file, fullPage: true });
    const status = brokenImgs.length === 0 ? "ok" : `BROKEN-IMGS:${brokenImgs.length}`;
    console.log(`[${status}] ${route.path} -> ${path.basename(file)}`);
    if (brokenImgs.length) {
      issues.push({ route: route.path, vp, brokenImgs: brokenImgs.map((b) => b.src) });
    }
    const realErrors = consoleErrors.filter(
      (e) => !/hot-update|webpack/i.test(e) && !/404.*Not Found/.test(e),
    );
    if (realErrors.length) issues.push({ route: route.path, vp, consoleErrors: realErrors });
  } catch (e) {
    console.error(`[FAIL] ${route.path}: ${e.message}`);
    issues.push({ route: route.path, vp, error: e.message });
  } finally {
    page.off("console", onErr);
  }
}

const browser = await chromium.launch({
  executablePath:
    "C:\\Users\\ahmad\\AppData\\Local\\ms-playwright\\chromium-1223\\chrome-win64\\chrome.exe",
});

const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const dPage = await desktop.newPage();
for (const r of routes) await capture(dPage, r, "desktop");
await desktop.close();

const mob = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  userAgent: "Mozilla/5.0 (iPhone)",
});
const mPage = await mob.newPage();
for (const r of mobile) await capture(mPage, r, "mobile");
await mob.close();

await browser.close();

if (issues.length) {
  console.log("\n=== ISSUES DETECTED ===");
  console.log(JSON.stringify(issues, null, 2));
  process.exitCode = 1;
} else {
  console.log("\n=== ALL CLEAN ===");
}
