// app/menu/[slug]/page.js
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getItemBySlug, getRelatedItems, menuItems } from '@/data/menuData';
import WhatsAppOrderButton from '@/components/WhatsAppOrderButton';
import MenuItemCard from '@/components/MenuItemCard';

export async function generateStaticParams() {
  return menuItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const item = getItemBySlug(params.slug);
  if (!item) return {};

  return {
    title: `${item.name} — Thala Cafe`,
    description: `${item.tagline || item.description} · ₹${item.price}`,
    alternates: {
      canonical: `https://thala-cafe.in/menu/${item.slug}`,
    },
    openGraph: {
      title: `${item.name} — Thala Cafe`,
      description: item.tagline || item.description,
      type: 'website',
    },
  };
}

export default function ItemDetailPage({ params }) {
  const item = getItemBySlug(params.slug);

  if (!item) notFound();

  const related = getRelatedItems(item, 3);

  // Determine if item is veg/non-veg
  const isVeg = item.badge?.toLowerCase().includes('veg') || false;
  const isNonVeg = item.badge?.toLowerCase().includes('non-veg') || false;

  // Rating badge (static, can be dynamic later)
  const rating = 4.8;

  // Delivery time estimate (static for now)
  const deliveryTime = '20-30 mins';

  // Discount calculation (20% off, for demo)
  const originalPrice = Math.round(item.price * 1.2);
  const discount = Math.round(((originalPrice - item.price) / originalPrice) * 100);

  // Nutrition data – if item has nutrition, use it; otherwise show placeholders
  const hasNutrition = item.nutrition && item.nutrition.calories;
  const nutrition = hasNutrition
    ? [
        { label: 'Calories', value: item.nutrition.calories || '--' },
        { label: 'Protein', value: item.nutrition.protein || '--' },
        { label: 'Carbs', value: item.nutrition.carbs || '--' },
        { label: 'Fat', value: item.nutrition.fat || '--' },
      ]
    : [
        { label: 'Calories', value: '--' },
        { label: 'Protein', value: '--' },
        { label: 'Carbs', value: '--' },
        { label: 'Fat', value: '--' },
      ];

  // Check if item has protein
  const hasProtein = item.protein && item.protein !== '0g';

  return (
    <div className="min-h-screen bg-white pb-28 lg:pb-0">
      {/* Breadcrumb */}
      <div className="mx-auto flex max-w-6xl gap-2 px-4 pt-6 text-sm text-gray-400">
        <Link href="/" className="transition-colors hover:text-black">
          Home
        </Link>
        <span>/</span>
        <Link href="/menu" className="transition-colors hover:text-black">
          Menu
        </Link>
        <span>/</span>
        <span className="truncate font-medium text-black">{item.name}</span>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6 lg:py-8">
        {/* HERO - Grid layout */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* IMAGE */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100 shadow-xl">
            {item.image ? (
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center text-7xl">
                {item.emoji || '🍕'}
              </div>
            )}

            {/* Veg/Non-Veg Badge on Image */}
            <div className="absolute left-4 top-4">
              {isVeg && (
                <span className="inline-flex items-center gap-1 rounded-full bg-green-600 px-2.5 py-1 text-xs font-bold text-white shadow-md">
                  <span className="h-3 w-3 rounded-full border-2 border-white bg-green-600"></span>
                  Veg
                </span>
              )}
              {isNonVeg && (
                <span className="inline-flex items-center gap-1 rounded-full bg-red-600 px-2.5 py-1 text-xs font-bold text-white shadow-md">
                  <span className="h-3 w-3 rounded-full border-2 border-white bg-red-600"></span>
                  Non-Veg
                </span>
              )}
            </div>
          </div>

          {/* INFO */}
          <div className="flex flex-col">
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2">
              {item.badge && (
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                  🔥 {item.badge}
                </span>
              )}
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                ⭐ {rating}
              </span>
              {hasProtein && (
                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                  💪 High Protein
                </span>
              )}
              <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                🚚 {deliveryTime}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {item.name}
            </h1>

            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              {item.tagline || item.description || 'Freshly prepared with quality ingredients.'}
            </p>

            {/* Price Section with Discount */}
            <div className="mt-6 flex items-center gap-4">
              <p className="text-4xl font-black text-black">₹{item.price}</p>
              {originalPrice > item.price && (
                <>
                  <span className="text-lg text-zinc-400 line-through">₹{originalPrice}</span>
                  <span className="rounded-full bg-green-600 px-3 py-1 text-sm font-bold text-white">
                    {discount}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Buttons - Desktop */}
            <div className="mt-8 hidden gap-3 lg:flex">
              <button className="flex-1 rounded-xl bg-black py-3.5 font-bold text-white transition hover:bg-zinc-800">
                Add To Cart
              </button>
              <WhatsAppOrderButton itemName={item.name} price={item.price} />
            </div>

            {/* Mobile: Button hidden (shown in sticky footer) */}
            <div className="mt-8 lg:hidden">
              <p className="text-center text-sm text-gray-400">Tap "Add to Cart" below to order</p>
            </div>

            {/* Description (full) */}
            {item.description && (
              <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-4 lg:mt-8">
                <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            )}
          </div>
        </div>

        {/* INGREDIENTS */}
        {item.ingredients && item.ingredients.length > 0 && (
          <div className="mt-14">
            <h2 className="text-2xl font-bold">What's Inside</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.ingredients.map((ing, i) => (
                <span
                  key={i}
                  className="rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* NUTRITION */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold">Nutrition Info</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {nutrition.map((n) => (
              <div
                key={n.label}
                className="rounded-3xl border border-gray-100 bg-zinc-50 p-5 text-center shadow-sm transition hover:shadow-md"
              >
                <p className="text-3xl font-black text-black">{n.value}</p>
                <p className="mt-1 text-sm text-gray-500">{n.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RELATED ITEMS */}
        {related.length > 0 && (
          <section className="mt-20 border-t border-gray-100 pt-14">
            <h2 className="text-2xl font-bold">You May Also Like</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <MenuItemCard key={r.slug} item={r} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* STICKY FOOTER - Mobile Only (Swiggy/Zomato style) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white p-4 shadow-2xl lg:hidden">
        <div className="flex items-center gap-3">
          {/* Quantity Selector */}
          <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-lg font-bold transition hover:bg-gray-300">
              −
            </button>
            <span className="min-w-8 text-center font-bold">1</span>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-lg font-bold transition hover:bg-gray-300">
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button className="flex-1 rounded-xl bg-black py-3.5 font-bold text-white transition hover:bg-zinc-800 active:scale-95">
            Add To Cart • ₹{item.price}
          </button>
        </div>

        {/* Note */}
        <p className="mt-2 text-center text-[10px] text-gray-400">
          Tap to add to cart. WhatsApp order available on desktop.
        </p>
      </div>
    </div>
  );
}
