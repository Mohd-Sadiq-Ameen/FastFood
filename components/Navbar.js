'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

import CartButton from '@/components/cart/CartButton';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const links = [
    {
      href: '/',
      label: 'Home',
    },

    {
      href: '/menu',
      label: 'Menu',
    },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Offer Bar */}

      <div className="bg-yellow-400 py-1 text-center text-xs font-bold text-black sm:text-sm">
        🚚 Fast Delivery • Free Above ₹249
      </div>

      {/* Navbar */}

      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between rounded-full border border-black/5 bg-white/80 px-5 py-3 shadow-lg backdrop-blur-2xl">
          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 font-black text-black">
              TC
            </div>

            <div>
              <h2 className="text-lg font-black leading-none">THALA</h2>

              <p className="text-[10px] font-semibold tracking-[0.3em] text-yellow-500">CAFE</p>

              <p className="text-[10px] text-zinc-400">🟢 25 mins delivery</p>
            </div>
          </Link>

          {/* Desktop */}

          <nav className="hidden items-center gap-3 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                    active ? 'bg-yellow-100 text-black' : 'text-zinc-600 hover:bg-zinc-100'
                  } `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right */}

          <div className="flex items-center gap-3">
            <CartButton />

            <Link
              href="/checkout"
              className="hidden items-center rounded-full bg-black px-6 py-3 text-sm font-bold text-yellow-400 transition hover:bg-zinc-800 md:flex"
            >
              Checkout
            </Link>

            {/* Mobile */}

            <button onClick={() => setOpen(!open)} className="md:hidden">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            open ? 'mt-3 max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } `}
        >
          <div className="rounded-3xl border border-zinc-100 bg-white p-5 shadow-xl">
            <div className="space-y-2">
              {links.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 font-semibold transition ${
                      active ? 'bg-yellow-100' : 'hover:bg-zinc-100'
                    } `}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                href="/checkout"
                onClick={() => setOpen(false)}
                className="mt-4 block rounded-full bg-black py-4 text-center font-bold text-yellow-400"
              >
                Proceed To Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
