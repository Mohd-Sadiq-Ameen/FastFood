// components/MenuClient.js – unchanged, already perfect
'use client';

import { useState } from 'react';
import {
  categories,
  getItemsByCategory,
  getFeaturedItems,
} from '@/data/menuData';
import MenuSidebar from './MenuSidebar';
import MenuItemCard from './MenuItemCard';

export default function MenuClient() {
  const [active, setActive] = useState('featured');

  const items =
    active === 'featured'
      ? getFeaturedItems()
      : getItemsByCategory(active);

  const activeCat = categories.find((c) => c.id === active);

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-8">
          <MenuSidebar active={active} onChange={setActive} />

          <div className="flex-1">
            {activeCat && (
              <div className="mb-6">
                <h3 className="font-serif font-bold text-3xl">
                  {activeCat.emoji} {activeCat.label}
                </h3>
              </div>
            )}

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {items.map((item) => (
                <MenuItemCard key={item.slug} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}