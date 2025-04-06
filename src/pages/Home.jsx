import React from 'react';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
