'use client';

import { useState } from 'react';
import {
  categories,
  getItemsByCategory,
  getFeaturedItems,
} from '@/data/menuData';
import MenuSidebar from './MenuSidebar';
import MenuItemCard from './MenuItemCard';

export default function HomeMenuSection({
  featuredOnly = false,
  maxItems = 6,
}) {
  const [active, setActive] = useState('featured');

  let items =
    active === 'featured'
      ? getFeaturedItems()
      : getItemsByCategory(active);

  if (featuredOnly && active === 'featured') {
    items = items.slice(0, maxItems);
  }

  const activeCat = categories.find((c) => c.id === active);

  return (
    <section className="bg-zinc-50 py-20">

      <div className="max-w-7xl mx-auto px-5">

        {/* HEADER */}
        <div className="text-center mb-12">

          <p className="text-yellow-500 font-semibold uppercase tracking-[0.3em] text-xs">
            🔥 Trending Today
          </p>

          <h2 className="text-3xl sm:text-5xl font-bold mt-3">
            Order Fresh Food Now
          </h2>

          <p className="text-zinc-600 mt-3 max-w-xl mx-auto text-sm">
            Choose from pizzas, burgers, fries, and cold drinks — cooked fresh after every order.
          </p>

        </div>

        {/* FEATURED STRIP (ONLY IN FEATURED MODE) */}
        {active === 'featured' && (
          <div className="mb-10 bg-white border border-zinc-100 rounded-2xl p-5 flex flex-wrap justify-center gap-3 text-xs text-zinc-600">

            <span>⚡ 30 min delivery</span>
            <span>🔥 Most ordered items</span>
            <span>🍕 Fresh cooked</span>
            <span>💸 Best value combos</span>

          </div>
        )}

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* SIDEBAR */}
          {!featuredOnly && (
            <div className="lg:sticky lg:top-24 self-start">
              <MenuSidebar active={active} onChange={setActive} />
            </div>
          )}

          {/* MENU GRID */}
          <div className="flex-1">

            {/* CATEGORY HEADER */}
            {!featuredOnly && activeCat && (
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  {activeCat.emoji} {activeCat.label}
                </h3>
                <p className="text-sm text-zinc-500 mt-1">
                  Freshly prepared on order
                </p>
              </div>
            )}

            {/* GRID */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {items.map((item) => (
                <MenuItemCard key={item.slug} item={item} />
              ))}
            </div>

            {/* CTA (featured mode only) */}
            {featuredOnly && items.length === maxItems && (
              <div className="text-center mt-12">

                <a
                  href="/menu"
                  className="inline-block bg-black text-white font-semibold px-8 py-3 rounded-full hover:bg-zinc-800 transition"
                >
                  Explore Full Menu →
                </a>

                <p className="text-xs text-zinc-500 mt-3">
                  See all categories & combos
                </p>

              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}