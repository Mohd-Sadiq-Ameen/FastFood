// components/Navbar.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingCart } from 'lucide-react';
import CartButton from '@/components/cart/CartButton';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* ─── OFFER BAR ─────────────────────────────────────────────── */}
      <div className="bg-yellow-400 py-1.5 text-center text-xs font-semibold text-black sm:text-sm">
        <span className="inline-flex items-center">
          <span> Free Delivery - 🔥 Special Month Offer 🔥</span>
        </span>
      </div>

      {/* ─── NAVBAR ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 py-2">
        <div className="flex items-center justify-between rounded-full border border-black/5 bg-white/80 px-5 py-2 shadow-lg backdrop-blur-2xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 font-black text-black shadow-sm">
              TC
            </div>
            <div className="leading-tight">
              <h2 className="text-lg font-black tracking-tight">THALATHA CAFE</h2>
              <p className="text-[10px] font-medium text-zinc-500">Fresh Pizza • Burgers</p>
            </div>
          </Link>

          {/* Desktop Navigation – active underline (like Swiggy) */}
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-semibold transition-colors ${
                    active ? 'text-black' : 'text-zinc-500 hover:text-black'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-yellow-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Cart with badge – using existing CartButton */}
            <CartButton />

            <Link
              href="/checkout"
              className="hidden items-center rounded-full bg-black px-5 py-2.5 text-sm font-bold text-yellow-400 transition hover:bg-zinc-800 md:flex"
            >
              Checkout
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-zinc-100 md:hidden"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* ─── MOBILE DRAWER (slide from right) ──────────────────────── */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
      >
        {/* Backdrop with blur */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-2xl transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-full p-2 transition hover:bg-zinc-100"
          >
            <X size={22} />
          </button>

          {/* Logo inside drawer */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 font-black text-black">
              TC
            </div>
            <div>
              <h3 className="font-black">THALATHA CAFE</h3>
              <p className="text-xs text-zinc-500">Fresh Pizza • Burgers</p>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="mt-6 space-y-1">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base font-semibold transition ${
                    active ? 'bg-yellow-50 text-yellow-600' : 'hover:bg-zinc-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Checkout button */}
          <Link
            href="/checkout"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-full bg-black py-3.5 text-center font-bold text-yellow-400 transition hover:bg-zinc-800"
          >
            Go to Checkout
          </Link>

          {/* Small trust line */}
          <p className="mt-6 text-center text-xs text-zinc-400">
            ⭐ 4.8 • 🚚 25 mins • Open till 2AM
          </p>
        </div>
      </div>
    </header>
  );
}
