import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES_PREVIEW } from '../../constants/data';
import PtlFtlDiagram from '../common/PtlFtlDiagram';

const ServicesPreview = () => {
  const topRow = SERVICES_PREVIEW.slice(0, 3);
  const bottomRow = SERVICES_PREVIEW.slice(3, 5);

  const renderCard = (service, idx) => (
    <Link
      key={service.id}
      to={service.path}
      className="block group"
    >
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="bg-[#ECEFF3] rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between transition-all duration-300"
      >
      {/* Top Image or Graphic Area */}
      <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-200">
        {service.isGraphic ? (
          <div className="w-full h-full p-2 flex items-center justify-center bg-[#F4F7FB]">
            <PtlFtlDiagram className="scale-95 sm:scale-90" />
          </div>
        ) : (
          <img
            src={service.image}
            alt={`${service.title} - GlobalShip Logistics`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/logo_gsl.png';
            }}
          />
        )}

        {/* Centered White Serif Badge Overlay */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none p-3 sm:p-4">
          <div className="bg-white/95 backdrop-blur-sm px-4 py-1.5 sm:px-6 sm:py-2 rounded-xl shadow-md border border-white/60">
            <h3 className="font-serif text-base sm:text-xl md:text-2xl font-bold text-navy-900 text-center tracking-wide">
              {service.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Card Content & Action Link */}
      <div className="p-5 sm:p-7 flex flex-col justify-between flex-grow">
        <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 font-normal">
          {service.description}
        </p>

        <div className="font-serif font-bold text-navy-900 group-hover:text-gold-600 transition-colors inline-flex items-center text-sm sm:text-base self-start">
          <span>Know more</span>
          <span className="ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-200">→</span>
        </div>
      </div>
      </motion.div>
    </Link>
  );

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-[#081935] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Gold Underline */}
        <div className="mb-8 sm:mb-16 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            <span className="relative inline-block pb-1.5">
              Moving More Than Cargo
              <span className="absolute bottom-0 left-0 w-full h-[3.5px] bg-gold-500 rounded-full"></span>
            </span>
          </motion.h2>
        </div>

        {/* 5 Cards Layout: Row 1 (3 items) & Row 2 (2 items centered) */}
        <div className="space-y-6 sm:space-y-8">
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {topRow.map((service, idx) => renderCard(service, idx))}
          </div>

          {/* Bottom Row: 2 Cards Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {bottomRow.map((service, idx) => renderCard(service, idx + 3))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;
