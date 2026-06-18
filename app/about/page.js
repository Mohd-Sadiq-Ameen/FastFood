import Link from 'next/link'

export const metadata = {
  title: 'About Us — GreenBite',
  description:
    'GreenBite was started in Delhi to bring fresh, honest fast food to your doorstep. No frozen shortcuts — just real ingredients, made fresh every day.',
  alternates: { canonical: 'https://greenbite.in/about' },
}

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-gbgray border-b border-gray-100 py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block w-2 h-8 bg-gbgreen rounded-full mb-6" aria-hidden />
          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl text-gbblack mb-5 leading-tight">
            Who We Are
          </h1>
          <p className="font-dm text-gray-500 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            GreenBite started with a simple idea — serve food we&apos;d be proud to eat ourselves.
            No frozen patties, no chemical sauces. Just fresh ingredients, made to order, delivered fast.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gbgreen font-dm font-semibold text-sm uppercase tracking-wider mb-2">Our Story</p>
            <h2 className="font-serif font-extrabold text-2xl sm:text-3xl text-gbblack mb-4">
              Started in Delhi, Serving Smiles Since 2022
            </h2>
            <p className="font-dm text-gray-500 text-sm sm:text-base leading-relaxed mb-4">
              We grew up eating street-style burgers and neighbourhood pizzas in Delhi. When we couldn&apos;t find something that felt both premium and honest, we built it ourselves.
            </p>
            <p className="font-dm text-gray-500 text-sm sm:text-base leading-relaxed">
              Today, hundreds of Delhi families trust GreenBite for their weekly cravings &mdash; ordering in three taps on WhatsApp, no apps needed.
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-green-50 to-yellow-50 h-56 sm:h-64 flex items-center justify-center text-8xl shadow-sm">
            🍕
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gbgray py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-gbgreen font-dm font-semibold text-sm uppercase tracking-wider mb-1">What We Stand For</p>
            <h2 className="font-serif font-extrabold text-2xl sm:text-3xl text-gbblack">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: '🌿', title: 'Farm Fresh', desc: 'Ingredients sourced every morning. No compromise on freshness.' },
              { icon: '🔥', title: 'Made to Order', desc: 'Nothing sits under heat lamps. Your order is made when you place it.' },
              { icon: '📦', title: 'Delivered Hot', desc: 'Packed and dispatched within minutes. Your food arrives as intended.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="font-serif font-bold text-lg text-gbblack mb-1">{title}</h3>
                <p className="font-dm text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-wrap justify-center gap-6 text-sm font-dm text-gray-500">
          {['⭐ 4.8 Google Rating', '500+ Happy Customers', '🔒 Safe WhatsApp Ordering', '🚚 20 Min Delivery', '✅ FSSAI Certified Kitchen'].map((t) => (
            <span key={t} className="bg-gbgray px-4 py-2 rounded-full border border-gray-200">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 text-center">
        <h2 className="font-serif font-extrabold text-2xl sm:text-3xl text-gbblack mb-4">
          Ready to taste the difference?
        </h2>
        <Link
          href="/menu"
          className="inline-block bg-gbgreen hover:bg-green-600 active:scale-95 text-white font-serif font-bold text-base px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
        >
          Explore Our Menu →
        </Link>
      </section>
    </div>
  )
}
