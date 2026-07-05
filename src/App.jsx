import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import HowItWorks from './components/sections/HowItWorks.jsx';
import WhatWeHelpWith from './components/sections/WhatWeHelpWith.jsx';
import Pricing from './components/sections/Pricing.jsx';
import Contact from './components/sections/Contact.jsx';
import AuthModal from './components/modals/AuthModal.jsx';
import PaymentModal from './components/modals/PaymentModal.jsx';
import OnboardingModal from './components/modals/OnboardingModal.jsx';

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPaymentOpen, setPaymentOpen] = useState(false);
  const [isOnboardingOpen, setOnboardingOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const authData = localStorage.getItem('juvelle_auth');
    if (authData) {
      try {
        const parsed = JSON.parse(authData);
        // Check if auth is still valid (e.g., within 30 days)
        const thirtyDays = 30 * 24 * 60 * 60 * 1000;
        if (Date.now() - parsed.timestamp < thirtyDays) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('juvelle_auth');
        }
      } catch (e) {
        localStorage.removeItem('juvelle_auth');
      }
    }
  }, []);

  const handlePayment = (plan) => {
    setSelectedPlan(plan);
    if (isAuthenticated) {
      setPaymentOpen(true);
    } else {
      setModalOpen(true);
    }
  };

  const handleBookConsultation = () => {
    if (isAuthenticated) {
      setOnboardingOpen(true);
    } else {
      setModalOpen(true);
    }
  };

  const handleAuthSuccess = () => {
    setModalOpen(false);
    setIsAuthenticated(true);
    const plan = selectedPlan;
    setSelectedPlan(null); // Clear plan after auth
    if (plan) {
      setPaymentOpen(true);
      setSelectedPlan(plan); // Restore plan for payment modal
    } else {
      setOnboardingOpen(true);
    }
  };

  const handlePaymentSuccess = () => {
    setPaymentOpen(false);
    setSelectedPlan(null); // Clear plan after payment
    setOnboardingOpen(true);
  };

  return (
    <>
      <Navbar onBookConsultation={() => setModalOpen(true)} />
      <main>
        <Hero onBookConsultation={() => setModalOpen(true)} />
        <About />
        <HowItWorks />
        <WhatWeHelpWith onBookConsultation={() => setModalOpen(true)} />
        <Pricing onBookConsultation={() => setModalOpen(true)} onPayment={handlePayment} />
        <Contact />
      </main>
      <Footer />
      <AuthModal open={isModalOpen} onClose={() => setModalOpen(false)} onAuthSuccess={handleAuthSuccess} />
      <PaymentModal open={isPaymentOpen} onClose={() => setPaymentOpen(false)} plan={selectedPlan} onPaymentSuccess={handlePaymentSuccess} />
      <OnboardingModal open={isOnboardingOpen} onClose={() => setOnboardingOpen(false)} />
    </>
  );
}
