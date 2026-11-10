# Rhan Chen — music industry portfolio

Static Astro / TypeScript, plain CSS, Markdown projects and GitHub Pages. No backend, CMS or component framework. The established photography, fonts, colors and motion remain unchanged.

## Run and verify

Use Node 22.23.4 or newer, as required by the installed Astro version. The GitHub workflow uses the latest Node 22 release.

```sh
npm install
npm run dev
npm run check
npm run build
node scripts/check-output.mjs
```

`npm run preview` serves the built site. `node --experimental-strip-types scripts/check-config.mjs` verifies URL/email configuration and non-autoplay embed handling (Node versions with TypeScript stripping support).

## Contact and social links

Edit **`src/data/links.ts`**. The personal email and supplied Instagram, Apple Music and Spotify artist links are configured. CTMC YouTube, LinkedIn and GitHub remain empty and are omitted from public links. No placeholder URL is clickable. Hero icons have a non-clickable accessible fallback if cleared. All external social links open in a new tab with `noopener noreferrer`.

Paste a full HTTPS profile URL into the appropriate named constant. Email is a bare address, not a mailto URL. To add a résumé, place an authorized PDF under `public/documents/` and set `RESUME_PATH` to `documents/your-file.pdf`. About automatically shows the download when configured.

## Mastering listening list

Edit **`src/data/mastering.ts`** to update releases. The four Spotify works are verified against official embed metadata; Rhan confirmed mastering all four. Local metadata provenance is in `planning/spotify-release-metadata.json` (excluded from Git).

Exactly two entries must have `featured: true`. They render first and their players load on initial page load. Unfeatured entries stay in an inert HTML template until **VIEW ALL WORKS +** is activated. **SHOW LESS −** removes those extra players, stopping their playback without remounting the featured players. The control exposes `aria-expanded`, works with the keyboard, and respects reduced motion. Contact information is outside the collapsible list.

Current order:
1. You May (Not) Ask — individual track from the supplied 求不得 release
2. HHTTS
3. Cruel — expanded list
4. Baby Let Me Sing for You in Lower East Side — expanded list

The supplied 求不得 album URL is retained in the data for provenance, rather than shown as a duplicate album row. HHTTS is a separate album edition with different track IDs. Its date is omitted because the inspected metadata did not provide it.

Fields: `id`, `artist`, `title`, optional `year`, verified `credit`, `featured`, `cover`, `coverAlt`, `audio`, optional `releaseUrl`, `sourceAlbumUrl` and `projectId`. `cover` can be an image under `public/images/` or the verified Spotify artwork CDN. Preserve the official artwork rather than inventing cover art.

```ts
// An authorized local file under public/audio/:
audio: { kind: 'file', src: 'audio/your-authorized-excerpt.mp3' }

// Spotify uses its official embed URL, not the ordinary share URL:
audio: { kind: 'embed', provider: 'spotify', url: 'https://open.spotify.com/embed/track/TRACK_ID?theme=0' }
```

The example ID is documentation only. Other supported embed providers remain Bandcamp, SoundCloud and YouTube. Autoplay parameters are removed. Spotify supplies native playback and available progress controls; previews, full playback, availability and sign-in prompts are controlled by Spotify. The site does not copy or host Spotify recordings. Without JavaScript, the two featured players remain usable and extra works have direct Spotify links.

## Projects and photo frames

Edit **`src/content/projects/*.md`**. `image` and `alt` define the lead photo; `gallery` adds frames:

```yaml
image: images/your-photo.jpg
alt: A factual description of the image
```

For multiple frames, use this separate `gallery` field (no leading space):

```yaml
gallery:
  - src: images/first-photo.jpg
    alt: Description of the first photograph
  - src: images/second-photo.jpg
    alt: Description of the second photograph
```

Copy website-ready photographs into `public/images/`, with descriptive filenames. Content uses paths without a leading slash so GitHub Pages subpaths work. Project `links`, `embeds` and optional `release` artwork fields remain supported; the schema is in `src/content.config.ts`.

