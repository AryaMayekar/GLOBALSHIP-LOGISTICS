import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#081935] text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Uppercase Subtitle */}
          <span className="text-[11px] sm:text-sm font-sans font-bold tracking-[0.25em] text-slate-200 uppercase mb-3 sm:mb-4">
            LET'S MOVE FORWARD
          </span>

          {/* Gold Serif Heading */}
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-gold-400 mb-3 sm:mb-5 leading-tight">
            Have a Logistics Requirement?
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Talk to our team about your domestic, international, B2B, or supply chain requirements.
          </p>

          {/* Gold Button */}
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-3.5 rounded-xl bg-gold-400 hover:bg-gold-500 text-navy-950 font-serif font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center text-center"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
