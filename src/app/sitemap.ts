import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://funnelvisionagency.com';
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/diensten`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/diensten/meta-advertenties`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/diensten/google-ads`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/diensten/emailmarketing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/diensten/website-bouwen`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/cases`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/over-ons`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
  ];
}
