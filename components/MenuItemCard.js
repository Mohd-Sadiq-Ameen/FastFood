import Link from 'next/link';
import Image from 'next/image';

export default function MenuItemCard({ item }) {
  const waMsg = encodeURIComponent(
    `🍽️ *New Order from GreenBite*\n\n📦 *Ordered:* ${item.name}\n💰 *Amount to Pay:* ₹${item.price}\n\nPlease confirm my order! I'll share my delivery address. 🙏`
  );
  const waUrl = `https://wa.me/918700629458?text=${waMsg}`;

  // Determine top badge text: protein if exists and not 0g, else fat from nutrition
  let topBadge = '';
  if (item.protein && item.protein !== '0g') {
    topBadge = `Protein ${item.protein}`;
  } else if (item.nutrition?.fat) {
    topBadge = `Fat ${item.nutrition.fat}`;
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gbgreen/30 transition-all duration-200 overflow-hidden group flex flex-col">
      {/* Image area with link to details page */}
      <Link href={`/menu/${item.slug}`} aria-label={item.name}>
        <div className="relative h-44 cursor-pointer overflow-hidden" style={{ backgroundColor: item.color || '#f3f4f6' }}>
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-7xl">
              {item.emoji || '🍕'}
            </div>
          )}

          {/* Top badge (protein or fat) */}
          {topBadge && (
            <div className="absolute top-2 left-2">
              <span className="bg-gbyellow text-gbblack text-xs font-serif font-bold px-2 py-0.5 rounded-full leading-tight">
                {topBadge}
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Content – only price and order button, centered */}
      <div className="p-4 flex flex-col items-center">
        <span className="font-serif font-extrabold text-2xl text-gbblack">
          ₹{item.price}
        </span>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mt-3 bg-gbgreen hover:bg-green-600 active:scale-95 text-white font-bold py-3 rounded-full transition-all duration-150 text-center"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}