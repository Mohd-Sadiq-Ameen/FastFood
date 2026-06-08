'use client'

import { categories } from '@/data/menuData'

export default function MenuSidebar({ active, onChange }) {
  return (
    <aside className="w-full md:w-56 shrink-0">
      {/* Mobile: horizontal scroll tabs */}
      <div className="flex md:hidden overflow-x-auto gap-2 pb-2 -mx-4 px-4 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`flex items-center gap-1.5 whitespace-nowrap px-3.5 py-2 rounded-full text-sm font-dm font-medium transition-all ${
              active === cat.id
                ? 'bg-gbgreen text-white shadow-sm'
                : 'bg-gbgray text-gray-600 hover:bg-gray-200'
            }`}
          >
            <span>{cat.emoji}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Desktop: vertical list */}
      <div className="hidden md:block sticky top-24 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Sidebar header */}
        <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-gbgreen flex items-center justify-center text-white font-serif font-extrabold text-sm">G</span>
          <span className="font-serif font-bold text-sm text-gbblack">Our Menu</span>
        </div>
        <ul className="py-2">
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => onChange(cat.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-dm font-medium transition-all text-left ${
                  active === cat.id
                    ? 'border-l-4 border-gbgreen bg-green-50 text-gbgreen pl-3'
                    : 'border-l-4 border-transparent text-gray-600 hover:bg-gbgray hover:text-gbblack'
                }`}
              >
                <span className="text-xl w-7 text-center">{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
