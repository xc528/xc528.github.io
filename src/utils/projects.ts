import type { CollectionEntry } from 'astro:content';
export type ProjectPreview = Pick<CollectionEntry<'projects'>, 'id' | 'data'>;
export function isTechnical(project: ProjectPreview): boolean {
  return ['Research & Technology', 'Software & Development'].includes(project.data.category);
}
export function projectHref(project: ProjectPreview): string {
  const base = import.meta.env.BASE_URL;
  return isTechnical(project) ? `${base}research/${project.id === 'research' ? '' : `#${project.id}`}` : `${base}work/${project.id}/`;
}
