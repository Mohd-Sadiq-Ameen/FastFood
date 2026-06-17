import Link from 'next/link';
import Image from 'next/image';

export default function MenuItemCard({ item }) {
  const waMsg = encodeURIComponent(
    `🍽️ *New Order from Thala Cafe*\n\n📦 *Item:* ${item.name}\n💰 *Price:* ₹${item.price}\n\nPlease confirm my order 🙏`
  );

  const waUrl = `https://wa.me/918707515005?text=${waMsg}`;

  let macroBadge = null;

  if (item.protein && item.protein !== '0g') {
    macroBadge = `🔥 Protein ${item.protein}`;
  } else if (item.nutrition?.fat) {
    macroBadge = `⚡ Fat ${item.nutrition.fat}`;
  }

  return (
    <div className="bg-white rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">

      {/* IMAGE */}
      <Link href={`/menu/${item.slug}`}>
        <div className="relative aspect-[4/3] bg-zinc-50 overflow-hidden">

          {/* MACRO BADGE */}
          {macroBadge && (
            <div className="absolute top-3 right-3 z-10">
              <span className="bg-yellow-400 text-black text-[10px] px-2 py-1 rounded-full font-bold">
                {macroBadge}
              </span>
            </div>
          )}

          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">
              {item.emoji || '🍕'}
            </div>
          )}

        </div>
      </Link>

      {/* CONTENT */}
      <div className="p-4 flex flex-col gap-2">

        <h3 className="font-serif font-bold text-lg text-zinc-900 leading-snug">
          {item.name}
        </h3>

        {item.desc && (
          <p className="text-xs text-zinc-500 line-clamp-2">
            {item.desc}
          </p>
        )}

        <div className="flex items-center justify-between mt-2">

          <span className="text-xl font-extrabold text-black">
            ₹{item.price}
          </span>

        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 w-full bg-black hover:bg-zinc-800 text-white font-semibold py-3 rounded-xl text-center transition-all active:scale-95"
        >
          Order Now →
        </a>

      </div>
    </div>
  );
}