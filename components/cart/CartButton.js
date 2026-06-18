'use client';

import useCart from '@/hooks/useCart';



export default function CartButton() {

    const {

        totalItems,
        setOpen

    }

        = useCart();


    return (

        <button


            onClick={() => setOpen(true)}



            className='relative'



        >

            🛒


            {totalItems > 0 && (

                <span


                    className='absolute
                    -top-2
                    -right-2

                    bg-red-500

                    text-white

                    w-5
                    h-5

                    rounded-full

                    flex

                    items-center

                    justify-center

                    text-xs'

                >


                    {totalItems}


                </span>

            )}

        </button>
    );
}
