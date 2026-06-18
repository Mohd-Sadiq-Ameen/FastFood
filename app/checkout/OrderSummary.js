"use client";


import  useCart from "@/hooks/useCart";



export default function OrderSummary() {


    const {


        cart,

        totalPrice


    } = useCart();





    return (



        <div className="bg-white p-6 rounded-3xl shadow-sm sticky top-24">



            <h2 className="font-bold text-2xl mb-6">

                Order Summary

            </h2>




            <div className="space-y-4">


                {


                    cart.map(item => (


                        <div

                            key={item.slug}


                            className="flex justify-between"

                        >


                            <p>

                                {item.name}


                                x {item.quantity}

                            </p>



                            <p>

                                ₹{item.price * item.quantity}

                            </p>



                        </div>



                    ))

                }




            </div>



            <hr className="my-5" />




            <div className="flex justify-between">


                <p>Total</p>


                <p className="font-bold">

                    ₹{totalPrice}

                </p>


            </div>





        </div>



    )

}
