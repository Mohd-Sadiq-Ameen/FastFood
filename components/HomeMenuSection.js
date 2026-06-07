// components/MenuSection.js
'use client';

import { useState } from 'react';
import {
  categories,
  getItemsByCategory,
  getFeaturedItems,
} from '@/data/menuData';
import MenuSidebar from './MenuSidebar';
import MenuItemCard from './MenuItemCard';

export default function HomeMenuSection({ featuredOnly = false, maxItems = 6 }) {
  const [active, setActive] = useState('featured');

  let items;
  if (active === 'featured') {
    items = getFeaturedItems();
    if (featuredOnly && maxItems) items = items.slice(0, maxItems);
  } else {
    items = getItemsByCategory(active);
  }

  const activeCat = categories.find((c) => c.id === active);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-gbgreen font-semibold uppercase tracking-widest text-sm">
            Fresh & Delicious
          </p>
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-gbblack mt-2">
            Our Menu
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Pizza, Burgers & Ice Cold Drinks – made fresh daily
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {!featuredOnly && (
            <MenuSidebar active={active} onChange={setActive} />
          )}

          <div className="flex-1">
            {!featuredOnly && activeCat && (
              <div className="mb-6">
                <h3 className="font-syne font-bold text-3xl">
                  {activeCat.emoji} {activeCat.label}
                </h3>
              </div>
            )}

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {items.map((item) => (
                <MenuItemCard key={item.slug} item={item} />
              ))}
            </div>

            {featuredOnly && items.length === maxItems && (
              <div className="text-center mt-10">
                <a
                  href="/menu"
                  className="inline-block bg-gbgreen hover:scale-105 hover:shadow-xl text-white font-syne font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-md"
                >
                  View Full Menu →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}