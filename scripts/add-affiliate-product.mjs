#!/usr/bin/env node
/**
 * Interactive CLI to add a new affiliate product to data/affiliate-products.ts
 * Usage: npm run add-product
 */

import readline from "readline";
import { readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PRODUCTS_FILE = path.resolve(__dirname, "../data/affiliate-products.ts");
const AMAZON_TRACKING_ID = "pixiedustfami-20";

const CATEGORIES = [
  "apparel",
  "gear",
  "food",
  "safety",
  "sleep",
  "entertainment",
  "travel",
  "health",
  "photography",
  "books",
  "tickets",
  "lodging",
  "rental",
  "insurance",
  "other",
];

// ── Readline helpers ──────────────────────────────────────────────────────────

function createRL() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  // Clean exit on Ctrl+C
  rl.on("SIGINT", () => {
    console.log("\n\nAborted — nothing was written.");
    process.exit(0);
  });
  return rl;
}

function ask(rl, question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

// ── ASIN extraction ───────────────────────────────────────────────────────────

function extractAsin(input) {
  input = input.trim();
  // Raw ASIN
  if (/^[A-Z0-9]{10}$/.test(input)) return input;
  // URL: /dp/XXXXXXXXXX or /gp/product/XXXXXXXXXX
  const match = input.match(/\/(?:dp|gp\/product)\/([A-Z0-9]{10})/i);
  if (match) return match[1].toUpperCase();
  return null;
}

// ── ID generation ─────────────────────────────────────────────────────────────

function generateId(name, brand) {
  const parts = [name, brand].filter(Boolean).join(" ");
  return parts
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function isKebabCase(str) {
  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(str);
}

// ── File parsing ──────────────────────────────────────────────────────────────

function getExistingIds(source) {
  const ids = new Set();
  const re = /products\['([^']+)'\]/g;
  let m;
  while ((m = re.exec(source)) !== null) ids.add(m[1]);
  return ids;
}

function uniqueId(base, existingIds) {
  if (!existingIds.has(base)) return base;
  let n = 2;
  while (existingIds.has(`${base}-${n}`)) n++;
  return `${base}-${n}`;
}

// ── Product entry serialiser ──────────────────────────────────────────────────

function serialiseProduct(id, p) {
  const lines = [`products['${id}'] = {`];
  lines.push(`  id: '${id}',`);
  lines.push(`  name: ${JSON.stringify(p.name)},`);
  if (p.brand) lines.push(`  brand: ${JSON.stringify(p.brand)},`);
  if (p.shortDescription) lines.push(`  shortDescription: ${JSON.stringify(p.shortDescription)},`);
  lines.push(`  affiliateProgram: '${p.affiliateProgram}',`);
  if (p.amazonAsin) lines.push(`  amazonAsin: '${p.amazonAsin}',`);
  if (p.affiliateUrl) lines.push(`  affiliateUrl: ${JSON.stringify(p.affiliateUrl)},`);
  lines.push(`  category: '${p.category}',`);
  if (p.priceRange) lines.push(`  priceRange: ${JSON.stringify(p.priceRange)},`);
  if (p.image) lines.push(`  image: ${JSON.stringify(p.image)},`);
  lines.push(`};`);
  return lines.join("\n");
}

// ── File writer ───────────────────────────────────────────────────────────────

async function writeProduct(id, product) {
  const original = await readFile(PRODUCTS_FILE, "utf-8");

  // All product entries are standalone assignments after the `export const products = {}` block.
  // Appending to the end of the file is always safe regardless of how many products exist.
  const entry = "\n" + serialiseProduct(id, product) + "\n";
  const updated = original.trimEnd() + "\n" + entry;

  try {
    await writeFile(PRODUCTS_FILE, updated, "utf-8");
  } catch (err) {
    // Restore original on write failure
    await writeFile(PRODUCTS_FILE, original, "utf-8");
    throw err;
  }
}

// ── Affiliate URL builder ─────────────────────────────────────────────────────

function buildAffiliateUrl(product) {
  if (product.affiliateProgram === "amazon") {
    return `https://www.amazon.com/dp/${product.amazonAsin}/?tag=${AMAZON_TRACKING_ID}`;
  }
  return product.affiliateUrl;
}

// ── Main flow ─────────────────────────────────────────────────────────────────

async function addProduct(rl) {
  if (!existsSync(PRODUCTS_FILE)) {
    console.error(`\nError: ${PRODUCTS_FILE} not found. Cannot continue.`);
    process.exit(1);
  }

  const source = await readFile(PRODUCTS_FILE, "utf-8");
  const existingIds = getExistingIds(source);

  console.log("\n─────────────────────────────────────────");
  console.log("  Add Affiliate Product");
  console.log("─────────────────────────────────────────\n");

  const product = {};

  // 1. Affiliate program
  const programs = ["amazon", "cj", "impact", "direct"];
  while (true) {
    const raw = (await ask(rl, `Affiliate program? [amazon/cj/impact/direct] (default: amazon): `)).trim().toLowerCase();
    const prog = raw === "" ? "amazon" : raw;
    if (programs.includes(prog)) {
      product.affiliateProgram = prog;
      break;
    }
    console.log(`  ✗ Must be one of: ${programs.join(", ")}`);
  }

  // 2a. Amazon ASIN
  if (product.affiliateProgram === "amazon") {
    while (true) {
      const raw = (await ask(rl, "Paste Amazon product URL or ASIN: ")).trim();
      const asin = extractAsin(raw);
      if (asin) {
        product.amazonAsin = asin;
        console.log(`  ✓ ASIN: ${asin}`);
        break;
      }
      console.log("  ✗ Could not extract a valid ASIN (must be 10 uppercase alphanumeric characters).");
    }
  }

  // 2b. Pre-built affiliate URL
  if (["cj", "impact", "direct"].includes(product.affiliateProgram)) {
    while (true) {
      const raw = (await ask(rl, "Paste the full pre-built affiliate URL: ")).trim();
      if (/^https?:\/\/.+/.test(raw)) {
        product.affiliateUrl = raw;
        break;
      }
      console.log("  ✗ URL must start with http:// or https://");
    }
  }

  // 3. Product name
  while (true) {
    const raw = (await ask(rl, "Product name: ")).trim();
    if (raw.length > 0) {
      product.name = raw;
      break;
    }
    console.log("  ✗ Product name is required.");
  }

  // 4. Brand (optional)
  const brand = (await ask(rl, "Brand? (optional, Enter to skip): ")).trim();
  if (brand) product.brand = brand;

  // 5. Short description (optional, max 100 chars)
  while (true) {
    const raw = (await ask(rl, "Short description? (optional, max 100 chars, Enter to skip): ")).trim();
    if (raw === "") break;
    if (raw.length <= 100) {
      product.shortDescription = raw;
      break;
    }
    console.log(`  ✗ Too long (${raw.length} chars). Keep it under 100.`);
  }

  // 6. Category
  console.log("\nCategories:");
  CATEGORIES.forEach((c, i) => console.log(`  ${i + 1}. ${c}`));
  while (true) {
    const raw = (await ask(rl, "\nCategory number or name: ")).trim().toLowerCase();
    const byNumber = parseInt(raw, 10);
    if (!isNaN(byNumber) && byNumber >= 1 && byNumber <= CATEGORIES.length) {
      product.category = CATEGORIES[byNumber - 1];
      break;
    }
    if (CATEGORIES.includes(raw)) {
      product.category = raw;
      break;
    }
    console.log(`  ✗ Enter a number 1–${CATEGORIES.length} or a valid category name.`);
  }
  console.log(`  ✓ Category: ${product.category}`);

  // 7. Price range (optional)
  const priceRange = (await ask(rl, "Price range? (optional, e.g. $20-30, Enter to skip): ")).trim();
  if (priceRange) product.priceRange = priceRange;

  // 8. Image (optional)
  const image = (await ask(rl, "Image path or URL? (optional, Enter to skip): ")).trim();
  if (image) product.image = image;

  // ── Product ID ──────────────────────────────────────────────────────────────

  const baseId = generateId(product.name, product.brand);
  const suggestedId = uniqueId(baseId, existingIds);

  console.log(`\nGenerated product ID: ${suggestedId}`);
  const useId = (await ask(rl, "Use this ID? (Y/n): ")).trim().toLowerCase();

  let finalId;
  if (useId === "" || useId === "y") {
    finalId = suggestedId;
  } else {
    while (true) {
      const custom = (await ask(rl, "Enter custom ID (kebab-case, lowercase): ")).trim();
      if (!isKebabCase(custom)) {
        console.log("  ✗ Must be kebab-case (lowercase letters, numbers, hyphens only).");
        continue;
      }
      if (existingIds.has(custom)) {
        console.log(`  ✗ ID "${custom}" already exists.`);
        continue;
      }
      finalId = custom;
      break;
    }
  }

  // ── Write ───────────────────────────────────────────────────────────────────

  await writeProduct(finalId, product);

  const affiliateUrl = buildAffiliateUrl(product);
  console.log(`\n✓ Added product: ${finalId}`);
  console.log(`✓ Affiliate URL: ${affiliateUrl}`);
  console.log(`
Next steps to use this product in content:
  1. Add \`hasAffiliate: true\` to the MDX frontmatter of the page (if not already set)
  2. Use one of:
     <AffiliateLink productId="${finalId}">link text here</AffiliateLink>
     <AffiliateProductBox productId="${finalId}" />
     <AffiliateProductBox productId="${finalId}" variant="compact" />`);
}

async function main() {
  const rl = createRL();

  while (true) {
    await addProduct(rl);

    const again = (await ask(rl, "\nRun another? (Y/n): ")).trim().toLowerCase();
    if (again === "n") break;
    console.log("");
  }

  rl.close();
  console.log("\nDone. Happy linking! ✦");
  process.exit(0);
}

main().catch((err) => {
  console.error("\nFatal error:", err.message);
  process.exit(1);
});
