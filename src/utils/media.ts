export type EmbedProvider = 'bandcamp' | 'soundcloud' | 'youtube' | 'spotify';
export function embedUrl(provider: EmbedProvider, value: string): string | undefined {
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.username || url.password) return undefined;
    const allowed =
      (provider === 'spotify' && url.hostname === 'open.spotify.com' && /^\/embed\/(track|album)\/[A-Za-z0-9]{22}\/?$/.test(url.pathname)) ||
      (provider === 'bandcamp' && url.hostname === 'bandcamp.com' && url.pathname.startsWith('/EmbeddedPlayer/')) ||
      (provider === 'soundcloud' && url.hostname === 'w.soundcloud.com' && url.pathname === '/player/') ||
      (provider === 'youtube' && ['www.youtube-nocookie.com', 'www.youtube.com'].includes(url.hostname) && url.pathname.startsWith('/embed/'));
    if (!allowed) return undefined;
    if (provider === 'youtube') url.hostname = 'www.youtube-nocookie.com';
    url.searchParams.delete('autoplay');
    url.searchParams.delete('auto_play');
    // SoundCloud can infer playback from its URL. Explicitly opt out.
    if (provider === 'soundcloud') url.searchParams.set('auto_play', 'false');
    return url.href;
  } catch { return undefined; }
}
