# Photo Audit Notes

## Photo Renaming Lessons Learned

- The Project 3 renaming script ran off of Amazon Photos export filenames, which did not reliably correspond to actual image content.
- Result: at least 5 photos in the first batch were renamed with filenames that did not match their actual content (e.g., a Grand Floridian lobby photo was renamed "polynesian-ohana-breakfast-pluto-visit.jpg").
- For any FUTURE batch of photos: BEFORE the renaming script runs, manually review at least 25% of the batch by opening files and confirming the proposed new name matches the image content.
- For sufficient cleanliness: consider running an image-recognition pass or building a manual approval step into the renaming pipeline.
- This audit (May 2026) corrected: see git log for "Audit and correct misfiled photos" commit.

### Specific corrections made (May 2026)

| Original (wrong) path | Actual content | Corrected path |
|---|---|---|
| resorts/polynesian/polynesian-ohana-breakfast-pluto-visit.jpg | Grand Floridian lobby chandelier | resorts/grand-floridian/grand-floridian-lobby-chandelier.jpg |
| resorts/polynesian/polynesian-ohana-breakfast-pluto-reaction.jpg | Grand Floridian exterior building | resorts/grand-floridian/grand-floridian-exterior.jpg |
| resorts/polynesian/polynesian-beach-bungalows-lagoon.jpg | WDW entrance arch (from car, overcast) | blog/walt-disney-world-arrival-car-window.jpg |
| resorts/grand-floridian/grand-floridian-lobby-chandelier.jpg | WDW entrance arch (from car, clear day) | blog/walt-disney-world-entrance-sign-2.jpg |
| resorts/wilderness-lodge/wilderness-lodge-beach-castle-view.jpg | AKL savanna with zebra at fence | resorts/animal-kingdom-lodge/animal-kingdom-lodge-savanna-zebra-fence.jpg |
