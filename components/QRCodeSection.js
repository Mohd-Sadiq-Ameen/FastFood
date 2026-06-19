'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function QRCodeSection({ isPage = false }) {
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState(false);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    orderDetails: '',
  });

  const phoneNumber = '918707515005';
  const mobileForPayment = '8707515005';

  const copyUpiId = () => {
    navigator.clipboard.writeText(upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 1500);
  };

  const copyMobileNumber = () => {
    navigator.clipboard.writeText(mobileForPayment);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 1500);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateWhatsAppMessage = () => {
    return encodeURIComponent(`
New Order - Thala Cafe

Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}
Order: ${form.orderDetails}

Payment via UPI. Will send screenshot after payment.
    `);
  };

  const handleSubmitOrder = () => {
    if (!form.name || !form.phone || !form.address || !form.orderDetails) {
      alert('Please complete all fields');
      return;
    }
    window.open(`https://wa.me/${phoneNumber}?text=${generateWhatsAppMessage()}`, '_blank');
  };

  return (
    <section className="bg-zinc-50 py-16">
      <div className="mx-auto max-w-7xl px-5">
        {/* HEADER */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Pay & Order in Seconds</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-500">
            Scan QR, use UPI, or place order directly via WhatsApp.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT - PAYMENT OPTIONS */}
          <div className="space-y-6">
            {/* QR CARD (PRIMARY) */}
            <div className="rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-sm">
              <h3 className="mb-4 font-semibold">Scan & Pay</h3>

              <div className="relative mx-auto h-52 w-52">
                <Image src="/qr.png" alt="QR Code" fill className="object-contain" />
              </div>

              <p className="mt-3 text-xs text-zinc-500">Google Pay • PhonePe • Paytm</p>
            </div>

            {/* UPI + MOBILE (SECONDARY GRID) */}
            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-zinc-100 bg-white p-4">
                <p className="text-sm font-semibold">Mobile Pay</p>
                <p className="mt-1 text-xs text-zinc-500">{mobileForPayment}</p>
                <button onClick={copyMobileNumber} className="mt-2 text-xs text-green-600">
                  {copiedNumber ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT - ORDER CARD */}
          <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold">Place Your Order</h3>

            <div className="space-y-4">
              <input
                name="name"
                placeholder="Full Name"
                className="w-full rounded-xl border px-4 py-3 text-sm"
                onChange={handleChange}
              />

              <input
                name="phone"
                placeholder="Phone Number"
                className="w-full rounded-xl border px-4 py-3 text-sm"
                onChange={handleChange}
              />

              <textarea
                name="address"
                placeholder="Delivery Address"
                className="w-full rounded-xl border px-4 py-3 text-sm"
                onChange={handleChange}
              />

              <textarea
                name="orderDetails"
                placeholder="What do you want?"
                className="w-full rounded-xl border px-4 py-3 text-sm"
                onChange={handleChange}
              />

              <button
                onClick={handleSubmitOrder}
                className="w-full rounded-xl bg-black py-3 font-semibold text-white hover:bg-zinc-800"
              >
                Confirm Order on WhatsApp →
              </button>
            </div>

            <p className="mt-4 text-center text-xs text-zinc-400">
              Delivery in ~30 minutes after confirmation
            </p>
          </div>
        </div>

        {/* TRUST STRIP */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-xs text-zinc-500">
          <span>⚡ Fast Delivery</span>
          <span>🔒 Secure Payment</span>
          <span>🍕 Fresh Food</span>
        </div>
      </div>
    </section>
  );
}
