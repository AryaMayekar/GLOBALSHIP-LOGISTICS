import React from 'react';

export const LogoIcon = ({ className = "w-10 h-10" }) => (
  <img
    src="/logo_gsl.png"
    alt="GlobalShip Logistics Logo"
    className={`${className} object-contain`}
  />
);

const Logo = ({ variant = "dark", size = "default", className = "" }) => {
  const isDark = variant === "dark";

  const getDimensions = () => {
    if (size === "compact" || size === "small") {
      return {
        icon: "w-8 h-8 sm:w-9 sm:h-9",
        text: "text-sm sm:text-base md:text-lg",
      };
    }
    if (size === "large") {
      return {
        icon: "w-14 h-14",
        text: "text-2xl",
      };
    }
    return {
      icon: "w-11 h-11",
      text: "text-lg sm:text-xl",
    };
  };

  const dims = getDimensions();

  return (
    <div className={`flex items-center space-x-2.5 sm:space-x-3 ${className}`}>
      <LogoIcon className={dims.icon} />
      <span
        className={`font-serif font-bold tracking-wider ${dims.text} ${
          isDark ? "text-navy-900" : "text-white"
        }`}
        style={{ letterSpacing: '0.06em' }}
      >
        GLOBALSHIP LOGISTICS
      </span>
    </div>
  );
};

export default Logo;

