import React from 'react';
import { motion } from 'framer-motion';
import { TRUSTED_PARTNERS } from '../../constants/data';

const TrustedBy = () => {
  // Split the 19 partners into two distinct rows for a rich dual-speed multi-lane carousel
  const half = Math.ceil(TRUSTED_PARTNERS.length / 2);
  const row1 = TRUSTED_PARTNERS.slice(0, half);
  const row2 = TRUSTED_PARTNERS.slice(half);

  // Duplicate arrays to create seamless infinite loops
  const marqueeList1 = [...row1, ...row1, ...row1, ...row1];
  const marqueeList2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Title with Gold Underline */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 inline-block"
          >
            <span className="relative inline-block pb-2">
              Trusted By
              <span className="absolute bottom-0 left-0 w-full h-[3.5px] bg-gold-500 rounded-full"></span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-serif text-slate-600 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Empowering supply chains and corporate gifting for leading enterprises across India
          </motion.p>
        </div>
      </div>

      {/* Infinite Carousel Slider Wrapper with Left & Right Gradient Shadows */}
      <div className="relative w-full marquee-container space-y-3 sm:space-y-5">
        {/* Left & Right Fade Masks for Smooth Infinite Flow */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        {/* Carousel Track 1 - Scrolls Left */}
        <div className="flex overflow-hidden py-1">
          <div className="animate-marquee-left flex items-center gap-3 sm:gap-6">
            {marqueeList1.map((partner, idx) => (
              <div
                key={`row1-${idx}-${partner}`}
                className="bg-[#081935] hover:bg-[#0c2247] border border-gold-500/30 hover:border-gold-500 text-white py-2.5 px-4 sm:py-3.5 sm:px-8 rounded-xl shadow-md flex items-center space-x-2.5 sm:space-x-3 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-default flex-shrink-0 group"
              >
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gold-400 group-hover:scale-125 transition-transform flex-shrink-0"></span>
                <span className="font-serif font-semibold text-xs sm:text-base md:text-lg text-slate-100 group-hover:text-gold-300 transition-colors whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Track 2 - Scrolls Right */}
        <div className="flex overflow-hidden py-1">
          <div className="animate-marquee-right flex items-center gap-3 sm:gap-6">
            {marqueeList2.map((partner, idx) => (
              <div
                key={`row2-${idx}-${partner}`}
                className="bg-[#081935] hover:bg-[#0c2247] border border-gold-500/30 hover:border-gold-500 text-white py-2.5 px-4 sm:py-3.5 sm:px-8 rounded-xl shadow-md flex items-center space-x-2.5 sm:space-x-3 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-default flex-shrink-0 group"
              >
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gold-400 group-hover:scale-125 transition-transform flex-shrink-0"></span>
                <span className="font-serif font-semibold text-xs sm:text-base md:text-lg text-slate-100 group-hover:text-gold-300 transition-colors whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
