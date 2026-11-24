import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { seo, siteUrl } from '@/data/seo';
import { site } from '@/data/site';
import './globals.scss';

const plex = localFont({ src: './fonts/IBMPlexSans-Variable.ttf', variable: '--font-plex', weight: '100 700', display: 'swap' });
const lora = localFont({ src: [{ path: './fonts/Lora-Variable.ttf', style: 'normal', weight: '400 700' }, { path: './fonts/Lora-Italic-Variable.ttf', style: 'italic', weight: '400 700' }], variable: '--font-lora', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: '/',
    siteName: site.name,
    title: seo.title,
    description: seo.description,
    images: [{ url: seo.image, width: 1200, height: 630, alt: `${site.name} — профессиональное портфолио` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: [seo.image],
  },
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
