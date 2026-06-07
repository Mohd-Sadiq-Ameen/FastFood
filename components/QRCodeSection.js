// components/QRCodeSection.js
'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function QRCodeSection({ isPage = false }) {
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState(false);

  // Form state
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    orderDetails: '',
  });

  const phoneNumber = '918700629458'; // WhatsApp business number
  const upiId = '8700629458@okhdfcbank';
  const mobileForPayment = '8700629458';

  const copyUpiId = () => {
    navigator.clipboard.writeText(upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const copyMobileNumber = () => {
    navigator.clipboard.writeText(mobileForPayment);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 2000);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateWhatsAppMessage = () => {
    const message = `New Order from GreenBite
  
Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}
Order: ${form.orderDetails}

Payment will be made via UPI. I will share the screenshot after payment.

Please confirm and deliver within 30 mins.`;
    return encodeURIComponent(message);
  };

  const handleSubmitOrder = () => {
    if (!form.name || !form.phone || !form.address || !form.orderDetails) {
      alert('Please fill all fields before placing order.');
      return;
    }
    const waUrl = `https://wa.me/${phoneNumber}?text=${generateWhatsAppMessage()}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section className={`${isPage ? 'py-16' : 'py-14 sm:py-16'} bg-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-gbgreen font-dm font-semibold text-sm uppercase tracking-wider mb-1">
            Easy Payment
          </p>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-gbblack">
            Scan & Pay in Seconds
          </h2>
          <p className="font-dm text-gray-500 mt-3 max-w-xl mx-auto">
            Choose any option – QR, UPI ID, or pay directly to mobile number. Then fill the form and confirm.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT: Payment options */}
          <div className="space-y-8">
            {/* Option 1: QR Code */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <h3 className="font-syne font-bold text-xl text-gbblack mb-4">📱 Scan QR Code</h3>
              <div className="relative w-48 h-48 mx-auto border-4 border-gbgreen/20 rounded-2xl p-2 bg-white shadow-md">
                <Image
                  src="/qr.jpeg"
                  alt="UPI QR Code"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-3 text-sm text-gray-500">Google Pay | PhonePe | Paytm</p>
            </div>

            {/* Option 2: UPI ID */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <h3 className="font-syne font-bold text-xl text-gbblack mb-2">💳 Pay via UPI ID</h3>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <code className="bg-white px-3 py-1 rounded-lg border text-sm font-mono">{upiId}</code>
                <button
                  onClick={copyUpiId}
                  className="text-gbgreen text-sm font-medium hover:underline"
                >
                  {copiedUpi ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">Use any UPI app to send payment.</p>
            </div>

            {/* Option 3: Pay to Mobile Number */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <h3 className="font-syne font-bold text-xl text-gbblack mb-2">📞 Pay to Mobile Number</h3>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <span className="bg-white px-3 py-1 rounded-lg border text-lg font-mono font-bold">{mobileForPayment}</span>
                <button
                  onClick={copyMobileNumber}
                  className="text-gbgreen text-sm font-medium hover:underline"
                >
                  {copiedNumber ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">Open PhonePe/GPay and send to this number.</p>
            </div>
          </div>

          {/* RIGHT: Order form + WhatsApp confirmation */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
            <h3 className="font-syne font-bold text-xl text-gbblack mb-4">Place Your Order</h3>
            <p className="text-sm text-gray-500 mb-4">
              Fill in your details, then click confirm. You will be redirected to WhatsApp with a pre-filled message. After payment, send the screenshot – we will deliver within 30 minutes.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-dm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gbgreen"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-dm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gbgreen"
                  placeholder="9876543210"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-dm font-medium text-gray-700 mb-1">Delivery Address *</label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows="2"
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gbgreen"
                  placeholder="House No., Street, Landmark, City"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-dm font-medium text-gray-700 mb-1">What would you like to order? *</label>
                <textarea
                  name="orderDetails"
                  value={form.orderDetails}
                  onChange={handleChange}
                  rows="2"
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gbgreen"
                  placeholder="e.g., 1x Margherita Pizza, 1x Veg Burger, 1x Small Catch Cola"
                  required
                />
              </div>

              <button
                onClick={handleSubmitOrder}
                className="w-full bg-gbgreen hover:bg-green-600 text-white font-syne font-bold py-3 rounded-full transition-all duration-300 shadow-md mt-2"
              >
                Confirm Order on WhatsApp →
              </button>
            </div>

            <div className="mt-6 text-xs text-gray-400 text-center border-t pt-4">
              <p>After payment, send the screenshot on WhatsApp. We will confirm and deliver in under 30 mins.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-400 border-t pt-6">
          <p>🔒 Secure payment – we never store your card or UPI details.</p>
        </div>
      </div>
    </section>
  );
}