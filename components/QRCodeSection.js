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

  const phoneNumber = '918700629458';
  const upiId = '8700629458@okhdfcbank';
  const mobileForPayment = '8700629458';

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
    window.open(
      `https://wa.me/${phoneNumber}?text=${generateWhatsAppMessage()}`,
      '_blank'
    );
  };

  return (
    <section className="bg-zinc-50 py-16">
      <div className="max-w-7xl mx-auto px-5">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Pay & Order in Seconds
          </h2>
          <p className="text-zinc-500 mt-2 max-w-xl mx-auto text-sm">
            Scan QR, use UPI, or place order directly via WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT - PAYMENT OPTIONS */}
          <div className="space-y-6">

            {/* QR CARD (PRIMARY) */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-100 text-center">
              <h3 className="font-semibold mb-4">Scan & Pay</h3>

              <div className="relative w-52 h-52 mx-auto">
                <Image
                  src="/qr.jpeg"
                  alt="QR Code"
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-xs text-zinc-500 mt-3">
                Google Pay • PhonePe • Paytm
              </p>
            </div>

            {/* UPI + MOBILE (SECONDARY GRID) */}
            <div className="grid sm:grid-cols-2 gap-4">

              <div className="bg-white rounded-2xl p-4 border border-zinc-100">
                <p className="text-sm font-semibold">UPI ID</p>
                <p className="text-xs text-zinc-500 mt-1 break-all">
                  {upiId}
                </p>
                <button
                  onClick={copyUpiId}
                  className="text-green-600 text-xs mt-2"
                >
                  {copiedUpi ? '✓ Copied' : 'Copy'}
                </button>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-zinc-100">
                <p className="text-sm font-semibold">Mobile Pay</p>
                <p className="text-xs text-zinc-500 mt-1">
                  {mobileForPayment}
                </p>
                <button
                  onClick={copyMobileNumber}
                  className="text-green-600 text-xs mt-2"
                >
                  {copiedNumber ? '✓ Copied' : 'Copy'}
                </button>
              </div>

            </div>
          </div>

          {/* RIGHT - ORDER CARD */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-6">

            <h3 className="text-xl font-bold mb-4">
              Place Your Order
            </h3>

            <div className="space-y-4">

              <input
                name="name"
                placeholder="Full Name"
                className="w-full border rounded-xl px-4 py-3 text-sm"
                onChange={handleChange}
              />

              <input
                name="phone"
                placeholder="Phone Number"
                className="w-full border rounded-xl px-4 py-3 text-sm"
                onChange={handleChange}
              />

              <textarea
                name="address"
                placeholder="Delivery Address"
                className="w-full border rounded-xl px-4 py-3 text-sm"
                onChange={handleChange}
              />

              <textarea
                name="orderDetails"
                placeholder="What do you want?"
                className="w-full border rounded-xl px-4 py-3 text-sm"
                onChange={handleChange}
              />

              <button
                onClick={handleSubmitOrder}
                className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-zinc-800"
              >
                Confirm Order on WhatsApp →
              </button>

            </div>

            <p className="text-xs text-zinc-400 mt-4 text-center">
              Delivery in ~30 minutes after confirmation
            </p>

          </div>
        </div>

        {/* TRUST STRIP */}
        <div className="mt-10 flex justify-center gap-4 text-xs text-zinc-500 flex-wrap">
          <span>⚡ Fast Delivery</span>
          <span>🔒 Secure Payment</span>
          <span>🍕 Fresh Food</span>
        </div>

      </div>
    </section>
  );
}