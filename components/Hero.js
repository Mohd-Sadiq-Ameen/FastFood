// components/Hero.js
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#ffffff]">
      <div className="mx-auto max-w-7xl px-5 py-8 md:py-12">
        {/* Heading */}
        <div className="text-center">
          <h1 className="mx-auto max-w-[420px] font-mono text-[40px] font-bold leading-[0.95] tracking-tighter sm:text-5xl lg:text-7xl">
            Are You
            <span className="ml-3 text-yellow-500">Hungry!</span>
            <br />
            What Are You Waiting For?
          </h1>

          <p className="mx-auto mt-2 max-w-[440px] text-sm text-zinc-600 sm:text-base">
            Freshly prepared Pizzas, Burgers, Fries, Momos & Cold Drinks – delivered hot from Thala
            Cafe.
          </p>
        </div>

        {/* Pizza Image */}
        <div className="mt-2 flex justify-center">
          <div className="relative aspect-square w-[280px] sm:w-[320px] md:w-[420px]">
            {/* Glow */}
            <div className="absolute inset-0 scale-110 rounded-full bg-orange-100/40 blur-2xl" />
            <Image
              src="/pizza.png"
              alt="Fresh Pizza"
              fill
              priority
              className="relative z-10 object-contain"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mx-auto mt-4 flex max-w-sm flex-col gap-3 sm:flex-row md:mt-6">
          <Link
            href="/menu"
            className="rounded-full bg-yellow-400 px-6 py-3 text-center font-bold text-black shadow-lg transition hover:scale-105 hover:bg-yellow-500 sm:px-8 sm:py-4 md:px-3 md:py-4"
          >
            Explore Menu →
          </Link>

          <a
            href="https://wa.me/918700629458?text=Hi%20Thala%20Cafe!%20I%20want%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-black px-6 py-3 text-center font-bold transition hover:bg-black hover:text-white sm:px-8 sm:py-4"
          >
            Order on WhatsApp
          </a>
        </div>

        {/* Feature Grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-2xl border border-zinc-100 bg-gradient-to-br from-white to-zinc-50 p-4 text-center shadow-sm transition hover:shadow-md">
            <div className="text-2xl">🌱</div>
            <div className="mt-1 text-sm font-semibold">Fresh Daily</div>
          </div>

          <div className="rounded-2xl border border-zinc-100 bg-gradient-to-br from-white to-zinc-50 p-4 text-center shadow-sm transition hover:shadow-md">
            <div className="text-2xl">🚚</div>
            <div className="mt-1 text-sm font-semibold">Fast Delivery</div>
          </div>

          <div className="rounded-2xl border border-zinc-100 bg-gradient-to-br from-white to-zinc-50 p-4 text-center shadow-sm transition hover:shadow-md">
            <div className="text-2xl">⭐</div>
            <div className="mt-1 text-sm font-semibold">Top Rated</div>
          </div>

          <div className="rounded-2xl border border-zinc-100 bg-gradient-to-br from-white to-zinc-50 p-4 text-center shadow-sm transition hover:shadow-md">
            <div className="text-2xl">💰</div>
            <div className="mt-1 text-sm font-semibold">Affordable</div>
          </div>
        </div>
      </div>
    </section>
  );
}
