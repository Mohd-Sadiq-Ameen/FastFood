"use client";

import PaymentMethod from "./PaymentMethod";

export default function CheckoutForm() {


return (

<div className="bg-white rounded-3xl p-8 shadow-sm border">


<h2 className="text-2xl font-bold mb-6">
Delivery Details
</h2>




<div className="space-y-4">


<input
placeholder="Full Name"
className="w-full border rounded-xl p-4"
/>


<input
placeholder="Phone Number"
className="w-full border rounded-xl p-4"
/>



<textarea

placeholder="Full Address"

rows={4}

className="w-full border rounded-xl p-4"

/>


</div>



<div className="mt-10">


<PaymentMethod/>

</div>




</div>

)

}
