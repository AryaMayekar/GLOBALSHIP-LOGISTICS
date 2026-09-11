import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
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
  const [inputError, setInputError] = useState('');
  const [statusMessage, setStatusMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const currentTab = TABS.find((t) => t.id === activeTab) || TABS[0];

  const validateTrackingValue = (value) => {
    if (!value) {
      return `${currentTab.label} is required.`;
    }

    if (activeTab === 'mobile') {
      if (!isValidPhoneNumber(value)) {
        return 'Phone number is not valid for the selected country.';
      }
    }

    if (activeTab === 'aws' && !/^[a-zA-Z0-9-]+$/.test(value)) {
      return 'AWB number is not valid. Use letters, numbers, or hyphens only.';
    }

    if (activeTab === 'order_id' && !/^[a-zA-Z0-9-]+$/.test(value)) {
      return 'Order ID is not valid. Use letters, numbers, or hyphens only.';
    }

    if (activeTab === 'lrn' && !/^[a-zA-Z0-9-]+$/.test(value)) {
      return 'LRN is not valid. Use letters, numbers, or hyphens only.';
    }

    return '';
  };

  const handleTrack = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();

    const validationError = validateTrackingValue(trimmedValue);
    if (validationError) {
      setInputError(validationError);
      setStatusMessage(false);
      return;
    }

    setInputError('');
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
                          setInputError('');
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
                    {activeTab === 'mobile' ? (
                      <div className={`rounded-lg border-2 bg-white focus-within:border-gold-500 transition-colors ${
                        inputError ? 'border-red-500 focus-within:border-red-600' : 'border-slate-300'
                      }`}>
                        <PhoneInput
                          international
                          defaultCountry="IN"
                          withCountryCallingCode
                          countryCallingCodeEditable={false}
                          value={inputValue || undefined}
                          onChange={(nextPhone) => {
                            setInputValue(nextPhone || '');
                            setInputError(nextPhone ? validateTrackingValue(nextPhone) : '');
                            if (statusMessage) setStatusMessage(false);
                          }}
                          aria-invalid={Boolean(inputError)}
                          aria-describedby={inputError ? 'tracking-input-error' : undefined}
                          className="contact-phone-input min-h-[48px]"
                        />
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => {
                          const nextValue = e.target.value;
                          setInputValue(nextValue);
                          setInputError(
                            nextValue.trim() ? validateTrackingValue(nextValue.trim()) : ''
                          );
                          if (statusMessage) setStatusMessage(false);
                        }}
                        aria-invalid={Boolean(inputError)}
                        aria-describedby={inputError ? 'tracking-input-error' : undefined}
                        placeholder={currentTab.placeholder}
                        required
                        className={`w-full border-2 focus:ring-0 focus:outline-none rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base font-sans text-navy-900 placeholder:text-slate-400 placeholder:italic transition-colors ${
                          inputError
                            ? 'border-red-500 focus:border-red-600'
                            : 'border-slate-300 focus:border-gold-500'
                        }`}
                      />
                    )}
                    {inputError && (
                      <p
                        id="tracking-input-error"
                        role="alert"
                        className="mt-2 text-sm font-semibold text-red-600"
                      >
                        {inputError}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading || !inputValue.trim() || Boolean(inputError)}
                    className="site-button w-full bg-gold-400 hover:bg-gold-500 active:scale-[0.98] text-navy-950 font-serif font-bold text-sm sm:text-base py-3 sm:py-3.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none disabled:hover:bg-slate-300 disabled:hover:translate-y-0"
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
                className="flex w-full justify-center"
              >
                <Link
                  to="/contact"
                  className="site-button w-full max-w-xs px-8 sm:px-10 py-3 sm:py-3.5 rounded-xl bg-gold-400 hover:bg-gold-500 active:scale-95 text-navy-950 font-serif font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg text-center"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Asymmetric logistics image collage */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end w-full lg:pr-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative w-full max-w-lg md:max-w-xl aspect-[1.08] sm:aspect-[1.12]"
              >
                <div className="absolute top-[-4%] right-[7%] bottom-[-5%] left-[7%] rounded-2xl sm:rounded-3xl bg-[#081935] shadow-2xl"></div>

                <div className="absolute inset-0 z-10">
                  {/* Top-left landscape tile */}
                  <div className="absolute top-[4%] left-0 z-20 h-[43%] w-[54%] overflow-hidden rounded-2xl sm:rounded-3xl border-[3px] border-white bg-white shadow-lg group transition-transform duration-500 hover:z-40 hover:scale-[1.03]">
                    <img
                      src={IMAGES.helpDelivery}
                      alt="Delivery Handover"
                      className="h-full w-full object-cover"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800'; }}
                    />
                  </div>

                  {/* Top-right portrait tile */}
                  <div className="absolute top-0 right-[3%] z-10 h-[58%] w-[42%] overflow-hidden rounded-2xl sm:rounded-3xl border-[3px] border-white bg-white shadow-lg group transition-transform duration-500 hover:z-40 hover:scale-[1.03]">
                    <img
                      src={IMAGES.helpSupport}
                      alt="Customer Support"
                      className="h-full w-full object-cover"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'; }}
                    />
                  </div>

                  {/* Bottom-left portrait tile */}
                  <div className="absolute bottom-0 left-0 z-20 h-[51%] w-[41%] overflow-hidden rounded-2xl sm:rounded-3xl border-[3px] border-white bg-white shadow-lg group transition-transform duration-500 hover:z-40 hover:scale-[1.03]">
                    <img
                      src={IMAGES.helpTrackingMobile}
                      alt="Tracking Shipment"
                      className="h-full w-full object-cover"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800'; }}
                    />
                  </div>

                  {/* Bottom-right landscape tile */}
                  <div className="absolute right-[3%] bottom-0 z-20 h-[38%] w-[54%] overflow-hidden rounded-2xl sm:rounded-3xl border-[3px] border-white bg-white shadow-lg group transition-transform duration-500 hover:z-40 hover:scale-[1.03]">
                    <img
                      src={IMAGES.helpGlobalNetwork}
                      alt="Global Logistics Network"
                      className="h-full w-full object-cover"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800'; }}
                    />
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
