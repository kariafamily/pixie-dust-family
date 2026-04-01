#!/usr/bin/env node
const readline = require("readline");
const fs = require("fs");
const path = require("path");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((resolve) => rl.question(q, resolve));

const toSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const today = new Date().toISOString().split("T")[0];

async function main() {
  console.log("\n✨ Pixie Dust Family — New Post Generator\n");

  const typeAnswer = await ask("Post type?\n  1) resort-review\n  2) tip-guide\n  3) comparison\n  4) blog\nChoice (1-4): ");
  const types = { "1": "resort-review", "2": "tip-guide", "3": "comparison", "4": "blog" };
  const type = types[typeAnswer.trim()] || "blog";

  const folderMap = {
    "resort-review": "resorts",
    "tip-guide": "tips",
    "comparison": "compare",
    "blog": "blog",
  };
  const folder = folderMap[type];

  const title = await ask("Post title: ");
  const slug = toSlug(title);

  let frontmatter = "";

  if (type === "resort-review") {
    const resort = await ask("Resort name: ");
    frontmatter = `---
title: "${title}"
slug: "${slug}"
type: "resort-review"
resort: "${resort}"
tier: "Deluxe"
ourRating: 5
toddlerScore: 8
grandparentScore: 8
poolRating: 8
diningRating: 8
locationRating: 8
bestFor: ["Families", "Toddlers"]
dateVisited: "2025"
stayLength: "3 nights"
travelParty: "Husband, wife, toddler, grandparents"
heroImage: "/images/resorts/${slug}/hero.jpg"
galleryImages:
  - "/images/resorts/${slug}/pool.jpg"
  - "/images/resorts/${slug}/room.jpg"
  - "/images/resorts/${slug}/lobby.jpg"
  - "/images/resorts/${slug}/dining.jpg"
  - "/images/resorts/${slug}/view.jpg"
  - "/images/resorts/${slug}/outside.jpg"
seoTitle: "${title}"
seoDescription: "Our honest review of ${resort} from a real family with a toddler."
affiliateKey: "${slug.replace(/-review$/, "").replace(/-/g, "")}"
relatedPosts: []
publishedAt: "${today}"
---

## Our Take

[Write your honest summary here]

## The Pool

[Pool details and toddler rating]

## Dining

[Dining highlights]

## The Room

[Room details]

## Toddler Breakdown

[Toddler-specific notes]

## Grandparent Notes

[Grandparent-specific notes]

## Is It Worth the Price?

[Final verdict]
`;
  } else if (type === "tip-guide") {
    const category = await ask("Category (e.g. Planning, Gear, Tips): ");
    frontmatter = `---
title: "${title}"
slug: "${slug}"
type: "tip-guide"
category: "${category}"
icon: "📝"
readTime: "5 min read"
seoTitle: "${title}"
seoDescription: "[Write your SEO description here]"
relatedPosts: []
publishedAt: "${today}"
---

## Introduction

[Write your introduction here]

## Section 1

[Content]

## Section 2

[Content]

## Final Thoughts

[Wrap up]
`;
  } else if (type === "comparison") {
    frontmatter = `---
title: "${title}"
slug: "${slug}"
type: "comparison"
seoTitle: "${title}"
seoDescription: "[Write your SEO description here]"
relatedPosts: []
publishedAt: "${today}"
---

## The Head-to-Head

[Introduction to the comparison]

## Side-by-Side

| Category | Resort 1 | Resort 2 | Winner |
|---|---|---|---|
| Pool | | | |
| Dining | | | |
| Location | | | |
| Toddler Score | | | |

## Our Pick

[Final recommendation]
`;
  } else {
    frontmatter = `---
title: "${title}"
slug: "${slug}"
type: "blog"
category: "Blog"
seoTitle: "${title}"
seoDescription: "[Write your SEO description here]"
publishedAt: "${today}"
---

## Introduction

[Write your post here]
`;
  }

  const contentDir = path.join(process.cwd(), "content", folder);
  if (!fs.existsSync(contentDir)) fs.mkdirSync(contentDir, { recursive: true });

  const filePath = path.join(contentDir, `${slug}.mdx`);

  if (fs.existsSync(filePath)) {
    const overwrite = await ask(`File ${filePath} already exists. Overwrite? (y/N): `);
    if (overwrite.trim().toLowerCase() !== "y") {
      console.log("Aborted.");
      rl.close();
      return;
    }
  }

  fs.writeFileSync(filePath, frontmatter.trim() + "\n");
  console.log(`\n✅ Created: ${filePath}`);
  console.log(`\nNext: Open the file and fill in your content.\n`);
  rl.close();
}

main().catch((err) => {
  console.error(err);
  rl.close();
  process.exit(1);
});
