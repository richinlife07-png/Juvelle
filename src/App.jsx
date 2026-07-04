import React, { useState } from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import HowItWorks from './components/sections/HowItWorks.jsx';
import WhatWeHelpWith from './components/sections/WhatWeHelpWith.jsx';
import Pricing from './components/sections/Pricing.jsx';
import Contact from './components/sections/Contact.jsx';
import AuthModal from './components/modals/AuthModal.jsx';

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onBookConsultation={() => setModalOpen(true)} />
      <main>
        <Hero onBookConsultation={() => setModalOpen(true)} />
        <About />
        <HowItWorks />
        <WhatWeHelpWith onBookConsultation={() => setModalOpen(true)} />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <AuthModal open={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
