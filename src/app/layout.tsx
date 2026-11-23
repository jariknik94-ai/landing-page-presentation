import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';

const manrope = localFont({ src: './fonts/Manrope-Variable.ttf', variable: '--font-manrope', weight: '200 800', display: 'swap' });
const lora = localFont({ src: [{ path: './fonts/Lora-Variable.ttf', style: 'normal', weight: '400 700' }, { path: './fonts/Lora-Italic-Variable.ttf', style: 'italic', weight: '400 700' }], variable: '--font-lora', display: 'swap' });

export const metadata: Metadata = {
  title: 'Владимир Скворцов — системный аналитик и архитектор решений',
  description: 'Архитектура информационных систем, интеграции и работа с требованиями.',
  icons: { icon: '/assets/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" className={`${manrope.variable} ${lora.variable}`}><body>{children}</body></html>;
}
