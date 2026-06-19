'use client';

import useCart from '@/hooks/useCart';

export default function OrderSummary() {
  const {
    cart,

    totalPrice,
  } = useCart();

  return (
    <div className="sticky top-24 rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">Order Summary</h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.slug} className="flex justify-between">
            <p>
              {item.name}x {item.quantity}
            </p>

            <p>₹{item.price * item.quantity}</p>
          </div>
        ))}
      </div>

      <hr className="my-5" />

      <div className="flex justify-between">
        <p>Total</p>

        <p className="font-bold">₹{totalPrice}</p>
      </div>
    </div>
  );
}
