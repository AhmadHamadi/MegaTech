// Regenerates all brand assets from the new square logo (newlogo.png).
// Run once after dropping a new logo at repo root: node scripts/gen-logo.mjs
import sharp from "sharp";
import { readFileSync } from "node:fs";

const SRC = "newlogo.png";
const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };

// 1. Header/footer logo — clean square copy, flattened on white.
await sharp(SRC).flatten({ background: WHITE }).png().toFile("public/brand/logo.png");

// 2. Square app icons (favicon + apple touch icon).
await sharp(SRC)
  .resize(512, 512, { fit: "contain", background: WHITE })
  .flatten({ background: WHITE })
  .png()
  .toFile("src/app/icon.png");

await sharp(SRC)
  .resize(180, 180, { fit: "contain", background: WHITE })
  .flatten({ background: WHITE })
  .png()
  .toFile("src/app/apple-icon.png");

// 3. Social cards (1200x630) — logo centered on white.
const logoForCard = await sharp(SRC)
  .resize(520, 520, { fit: "contain", background: WHITE })
  .flatten({ background: WHITE })
  .png()
  .toBuffer();

for (const out of ["src/app/opengraph-image.png", "src/app/twitter-image.png"]) {
  await sharp({
    create: { width: 1200, height: 630, channels: 3, background: WHITE },
  })
    .composite([{ input: logoForCard, gravity: "center" }])
    .png()
    .toFile(out);
}

// Report resulting sizes.
function dim(f) {
  const b = readFileSync(f);
  return `${b.readUInt32BE(16)}x${b.readUInt32BE(20)}`;
}
for (const f of [
  "public/brand/logo.png",
  "src/app/icon.png",
  "src/app/apple-icon.png",
  "src/app/opengraph-image.png",
  "src/app/twitter-image.png",
]) {
  console.log(dim(f).padEnd(12), f);
}
console.log("done");
