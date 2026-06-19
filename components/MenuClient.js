// components/MenuClient.js
'use client';

import { useState } from 'react';
import { categories, getItemsByCategory, getFeaturedItems } from '@/data/menuData';
import Navbar from './Navbar';
import MenuSidebar from './MenuSidebar';
import MenuItemCard from './MenuItemCard';

export default function MenuClient() {
  // Default to 'combos' – first category in your menu
  const [active, setActive] = useState('combos');

  const items = active === 'featured' ? getFeaturedItems() : getItemsByCategory(active);
  const activeCat = categories.find((c) => c.id === active);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-zinc-50 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* HERO */}
          <div className="pb-8 pt-6 md:pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-500">
              🍽️ THALA MENU
            </p>

            <h1 className="mt-3 text-3xl font-black md:text-4xl xl:text-5xl">
              Choose What You Crave
            </h1>

            <p className="mt-4 max-w-2xl text-zinc-500">
              Fresh pizzas, burgers, momos, fries and beverages. Everything is cooked only after you
              place your order.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full border bg-white px-4 py-2 text-sm">⭐ 4.8 Rating</span>
              <span className="rounded-full border bg-white px-4 py-2 text-sm">🚚 25 mins</span>
              <span className="rounded-full border bg-white px-4 py-2 text-sm">🔥 Fresh Daily</span>
            </div>
          </div>

          {/* MAIN LAYOUT */}
          <div className="flex flex-col gap-6 lg:flex-row">
            {/* Sidebar */}
            <div className="w-full shrink-0 lg:w-72">
              <MenuSidebar active={active} onChange={setActive} />
            </div>

            {/* Products */}
            <div className="flex-1">
              {/* Category Heading */}
              {active !== 'featured' && activeCat && (
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-black md:text-3xl">
                        {activeCat.emoji} {activeCat.label}
                      </h2>
                      <p className="mt-2 text-zinc-500">Freshly prepared after every order</p>
                    </div>

                    <div className="hidden gap-2 md:flex">
                      <span className="rounded-full border bg-white px-3 py-1 text-xs">
                        🚚 25 mins
                      </span>
                      <span className="rounded-full border bg-white px-3 py-1 text-xs">⭐ 4.8</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Items Grid */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-3">
                {items.map((item) => (
                  <MenuItemCard key={item.slug} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
