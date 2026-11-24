import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Владимир Скворцов',
    short_name: 'В. Скворцов',
    description: 'Системный анализ, архитектура решений и кибербезопасность.',
    start_url: '/',
    background_color: '#061321',
    theme_color: '#061321',
    icons: [
      { src: '/icons/android-icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/android-icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      {
        src: '/icons/android-icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
