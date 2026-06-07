import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getItemBySlug, getRelatedItems, menuItems } from '@/data/menuData';
import WhatsAppOrderButton from '@/components/WhatsAppOrderButton';
import MenuItemCard from '@/components/MenuItemCard';

export async function generateStaticParams() {
  return menuItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const item = getItemBySlug(params.slug);
  if (!item) return {};
  return {
    title: `${item.name} — GreenBite`,
    description: `${item.tagline || item.description} · ₹${item.price}. Order ${item.name} on WhatsApp from GreenBite, Delhi.`,
    alternates: { canonical: `https://greenbite.in/menu/${item.slug}` },
    openGraph: {
      title: `${item.name} — GreenBite`,
      description: item.tagline || item.description,
      type: 'website',
    },
  };
}

export default function ItemDetailPage({ params }) {
  const item = getItemBySlug(params.slug);
  if (!item) notFound();

  const related = getRelatedItems(item, 3);

  const nutritionItems = [
    { label: 'Calories', value: item.nutrition.calories, unit: 'kcal', color: 'border-gbyellow' },
    { label: 'Protein', value: item.nutrition.protein, unit: '', color: 'border-gbgreen' },
    { label: 'Carbs', value: item.nutrition.carbs, unit: '', color: 'border-gbred' },
    { label: 'Fat', value: item.nutrition.fat, unit: '', color: 'border-gray-300' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-sm font-dm text-gray-400">
          <Link href="/" className="hover:text-gbgreen transition-colors">Home</Link>
          <span>/</span>
          <Link href="/menu" className="hover:text-gbgreen transition-colors">Menu</Link>
          <span>/</span>
          <span className="text-gbblack font-medium truncate">{item.name}</span>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* TOP HERO */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start mb-12">
          {/* Image */}
          <div
            className="w-full sm:w-72 h-64 sm:h-72 rounded-3xl flex items-center justify-center text-[7rem] shrink-0 shadow-sm"
            style={{ backgroundColor: item.color }}
          >
            {item.image ? (
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            ) : (
              <span className="select-none drop-shadow-lg">{item.emoji}</span>
            )}
          </div>

          {/* Details */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-3">
              {item.protein && item.protein !== '0g' && (
                <span className="bg-gbyellow text-gbblack font-syne font-extrabold text-sm px-3 py-1 rounded-full">
                  Protein {item.protein}
                </span>
              )}
              {item.badge && (
                <span className="bg-gbred text-white font-dm font-semibold text-xs px-3 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>

            <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-gbblack mb-2 leading-tight">
              {item.name}
            </h1>

            <p className="font-dm text-gray-500 text-sm mb-1">
              <span className="font-semibold text-gbblack">{item.nutrition.calories} Cal.</span>
            </p>
            <p className="font-dm text-gray-400 text-sm italic mb-5">
              {item.tagline || item.description.substring(0, 80)}
            </p>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-syne font-extrabold text-4xl text-gbblack">₹{item.price}</span>
              {item.originalPrice && (
                <span className="text-base text-gray-400 line-through font-dm">₹{item.originalPrice}</span>
              )}
            </div>

            <WhatsAppOrderButton itemName={item.name} price={item.price} />
          </div>
        </div>

        {/* INGREDIENTS */}
        <section className="mb-12">
          <h2 className="font-syne font-bold text-2xl text-gbblack mb-6">
            What Goes In
          </h2>
          <div className="flex flex-wrap gap-4">
            {item.ingredients.map((ingredient, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gbgray flex items-center justify-center text-3xl sm:text-4xl shadow-sm border border-gray-100">
                  🧂
                </div>
                <span className="text-xs font-dm text-gray-500 text-center max-w-[72px] leading-tight">
                  {ingredient}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* NUTRITION */}
        <section className="mb-12">
          <h2 className="font-syne font-bold text-2xl text-gbblack mb-6">
            Nutrition Info
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
            {nutritionItems.map(({ label, value, color }) => (
              <div
                key={label}
                className={`bg-white rounded-2xl border-t-4 ${color} border border-gray-100 shadow-sm p-4 text-center`}
              >
                <p className="font-syne font-extrabold text-2xl text-gbblack">{value}</p>
                <p className="font-dm text-xs text-gray-400 mt-1">{label}</p>
              </div>
            ))}
          </div>
          {item.nutrition.fiber && (
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <span className="text-gbgreen font-syne font-bold text-sm">Fiber:</span>
              <span className="font-dm text-sm text-gray-600">{item.nutrition.fiber}</span>
            </div>
          )}
        </section>

        {/* QR CODE SECTION – UPI Payment */}
        <section className="mb-12 py-6 border-t border-gray-100 text-center">
          <h2 className="font-syne font-bold text-2xl text-gbblack mb-4">
            Quick UPI Payment
          </h2>
          <p className="font-dm text-gray-600 mb-4">
            Scan this QR code to pay via Google Pay, PhonePe, or Paytm.
          </p>
          <div className="flex justify-center">
            <div className="relative w-48 h-48 border-4 border-gbgreen/20 rounded-2xl p-2 bg-white shadow-md">
              <Image
                src="/qr.jpeg"
                alt="UPI QR Code"
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            After payment, send screenshot on WhatsApp with your order.
          </p>
        </section>

        {/* RELATED ITEMS */}
        {related.length > 0 && (
          <section>
            <h2 className="font-syne font-bold text-2xl text-gbblack mb-6">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((rel) => (
                <MenuItemCard key={rel.slug} item={rel} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}