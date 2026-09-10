import React from 'react';

const FAQIllustration = ({ className = "" }) => {
  return (
    <div className={`relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white group ${className}`}>
      {/* Real High-Resolution Logistics Image */}
      <div className="relative h-[250px] sm:h-[340px] md:h-[420px] w-full overflow-hidden bg-navy-950">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
          alt="Logistics FAQs Support"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200';
          }}
        />

        {/* Navy Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/30 to-transparent"></div>

        {/* Bottom Floating Glass Badge */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 bg-navy-900/90 backdrop-blur-md border border-gold-500/40 rounded-xl p-3 sm:p-5 shadow-lg flex items-center justify-between">
          <div>
            <span className="text-[9px] sm:text-[11px] font-sans font-bold tracking-widest text-gold-400 uppercase">
              Support & Helpdesk
            </span>
            <h4 className="font-serif text-sm sm:text-lg font-bold text-white mt-0.5 leading-snug">
              Got Questions? We Have Answers.
            </h4>
            <p className="text-[10px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1 leading-tight line-clamp-1 sm:line-clamp-none">
              Real-time assistance for your cargo & courier shipments
            </p>
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold-400/20 border border-gold-400/50 flex items-center justify-center flex-shrink-0 ml-2.5 sm:ml-3">
            <span className="font-serif font-bold text-gold-400 text-base sm:text-lg">?</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQIllustration;

