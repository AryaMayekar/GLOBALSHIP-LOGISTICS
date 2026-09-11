import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Award } from 'lucide-react';
import { COMPANY_PROFILE } from '../constants/data';
import TrustedBy from '../components/sections/TrustedBy';
import CTASection from '../components/sections/CTASection';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen"
    >
      {/* 1. Hero Header Banner */}
      <section className="relative bg-[#081935] text-white py-14 sm:py-20 md:py-24 overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Tagline Pill */}
            <div className="inline-flex items-center space-x-2 bg-navy-900/90 border border-gold-500/60 px-3.5 py-1 rounded-full mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-gold-400"></span>
              <span className="text-xs sm:text-sm font-serif font-semibold tracking-wider text-gold-300 uppercase">
                {COMPANY_PROFILE.tagline}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-gold-400 mb-4 sm:mb-6 leading-tight">
              About GlobalShip Logistics
            </h1>
            <p className="font-sans text-sm sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal">
              A united network of distributors, manufacturers, and logistics partners delivering a one-stop solution for corporate gifting, custom packaging, and comprehensive multi-modal supply chains.
            </p>
          </div>
        </div>

        {/* Subtle Decorative Geometry */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
          <div className="w-96 h-96 rounded-full border-[20px] border-gold-400"></div>
        </div>
      </section>

      {/* 2. Key Pillars: Vision, Mission, Values */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">
              <span className="relative inline-block pb-1.5 sm:pb-2">
                Our Foundation
                <span className="absolute bottom-0 left-0 w-full h-[3.5px] bg-gold-500 rounded-full"></span>
              </span>
            </h2>
            <p className="mt-2 sm:mt-3 text-slate-600 font-sans text-sm sm:text-base">
              Guided by a commitment to reliability, disruptive technology, and uncompromising service standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-gold-500 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-2xl bg-[#081935] flex items-center justify-center text-gold-400">
                  <Target size={24} className="sm:w-7 sm:h-7" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-900">Our Vision</h3>
              </div>
              <p className="text-slate-700 font-sans text-sm sm:text-base leading-relaxed flex-grow">
                {COMPANY_PROFILE.vision}
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-[#081935] flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-2xl bg-[#081935] flex items-center justify-center text-gold-400">
                  <Compass size={24} className="sm:w-7 sm:h-7" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-900">Our Mission</h3>
              </div>
              <p className="text-slate-700 font-sans text-sm sm:text-base leading-relaxed flex-grow">
                {COMPANY_PROFILE.mission}
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-gold-500 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-2xl bg-[#081935] flex items-center justify-center text-gold-400">
                  <Award size={24} className="sm:w-7 sm:h-7" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-900">Our Values</h3>
              </div>
              <p className="text-slate-700 font-sans text-sm sm:text-base leading-relaxed flex-grow">
                {COMPANY_PROFILE.values}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Scale & Network Numbers */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#081935] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold text-gold-400">
              India-Wide Network & Scale
            </h2>
            <p className="text-slate-200 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg font-sans">
              Delivering speed, precision, and predictability to empower your commercial operations.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
            {COMPANY_PROFILE.stats.map((st, idx) => (
              <motion.div
                key={st.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#0c2247] p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gold-500/30 text-center"
              >
                <div className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-gold-400 mb-1 sm:mb-2">
                  {st.value}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-300 font-bold mb-1">
                  {st.suffix}
                </div>
                <div className="text-slate-200 text-xs sm:text-sm font-sans">
                  {st.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Trusted By Infinite Slider */}
      <TrustedBy />

      {/* 5. CTA */}
      <CTASection />
    </motion.div>
  );
};

export default About;
