import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTopButton from './components/common/ScrollToTopButton';
import Landing from './pages/Landing';
import Services from './pages/Services';
import Track from './pages/Track';
import About from './pages/About';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';

// Scroll to top or anchor on route change
const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const scrollToTarget = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      // Immediate attempt and animation-safe delayed attempt
      scrollToTarget();
      const timer = setTimeout(scrollToTarget, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// Generic Page Shell for Policy / Terms
const PolicyPage = ({ title, subtitle, content }) => (
  <div className="py-24 bg-surface-100 min-h-[60vh] flex items-center justify-center">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-900 mb-4">{title}</h1>
      <p className="text-slate-600 text-lg leading-relaxed mb-8">{subtitle}</p>
      <div className="p-8 bg-white rounded-2xl shadow-md border border-slate-200 text-left">
        <p className="font-serif text-navy-900 font-bold text-lg mb-3">GlobalShip Logistics Service Terms</p>
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          All shipments booked under GlobalShip Logistics are governed by standard multimodal cargo guidelines, carrier schedules, and pincode-specific delivery windows (19,000+ surface pincodes and 2,000+ / 3,000+ air express network).
        </p>
        <p className="text-xs text-slate-500">
          Head Office: Shop No 25, B wing, Harias Dream Park, Near Indian Bank, Hatkesh Udyog Nagar
        </p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollHandler />
      <div className="min-h-screen flex flex-col bg-white text-slate-900 relative">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/services" element={<Services />} />
              <Route path="/track" element={<Track />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PolicyPage title="Privacy Policy" subtitle="We are committed to protecting your business and cargo shipment data." />} />
              <Route path="/terms" element={<PolicyPage title="Terms & Conditions" subtitle="Standard operating terms and service commitments for GlobalShip logistics." />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
