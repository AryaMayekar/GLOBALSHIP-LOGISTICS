import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FAQIllustration from '../common/FAQIllustration';
import { FAQ_DATA } from '../../constants/data';

const FAQ = () => {
  // First item open by default as shown in landing.png
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading + Graphic Illustration */}
          <div className="lg:col-span-5 flex flex-col space-y-6 sm:space-y-8">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold text-navy-900 leading-tight"
              >
                Frequently Asked <br />
                <span className="relative inline-block pb-1.5">
                  Questions(FAQ's)
                  <span className="absolute bottom-0 left-0 w-full h-[3.5px] bg-gold-500 rounded-full"></span>
                </span>
              </motion.h2>
            </div>

            {/* Illustration Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FAQIllustration />
            </motion.div>
          </div>

          {/* Right Column: Accordion with Blue Side Bar & Gold Highlight on Opened FAQ */}
          <div className="lg:col-span-7 py-1 sm:py-2 space-y-3 sm:space-y-5">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`transition-all duration-300 border-l-[3.5px] sm:border-l-[4px] pl-4 sm:pl-8 pb-3.5 sm:pb-5 border-b border-slate-100 last:border-b-0 ${
                    isOpen ? 'border-l-gold-500' : 'border-l-[#081935]'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex justify-between items-start text-left group focus:outline-none py-1"
                  >
                    <span
                      className={`font-serif text-sm sm:text-base md:text-lg font-bold transition-colors pr-3 sm:pr-4 ${
                        isOpen ? 'text-gold-600' : 'text-navy-900 group-hover:text-gold-600'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-sans font-bold flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                        isOpen ? 'text-gold-500' : 'text-navy-900 group-hover:text-gold-500'
                      }`}
                    >
                      {isOpen ? '▲' : '▼'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-sans font-normal">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;
