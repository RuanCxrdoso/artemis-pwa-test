import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'iTech Artemis - Gestão e Controle de Estoque',
    short_name: 'Artemis - iTech',
    description: 'Gestão e controle de estoque',
    start_url: '/',
    display: 'standalone',
    background_color: '#a0a0a0',
    theme_color: '#1d4ed8',
    icons: [
      {
        src: '/itech_artemis.jpg',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/itech_artemis.jpg',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}