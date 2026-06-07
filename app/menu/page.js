import { Suspense } from 'react'
import MenuClient from '@/components/MenuClient'

export const metadata = {
  title: 'Menu — GreenBite',
  description:
    'Browse our full menu — handcrafted pizzas, juicy burgers, chilled Campa drinks, sides, and desserts. Order on WhatsApp in seconds.',
  alternates: { canonical: 'https://greenbite.in/menu' },
}

export default function MenuPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-gbgray border-b border-gray-100 py-8 sm:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-gbgreen font-dm font-semibold text-sm uppercase tracking-wider mb-1">
            Browse &amp; Order
          </p>
          <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-gbblack">
            Our Menu
          </h1>
          <p className="font-dm text-gray-500 mt-2 text-sm sm:text-base">
            Tap any item to see details, then order directly on WhatsApp.
          </p>
        </div>
      </div>

      <Suspense fallback={<MenuSkeleton />}>
        <MenuClient />
      </Suspense>
    </>
  )
}

function MenuSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-gray-100 rounded-2xl h-64 animate-pulse" />
        ))}
      </div>
    </div>
  )
}
