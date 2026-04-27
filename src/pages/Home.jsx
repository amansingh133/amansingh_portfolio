import { motion } from 'framer-motion';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Experience from '../components/Experience.jsx';
import FeaturedProjects from '../components/FeaturedProjects.jsx';
import ContactSection from '../components/ContactSection.jsx';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit:    { opacity: 0, transition: { duration: 0.25 } },
};

export default function Home() {
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <ContactSection />
    </motion.main>
  );
}
