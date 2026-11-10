// Paste confirmed values between the quotes. Empty values never become links.
export const PERSONAL_INSTAGRAM_URL = 'https://www.instagram.com/xinrann_05/';
export const PERSONAL_EMAIL_ADDRESS = 'xinranchen05@gmail.com';
export const PERSONAL_LINKEDIN_URL = '';
export const PERSONAL_GITHUB_URL = '';
export const CTMC_INSTAGRAM_URL = 'https://www.instagram.com/nyu_ctmc/';
export const CTMC_YOUTUBE_URL = '';
export const HHTTS_INSTAGRAM_URL = 'https://www.instagram.com/hhtts_band/';
export const HHTTS_APPLE_MUSIC_URL = 'https://music.apple.com/us/artist/hang-him-to-the-scales/1541498155';
export const HHTTS_SPOTIFY_URL = 'https://open.spotify.com/artist/1q4lI6ejtwR0qMXWR0z0A4';
// Optional local PDF under public/, for example: documents/rhan-chen-resume.pdf
export const RESUME_PATH = '';

export function configuredUrl(value: string): string | undefined {
  try {
    const url = new URL(value.trim());
    return url.protocol === 'https:' && !url.username && !url.password ? url.href : undefined;
  } catch { return undefined; }
}
export function configuredEmail(value: string): string | undefined {
  const address = value.trim();
  return /^[^\s<>@?&#]+@[^\s<>@?&#]+\.[^\s<>@?&#]+$/.test(address) ? address : undefined;
}
export const email = configuredEmail(PERSONAL_EMAIL_ADDRESS);
export type SocialIcon = 'instagram' | 'email' | 'youtube' | 'apple' | 'spotify';
export interface SocialLink { icon: SocialIcon; label: string; href?: string }
export const personalSocials: SocialLink[] = [
  { icon: 'instagram', label: 'Rhan Chen on Instagram', href: configuredUrl(PERSONAL_INSTAGRAM_URL) },
  { icon: 'email', label: 'Email Rhan Chen', href: email ? `mailto:${email}` : undefined },
];
export function projectSocials(id: string): SocialLink[] {
  if (id === 'chinese-traditional-music-club') return [
    { icon: 'instagram', label: 'CTMC on Instagram', href: configuredUrl(CTMC_INSTAGRAM_URL) },
    { icon: 'youtube', label: 'CTMC on YouTube', href: configuredUrl(CTMC_YOUTUBE_URL) },
  ];
  if (id === 'hang-him-to-the-scales') return [
    { icon: 'instagram', label: 'Hang Him to the Scales on Instagram', href: configuredUrl(HHTTS_INSTAGRAM_URL) },
    { icon: 'apple', label: 'Hang Him to the Scales on Apple Music', href: configuredUrl(HHTTS_APPLE_MUSIC_URL) },
    { icon: 'spotify', label: 'Hang Him to the Scales on Spotify', href: configuredUrl(HHTTS_SPOTIFY_URL) },
  ];
  return [];
}
