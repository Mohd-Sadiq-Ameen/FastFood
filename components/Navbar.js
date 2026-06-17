"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/payment", label: "Payment" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Offer Bar */}
      <div className="bg-yellow-400 text-black text-center py-1 text-sm font-semibold">
        🚚 Fast Delivery Across South Delhi
      </div>

      {/* Navbar */}
      <div className="mx-auto max-w-7xl px-4 py-0">
        <div className="flex items-center justify-between rounded-full border border-black/10 bg-white/90 backdrop-blur-xl px-5 py-2 shadow-xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-11 items-center justify-center rounded-full bg-yellow-400 text-black font-black text-sm">
              TC
            </div>

            <div>
              <p className="text-xl font-black tracking-tight text-black">
                THALA
              </p>
              <p className="-mt-1 text-xs font-semibold tracking-[0.3em] text-yellow-500">
                CAFE
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-semibold transition ${active
                      ? "text-yellow-500"
                      : "text-gray-700 hover:text-black"
                    }`}
                >
                  {link.label}

                  {active && (
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-yellow-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            href="/menu"
            className="hidden md:inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-bold text-yellow-400 transition hover:scale-105"
          >
            Order Now
          </Link>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-3 rounded-3xl border border-black/10 bg-white p-5 shadow-xl md:hidden">
            <div className="space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block text-base font-medium ${pathname === link.href
                      ? "text-yellow-500"
                      : "text-black"
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/menu"
                onClick={() => setOpen(false)}
                className="mt-4 block rounded-full bg-black py-3 text-center font-bold text-yellow-400"
              >
                Order Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}