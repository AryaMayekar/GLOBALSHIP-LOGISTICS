import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.7, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          aria-label="Scroll to top of page"
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#081935] hover:bg-gold-400 text-gold-400 hover:text-navy-950 border-2 border-gold-400/80 hover:border-gold-400 shadow-xl hover:shadow-2xl hover:shadow-gold-500/30 active:scale-90 flex items-center justify-center transition-all duration-300 group cursor-pointer backdrop-blur-sm"
        >
          <ChevronUp
            size={22}
            className="group-hover:-translate-y-0.5 transition-transform duration-200 stroke-[2.5]"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
