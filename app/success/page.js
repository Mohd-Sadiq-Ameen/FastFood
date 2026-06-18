import Link from "next/link";

export default function SuccessPage(){


return(


<section className="min-h-screen flex items-center justify-center bg-zinc-50">



<div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md">



<div className="text-6xl mb-5">

✅

</div>




<h1 className="text-3xl font-black">


Payment Successful


</h1>



<p className="text-zinc-500 mt-3">


Thank you for ordering from

Thala Cafe.


</p>





<Link


href="/"



className="mt-6 inline-block bg-black text-yellow-400 px-6 py-3 rounded-full font-bold"


>


Back Home


</Link>





</div>


</section>


)



}
