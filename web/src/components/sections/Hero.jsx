import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../constants/data';

const Hero = () => {
  return (
    <section className="relative min-h-[560px] sm:min-h-[620px] md:min-h-[700px] w-full flex items-center overflow-hidden bg-navy-950">
      {/* Sunset Logistics Port & Highway Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-[position:85%_center] md:bg-[position:right_center] bg-no-repeat"
        style={{
          backgroundImage: `url(${IMAGES.heroBg})`,
        }}
      >
        {/* Left Dark Navy Gradient for crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040d1c] via-[#081935]/95 md:via-[#081935]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#040d1c] via-transparent to-black/20"></div>
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24 w-full">
        <div className="max-w-2xl text-left flex flex-col items-start">

          {/* Gold Serif Headline */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.18] text-gold-400 mb-4 sm:mb-6 drop-shadow-lg text-left"
          >
            Moving Business <br />
            <span className="text-gold-400">Beyond Boundaries</span>
          </motion.h1>

          {/* Subtitle with Pitch Deck Overview */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-sm sm:text-base md:text-lg text-slate-100 font-normal leading-relaxed mb-6 sm:mb-8 max-w-xl text-left drop-shadow"
          >
            From pan-India B2B surface delivery serving 19,000+ pincodes and day-definite air cargo to corporate gifting and end-to-end supply chain management — GlobalShip delivers reliability.
          </motion.p>

          {/* Action Buttons: Responsive Full-Width on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-5 w-full sm:w-auto mb-8 sm:mb-10"
          >
            <Link
              to="/track"
              className="px-6 sm:px-8 py-3.5 rounded-xl bg-navy-900/90 hover:bg-navy-900 border-2 border-gold-500 text-gold-400 font-serif font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg text-center"
            >
              Track Shipment
            </Link>
            <Link
              to="/contact"
              className="px-6 sm:px-8 py-3.5 rounded-xl bg-gold-400 hover:bg-gold-500 text-navy-950 font-serif font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg text-center"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Mini Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-2 sm:gap-6 pt-4 border-t border-slate-700/60 w-full text-center sm:text-left"
          >
            <div>
              <div className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-gold-400">19,000+</div>
              <div className="text-[10px] sm:text-xs text-slate-300 font-sans leading-tight mt-0.5">Surface Pincodes</div>
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-gold-400">2,000+</div>
              <div className="text-[10px] sm:text-xs text-slate-300 font-sans leading-tight mt-0.5">Air Pincodes</div>
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-gold-400">100%</div>
              <div className="text-[10px] sm:text-xs text-slate-300 font-sans leading-tight mt-0.5">Milestone Tracking</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
