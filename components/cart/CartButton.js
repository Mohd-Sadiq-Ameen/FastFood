'use client';

import useCart from '@/hooks/useCart';

export default function CartButton() {
  const { totalItems, setOpen } = useCart();

  if (totalItems === 0) {
    return null;
  }

  return (
    <button
      onClick={() => setOpen(true)}
      className="relative flex h-11 w-11 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:scale-105 active:scale-95"
    >
      <span className="text-xl">🛒</span>

      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
        {totalItems}
      </span>
    </button>
  );
}
