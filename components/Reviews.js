import Image from 'next/image';

export default function Reviews() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
            CUSTOMER REVIEWS
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3">
            Loved By Local Foodies
          </h2>

          <p className="text-zinc-600 mt-4 max-w-xl mx-auto">
            Real customer reviews from people who ordered from Thala Cafe.
          </p>

        </div>

        <div className="flex justify-center mb-12">

          <Image
            src="/rating.png"
            alt="Rating"
            width={220}
            height={60}
            className="h-auto"
          />

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/review1.png"
              alt="Review"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/review2.png"
              alt="Review"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/review3.png"
              alt="Review"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>

    </section>
  );
}