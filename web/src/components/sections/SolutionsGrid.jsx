import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Gift, Network, Boxes } from 'lucide-react';
import { SOLUTIONS } from '../../constants/data';

const getSolutionIcon = (idx) => {
  switch (idx) {
    case 0:
      return <Truck className="w-6 h-6 text-gold-400" />;
    case 1:
      return <Gift className="w-6 h-6 text-gold-400" />;
    case 2:
      return <Network className="w-6 h-6 text-gold-400" />;
    default:
      return <Boxes className="w-6 h-6 text-gold-400" />;
  }
};

const SolutionsGrid = () => {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with exact Gold Underline under "Your Business" */}
        <div className="mb-8 sm:mb-14 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold text-navy-900 leading-tight"
          >
            Logistics Solutions Built for <br />
            <span className="relative inline-block pb-1.5">
              Your Business
              <span className="absolute bottom-0 left-0 w-full h-[3.5px] bg-gold-500 rounded-full"></span>
            </span>
          </motion.h2>
        </div>

        {/* 3 Soft Gray-Blue Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SOLUTIONS.map((sol, idx) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="bg-[#ECEFF3] p-6 sm:p-8 md:p-10 rounded-2xl transition-all duration-300 flex flex-col justify-start group hover:shadow-lg border border-slate-100"
            >
              {/* Distinct Service Icon Badge */}
              <div className="flex items-center space-x-3.5 sm:space-x-4 mb-4 sm:mb-6">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#081935] flex items-center justify-center shadow-md flex-shrink-0 border border-gold-500/30 group-hover:border-gold-500 transition-colors">
                  {getSolutionIcon(idx)}
                </div>
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-navy-900">
                  {sol.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-sans font-normal">
                {sol.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionsGrid;
