import { insights } from '@/content/insights';
import type { MetadataRoute } from 'next';

const paths = [
  '',
  '/insights',
  '/why-mou',
  '/what-we-do',
  '/who-we-are',
  '/careers',
  '/contact',
  '/industries/healthcare',
  '/industries/finance',
  '/industries/automotive',
  ...insights.map((item) => `/insights/${item.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `https://mousolution.com${path}`,
    lastModified: new Date('2026-08-30'),
    changeFrequency: path.startsWith('/insights') ? 'weekly' : 'monthly',
    priority: path === '' || path === '/insights' ? 0.9 : 0.7,
  }));
}
