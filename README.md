# Pixie Dust Family

Honest Walt Disney World Deluxe resort reviews from a real Orlando-area family with a toddler.

**Live site:** [pixiedustfamily.com](https://pixiedustfamily.com)

---

## What This Site Is

A review blog focused exclusively on Walt Disney World Deluxe resorts, written from the perspective of a family with a toddler and grandparents. Every review is based on a real, paid stay.

---

## Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Requires Node.js 18+.

---

## Adding a New Resort Review

Use the interactive CLI tool:

```bash
npm run new-resort
```

This will:
1. Prompt you for the resort name and details
2. Generate a complete MDX file with all frontmatter pre-filled
3. Create the image folder structure at `/public/images/resorts/[slug]/`

Then fill in the MDX content and add your vacation photos.

---

## Adding a Blog Post or Guide

```bash
npm run new-post
```

This will:
1. Ask for the post type (resort-review, tip-guide, comparison, blog)
2. Ask for the title
3. Generate the MDX file with correct frontmatter template
4. Save to the correct `/content/` subfolder

---

## Swapping in Real Photos

Every image slot has a `PHOTO SLOT` comment. To replace a PhotoPlaceholder with a real photo:

1. Add your photo to `/public/images/resorts/[resort-slug]/`
2. Replace the `<PhotoPlaceholder>` component with `<Image src="/images/..." alt="..." width={800} height={600} />`

---

## Updating Affiliate Links

Edit `/lib/affiliates.ts` and replace placeholder values with your real affiliate URLs:

```typescript
polynesian: {
  bookingCom: "https://booking.com/your-affiliate-link",
  expedia: "https://expedia.com/your-affiliate-link",
  getAwayToday: "https://getawaytoday.com/your-affiliate-link",
}
```

---

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 ID (e.g. `G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_KIT_FORM_ID` | Kit (ConvertKit) form ID for email capture |
| `NEXT_PUBLIC_SITE_URL` | Your live site URL |

---

## Deploying Updates

```bash
git add .
git commit -m "Add: [describe your change]"
git push
```

Vercel auto-deploys on push. Takes ~2 minutes.

---

## First-Time GitHub & Vercel Setup

1. Go to [github.com](https://github.com) → New repository → `pixie-dust-family` → Public → no README
2. Run:
   ```bash
   git remote add origin https://github.com/YOURUSERNAME/pixie-dust-family.git
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub → select `pixie-dust-family`
4. Add environment variables in Vercel project settings
5. Deploy

---

## Project Structure

```
/app/               Next.js App Router pages
/components/        Reusable React components
/content/
  /resorts/         Resort review MDX files
  /tips/            Tip guide MDX files
  /compare/         Comparison MDX files
  /blog/            Blog post MDX files
/lib/
  affiliates.ts     Affiliate link configuration
  mdx.ts            MDX reading utilities
/public/images/     Photo slots (replace with real vacation photos)
/scripts/
  new-post.js       CLI: create new post
  new-resort.js     CLI: create new resort review
```
