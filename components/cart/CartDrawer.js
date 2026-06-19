'use client';

import Link from 'next/link';

import useCart from '@/hooks/useCart';

import CartItem from './Cartitem';

export default function CartDrawer() {
  const {
    cart,

    totalPrice,

    totalItems,

    open,

    setOpen,
  } = useCart();

  return (
    <>
      {/* Overlay */}

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm transition-all duration-300 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        } `}
      />

      {/* Drawer */}

      <div
        className={`fixed right-0 top-0 z-[110] h-screen w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        } `}
      >
        <div className="flex h-full flex-col">
          {/* Header */}

          <div className="flex items-center justify-between border-b px-5 py-5">
            <div>
              <h2 className="text-2xl font-black">Your Cart</h2>

              <p className="text-sm text-zinc-500">{totalItems} items</p>
            </div>

            <button onClick={() => setOpen(false)} className="text-2xl">
              ✕
            </button>
          </div>

          {/* Empty */}

          {cart.length === 0 && (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <div className="text-6xl">🛒</div>

              <h3 className="mt-4 text-xl font-bold">Cart Empty</h3>

              <p className="mt-2 text-zinc-500">Add delicious food first</p>

              <button
                onClick={() => setOpen(false)}
                className="mt-5 rounded-full bg-black px-6 py-3 text-white"
              >
                Browse Menu
              </button>
            </div>
          )}

          {/* Items */}

          {cart.length > 0 && (
            <>
              <div className="flex-1 overflow-y-auto px-5">
                {cart.map((item) => (
                  <CartItem key={item.slug} item={item} />
                ))}
              </div>

              {/* Footer */}

              <div className="sticky bottom-0 border-t bg-white p-5 shadow-lg">
                <div className="mb-4 flex justify-between">
                  <span>Subtotal</span>

                  <span className="font-bold">₹{totalPrice}</span>
                </div>

                <Link
                  href="/checkout"
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-2xl bg-black py-4 text-center font-bold text-yellow-400 transition hover:bg-zinc-900"
                >
                  Proceed To Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
