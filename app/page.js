import Link from 'next/link';
import Image from 'next/image';
import HomeMenuSection from '@/components/HomeMenuSection';
import QRCodeSection from '@/components/QRCodeSection';
import DeliveryChecker from '@/components/DeliveryChecker';

export const metadata = {
  title: 'GreenBite | Fresh Pizza, Juicy Burgers & Ice Cold Campa – Delivered Fast',
  description:
    'Order premium pizza, juicy burgers, and Campa drinks online. Fast delivery and WhatsApp ordering in Delhi.',
  keywords: ['pizza', 'burger', 'campa', 'fast food', 'food delivery', 'greenbite', 'delhi'],
  openGraph: {
    title: 'GreenBite',
    description: 'Fresh Pizza, Juicy Burgers & Ice Cold Campa Delivered Hot & Fresh Every Day.',
    images: ['/pizza.png'],
  },
};

function Badge({ text, bgColor, textColor = 'white' }) {
  return (
    <div
      className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-md inline-flex items-center gap-1 whitespace-nowrap"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {text}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section – your original content */}
      <section className="bg-white min-h-[85vh] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="font-bold font-black text-5xl sm:text-5xl md:text-7xl lg:text-7xl leading-[0.95] text-gbblack mb-4 sm:mb-6">
                Are You <span className="text-red-600">Hungry !</span>
                <br />
                What Are You<br />
                Waiting For ?
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 mt-4 mb-6 sm:mb-8">
                Delivered <span className="text-red-600">Hot</span> & <span className="text-[#25D366]">Fresh</span> Every Day.
              </p>

              {/* Mobile/tablet image */}
              <div className="w-full flex justify-center lg:hidden mb-6 sm:mb-8">
                <div className="relative w-full max-w-sm sm:max-w-md aspect-square">
                  <Image
                    src="/pizza.png"
                    alt="Premium Fresh Pizza"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, 50vw"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
                <Link
                  href="/menu"
                  className="w-full sm:w-auto bg-gbgreen hover:scale-105 hover:shadow-xl text-white font-syne font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 active:scale-95 text-center shadow-md"
                >
                  Explore Menu →
                </Link>
                <a
                  href="https://wa.me/918700629458?text=Hi%20GreenBite!%20I%20want%20to%20place%20an%20order%20%F0%9F%8D%95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto border-2 border-gbblack text-gbblack hover:bg-gbblack hover:text-white font-syne font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 active:scale-95 text-center"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>

            {/* Desktop image */}
            <div className="hidden lg:flex relative items-center justify-center">
              <div className="relative w-full max-w-4xl xl:max-w-5xl aspect-square mx-auto">
                <Image
                  src="/pizza.png"
                  alt="Premium Fresh Pizza"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 1024px) 50vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badges Row – your exact order */}
      <div className="bg-white -mt-4 sm:-mt-6 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            <Badge text="⭐ 5.0 Rating" bgColor="#facc15" textColor="#1e293b" />
            <Badge text="⚡ Less than 30 min delivery" bgColor="#ef4444" />
            <Badge text="🚚 Free Delivery" bgColor="#3b82f6" />
            <Badge text="🌱 Fresh Ingredients" bgColor="#22c55e" />
          </div>
        </div>
      </div>

      <DeliveryChecker />

      {/* Featured Menu Section – shows first 6 bestsellers */}
      <HomeMenuSection featuredOnly={true} maxItems={6} />



      {/* Why GreenBite */}
      <section className="bg-gbgray py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Trust stats strip */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8 text-sm font-medium text-gbblack">
            <span className="flex items-center gap-1">✓ 100% Halal</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span className="flex items-center gap-1">✓ Fresh Daily</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span className="flex items-center gap-1">✓ Fast Delivery</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span className="flex items-center gap-1">✓ Secure Ordering</span>
          </div>

          {/* Section header */}
          <div className="text-center mb-10">
            <p className="text-gbgreen font-dm font-semibold text-sm uppercase tracking-wider mb-1">
              TRUSTED BY LOCAL FOOD LOVERS
            </p>
            <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-gbblack">
              Fresh Food. Fast Delivery. 100% Halal.
            </h2>
            <p className="font-dm text-gray-500 mt-3 max-w-xl mx-auto">
              Everything is prepared fresh, delivered quickly and made with ingredients you can trust.
            </p>
          </div>

          {/* 5 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
            {/* Card 1: Halal Certified */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-gbgreen/10 flex items-center justify-center text-3xl mx-auto mb-4">✓</div>
              <h3 className="font-syne font-bold text-lg text-gbblack mb-2">100% Halal Certified</h3>
              <p className="font-dm text-sm text-gray-500 leading-relaxed">Every meat item is sourced from trusted halal suppliers. No alcohol, no pork, no non‑halal ingredients.</p>
            </div>
            {/* Card 2: Kitchen Hygiene */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-gbgreen/10 flex items-center justify-center text-3xl mx-auto mb-4">🧼</div>
              <h3 className="font-syne font-bold text-lg text-gbblack mb-2">Kitchen Hygiene First</h3>
              <p className="font-dm text-sm text-gray-500 leading-relaxed">Prepared in a clean, sanitised kitchen using food‑safe handling practices from preparation to delivery.</p>
            </div>
            {/* Card 3: Hot & Fast Delivery */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-gbgreen/10 flex items-center justify-center text-3xl mx-auto mb-4">⚡</div>
              <h3 className="font-syne font-bold text-lg text-gbblack mb-2">Hot & Fast Delivery</h3>
              <p className="font-dm text-sm text-gray-500 leading-relaxed">Freshly prepared and delivered quickly so your food arrives hot, not soggy.</p>
            </div>
            {/* Card 4: Fresh Ingredients Daily */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-gbgreen/10 flex items-center justify-center text-3xl mx-auto mb-4">🌱</div>
              <h3 className="font-syne font-bold text-lg text-gbblack mb-2">Fresh Ingredients Daily</h3>
              <p className="font-dm text-sm text-gray-500 leading-relaxed">We use fresh ingredients and prepare meals daily for better taste and quality.</p>
            </div>
            {/* Card 5: Value for Money */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-gbgreen/10 flex items-center justify-center text-3xl mx-auto mb-4">💰</div>
              <h3 className="font-syne font-bold text-lg text-gbblack mb-2">Value for Money</h3>
              <p className="font-dm text-sm text-gray-500 leading-relaxed">Big portions, fair prices and combo meals designed to give more value in every order.</p>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-1 bg-white rounded-full px-5 py-2 shadow-sm border border-gray-100">
              <span className="font-dm font-semibold text-gbblack ml-2">⭐️ Rated 5.0</span>
              <span className="text-gray-400 text-sm mx-1">by</span>
              <span className="font-syne font-bold text-gbblack">Many customers</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-5 text-sm font-medium text-gray-600">
              <span>✓ 100% Halal Certified</span>
              <span>✓ Freshly Prepared</span>
              <span>✓ Fast Delivery</span>
              <span>✓ Secure WhatsApp Ordering</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials – now displaying only the images (review1,2,3.png) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="text-center mb-10">
          <p className="text-gbgreen font-dm font-semibold text-sm uppercase tracking-wider mb-1">
            Reviews
          </p>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-gbblack">
            What People Say
          </h2>
        </div>

        {/* Rating summary image */}
        <div className="flex justify-center mb-12">
          <Image
            src="/rating.png"
            alt="5 star rating"
            width={200}
            height={40}
            className="h-auto w-auto"
          />
        </div>

        {/* Grid of review images – no extra text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <Image
              src="/review1.png"
              alt="Customer review 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <Image
              src="/review2.png"
              alt="Customer review 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <Image
              src="/review3.png"
              alt="Customer review 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <QRCodeSection />
    </>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}