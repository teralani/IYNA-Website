import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://iynalwsd.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://iynalwsd.vercel.app/events',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://iynalwsd.vercel.app/team',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6,
    },
    {
      url: 'https://iynalwsd.vercel.app/events/workshops',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.4,
    },
    {
      url: 'https://iynalwsd.vercel.app/events/competitions',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.4,
    },
    {
      url: 'https://iynalwsd.vercel.app/events/fundraisers',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.4,
    },
    {
      url: 'https://iynalwsd.vercel.app/aboutus',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    }
  ]
}