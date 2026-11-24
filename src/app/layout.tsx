import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';

const plex = localFont({ src: './fonts/IBMPlexSans-Variable.ttf', variable: '--font-plex', weight: '100 700', display: 'swap' });
const lora = localFont({ src: [{ path: './fonts/Lora-Variable.ttf', style: 'normal', weight: '400 700' }, { path: './fonts/Lora-Italic-Variable.ttf', style: 'italic', weight: '400 700' }], variable: '--font-lora', display: 'swap' });

export const metadata: Metadata = {
  title: 'Владимир Скворцов — системный аналитик, архитектор решений и эксперт по кибербезопасности',
  description: 'Системный анализ, архитектура информационных систем, интеграции и кибербезопасность.',
  icons: { icon: '/assets/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" className={`${plex.variable} ${lora.variable}`}><body>{children}</body></html>;
}
