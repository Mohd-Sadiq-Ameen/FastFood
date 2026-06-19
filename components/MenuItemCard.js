'use client';

import Link from 'next/link';
import Image from 'next/image';

import useCart from '@/hooks/useCart';

export default function MenuItemCard({ item }) {
  const { addItem, increase, decrease, getQuantity } = useCart();

  const quantity = getQuantity(item.slug);

  return (
    <div className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white transition duration-300 hover:shadow-xl">
      <Link href={`/menu/${item.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width:768px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute left-3 top-3">
            <span className="rounded-full bg-black/70 px-2 py-1 text-xs font-semibold text-white">
              ⭐ 4.8
            </span>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <h3 className="line-clamp-1 text-lg font-bold">{item.name}</h3>

        <p className="mt-1 line-clamp-2 text-sm text-zinc-500">{item.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-2xl font-black">₹{item.price}</p>
          </div>

          <div>
            {quantity === 0 ? (
              <button
                onClick={() => addItem(item)}
                className="rounded-xl border-2 border-green-500 px-5 py-2 font-bold text-green-600 transition hover:bg-green-50"
              >
                ADD
              </button>
            ) : (
              <div className="flex items-center gap-3 rounded-xl border border-zinc-300 px-3 py-2">
                <button onClick={() => decrease(item.slug)} className="text-lg font-bold">
                  -
                </button>

                <span className="font-bold">{quantity}</span>

                <button
                  onClick={() => increase(item.slug)}
                  className="text-lg font-bold text-green-600"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
