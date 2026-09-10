import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Plane, Package, Train, Warehouse, CheckCircle2, ArrowDownRight } from 'lucide-react';
import ServiceDetail from '../components/sections/ServiceDetail';
import { SERVICES_DETAILED, IMAGES } from '../constants/data';

const SERVICE_SHORTCUTS = [
  { id: 'domestic', label: 'Domestic Logistics', icon: Truck },
  { id: 'international', label: 'International Logistics', icon: Plane },
  { id: 'ptl-ftl', label: 'PTL & FTL', icon: Package },
  { id: 'rail', label: 'Rail Logistics', icon: Train },
  { id: 'warehousing', label: 'Warehousing', icon: Warehouse },
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      {/* 1. Services Hero Banner - Premium Logistics Port Background with Deep Navy Gradient */}
      <section className="relative w-full flex items-center overflow-hidden bg-navy-950 py-14 sm:py-20 md:py-24">
        {/* Background Image with Cinematic Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-[position:center_right] bg-no-repeat opacity-45"
          style={{
            backgroundImage: `url(${IMAGES.airplaneServicesHero || 'https://images.unsplash.com/photo-1542296372-67429960e6a1?auto=format&fit=crop&q=80&w=2000'})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#040d1c] via-[#081935]/95 md:via-[#081935]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#040d1c] via-transparent to-black/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Subtitle & Quick Navigation */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-gold-400 mb-4 sm:mb-6 tracking-tight drop-shadow"
              >
                Our Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="font-sans text-sm sm:text-base md:text-xl text-slate-100 font-normal leading-relaxed max-w-2xl mb-6 sm:mb-8 drop-shadow"
              >
                From pan-India ground logistics across 19,000+ pincodes and day-definite air cargo to PTL/FTL freight, rail logistics, and warehousing — we streamline your entire supply chain with total reliability.
              </motion.p>

              {/* Service Jump Anchor Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-2 sm:gap-3"
              >
                {SERVICE_SHORTCUTS.map((sc) => {
                  const Icon = sc.icon;
                  return (
                    <a
                      key={sc.id}
                      href={`#${sc.id}`}
                      className="bg-navy-900/80 hover:bg-gold-500 hover:text-navy-950 border border-gold-500/40 text-slate-200 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-serif font-semibold transition-all duration-200 flex items-center space-x-1.5 sm:space-x-2 backdrop-blur-sm shadow-sm"
                    >
                      <Icon size={14} className="text-gold-400 group-hover:text-navy-950" />
                      <span>{sc.label}</span>
                      <ArrowDownRight size={13} className="opacity-60" />
                    </a>
                  );
                })}
              </motion.div>
            </div>

            {/* Right Column: Premium Glassmorphism Capability Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 shadow-2xl text-white max-w-md w-full"
              >
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-gold-400 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-white/15">
                  Logistics Capabilities
                </h3>

                <ul className="space-y-4 font-sans text-sm sm:text-base">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-100">
                      <strong className="text-white font-semibold">19,000+ Pincodes:</strong> Standard Premium day-definite surface cargo.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-100">
                      <strong className="text-white font-semibold">Day-Definite Air Express:</strong> Next-day & 2nd-day milk run deliveries.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-100">
                      <strong className="text-white font-semibold">Multi-Modal Freight:</strong> Part-truck (PTL), dedicated full-truck (FTL) & Rail.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-100">
                      <strong className="text-white font-semibold">Live Milestone Tracking:</strong> End-to-end visibility at every transit checkpoint.
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Detailed Services Sections (Alternating Left/Right) */}
      <div className="divide-y divide-slate-100">
        {SERVICES_DETAILED.map((service) => (
          <ServiceDetail key={service.id} service={service} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
