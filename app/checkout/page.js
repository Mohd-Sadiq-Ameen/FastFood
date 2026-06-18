import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

export default function CheckoutPage() {

    return (

        <section className="bg-zinc-50 min-h-screen py-12">

            <div className="max-w-6xl mx-auto px-4">


                <div className="mb-10">

                    <p className="uppercase tracking-[0.3em] text-yellow-500 font-semibold text-sm">
                        Checkout
                    </p>

                    <h1 className="text-4xl font-black mt-2">
                        Complete Your Order
                    </h1>

                    <p className="text-zinc-500 mt-2">
                        Delivery in 15-30 mins
                    </p>

                </div>



                <div className="grid lg:grid-cols-3 gap-8">


                    <div className="lg:col-span-2">

                        <CheckoutForm />

                    </div>



                    <div>

                        <OrderSummary />

                    </div>


                </div>



            </div>

        </section>

    )

}