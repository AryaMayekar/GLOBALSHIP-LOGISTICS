import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import PtlFtlDiagram from '../common/PtlFtlDiagram';

const SectionHeaderIcon = ({ type }) => {
  switch (type) {
    case 'box':
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12 flex-shrink-0" fill="none" stroke="#081935" strokeWidth="2.5">
          {/* Gift Box with Ribbon */}
          <rect x="6" y="16" width="36" height="26" rx="3" fill="#F8FAFC" />
          <rect x="4" y="10" width="40" height="8" rx="2" fill="#F8FAFC" />
          <line x1="24" y1="10" x2="24" y2="42" stroke="#D8AE55" strokeWidth="3" />
          <line x1="6" y1="28" x2="42" y2="28" stroke="#D8AE55" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M 24 10 C 20 4, 12 4, 16 10 Z" fill="#D8AE55" />
          <path d="M 24 10 C 28 4, 36 4, 32 10 Z" fill="#D8AE55" />
        </svg>
      );
    case 'plane':
      return (
        <svg viewBox="0 0 64 36" className="w-14 h-8 flex-shrink-0" fill="none" stroke="#081935" strokeWidth="2">
          {/* Detailed Line Airplane */}
          <path d="M 2 18 L 18 18 L 32 6 L 42 6 L 36 18 L 56 18 C 60 18, 62 20, 60 22 C 58 24, 54 24, 46 24 L 32 24 L 24 32 L 18 32 L 22 24 L 2 24 Z" fill="#F8FAFC" />
          <line x1="8" y1="21" x2="28" y2="21" stroke="#D8AE55" strokeWidth="2" />
        </svg>
      );
    case 'warehouse':
      return (
        <svg viewBox="0 0 48 48" className="w-11 h-11 flex-shrink-0" fill="none" stroke="#081935" strokeWidth="2.5">
          {/* Warehouse Building with Shutter */}
          <path d="M 6 20 L 24 8 L 42 20 L 42 42 L 6 42 Z" fill="#F8FAFC" />
          <path d="M 16 42 L 16 26 L 32 26 L 32 42" stroke="#D8AE55" />
          <line x1="16" y1="30" x2="32" y2="30" stroke="#D8AE55" />
          <line x1="16" y1="34" x2="32" y2="34" stroke="#D8AE55" />
          <line x1="16" y1="38" x2="32" y2="38" stroke="#D8AE55" />
        </svg>
      );
    case 'train':
      return (
        <svg viewBox="0 0 54 40" className="w-12 h-9 flex-shrink-0" fill="none" stroke="#081935" strokeWidth="2.5">
          <rect x="6" y="8" width="42" height="24" rx="4" fill="#F8FAFC" />
          <line x1="6" y1="20" x2="48" y2="20" stroke="#D8AE55" />
          <circle cx="16" cy="34" r="3" fill="#081935" />
          <circle cx="38" cy="34" r="3" fill="#081935" />
        </svg>
      );
    case 'truck':
    default:
      return (
        <svg viewBox="0 0 60 36" className="w-14 h-8 flex-shrink-0" fill="none" stroke="#081935" strokeWidth="2">
          {/* Modern Semi Truck Line Art */}
          <rect x="4" y="6" width="36" height="22" rx="2" fill="#F8FAFC" />
          <path d="M 40 14 L 48 14 L 54 20 L 54 28 L 40 28 Z" fill="#F8FAFC" />
          <line x1="8" y1="12" x2="36" y2="12" stroke="#D8AE55" />
          <line x1="8" y1="18" x2="36" y2="18" stroke="#D8AE55" />
          <circle cx="14" cy="28" r="4" fill="#081935" />
          <circle cx="46" cy="28" r="4" fill="#081935" />
        </svg>
      );
  }
};

const ServiceDetail = ({ service }) => {
  const isImageLeft = service.layout === 'image-left';

  return (
    <section id={service.id} className="py-12 sm:py-16 md:py-24 border-b border-slate-100 last:border-none scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col ${
            isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } gap-8 sm:gap-12 lg:gap-16 items-center`}
        >
          {/* Visual / Image Column */}
          <motion.div
            initial={{ opacity: 0, x: isImageLeft ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            {service.isGraphic ? (
              <PtlFtlDiagram className="shadow-xl" />
            ) : (
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-slate-100 group">
                <img
                  src={service.image}
                  alt={`${service.title} - GlobalShip Logistics`}
                  className="w-full h-[250px] sm:h-[350px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/rail_cargo.jpg';
                  }}
                />
              </div>
            )}
          </motion.div>

          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, x: isImageLeft ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            {/* Header Icon + Serif Title */}
            <div className="flex items-center space-x-2.5 sm:space-x-3 mb-2">
              <SectionHeaderIcon type={service.icon} />
              <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold text-navy-900 tracking-tight">
                {service.title}
              </h2>
            </div>

            {/* Subtitle */}
            <p className="font-serif text-base sm:text-lg md:text-xl text-slate-700 font-medium mb-3 sm:mb-6">
              {service.subtitle}
            </p>

            {/* Description Body */}
            <p className="text-slate-700 font-sans font-normal text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              {service.description}
            </p>

            {/* 2x2 Feature Checkmark Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-6">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 sm:space-x-3 text-navy-900 font-sans font-semibold text-xs sm:text-sm md:text-base">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-navy-900 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
