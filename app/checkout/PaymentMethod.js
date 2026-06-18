"use client";
import Script from 'next/script';


export default function PaymentMethod() {



    const payNow = async () => {


        const res = await fetch("/api/create-order", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                amount: 599

            })

        });


        const data = await res.json();




        const options = {


            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,


            amount: data.amount,

            currency: data.currency,

            order_id: data.order_id,

            name: "THALA CAFE",

            description: "Food Order",


            image: "/logo.png",



            handler: async (response) => {


                const verify = await fetch("/api/verify-payment", {

                    method: "POST",


                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(response)


                });



                const result = await verify.json();


                if (result.success) {

                    window.location.href = "/success"

                }

                else {

                    alert("Payment Failed")

                }



            },


            theme: {

                color: "#facc15"

            }



        };

        console.log(window.Razorpay);

        if (!window.Razorpay) {
            alert("Razorpay SDK not loaded");
            return;
        }




        const paymentObject = new window.Razorpay(options);

        paymentObject.open();





    }



    return (



        <div>




            <h2 className="font-bold text-xl mb-4">

                Payment

            </h2>


            <Script
                src="https://checkout.razorpay.com/v1/checkout.js"
                strategy="afterInteractive"
            />

            <button


                onClick={payNow}


                className="bg-black text-yellow-400 w-full py-4 rounded-full font-bold"


            >


                Pay Online



            </button>



        </div>



    )

}
