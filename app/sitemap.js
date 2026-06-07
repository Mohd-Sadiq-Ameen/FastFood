import { menuItems } from '@/data/menuData'

export default function sitemap() {
  const base = 'https://greenbite.in'

  const staticRoutes = [
    { url: base,          lastModified: new Date(), changeFrequency: 'weekly',  priority: 1 },
    { url: `${base}/menu`,  lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]

  const itemRoutes = menuItems.map((item) => ({
    url: `${base}/menu/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...itemRoutes]
}
