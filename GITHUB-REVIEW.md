# GitHub first-commit review

Preparation only: no staging, commit, remote repository, push or deployment was performed.

## Included files

The proposed first commit includes the files listed below. The list comes from `git ls-files --others --exclude-standard`; all source and documentation are currently untracked. Required website photos, plugin screenshots, research diagrams and favicon remain included. No locally hosted audio files exist; the music players use official Spotify embeds.

```text
.github/workflows/deploy.yml
.gitignore
GITHUB-REVIEW.md
README.md
astro.config.mjs
package-lock.json
package.json
public/favicon.svg
public/images/about-red-lit-performance.jpg
public/images/band-monochrome.jpg
public/images/band-red-stage.jpg
public/images/band-stage.jpg
public/images/ctmc-blue-lit-ensemble.jpg
public/images/ctmc-ensemble-conductor.jpg
public/images/ctmc-performance-archive.jpg
public/images/ctmc-pipa-performance.jpg
public/images/ensemble-stage.jpg
public/images/ensemble-wide.jpg
public/images/hhtts-blue-lit-performance.jpg
public/images/hhtts-outdoor-stage.jpg
public/images/hhtts-pipa-closeup.jpg
public/images/hhtts-street-performance.jpg
public/images/lyric-intelligibility-overview.svg
public/images/pipa-amber.jpg
public/images/pipa-monochrome.jpg
public/images/pipa-stage.jpg
public/images/three-band-compressor-interface.png
public/images/virtual-acoustics-overview.svg
public/images/voice-denoiser-interface.png
scripts/check-config.mjs
scripts/check-output.mjs
src/components/MasteringRelease.astro
src/components/MediaEmbed.astro
src/components/ProjectCard.astro
src/components/RecordGallery.astro
src/components/SocialLinks.astro
src/content.config.ts
src/content/projects/audio-ml-clip2.md
src/content/projects/chinese-traditional-music-club.md
src/content/projects/denoise-plugin.md
src/content/projects/hang-him-to-the-scales.md
src/content/projects/studio-live-av.md
src/content/projects/three-band-compressor.md
src/content/projects/virtual-acoustics.md
src/data/featured.ts
src/data/links.ts
src/data/mastering.ts
src/data/research.ts
src/layouts/Layout.astro
src/pages/about.astro
src/pages/contact.astro
src/pages/index.astro
src/pages/research.astro
src/pages/work/[id].astro
src/pages/work/index.astro
src/styles/global.css
src/utils/media.ts
src/utils/projects.ts
tsconfig.json
```

## Excluded paths

- `/Photos/`: the complete original collection, including CTMC and Hhtts subfolders (about 259 MB). Original locations and files are unchanged.
- `/planning/`: all development screenshots, contact sheet, photo inventory, design plans, Spotify inspection metadata and archived page drafts (about 1.7 MB). Local-only historical records; not needed to build.
- `/_local-review/`: reserved for future review artifacts; no need to create it until used.
- `/public/images/pipa-magenta-stage.jpg`: unused previous About photo; remains on disk.
- `node_modules/`, `/dist/`, `/.astro/`, `/.cache/`, `/.vite/`, `/coverage/`, `*.tsbuildinfo`: dependencies and generated files.
- `.DS_Store`, Node package-manager diagnostic logs: local machine artifacts.
- `.env`, `.env.*`: local environment values; `.env.example` and `.env.*.example` templates are allowed. No environment files were found.

The whole `public/` directory is NOT ignored. Any future files placed there will be published unless excluded specifically. Never place private material there.

## Git tracking and privacy

- The index is empty; no unwanted photos or review files are tracked. No `git rm --cached` is needed.
- `main` has no commits and there is no configured remote. Codex has internal snapshot refs in `.git/`; these are not branch history and are not part of this proposed file upload. No history was rewritten.
- A targeted text scan found no API credentials, private-key blocks, GitHub tokens or secret assignments in project text, including local planning notes. No private document, key or environment file was found in the project inventory. This is a local pattern-based audit, not a guarantee against every possible secret format.
- The configured contact email and supplied social links are intentionally public. Original personal photos are excluded; selected optimized images remain public as requested.
- GPS metadata was found in `public/images/hhtts-blue-lit-performance.jpg`. Its EXIF segment was removed without recompressing the JPEG or modifying the original. Other selected photos retain camera/date or author/copyright metadata; those credits were preserved. Do not assume future optimized photos are metadata-free.
- Google Fonts and Spotify are external services used by the live page. Photos depicting performers/audiences and the two plugin screenshots are intentionally included portfolio media.

## Deployment preparation

Use a repository named `<your-github-username>.github.io`. No username was found in the project configuration or remote, so none is invented. `astro.config.mjs` uses `SITE_URL` and `BASE_PATH`, with `/` as the default base. The workflow obtains the actual origin/base from GitHub Pages, so a user-site repository builds at `/`.

The workflow is **manual-only** (`workflow_dispatch`). A push does not automatically deploy. After repository/upload approval, select GitHub Actions in repository Settings → Pages, then manually run the deployment workflow when publication is approved. Its built-in GitHub token is used; do not add a personal access token to the repository. Build output is uploaded as an Actions artifact, not committed.

Node 22.23.4+ is required by the installed Astro version. Actions selects the latest Node 22. The workflow performs Astro checks, builds, and validates local links before upload/deployment.

## Verification

Astro checks, production build and all eight pages' internal asset/link/anchor validation passed. A second production build from only the 59 proposed commit files also passed, including all eight pages and their local assets/anchors. Ignored originals, review files, the unused photo and `.DS_Store` were absent from that build. Dependencies were supplied by the existing local installation; a fresh network install was not performed. Configured links and non-autoplay embed checks passed as well. No visual content or layout was redesigned.

## Review commands (read-only)

```sh
git status --short --untracked-files=all
git ls-files --others --exclude-standard
git status --short --ignored
git check-ignore -v Photos/ planning/ node_modules/ dist/ .astro/ public/images/pipa-magenta-stage.jpg
```

No commit commands have been run. Review this list before staging any files.
