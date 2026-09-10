import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from '../common/Logo';
import { NAV_LINKS } from '../../constants/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();

  const isCurrent = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gold-500/50 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-[68px]">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group py-1">
            <Logo variant="dark" size="compact" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-8">
            {NAV_LINKS.map((link) => {
              const active = isCurrent(link.path);

              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`font-serif text-[15px] lg:text-base font-bold transition-colors duration-200 flex items-center space-x-1 py-1.5 ${
                        active ? 'text-navy-900' : 'text-navy-900 hover:text-gold-600'
                      }`}
                    >
                      <span className="relative">
                        {link.name}
                        {active && (
                          <span className="absolute -bottom-1 left-0 w-full h-[2.5px] bg-gold-500 rounded-full"></span>
                        )}
                      </span>
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-300 ${
                          dropdownOpen ? 'rotate-180 text-gold-600' : 'text-navy-900'
                        }`}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 w-60 bg-white shadow-xl border-t-2 border-gold-500 rounded-b-lg py-2 z-50 animate-fade-in-up">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setDropdownOpen(false)}
                            className="block px-4 py-2 text-sm font-serif font-medium text-navy-900 hover:bg-surface-100 hover:text-gold-600 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-serif text-[15px] lg:text-base font-bold transition-colors duration-200 py-1.5 ${
                    active ? 'text-navy-900' : 'text-navy-900 hover:text-gold-600'
                  }`}
                >
                  <span className="relative">
                    {link.name}
                    {active && (
                      <span className="absolute -bottom-1 left-0 w-full h-[2.5px] bg-gold-500 rounded-full"></span>
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy-900 p-1.5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-slate-100 px-5 pt-3 pb-6 space-y-2 shadow-xl animate-fade-in-up">
          {NAV_LINKS.map((link) => {
            const active = isCurrent(link.path);
            return (
              <div key={link.name} className="border-b border-slate-100 pb-1.5 last:border-b-0">
                {link.dropdown ? (
                  <div>
                    <div className="flex justify-between items-center py-1.5">
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`font-serif text-base font-bold flex items-center space-x-2 ${
                          active ? 'text-gold-600' : 'text-navy-900'
                        }`}
                      >
                        {active && <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>}
                        <span>{link.name}</span>
                      </Link>
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="p-1.5 text-navy-900 focus:outline-none"
                        aria-label="Toggle Submenu"
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            mobileDropdownOpen ? 'rotate-180 text-gold-600' : ''
                          }`}
                        />
                      </button>
                    </div>
                    {mobileDropdownOpen && (
                      <div className="pl-3 space-y-1 mt-1 pb-1 animate-fade-in-up border-l-2 border-gold-400/50 ml-1">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={() => setIsOpen(false)}
                            className="block text-sm font-medium text-slate-700 hover:text-gold-600 py-1 pl-2"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block font-serif text-base font-bold py-1.5 flex items-center space-x-2 ${
                      active ? 'text-gold-600' : 'text-navy-900'
                    }`}
                  >
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>}
                    <span>{link.name}</span>
                  </Link>
                )}
              </div>
            );
          })}

          {/* Quick Mobile Action CTA */}
          <div className="pt-2">
            <Link
              to="/track"
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#081935] hover:bg-[#0c2247] text-gold-400 font-serif font-bold text-sm py-2.5 rounded-lg flex items-center justify-center border border-gold-500/40 shadow-sm"
            >
              Track Your Shipment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

