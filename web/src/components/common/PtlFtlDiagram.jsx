import React from 'react';

const PtlFtlDiagram = ({ className = "" }) => {
  return (
    <div className={`w-full bg-[#F4F7FB] rounded-2xl overflow-hidden border border-slate-200 shadow-md ${className}`}>
      {/* Top Navy Header */}
      <div className="bg-[#081935] text-white py-2.5 sm:py-3.5 px-3 sm:px-6 grid grid-cols-2 text-center border-b border-gold-500/30">
        <span className="font-serif font-bold text-sm sm:text-base md:text-lg tracking-wider text-gold-400">
          PTL / LTL
        </span>
        <span className="font-serif font-bold text-sm sm:text-base md:text-lg tracking-wider text-white">
          FTL
        </span>
      </div>

      {/* Truck Comparison Graphics Side by Side */}
      <div className="p-3 sm:p-5 md:p-6 grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 items-center">
        {/* LTL Side */}
        <div className="flex flex-col items-center text-center p-1 sm:p-2 md:p-3">
          <svg viewBox="0 0 240 100" className="w-full max-w-[180px] sm:max-w-[220px] h-auto mb-2" fill="none">
            {/* Cab */}
            <path d="M 20 65 L 20 38 L 40 38 L 52 50 L 58 50 L 58 65 Z" fill="#EBF2FA" stroke="#234C85" strokeWidth="2" />
            <path d="M 38 42 L 50 50 L 38 50 Z" fill="#93C5FD" stroke="#234C85" strokeWidth="1.5" />
            {/* Trailer Outline */}
            <rect x="58" y="24" width="160" height="42" rx="3" fill="#FFFFFF" stroke="#234C85" strokeWidth="2" strokeDasharray="3 3" />
            {/* Multiple small cargo boxes */}
            <rect x="64" y="42" width="22" height="20" rx="1" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1" />
            <rect x="88" y="46" width="18" height="16" rx="1" fill="#60A5FA" stroke="#1D4ED8" strokeWidth="1" />
            <rect x="108" y="38" width="24" height="24" rx="1" fill="#2563EB" stroke="#1D4ED8" strokeWidth="1" />
            <rect x="134" y="44" width="20" height="18" rx="1" fill="#93C5FD" stroke="#1D4ED8" strokeWidth="1" />
            <rect x="64" y="30" width="16" height="12" rx="1" fill="#60A5FA" stroke="#1D4ED8" strokeWidth="1" />
            {/* Wheels */}
            <circle cx="34" cy="68" r="8" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
            <circle cx="34" cy="68" r="3" fill="#CBD5E1" />
            <circle cx="170" cy="68" r="8" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
            <circle cx="170" cy="68" r="3" fill="#CBD5E1" />
            <circle cx="196" cy="68" r="8" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
            <circle cx="196" cy="68" r="3" fill="#CBD5E1" />
          </svg>
          <span className="text-[11px] sm:text-xs md:text-sm font-bold text-navy-900 leading-tight">
            Part-Truckload <br />
            <span className="font-normal text-slate-500 text-[10px] sm:text-xs">Shared cargo space</span>
          </span>
        </div>

        {/* FTL Side */}
        <div className="flex flex-col items-center text-center p-1 sm:p-2 md:p-3 border-l border-slate-200">
          <svg viewBox="0 0 240 100" className="w-full max-w-[180px] sm:max-w-[220px] h-auto mb-2" fill="none">
            {/* Cab */}
            <path d="M 20 65 L 20 38 L 40 38 L 52 50 L 58 50 L 58 65 Z" fill="#EBF2FA" stroke="#234C85" strokeWidth="2" />
            <path d="M 38 42 L 50 50 L 38 50 Z" fill="#93C5FD" stroke="#234C85" strokeWidth="1.5" />
            {/* Trailer Solid Full Load */}
            <rect x="58" y="24" width="160" height="42" rx="3" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2" />
            <path d="M 64 28 L 212 28 M 64 36 L 212 36 M 64 44 L 212 44 M 64 52 L 212 52 M 64 60 L 212 60" stroke="#60A5FA" strokeWidth="1" opacity="0.6" />
            {/* Wheels */}
            <circle cx="34" cy="68" r="8" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
            <circle cx="34" cy="68" r="3" fill="#CBD5E1" />
            <circle cx="170" cy="68" r="8" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
            <circle cx="170" cy="68" r="3" fill="#CBD5E1" />
            <circle cx="196" cy="68" r="8" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
            <circle cx="196" cy="68" r="3" fill="#CBD5E1" />
          </svg>
          <span className="text-[11px] sm:text-xs md:text-sm font-bold text-navy-900 leading-tight">
            Full-Truckload <br />
            <span className="font-normal text-slate-500 text-[10px] sm:text-xs">Dedicated full vehicle</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PtlFtlDiagram;

