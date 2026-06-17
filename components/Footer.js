import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">

      <div className="max-w-7xl mx-auto px-5">

        <div className="grid md:grid-cols-3 gap-10">

          <div>

            <h3 className="text-3xl font-serif font-bold text-yellow-400">
              Thala Cafe
            </h3>

            <p className="mt-4 text-zinc-400">
              Fresh Pizza, Burgers & Fast Food Delivered Hot.
            </p>

          </div>

          <div>

            <h4 className="font-bold mb-4">
              Quick Links
            </h4>

            <div className="space-y-2">

              <Link href="/">
                Home
              </Link>

              <br />

              <Link href="/menu">
                Menu
              </Link>

              <br />

              <Link href="/payment">
                Payment
              </Link>

            </div>

          </div>

          <div>

            <h4 className="font-bold mb-4">
              Contact
            </h4>

            <p>Delhi, India</p>
            <p>+91 8700629458</p>

          </div>

        </div>

        <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-zinc-500">
          © 2026 Thala Cafe. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}