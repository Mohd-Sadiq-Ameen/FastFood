import Image from 'next/image';

export default function Reviews() {
  return (
    <section className="bg-zinc-50 py-10">

      <div className="max-w-7xl mx-auto px-5">

        {/* HEADER */}
        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.3em] text-yellow-500 font-semibold text-xs">
            Customer Reviews
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Loved by Local Foodies
          </h2>

          <p className="text-zinc-600 mt-4 max-w-xl mx-auto text-sm">
            Real feedback from customers who ordered from Thala Cafe.
          </p>

        </div>

        {/* RATING */}
        <div className="flex justify-center mb-5">
          <Image
            src="/rating.png"
            alt="Rating"
            width={250}
            height={60}
            className="h-auto"
          />
        </div>

        {/* REVIEWS GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {['review1.png', 'review2.png', 'review3.png'].map((img, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden group"
            >

              <div className="relative w-full aspect-[4/3] bg-white">

                <Image
                  src={`/${img}`}
                  alt="Customer review"
                  fill
                  className="
                    object-contain
                    p-3
                    transition-transform
                    duration-300
                    group-hover:scale-[1.02]
                  "
                />

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}