HHTTS, CTMC and Studio / Live AV have public detail pages. Their factual roles and existing media are preserved; draft “awaiting / coming soon” text was removed. Local-only previous drafts are backed up under `planning/content-archive/` and are not needed to build the site.

## Research & Technology

**`/research/`** is the consolidated overview. Existing technical entries are discovered from the content collection. The full original thesis and CLIP2 Markdown files remain intact and are not published as unfinished individual case studies. Common project links resolve technical projects to anchors on the research overview.

Edit `src/data/research.ts` for the short public thesis and CLIP2 summaries. Add optional GitHub or PDF links to each project's existing Markdown `links` field. A project `image` takes priority over the conceptual diagram; `gallery` is also supported. The two supplied SVG process diagrams illustrate methods, not measured results. Additional existing/future technical entries use their stored summary and visuals; empty technical categories are not shown.

## Original assets and design

`Photos/` contains unchanged originals and is ignored by Git. Optimized copies live in `public/images/`; see `planning/photo-inventory.md` and `planning/contact-sheet.jpg`. Keep an independent backup of the originals. Existing image descriptions do not infer people, venues, dates or photographer credits.

Design tokens and responsive rules live in `src/styles/global.css`. Fonts remain Bebas Neue, Syne and IBM Plex Sans, with occasional Georgia italics. Social icons are small inline SVGs. The oversized slogan footer was replaced with copyright and essential links. No new dependency was added for these refinements.

## Remaining optional materials

- CTMC YouTube URL
- Additional authorized audio samples or verified mastering releases
- Further verified mastering credits
- Résumé PDF, LinkedIn/GitHub URLs, research repositories or paper PDFs

Missing items are omitted from the public interface rather than shown as dead links or empty pages. The email and supplied social links are live in the local site.

## GitHub Pages — prepared, not published

Nothing has been pushed or deployed. Deployment is manual-only in `.github/workflows/deploy.yml`; pushing a commit does not trigger publishing. After explicit approval, create a repository named `<your-github-username>.github.io`, push `main`, select **GitHub Actions** in Settings → Pages, and manually run the deployment workflow from Actions. The username is not known locally and is not hardcoded. The workflow reads the actual Pages origin and base path automatically; for this user-site repository the base path is `/`. Automatic deployment on pushes can be enabled later if desired.

Test a repository subpath locally:

```sh
SITE_URL=https://example.github.io BASE_PATH=/Rhan-Website npm run build
BASE_PATH=/Rhan-Website node scripts/check-output.mjs
```

Replace the example origin with the actual approved host before publishing. Canonical and Open Graph URLs are emitted only with a configured production origin.

## Featured technical overview

`src/data/featured.ts` defines the shared Research & Technology card used on Home and Work. It reuses `ProjectCard.astro` and links to `/research/`; it does not create another case-study page. Home order is cover → Mastering → Selected Frequencies → About. Primary navigation contains Work and About; Contact remains available in the footer and through the existing email links.

## First-commit review

See `GITHUB-REVIEW.md` for the audited file list, exclusions and privacy notes. Nothing is staged or committed by the preparation process. Review locally with:

```sh
git status --short --untracked-files=all
git ls-files --others --exclude-standard
git status --short --ignored
```

Originals remain in `/Photos/`; `/planning/` contains local review material and draft backups. Put future review screenshots in `/_local-review/`. These folders are excluded with exact root paths. Never put private originals or secrets in `public/`: it is copied to the published site. The unreferenced former About image `public/images/pipa-magenta-stage.jpg` is excluded individually and remains on disk. Required photographs, research diagrams, plugin screenshots and favicon remain included. There are no locally hosted audio recordings; listening uses official Spotify embeds.

`.env` and `.env.*` are excluded; clearly named `.env.example` templates remain allowed. Production origin can be configured with `SITE_URL` and `BASE_PATH` shell variables; Astro's config does not load a local `.env` for these settings. These deployment values are public, never secrets. The website needs no private API keys.
