#!/usr/bin/env node
const readline = require("readline");
const fs = require("fs");
const path = require("path");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((resolve) => rl.question(q, resolve));

const toSlug = (name) =>
  name
    .toLowerCase()
    .replace(/disney's\s+/i, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const today = new Date().toISOString().split("T")[0];

async function main() {
  console.log("\n✨ Pixie Dust Family — New Resort Review Generator\n");

  const resortName = await ask("Resort name (e.g. Disney's Polynesian Village Resort): ");
  const slug = toSlug(resortName) + "-review";
  const affiliateKey = toSlug(resortName).replace(/-/g, "_").replace(/_review$/, "");

  console.log(`\nSlug: ${slug}`);
  console.log(`Affiliate key: ${affiliateKey}\n`);

  const tier = await ask("Tier (Deluxe/Moderate/Value) [Deluxe]: ") || "Deluxe";
  const dateVisited = await ask("Year visited [2025]: ") || "2025";
  const stayLength = await ask("Stay length [3 nights]: ") || "3 nights";

  const frontmatter = `---
title: "Disney's ${resortName} Review: Honest Family Take"
slug: "${slug}"
type: "resort-review"
resort: "${resortName}"
tier: "${tier}"
ourRating: 5
toddlerScore: 8
grandparentScore: 8
poolRating: 8
diningRating: 8
locationRating: 8
bestFor: ["Families", "Toddlers"]
dateVisited: "${dateVisited}"
stayLength: "${stayLength}"
travelParty: "Husband, wife, toddler, grandparents"
heroImage: "/images/resorts/${slug.replace("-review", "")}/hero.jpg"
galleryImages:
  - "/images/resorts/${slug.replace("-review", "")}/pool.jpg"
  - "/images/resorts/${slug.replace("-review", "")}/room.jpg"
  - "/images/resorts/${slug.replace("-review", "")}/lobby.jpg"
  - "/images/resorts/${slug.replace("-review", "")}/dining.jpg"
  - "/images/resorts/${slug.replace("-review", "")}/view.jpg"
  - "/images/resorts/${slug.replace("-review", "")}/outside.jpg"
seoTitle: "Disney's ${resortName} Review: Is It Worth It for Toddlers?"
seoDescription: "Honest review of Disney's ${resortName} from a real family with a toddler. Real photos, toddler score, pool breakdown, and whether it's worth the price."
affiliateKey: "${affiliateKey}"
relatedPosts:
  - "disney-world-with-toddler-complete-guide"
publishedAt: "${today}"
---

## Our Take

[Write your honest 2-3 paragraph summary here. Be specific about what made this resort stand out or fall short.]

## The Pool

[Describe the pool, zero-entry options, slides, toddler features. Rate the pool experience.]

## Dining

[Cover both table-service and quick-service options. Mention character dining if available.]

## The Room

[Room size, theming, amenities. Notes on pack-n-play availability, blackout curtains, etc.]

## Toddler Breakdown

**Pool:** [X]/10 — [one sentence]
**Dining:** [X]/10 — [one sentence]
**Room size:** [X]/10 — [one sentence]
**Character experiences:** [X]/10 — [one sentence]
**Stroller navigation:** [X]/10 — [one sentence]

## Grandparent Notes

[Accessibility, pace, distance from lobby to room, highlights that work for older travelers.]

## Is It Worth the Price?

[Final honest verdict on value. Who should book this resort and who should skip it.]
`;

  // Create MDX file
  const contentDir = path.join(process.cwd(), "content", "resorts");
  if (!fs.existsSync(contentDir)) fs.mkdirSync(contentDir, { recursive: true });

  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (fs.existsSync(filePath)) {
    const overwrite = await ask(`\nFile ${filePath} already exists. Overwrite? (y/N): `);
    if (overwrite.trim().toLowerCase() !== "y") {
      console.log("Aborted.");
      rl.close();
      return;
    }
  }
  fs.writeFileSync(filePath, frontmatter.trim() + "\n");

  // Create image directory structure
  const imageBase = slug.replace("-review", "");
  const imageDir = path.join(process.cwd(), "public", "images", "resorts", imageBase);
  if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
    // Create placeholder .gitkeep
    fs.writeFileSync(path.join(imageDir, ".gitkeep"), "");
  }

  console.log(`\n✅ Created:`);
  console.log(`   MDX:    ${filePath}`);
  console.log(`   Images: ${imageDir}/`);
  console.log(`\nExpected image files to add:`);
  ["hero.jpg", "pool.jpg", "room.jpg", "lobby.jpg", "dining.jpg", "view.jpg", "outside.jpg"].forEach(
    (f) => console.log(`   → public/images/resorts/${imageBase}/${f}`)
  );
  console.log(`\nNext: Fill in the MDX content and add your vacation photos to the images folder.\n`);

  rl.close();
}

main().catch((err) => {
  console.error(err);
  rl.close();
  process.exit(1);
});
