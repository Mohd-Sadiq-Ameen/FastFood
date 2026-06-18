"use client";

import Link from 'next/link';
import Image from 'next/image';
import  useCart  from '@/hooks/useCart';

export default function MenuItemCard({ item }) {

  const { addItem } = useCart();


  const waMsg = encodeURIComponent(

    `🍽️ *New Order from Thala Cafe*

📦 *Item:* ${item.name}

💰 *Price:* ₹${item.price}

Please confirm my order 🙏`

  );


  const waUrl = `https://wa.me/918707515005?text=${waMsg}`;



  let macroBadge = null;


  if (item.protein && item.protein !== "0g") {

    macroBadge = `🔥 Protein ${item.protein}`;

  }

  else if (item.nutrition?.fat) {

    macroBadge = `⚡ Fat ${item.nutrition.fat}`;

  }



  return (

    <div className="bg-white rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">


      <Link href={`/menu/${item.slug}`}>

        <div className="relative aspect-[4/3] bg-zinc-50 overflow-hidden">


          {macroBadge && (

            <div className="absolute top-3 right-3 z-10">

              <span className="bg-yellow-400 text-black text-[10px] px-2 py-1 rounded-full font-bold">

                {macroBadge}

              </span>

            </div>

          )}


          {item.image ? (

            <Image

              src={item.image}

              alt={item.name}

              fill

              className="object-cover object-center group-hover:scale-105 transition-transform duration-300"

            />

          ) : (


            <div className="w-full h-full flex items-center justify-center text-6xl">

              {item.emoji || "🍕"}

            </div>

          )}

        </div>

      </Link>



      <div className="p-4 flex flex-col gap-2">


        <h3 className="font-serif font-bold text-lg text-zinc-900">

          {item.name}

        </h3>


        {item.desc && (

          <p className="text-xs text-zinc-500 line-clamp-2">

            {item.desc}

          </p>

        )}


        <span className="text-xl font-extrabold">

          ₹{item.price}

        </span>




        <div className="grid grid-cols-2 gap-2 mt-3">


          <button

            onClick={() => addItem(item)}

            className="

border
border-zinc-200

rounded-xl

py-3

font-semibold

hover:bg-zinc-100

transition

"

          >

            ＋ Cart

          </button>



          <a

            href={waUrl}

            target="_blank"

            rel="noopener noreferrer"

            className="

bg-black
hover:bg-zinc-800

text-white

font-semibold

py-3

rounded-xl

text-center

transition

"

          >

            Order

          </a>



        </div>


      </div>


    </div>

  )

}
