import type { MetadataRoute } from 'next';
import { kennisbank } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://funnelvisionagency.com';
  const now = new Date();

  const artikelUrls: MetadataRoute.Sitemap = kennisbank.map((artikel) => ({
    url: `${base}/kennisbank/${artikel.slug}`,
    lastModified: new Date(artikel.publishDate),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/diensten`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/diensten/meta-advertenties`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/diensten/google-ads`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/diensten/website-bouwen`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/diensten/ai-oplossingen`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/cases`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/kennisbank`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ...artikelUrls,
    { url: `${base}/over-ons`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/algemene-voorwaarden`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
