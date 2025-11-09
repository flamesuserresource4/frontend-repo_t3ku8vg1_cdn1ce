import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import PropertyListing from './components/PropertyListing';
import About from './components/About';
import Facilities from './components/Facilities';
import Contact from './components/Contact';
import { ScrollToTop, SEOHead } from './components/Extras';

function App() {
  return (
    <div className="font-sans text-[#1E3568]">
      <SEOHead />
      <Header />
      <main>
        <Hero />
        <PropertyListing />
        <About />
        <Facilities />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;
