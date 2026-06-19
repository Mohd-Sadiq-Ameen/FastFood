'use client';

import Image from 'next/image';
import useCart from '@/hooks/useCart';

export default function CartItem({ item }) {
  const { increase, decrease, removeItem } = useCart();

  return (
    <div className="flex gap-4 border-b border-zinc-100 py-5">
      {/* IMAGE */}

      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-zinc-100">
        <Image src={item.image} alt={item.name} fill sizes="96px" className="object-cover" />
      </div>

      {/* CONTENT */}

      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-zinc-900">{item.name}</h3>

            <p className="mt-1 text-sm text-zinc-500">₹{item.price}</p>
          </div>

          <button
            onClick={() => removeItem(item.slug)}
            className="text-zinc-400 hover:text-red-500"
          >
            ✕
          </button>
        </div>

        {/* QUANTITY */}

        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => decrease(item.slug)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white hover:bg-zinc-100"
          >
            −
          </button>

          <span className="min-w-[20px] text-center font-bold">{item.quantity}</span>

          <button
            onClick={() => increase(item.slug)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white hover:bg-zinc-800"
          >
            +
          </button>
        </div>

        {/* SUBTOTAL */}

        <div className="mt-3">
          <span className="font-semibold">₹{item.price * item.quantity}</span>
        </div>
      </div>
    </div>
  );
}
