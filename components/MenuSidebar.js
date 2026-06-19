'use client';

import { categories } from '@/data/menuData';

export default function MenuSidebar({ active, onChange }) {
  return (
    <aside className="w-full">
      {/* Mobile */}

      <div className="md:hidden">
        <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-3">
          {categories.map((cat) => {
            const isActive = active === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onChange(cat.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-black text-yellow-400 shadow-md'
                    : 'border border-zinc-200 bg-white text-zinc-700'
                } `}
              >
                <span>{cat.emoji}</span>

                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tablet */}

      <div className="hidden flex-wrap justify-center gap-3 md:flex lg:hidden">
        {categories.map((cat) => {
          const isActive = active === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onChange(cat.id)}
              title={cat.label}
              className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-all duration-300 ${
                isActive
                  ? 'bg-black text-yellow-400 shadow-lg'
                  : 'border border-zinc-200 bg-white hover:border-yellow-400'
              } `}
            >
              {cat.emoji}
            </button>
          );
        })}
      </div>

      {/* Desktop */}

      <div className="hidden flex-wrap justify-center gap-4 lg:flex">
        {categories.map((cat) => {
          const isActive = active === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onChange(cat.id)}
              className={`flex items-center gap-3 rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? 'bg-black text-yellow-400 shadow-lg'
                  : 'border border-zinc-200 bg-white text-zinc-700 hover:border-yellow-400'
              } `}
            >
              <span className="text-xl">{cat.emoji}</span>

              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
