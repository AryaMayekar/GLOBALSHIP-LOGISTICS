import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import SolutionsGrid from '../components/sections/SolutionsGrid';
import ServicesPreview from '../components/sections/ServicesPreview';
import TrustedBy from '../components/sections/TrustedBy';
import CTASection from '../components/sections/CTASection';
import FAQ from '../components/sections/FAQ';

const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <SolutionsGrid />
      <ServicesPreview />
      <TrustedBy />
      <CTASection />
      <FAQ />
    </motion.div>
  );
};

export default Landing;
