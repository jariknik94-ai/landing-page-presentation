import Header from "@/components/layout/Header/Header";
import Hero from "@/components/sections/home/Hero/Hero";
import About from "@/components/sections/home/About/About";
import Expertise from "@/components/sections/home/Expertise/Expertise";
import Experience from "@/components/sections/home/Experience/Experience";
import Projects from "@/components/sections/home/Projects/Projects";
import Approach from "@/components/sections/home/Approach/Approach";
import Credentials from "@/components/sections/home/Credentials/Credentials";
import Contact from "@/components/sections/home/Contact/Contact";
import Footer from "@/components/layout/Footer/Footer";

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Перейти к содержимому</a>
    <Header />
    <main id="main">
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <Approach />
      <Credentials />
      <Contact />
    </main>
    <Footer />
  </>;
}
