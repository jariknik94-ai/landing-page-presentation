import { site } from './site';

// Укажите SITE_URL при сборке, если у сайта появится собственный домен.
export const siteUrl = new URL(process.env.SITE_URL || 'https://landing-page-presentation-sandy.vercel.app').origin;

export const seo = {
  title: `${site.name} — системный аналитик, архитектор решений и эксперт по кибербезопасности`,
  description: 'Владимир Скворцов — системный аналитик, архитектор решений и эксперт по кибербезопасности. Опыт, профессиональные навыки и проекты.',
  image: '/assets/og-cover.jpg',
} as const;
