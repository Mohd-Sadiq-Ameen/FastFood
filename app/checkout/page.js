import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';

export default function CheckoutPage() {
  return (
    <section className="min-h-screen bg-zinc-50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
            Checkout
          </p>

          <h1 className="mt-2 text-4xl font-black">Complete Your Order</h1>

          <p className="mt-2 text-zinc-500">Delivery in 15-30 mins</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CheckoutForm />
          </div>

          <div>
            <OrderSummary />
          </div>
        </div>
      </div>
    </section>
  );
}
