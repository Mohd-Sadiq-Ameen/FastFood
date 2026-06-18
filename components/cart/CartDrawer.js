'use client';

import useCart from '@/hooks/useCart';
import Cartitem from './Cartitem';
import Link from 'next/link';



export default function CartDrawer() {



    const {


        cart,

        totalPrice,

        open,

        setOpen


    }

        = useCart();





    return (


        <>


            <div


                className={`


fixed


top-0


right-0


h-screen


w-[400px]


bg-white


z-[100]


shadow-xl


transition-all


duration-300



${open

                        ? 'translate-x-0'

                        : 'translate-x-full'

                    }



`}


            >




                <div className='p-6 h-full flex flex-col'>


                    <div className='flex justify-between'>


                        <h2 className='text-2xl font-bold'>


                            Cart


                        </h2>


                        <button


                            onClick={() => setOpen(false)}

                        >

                            ✕


                        </button>


                    </div>




                    <div className='flex-1 overflow-y-auto mt-6'>


                        {


                            cart.map(item => (


                                <Cartitem


                                    key={item.slug}

                                    item={item}


                                />

                            ))


                        }


                    </div>





                    <div className='border-t pt-5'>


                        <div className='flex justify-between mb-5'>


                            <span>


                                Total


                            </span>


                            <span>


                                ₹{totalPrice}


                            </span>



                        </div>



                        <Link


                            href="/checkout"



                            className='


block


bg-black


text-white


py-4


rounded-xl


text-center


font-bold



'


                        >


                            Checkout


                        </Link>



                    </div>



                </div>



            </div>





            {open && (


                <div


                    onClick={() => setOpen(false)}



                    className='fixed inset-0 bg-black/40 z-50'


                />


            )}


        </>


    );
}
