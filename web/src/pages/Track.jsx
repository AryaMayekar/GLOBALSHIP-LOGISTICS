import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertCircle, PhoneCall } from 'lucide-react';
import { IMAGES } from '../constants/data';

const TABS = [
  { id: 'mobile', label: 'Mobile', placeholder: 'Enter Your mobile number', buttonText: 'Get Otp & Track' },
  { id: 'aws', label: 'AWS', placeholder: 'Enter AWB / Air Waybill number', buttonText: 'Track Shipment' },
  { id: 'order_id', label: 'Order Id', placeholder: 'Enter your Order ID', buttonText: 'Track Shipment' },
  { id: 'lrn', label: 'LRN', placeholder: 'Enter Logistics Reference Number (LRN)', buttonText: 'Track Shipment' },
];

const Track = () => {
  const [activeTab, setActiveTab] = useState('mobile');
  const [inputValue, setInputValue] = useState('');
  const [statusMessage, setStatusMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const currentTab = TABS.find((t) => t.id === activeTab) || TABS[0];

  const handleTrack = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setIsLoading(true);
    setStatusMessage(false);
    setTimeout(() => {
      setIsLoading(false);
      setStatusMessage(true);
    }, 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen"
    >
      {/* 1. Hero Tracking Section */}
      <section className="relative w-full flex items-center overflow-hidden bg-navy-950 py-20 md:py-24">
        {/* Background Terminal & Cargo Port */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url(${IMAGES.trackingHeroBg})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-950/80 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading & Subtitle */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gold-400 mb-6 drop-shadow"
              >
                Track Your <br />
                <span className="text-gold-400">Shipment</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="font-sans text-base sm:text-lg text-slate-100 font-normal leading-relaxed max-w-md drop-shadow"
              >
                Enter your mobile number, AWB, or order number to check current consignment status.
              </motion.p>
            </div>

            {/* Right Column: White Interactive Tracking Card */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-9 shadow-2xl border border-white max-w-md w-full"
              >
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 text-center mb-5 sm:mb-6">
                  Track your order
                </h2>

                {/* 4 Segmented Tabs */}
                <div className="grid grid-cols-4 border border-slate-300 rounded-lg overflow-hidden mb-5 sm:mb-6 text-center shadow-sm">
                  {TABS.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => {
                          setActiveTab(tab.id);
                          setInputValue('');
                          setStatusMessage(false);
                        }}
                        className={`py-2 px-1 sm:py-2.5 sm:px-2 text-[11px] sm:text-xs md:text-sm font-serif font-bold transition-colors border-r border-slate-300 last:border-none ${
                          isActive
                            ? 'bg-[#081935] text-white'
                            : 'bg-white text-navy-900 hover:bg-slate-100'
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {/* Input Form */}
                <form onSubmit={handleTrack} className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => {
                        setInputValue(e.target.value);
                        if (statusMessage) setStatusMessage(false);
                      }}
                      placeholder={currentTab.placeholder}
                      required
                      className="w-full border-2 border-slate-300 focus:border-gold-500 focus:ring-0 focus:outline-none rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base font-sans text-navy-900 placeholder:text-slate-400 placeholder:italic transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gold-400 hover:bg-gold-500 active:scale-[0.98] text-navy-950 font-serif font-bold text-sm sm:text-base py-3 sm:py-3.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <span>Verifying...</span>
                    ) : (
                      <span>{currentTab.buttonText}</span>
                    )}
                  </button>
                </form>

                {/* Red Maintenance / Direct Helpline Message */}
                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3.5 sm:p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm font-sans leading-relaxed text-center shadow-sm"
                  >
                    <div className="flex items-center justify-center space-x-1.5 font-bold text-red-700 mb-1">
                      <AlertCircle size={16} />
                      <span>Tracking service is currently unavailable online.</span>
                    </div>
                    <p className="text-red-700">
                      Please contact our support team at{' '}
                      <a
                        href="tel:+919137024187"
                        className="font-bold underline text-red-900 hover:text-red-950 font-serif text-xs sm:text-sm whitespace-nowrap"
                      >
                        +91 91370 24187
                      </a>{' '}
                      or{' '}
                      <a
                        href="tel:+919833889455"
                        className="font-bold underline text-red-900 hover:text-red-950 font-serif text-xs sm:text-sm whitespace-nowrap"
                      >
                        +91 98338 89455
                      </a>{' '}
                      for immediate assistance.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. "Need help with tracking?" Section */}
      <section className="py-14 sm:py-20 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Heading, Text & Action Buttons */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-700 text-xs font-serif font-bold uppercase tracking-wider mb-3 sm:mb-4"
              >
                <span>Support & Assistance</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold text-navy-900 leading-tight mb-4 sm:mb-6"
              >
                Need help with <br />
                <span className="relative inline-block pb-1.5">
                  tracking?
                  <span className="absolute bottom-0 left-0 w-full h-[3.5px] bg-gold-500 rounded-full"></span>
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="font-serif text-slate-700 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-6 sm:mb-8"
              >
                If you have questions about your consignment, delivery timeline, or courier claims, our dedicated support team is ready to assist you.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
              >
                <Link
                  to="/contact"
                  className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gold-400 hover:bg-gold-500 active:scale-95 text-navy-950 font-serif font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg text-center"
                >
                  Contact Us
                </Link>
                <a
                  href="tel:+919137024187"
                  className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-surface-100 hover:bg-surface-200 text-navy-900 font-serif font-bold text-sm sm:text-base transition-all inline-flex items-center justify-center space-x-2 border border-slate-300 text-center"
                >
                  <PhoneCall size={16} className="text-gold-600" />
                  <span>Call Support</span>
                </a>
              </motion.div>
            </div>

            {/* Right Column: 4-Image Seamless Edge Overlapping Singularity Collage */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative p-4 sm:p-6 md:p-8 bg-[#081935] rounded-2xl sm:rounded-3xl shadow-2xl border border-gold-500/30 overflow-hidden max-w-lg md:max-w-xl w-full"
              >
                {/* Center Ambient Gold Radial Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-gold-400/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-10 -right-10 w-28 sm:w-36 h-28 sm:h-36 bg-sky-500/10 rounded-full blur-2xl pointer-events-none"></div>

                {/* 4 Quadrants in Edge Overlapping Matrix */}
                <div className="grid grid-cols-2 relative z-10">
                  {/* Quadrant 1: Top-Left (Overlapping right & down) */}
                  <div className="relative z-10 -mr-2.5 sm:-mr-4 -mb-2.5 sm:-mb-4 overflow-hidden rounded-xl sm:rounded-2xl border-2 border-white/90 shadow-xl group transition-all duration-500 hover:z-40 hover:scale-[1.03] hover:border-gold-400">
                    <img
                      src={IMAGES.helpDelivery}
                      alt="Delivery Handover"
                      className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-108 transition-transform duration-700"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081935]/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                      <span className="text-[9px] sm:text-xs font-serif font-bold text-white bg-navy-950/80 backdrop-blur-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-white/20">
                        Doorstep Delivery
                      </span>
                    </div>
                  </div>

                  {/* Quadrant 2: Top-Right (Elevated, gold border, shifted down) */}
                  <div className="relative z-20 -ml-2.5 sm:-ml-4 translate-y-2.5 sm:translate-y-4 overflow-hidden rounded-xl sm:rounded-2xl border-2 border-gold-400 shadow-2xl group transition-all duration-500 hover:z-40 hover:scale-[1.03] hover:shadow-gold-500/30">
                    <img
                      src={IMAGES.helpSupport}
                      alt="Customer Support"
                      className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-108 transition-transform duration-700"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081935]/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                      <span className="text-[9px] sm:text-xs font-serif font-bold text-gold-300 bg-navy-950/80 backdrop-blur-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-gold-400/40">
                        Live Helpline
                      </span>
                    </div>
                  </div>

                  {/* Quadrant 3: Bottom-Left (Shifted up with gold border) */}
                  <div className="relative z-20 -mr-2.5 sm:-mr-4 -translate-y-2.5 sm:-translate-y-4 overflow-hidden rounded-xl sm:rounded-2xl border-2 border-gold-400 shadow-2xl group transition-all duration-500 hover:z-40 hover:scale-[1.03] hover:shadow-gold-500/30">
                    <img
                      src={IMAGES.helpTrackingMobile}
                      alt="Tracking Shipment"
                      className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-108 transition-transform duration-700"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081935]/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                      <span className="text-[9px] sm:text-xs font-serif font-bold text-gold-300 bg-navy-950/80 backdrop-blur-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-gold-400/40">
                        Consignment Status
                      </span>
                    </div>
                  </div>

                  {/* Quadrant 4: Bottom-Right (Overlapping left & interlocking) */}
                  <div className="relative z-10 -ml-2.5 sm:-ml-4 translate-y-1 overflow-hidden rounded-xl sm:rounded-2xl border-2 border-white/90 shadow-xl group transition-all duration-500 hover:z-40 hover:scale-[1.03] hover:border-gold-400">
                    <img
                      src={IMAGES.helpGlobalNetwork}
                      alt="Global Logistics Network"
                      className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-108 transition-transform duration-700"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081935]/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                      <span className="text-[9px] sm:text-xs font-serif font-bold text-white bg-navy-950/80 backdrop-blur-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-white/20">
                        Pan-India Reach
                      </span>
                    </div>
                  </div>
                </div>

                {/* Central Singularity Nexus Emblem */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing Outer Aura */}
                    <div className="absolute w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gold-400/25 animate-ping opacity-60"></div>
                    
                    {/* Center Luxury Emblem */}
                    <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#081935] border-2 border-gold-400 shadow-2xl p-1 flex flex-col items-center justify-center text-center">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0e2752] to-[#081935] flex flex-col items-center justify-center border border-gold-500/40">
                        <span className="text-[8px] sm:text-[10px] font-sans font-bold tracking-widest text-gold-400 uppercase leading-none">
                          24/7
                        </span>
                        <span className="text-[7px] sm:text-[9px] font-serif font-bold text-white tracking-wide leading-tight mt-0.5">
                          HELP
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Track;
