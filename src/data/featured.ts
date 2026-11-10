import type { CollectionEntry } from 'astro:content';

// Shared overview card for Home and Work; detailed research remains on /research/.
export const technicalOverview = {
  id: 'research',
  data: {
    title: 'Research & Technology',
    category: 'Research & Technology',
    number: 4,
    role: 'Audio signal processing · Machine learning · Software development',
    summary: 'Exploring how sound is simulated, represented and understood through audio signal processing, machine learning and software development.',
    image: 'images/virtual-acoustics-overview.svg',
    alt: 'Conceptual diagram connecting virtual room acoustics, synthetic sound scenes and machine listening.',
    gallery: [],
    links: [],
    embeds: [],
  },
} satisfies Pick<CollectionEntry<'projects'>, 'id' | 'data'>;
