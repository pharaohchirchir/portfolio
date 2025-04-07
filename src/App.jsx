import React, { useRef, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact'; // Ensure Contact is wrapped with React.forwardRef
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      console.log('Scroll triggered!');
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header contactRef={contactRef} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Blog />
      </main>
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
};

export default App;
