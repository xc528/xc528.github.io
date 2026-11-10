import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';
const prefix = (process.env.BASE_PATH || '/').replace(/\/$/, '') + '/';
const pages = [];
function collect(dir) {
  for (const file of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, file.name);
    if (file.isDirectory()) collect(path);
    else if (file.name.endsWith('.html')) pages.push(path);
  }
}
collect('dist');
const home = readFileSync('dist/index.html', 'utf8');
assert.equal([...home.matchAll(/id="mastering"/g)].length, 1, 'Mastering must appear once');
assert(home.indexOf('id="mastering"') < home.indexOf('id="selected-work"'), 'Mastering must precede Selected Frequencies');
for (const route of ['dist/index.html', 'dist/work/index.html']) {
  const html = readFileSync(route, 'utf8');
  const card = html.match(/<article class="[^"]*project-4[^"]*"[\s\S]*?<\/article>/)?.[0];
  assert(card?.includes(`href="${prefix}research/"`), `Missing shared technical overview card: ${route}`);
  const navigation = html.match(/<nav aria-label="Main navigation"[\s\S]*?<\/nav>/)?.[0];
  assert(navigation && !navigation.includes(`${prefix}contact/`), `Contact must not be in primary navigation: ${route}`);
}
for (const path of pages) {
  const html = readFileSync(path, 'utf8');
  assert.equal([...html.matchAll(/<h1[\s>]/g)].length, 1, `Expected one h1: ${path}`);
  assert(!/LET’S MAKE|SOME NOISE|Development placeholder|coming soon|Awaiting confirmation/.test(html), `Draft content remains: ${path}`);
  for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https:|mailto:)/.test(url)) continue;
    if (url.startsWith('#')) {
      assert(html.includes(`id="${decodeURIComponent(url.slice(1))}"`), `Missing anchor: ${path}${url}`);
      continue;
    }
    if (!url.startsWith('/')) continue;
    assert(url.startsWith(prefix), `Base path missing: ${url}`);
    const [local, hash] = url.slice(prefix.length).split('#');
    let target = join('dist', decodeURIComponent(local.split('?')[0]));
    assert(existsSync(target), `Broken local route or asset: ${url}`);
    if (hash) {
      if (target.endsWith('/') || !target.includes('.')) target = join(target, 'index.html');
      assert(readFileSync(target, 'utf8').includes(`id="${decodeURIComponent(hash)}"`), `Missing destination anchor: ${url}`);
    }
  }
  assert(!/href="(?:https?:\/\/example\.com|mailto:PERSONAL|)"/.test(html), `Placeholder link: ${path}`);
  assert(!/href="[^"]*\/work\/(?:virtual-acoustics|audio-ml-clip2)\//.test(html), `Unfinished technical route linked: ${path}`);
}
for (const route of ['index.html', 'work/index.html', 'research/index.html', 'about/index.html', 'contact/index.html']) assert(existsSync(join('dist', route)), `Missing essential route: ${route}`);
assert(pages.length >= 8);
assert(!existsSync('dist/work/virtual-acoustics/index.html'));
assert(!existsSync('dist/work/audio-ml-clip2/index.html'));
console.log(`Verified ${pages.length} pages, local links, anchors and draft-content cleanup at ${prefix}`);
