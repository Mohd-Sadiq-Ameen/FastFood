'use client';

import PaymentMethod from './PaymentMethod';

export default function CheckoutForm() {
  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">Delivery Details</h2>

      <div className="space-y-4">
        <input placeholder="Full Name" className="w-full rounded-xl border p-4" />

        <input placeholder="Phone Number" className="w-full rounded-xl border p-4" />

        <textarea placeholder="Full Address" rows={4} className="w-full rounded-xl border p-4" />
      </div>

      <div className="mt-10">
        <PaymentMethod />
      </div>
    </div>
  );
}
