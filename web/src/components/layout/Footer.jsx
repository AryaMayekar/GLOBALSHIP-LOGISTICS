import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from '../common/Logo';
import { COMPANY_PROFILE } from '../../constants/data';

const Footer = () => {
  return (
    <footer className="relative bg-[#081935] text-white pt-12 sm:pt-16 pb-10 sm:pb-12 rounded-t-[32px] sm:rounded-t-[48px] md:rounded-t-[60px] overflow-hidden mt-10 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Brand Crest Pill */}
        <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8">
          <div className="bg-white py-2 px-5 sm:py-2.5 sm:px-8 rounded-full shadow-lg inline-flex items-center">
            <Logo variant="dark" size="compact" />
          </div>

          {/* Slogan & Subheading */}
          <h2 className="font-serif text-lg sm:text-2xl md:text-3xl font-bold tracking-widest text-gold-400 uppercase mt-4 sm:mt-6 mb-1.5 sm:mb-2">
            {COMPANY_PROFILE.tagline}
          </h2>
          <p className="text-slate-200 text-xs sm:text-base md:text-lg font-normal tracking-wide">
            Moving Your Business Beyond Boundaries
          </p>
        </div>

        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 pt-6 sm:pt-8 border-t border-navy-800/80 max-w-5xl mx-auto">
          
          {/* Column 1: Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">
              Contact
            </h3>
            <div className="text-slate-300 space-y-1 text-sm sm:text-base">
              <p>Shop No 25, B wing, Harias Dream Park,</p>
              <p>Near Indian Bank, Hatkesh Udyog Nagar</p>
              <div className="pt-2 space-y-1 text-xs sm:text-sm font-sans">
                <p className="text-gold-400 font-semibold">
                  <a href="tel:+919137024187" className="hover:underline">+91 91370 24187</a> / <a href="tel:+919833889455" className="hover:underline">+91 98338 89455</a>
                </p>
                <p>
                  <a href="mailto:globalshiplogistics96@gmail.com" className="text-slate-300 hover:text-gold-400 hover:underline break-all">
                    globalshiplogistics96@gmail.com
                  </a>
                </p>
              </div>
            </div>
            
            {/* 3 White Square Social Buttons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#facebook"
                className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-lg flex items-center justify-center text-navy-900 hover:bg-gold-400 transition-colors shadow"
                aria-label="Facebook"
              >
                <Facebook size={17} />
              </a>
              <a
                href="#twitter"
                className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-lg flex items-center justify-center text-navy-900 hover:bg-gold-400 transition-colors shadow"
                aria-label="Twitter"
              >
                <Twitter size={17} />
              </a>
              <a
                href="#linkedin"
                className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-lg flex items-center justify-center text-navy-900 hover:bg-gold-400 transition-colors shadow"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-slate-300 text-base font-serif">
              <li>
                <Link to="/" className="hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/track" className="hover:text-gold-400 transition-colors">
                  Track Shipment
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-gold-400 transition-colors">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-gold-400 transition-colors">
                  Terms and conditons
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: GST Number */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-4">
              Gst Number
            </h3>
            <p className="text-slate-300 text-base">
              GSTIN: 07AAACG0123F1Z8
            </p>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 text-center text-xs text-slate-400 border-t border-navy-800">
          © {new Date().getFullYear()} GlobalShip Logistics. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
