'use client';


import Image from 'next/image';
import useCart from '@/hooks/useCart';




export default function CartItem({

    item

}) {



    const {


        increase,
        decrease,
        removeItem


    }

        = useCart();





    return (


        <div


            className='flex gap-4 py-4 border-b'


        >




            <div className='relative w-20 h-20 rounded-xl overflow-hidden bg-zinc-100'>


                <Image

                    src={item.image}

                    fill

                    alt={item.name}

                    className='object-cover'

                />


            </div>





            <div className='flex-1'>


                <h4 className='font-semibold'>

                    {item.name}

                </h4>




                <p>


                    ₹{item.price}

                </p>




                <div className='mt-3 flex items-center gap-3'>


                    <button

                        onClick={() => decrease(item.slug)}

                    >

                        -

                    </button>



                    <span>

                        {item.quantity}

                    </span>



                    <button

                        onClick={() => increase(item.slug)}

                    >

                        +

                    </button>


                </div>



            </div>




            <button

                onClick={() => removeItem(item.slug)}

            >

                ✕
            </button>



        </div>

    );
}
