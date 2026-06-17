import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="bg-[#ffffff] overflow-hidden" >
            <div className="max-w-7xl mx-auto px-5 py-1">


                {/* Heading */}
                <div className="text-center mt-2">

                    <h1 className="
                    max-w-[400px]
                    mx-auto
                    font-mono
                    text-5xl
                    sm:text-5xl
                    lg:text-7xl
                    font-bold
                    leading-[0.95]
                    tracking-tighter

      ">

                        Are you
                        <span className="text-red-500 ml-4">
                            Hungry
                        </span> <br /> What are y Waiting for ?



                    </h1>

                    <p className="
      mt-2
      text-zinc-600
      max-w-[420px]
      mx-auto
      text-sm
      ">
                        Freshly prepared Pizzas , Burgers , Fries , Momos and Cold Campa
                        from Thala Cafe.
                    </p>

                </div>

                {/* Pizza Image */}
                <div className="flex justify-center mt-0">

                    <div className="
      relative
      w-[320px]
      sm:w-[280px]
      md:w-[380px]
      aspect-square
      ">

                        <div className="absolute inset-0 bg-orange-100/40 rounded-full blur-2xl scale-110" />

                        <Image
                            src="/pizza.png"
                            alt="Fresh Pizza"
                            fill
                            priority
                            className="
                                        object-contain object-cover 
                                        
                                        relative
                                        z-10
                                      
                                        "
                        />

                    </div>

                </div>

                {/* CTA */}
                <div className="
    mt-0
    flex
    flex-col
    gap-3
    max-w-sm
    mx-auto
    ">

                    <Link
                        href="/menu"
                        className="
        bg-yellow-400
        hover:bg-yellow-500
        text-black
        font-bold
        py-4
        rounded-full
        text-center
        shadow-lg
        "
                    >
                        Explore Menu →
                    </Link>

                    <a
                        href="https://wa.me/918700629458"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
        border-2
        border-black
        py-4
        rounded-full
        text-center
        font-bold
        "
                    >
                        Order On WhatsApp
                    </a>

                </div>

              
                {/* Features */}
                <div className="mt-6 grid grid-cols-2 gap-3">

                    <div className="bg-gradient-to-br from-white to-zinc-50 border border-zinc-100 rounded-2xl p-4 text-center shadow-sm">
                        <div className="text-lg">🌱</div>
                        <div className="text-sm font-semibold">Fresh Daily</div>
                    </div>

                    <div className="bg-gradient-to-br from-white to-zinc-50 border border-zinc-100 rounded-2xl p-4 text-center shadow-sm">
                        <div className="text-lg">🚚</div>
                        <div className="text-sm font-semibold">Fast Delivery</div>
                    </div>

                    <div className="bg-gradient-to-br from-white to-zinc-50 border border-zinc-100 rounded-2xl p-4 text-center shadow-sm">
                        <div className="text-lg">⭐</div>
                        <div className="text-sm font-semibold">Top Rated</div>
                    </div>

                    <div className="bg-gradient-to-br from-white to-zinc-50 border border-zinc-100 rounded-2xl p-4 text-center shadow-sm">
                        <div className="text-lg">💰</div>
                        <div className="text-sm font-semibold">Affordable</div>
                    </div>

                </div>

            </div>
        </section>
    );
}