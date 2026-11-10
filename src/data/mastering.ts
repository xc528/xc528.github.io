import { z } from 'astro/zod';
import { embedUrl } from '../utils/media';

const relativeAsset = z.string().regex(/^(images|audio)\/[a-zA-Z0-9_./-]+$/).refine(value => !value.includes('..'));
const masteringEntry = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  artist: z.string(),
  // Use a factual descriptive label until the official title is supplied.
  title: z.string(),
  year: z.string().optional(),
  credit: z.string().optional(),
  featured: z.boolean().default(false),
  cover: z.union([relativeAsset.refine(value => value.startsWith('images/')), z.url().refine(value => { const url = new URL(value); return url.protocol === 'https:' && url.hostname === 'image-cdn-ak.spotifycdn.com' && url.pathname.startsWith('/image/'); })]).optional(),
  coverAlt: z.string().optional(),
  audio: z.discriminatedUnion('kind', [
    z.object({ kind: z.literal('file'), src: relativeAsset.refine(value => value.startsWith('audio/')) }),
    z.object({ kind: z.literal('embed'), provider: z.enum(['bandcamp', 'soundcloud', 'youtube', 'spotify']), url: z.url() }).refine(value => !!embedUrl(value.provider, value.url), 'Use an official HTTPS embed URL'),
  ]).optional(),
  releaseUrl: z.url().startsWith('https://').optional(),
  sourceAlbumUrl: z.url().startsWith('https://').optional(),
  projectId: z.string().regex(/^[a-z0-9-]+$/).optional(),
});

export type MasteringWork = z.infer<typeof masteringEntry>;

// Metadata verified against Spotify embed pages; Rhan confirmed mastering all four.
// The first track replaces the source-album embed, avoiding a duplicate release row.
export const mastering = z.array(masteringEntry).refine(
  entries => entries.filter(entry => entry.featured).length === 2,
  'Choose exactly two featured works',
).parse([
  {
    id: 'you-may-not-ask',
    artist: 'Hang Him to the Scales',
    title: 'You May (Not) Ask',
    year: '2024',
    credit: 'Mastering & pipa',
    featured: true,
    cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0244158902430e1a923935e78f',
    coverAlt: 'Official artwork for 求不得 You May (Not) Ask.',
    audio: { kind: 'embed', provider: 'spotify', url: 'https://open.spotify.com/embed/track/1hqWuWJ4osux4BpTDiRoru?theme=0' },
    releaseUrl: 'https://open.spotify.com/track/1hqWuWJ4osux4BpTDiRoru',
    sourceAlbumUrl: 'https://open.spotify.com/album/38tqzlpvcdBEK4wSRtXBgW',
  },
  {
    id: 'hhtts',
    featured: true,
    artist: 'Hang Him to the Scales',
    title: 'HHTTS',
    credit: 'Mastering & pipa',
    cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0284638ef830e368300c2ca3f8',
    coverAlt: 'Official artwork for the HHTTS album.',
    audio: { kind: 'embed', provider: 'spotify', url: 'https://open.spotify.com/embed/album/5tuy8HVvPtRqZTgToNM0WR?theme=0' },
    releaseUrl: 'https://open.spotify.com/album/5tuy8HVvPtRqZTgToNM0WR',
  },
  {
    id: 'cruel',
    artist: 'Hang Him to the Scales',
    title: 'Cruel',
    year: '2025',
    credit: 'Mastering & pipa',
    cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025343086d55cb94d306ee336b',
    coverAlt: 'Official artwork for Cruel.',
    audio: { kind: 'embed', provider: 'spotify', url: 'https://open.spotify.com/embed/track/5nrhOF53JRYK9Sg2xSrEV5?theme=0' },
    releaseUrl: 'https://open.spotify.com/track/5nrhOF53JRYK9Sg2xSrEV5',
  },
  {
    id: 'baby-lower-east-side',
    artist: 'Hang Him to the Scales',
    title: 'Baby Let Me Sing for You in Lower East Side',
    year: '2026',
    credit: 'Mastering & pipa',
    cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023d17a0d74ca93bef5c0e4545',
    coverAlt: 'Official artwork for baby let me sing for you in lower east side.',
    audio: { kind: 'embed', provider: 'spotify', url: 'https://open.spotify.com/embed/track/7eo76m154ogc4hewQgyOAm?theme=0' },
    releaseUrl: 'https://open.spotify.com/track/7eo76m154ogc4hewQgyOAm',
  },
]);
