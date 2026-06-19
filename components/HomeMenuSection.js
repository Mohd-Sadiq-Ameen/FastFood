// components/HomeMenuSection.js
'use client';

import { useState } from 'react';
import { categories, getItemsByCategory, getFeaturedItems } from '@/data/menuData';
import MenuSidebar from './MenuSidebar';
import MenuItemCard from './MenuItemCard';

export default function HomeMenuSection() {
  const [active, setActive] = useState('pizza');

  const items = active === 'featured' ? getFeaturedItems() : getItemsByCategory(active);
  const activeCat = categories.find((c) => c.id === active);

  return (
    <section className="bg-zinc-50 py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        {/* HEADER */}
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-500">
            🔥 Trending Today
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-4xl">Order Fresh Food Now</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-600">
            Choose from pizzas, burgers, fries, and cold drinks — cooked fresh after every order.
          </p>
        </div>

        {/* SIDEBAR – Always visible, responsive */}
        <div className="mb-6">
          <MenuSidebar active={active} onChange={setActive} />
        </div>

        {/* MENU GRID */}
        <div>
          {/* Category Header */}
          {activeCat && (
            <div className="mb-4">
              <h3 className="text-xl font-bold sm:text-2xl">
                {activeCat.emoji} {activeCat.label}
              </h3>
              <p className="text-xs text-zinc-500 sm:text-sm">Freshly prepared on order</p>
            </div>
          )}

          {/* Grid – MOBILE FIRST: 2 columns, 3 on tablet, 4 on desktop */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {items.map((item) => (
              <MenuItemCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}