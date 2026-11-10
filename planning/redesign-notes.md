# Redesign — independent frequencies

## Audit
The first version relied on a cream paper metaphor, similar image cards and a static listening placeholder. Its typography and symmetrical hero undersold the intensity and range of the live photographs. The content, routes and embed support were already useful and remain intact.

## New system
Near-black #141414, soft white #F4F1EA, vermilion #F04438, electric blue #4169E1 and gray #8A8987. Blue is restricted to one audio research graphic. Shared spacing, motion, layout width and typography tokens live in global.css. No old palette or paper texture remains.

Bebas Neue sets the cover name and poster lettering; Syne sets project titles and editorial headings; IBM Plex Sans handles body text and credits; Georgia is a limited italic accent. Google Fonts are requested with display=swap and preconnects. System families remain fallbacks for failed/offline loading.

The homepage is composed as a cover, a staggered work index, overlapping sleeves and a photographic biography spread. The mobile cover repositions images and copy; mobile sleeves use horizontal native scrolling. All release interactions use native details/summary, including keyboard activation. Reduced-motion preferences disable animated reveals and transitions.

## Reference synthesis
- Wednesday Campanella: image/type layering and a visually assertive cover; the Awwwards reference was inspected. The new design uses an original dark photographic composition, not the reference's colors or artwork.
- Joon: physical sleeve arrangement, offsets and bringing a selected sleeve forward. One known album plus two clearly marked development slots, no invented discography.
- Stephen Reed: explicit roles, dates, concise summaries, media and links inside project dossiers. No reference copy or content was reused.

## New optimized photographs
Original Photos files remain intact.
- IMG_4414.JPG → pipa-monochrome.jpg: seated pipa player in black-and-white, hero.
- IMG_2245.JPG → band-red-stage.jpg: red-lit band performance, secondary hero image.
- e750e7c5d641c1b0a57bf24c63f981bf.JPG → pipa-magenta-stage.jpg: pipa performance, About page.

Subjects, dates, locations and photographer credits have not been inferred. Existing Markdown case-study text remains intact.

## Release artwork
The optional project frontmatter `release` accepts `title`, `artwork` and `artworkAlt`. The documented album appears in RecordGallery.astro. Real cover artwork replaces the labeled design placeholder automatically. It also appears on the project page. The two unassigned sleeves are development slots only. Existing embeds and links retain their schema and rendering.
