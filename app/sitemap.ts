import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // ⚠️ Cambia esto por tu dominio real cuando lo tengas
  const baseUrl = "https://izak-systems-web.vercel.app/"; 

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1, // La página de inicio es la más importante (1.0)
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
      priority: 0.9, // Muy importante porque aquí entran los prospectos
    },
  ]
}