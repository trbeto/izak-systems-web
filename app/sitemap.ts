import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // 🔥 Le quitamos la diagonal al final del enlace
  const baseUrl = "https://izak-systems-web.vercel.app"; 

  return [
    {
      url: `${baseUrl}`, // <-- También le quitamos la diagonal aquí para la de inicio
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1, 
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9, 
    },
  ]
}