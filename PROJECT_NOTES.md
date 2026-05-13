# Project Notes

## Email Capture & Lead Magnet — Paused

- **EmailCapture component is paused** (commented out, not deleted) as of this commit.
- **Reason:** The "Disney Toddler Packing List" PDF that ConvertKit promises as a welcome gift does not actually exist on disk or in the ConvertKit automation. Signups would receive a broken promise.
- **ConvertKit form ID in use:** 9294666 (form lives at ck.page/9294666)
- **Component file:** `components/EmailCapture.tsx` — untouched, ready to re-enable.
- **Commented out in:** `app/page.tsx`, `app/about/page.tsx`, `app/resorts/page.tsx`, `app/resorts/[slug]/page.tsx`, `app/tips/page.tsx`, `app/tips/[slug]/page.tsx`, `app/compare/page.tsx`, `app/compare/[slug]/page.tsx`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `app/plan-your-trip/page.tsx`

### Restoration Plan

1. Affiliate-link the packing list PAGE first (after Amazon Associates approval)
2. Generate a print-quality PDF version of the packing list with the same affiliate links
3. Upload the PDF to ConvertKit's file hosting (or `/public/downloads/`)
4. Update the ConvertKit welcome automation to deliver the PDF
5. Update EmailCapture copy if needed (current copy is updated but component is paused)
6. Re-enable EmailCapture by uncommenting the render calls in all pages listed above
