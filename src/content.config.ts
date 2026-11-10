import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Music & Audio', 'Events & Creative Production', 'Research & Technology', 'Software & Development']),
    number: z.number(),
    role: z.string(),
    summary: z.string(),
    image: z.string().optional(),
    alt: z.string().optional(),
    year: z.string().optional(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
    embeds: z.array(z.object({ provider: z.enum(['bandcamp', 'soundcloud', 'youtube']), url: z.url(), title: z.string() })).default([]),
    release: z.object({ title: z.string().optional(), artwork: z.string().optional(), artworkAlt: z.string().optional() }).optional(),
  }),
});
export const collections = { projects };
