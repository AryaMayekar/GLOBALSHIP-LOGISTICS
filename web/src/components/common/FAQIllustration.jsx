import React from 'react';
import { IMAGES } from '../../constants/data';

const FAQIllustration = ({ className = "" }) => {
  return (
    <div className={`relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white group ${className}`}>
      {/* Real High-Resolution Logistics Image */}
      <div className="relative h-[250px] sm:h-[340px] md:h-[420px] w-full overflow-hidden bg-navy-950">
        <img
          src={IMAGES.faqSupport}
          alt="Logistics FAQs Support"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            e.target.src = IMAGES.helpSupport;
          }}
        />

        {/* Navy Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/30 to-transparent"></div>

        {/* Bottom Floating Glass Badge */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 bg-navy-900/90 backdrop-blur-md border border-gold-500/40 rounded-xl p-3 sm:p-5 shadow-lg flex items-center justify-between">
          <div>
            <h4 className="font-serif text-sm sm:text-lg font-bold text-gold-400 leading-snug">
              Answers to Common Questions
            </h4>
            <p className="text-[10px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1 leading-tight line-clamp-1 sm:line-clamp-none">
              Find helpful information about shipments, deliveries, and support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQIllustration;

