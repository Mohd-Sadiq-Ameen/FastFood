import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="bg-[#ffffff] overflow-hidden" >
            <div className="max-w-7xl mx-auto px-5 py-1">

                {/* Top badges */}
                <div className="flex justify-center gap-2 flex-wrap mb-2">

                    {/* <span className="bg-yellow-100 px-3 py-1 rounded-full text-xs font-semibold">
                        ⭐ Rated 5.0
                    </span>

                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                        ⚡ 30 Min Delivery
                    </span> */}

                </div>

                {/* Heading */}
                <div className="text-center">

                    <h1 className="
      font-mono
      text-5xl
      sm:text-5xl
      lg:text-7xl
      font-bold
      leading-[0.95]
      tracking-tight

      ">

                        Are you
                        <span className="text-red-500 ml-4">
                            Hungry
                        </span> <br /> What are y Waiting for ?



                    </h1>

                    <p className="
      mt-4
      text-zinc-600
      max-w-md
      mx-auto
      text-base
      sm:text-lg
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
                <div className="
    grid
    grid-cols-2
    gap-3
    mt-6
    ">

                    <div className="bg-white rounded-2xl p-3 text-center shadow-sm">
                        🌱 Fresh Daily
                    </div>

                    <div className="bg-white rounded-2xl p-3 text-center shadow-sm">
                        🚚 Fast Delivery
                    </div>

                    <div className="bg-white rounded-2xl p-3 text-center shadow-sm">
                        ⭐ Top Rated
                    </div>

                    <div className="bg-white rounded-2xl p-3 text-center shadow-sm">
                        💰 Affordable
                    </div>

                </div>

            </div>
        </section>
    );
}