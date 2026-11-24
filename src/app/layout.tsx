import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';

const plex = localFont({ src: './fonts/IBMPlexSans-Variable.ttf', variable: '--font-plex', weight: '100 700', display: 'swap' });
const lora = localFont({ src: [{ path: './fonts/Lora-Variable.ttf', style: 'normal', weight: '400 700' }, { path: './fonts/Lora-Italic-Variable.ttf', style: 'italic', weight: '400 700' }], variable: '--font-lora', display: 'swap' });

export const metadata: Metadata = {
  title: 'Владимир Скворцов — системный аналитик, архитектор решений и эксперт по кибербезопасности',
  description: 'Системный анализ, архитектура информационных систем, интеграции и кибербезопасность.',
  icons: {
    icon: '/assets/logo.svg',
    apple: [
      { url: '/icons/apple-touch-icon-120.png', sizes: '120x120', type: 'image/png' },
      { url: '/icons/apple-touch-icon-152.png', sizes: '152x152', type: 'image/png' },
      { url: '/icons/apple-touch-icon-167.png', sizes: '167x167', type: 'image/png' },
      { url: '/icons/apple-touch-icon-180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" className={`${plex.variable} ${lora.variable}`}><body>{children}</body></html>;
}
