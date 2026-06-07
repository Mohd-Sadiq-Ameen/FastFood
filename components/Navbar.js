'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/payment', label: 'Payment' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Offer Bar */}
      <div className="bg-gradient-to-r from-gbgreen to-green-600 text-white text-center py-2 sm:py-2.5 text-xs sm:text-sm md:text-base font-medium px-2 truncate">
        🚚 Free Delivery Above ₹299 – Order Now!
      </div>

      {/* Floating Navbar Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 mt-1 sm:mt-2">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/20 px-3 sm:px-5 lg:px-8 py-2 sm:py-3 flex items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gbgreen flex items-center justify-center text-white font-syne font-extrabold text-lg sm:text-xl leading-none shadow-md">
              G
            </span>
            <span className="font-syne font-extrabold text-lg sm:text-xl text-gbblack tracking-tight">
              Green<span className="text-gbgreen">Bite</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center flex-1 justify-center gap-8 lg:gap-12 xl:gap-16 px-6 lg:px-10">
            {links.map(({ href, label }) => {
              const isActive = path === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`font-dm font-medium text-sm lg:text-base transition-all duration-200 relative after:absolute after:w-full after:h-[2px] after:bg-gbgreen after:left-0 after:-bottom-2 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 ${
                    isActive
                      ? 'text-gbgreen font-bold after:scale-x-100'
                      : 'text-gray-600 hover:text-gbblack'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link
              href="/menu"
              className="bg-gbgreen hover:scale-105 hover:shadow-xl rounded-full font-bold text-white transition-all duration-300 active:scale-95 shadow-md px-4 py-2 text-sm lg:px-5 lg:py-2.5 lg:text-sm xl:px-7 xl:py-3 xl:text-base"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 sm:w-10 sm:h-10 flex flex-col justify-center items-center gap-1.5 ml-auto"
          >
            <span className={`block w-5 h-0.5 bg-gbblack transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gbblack transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gbblack transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl mx-3 sm:mx-5 lg:mx-8 mt-2 p-4 space-y-3 shadow-lg border border-gray-100 animate-fade-in">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block font-dm font-medium py-2.5 text-base sm:text-lg ${
                path === href ? 'text-gbgreen font-bold' : 'text-gray-700'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/menu"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-gbgreen text-white font-dm font-semibold py-3 sm:py-3.5 rounded-full mt-2 shadow-md text-base sm:text-lg"
          >
            Order Now
          </Link>
        </div>
      )}
    </header>
  );
}