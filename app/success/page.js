'use client';

import Link from 'next/link';

export default function SuccessPage() {
  // Temporary demo message
  // Later we'll build this dynamically

  const message = `🍕 *THALA CAFE ORDER*

━━━━━━━━━━━━━━

Payment : PAID ✅

Payment ID
pay_demo12345


Customer
Mohd Sadiq


Phone
8700629458


Address
S53/112 Gandhi Camp
Sriniwaspuri
Delhi


Items

1 × Margherita Pizza
₹199


1 × BBQ Chicken Pizza
₹329


━━━━━━━━━━━━━━

Total : ₹528


Please confirm my order 🙏`;

  const whatsappUrl = `https://wa.me/918707515005?text=${encodeURIComponent(message)}`;

  return (
    <section className="flex min-h-screen items-center justify-center bg-zinc-50 px-5">
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-xl">
        {/* Icon */}

        <div className="text-center">
          <div className="mb-5 text-6xl">✅</div>

          <h1 className="text-3xl font-black text-black">Payment Successful</h1>

          <p className="mt-3 text-zinc-500">
            Thank you for ordering from
            <span className="font-semibold text-black"> THALA CAFE</span>
          </p>

          <p className="mt-2 text-sm text-zinc-400">Your payment has been received successfully.</p>
        </div>

        {/* Next Step */}

        <div className="mt-8 rounded-2xl border border-yellow-200 bg-yellow-50 p-4">
          <h3 className="font-bold">Next Step</h3>

          <p className="mt-2 text-sm text-zinc-600">
            Send your order details to the restaurant so we can prepare your food immediately.
          </p>
        </div>

        {/* WhatsApp */}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 block w-full rounded-full bg-green-500 py-4 text-center font-bold text-white transition hover:bg-green-600"
        >
          📲 Send Order To Restaurant
        </a>

        {/* Home */}

        <Link
          href="/"
          className="mt-4 block w-full rounded-full bg-black py-4 text-center font-bold text-yellow-400"
        >
          Back Home
        </Link>
      </div>
    </section>
  );
}
