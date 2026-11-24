import Header from '@/components/layout/Header/Header';
import Hero from '@/components/sections/home/Hero/Hero';
import About from '@/components/sections/home/About/About';
import Expertise from '@/components/sections/home/Expertise/Expertise';
import Experience from '@/components/sections/home/Experience/Experience';
import Projects from '@/components/sections/home/Projects/Projects';
import Skills from '@/components/sections/home/Skills/Skills';
import Approach from '@/components/sections/home/Approach/Approach';
import Credentials from '@/components/sections/home/Credentials/Credentials';
import Contact from '@/components/sections/home/Contact/Contact';
import Footer from '@/components/layout/Footer/Footer';
import { seo, siteUrl } from '@/data/seo';
import { site } from '@/data/site';

const profile = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: `${siteUrl}/`,
  mainEntity: {
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    description: seo.description,
    url: `${siteUrl}/`,
    sameAs: Object.values(site.social),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profile).replace(/</g, '\\u003c') }}
      />
      <a className="skip-link" href="#main">
        Перейти к содержимому
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Skills />
        <Credentials />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
