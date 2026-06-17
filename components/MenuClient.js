'use client';

import { useState } from 'react';
import {
  categories,
  getItemsByCategory,
  getFeaturedItems,
} from '@/data/menuData';
import MenuSidebar from './MenuSidebar';
import MenuItemCard from './MenuItemCard';
import Navbar from './Navbar';

export default function MenuClient() {
  const [active, setActive] = useState('featured');

  const items =
    active === 'featured'
      ? getFeaturedItems()
      : getItemsByCategory(active);

  const activeCat = categories.find((c) => c.id === active);

  return (

    <>
    <Navbar/>
      <section className="bg-zinc-50 py-16">

        <div className="max-w-7xl mx-auto px-5">

          {/* HEADER CONTEXT */}
          <div className="text-center mb-10">

            <p className="text-yellow-500 uppercase tracking-[0.3em] text-xs font-semibold">
              🍽️ Fresh Menu
            </p>

            <h2 className="text-3xl sm:text-5xl font-bold mt-3">
              Choose What You Crave
            </h2>

            <p className="text-zinc-600 mt-3 max-w-xl mx-auto text-sm">
              Browse pizzas, burgers, fries, and drinks — all cooked fresh after ordering.
            </p>

          </div>

          <div className="flex flex-col md:flex-row gap-10">

            {/* SIDEBAR (sticky feel) */}
            <div className="md:sticky md:top-24 self-start">
              <MenuSidebar active={active} onChange={setActive} />
            </div>

            {/* MAIN AREA */}
            <div className="flex-1">

              {/* CATEGORY CONTEXT BAR */}
              <div className="mb-6">

                {active === 'featured' ? (
                  <div className="bg-white border border-zinc-100 rounded-2xl p-4 text-center">

                    <p className="text-sm font-semibold">
                      🔥 Trending & Most Ordered Items
                    </p>

                    <p className="text-xs text-zinc-500 mt-1">
                      Customers love these picks
                    </p>

                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold">
                      {activeCat?.emoji} {activeCat?.label}
                    </h3>

                    <p className="text-sm text-zinc-500 mt-1">
                      Freshly prepared on order
                    </p>
                  </div>
                )}

              </div>

              {/* GRID (feed style) */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

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