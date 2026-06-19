import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 text-zinc-800">
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-bold text-black">Thala Cafe</h3>

            <p className="mt-3 text-zinc-600 text-sm leading-relaxed">
              Fresh pizzas, burgers, fries and cold drinks made locally in
              Delhi. Fast delivery with hot & fresh taste guaranteed.
            </p>

            <div className="mt-4 text-sm text-zinc-500">📍 Delhi, India</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-black">Quick Links</h4>

            <div className="space-y-2 text-sm">
              <Link className="block hover:text-black transition" href="/">
                Home
              </Link>

              <Link className="block hover:text-black transition" href="/menu">
                Menu
              </Link>

              <Link
                className="block hover:text-black transition"
                href="/payment"
              >
                Payment
              </Link>
            </div>
          </div>

          {/* Contact + CTA */}
          <div>
            <h4 className="font-bold mb-4 text-black">Contact</h4>

            <p className="text-sm text-zinc-600">📞 +91 870 751 5005</p>

            <p className="text-sm text-zinc-600 mt-1">🕒 11 AM – 2 AM</p>

            {/* CTA Button */}
            <a
              href="https://wa.me/918707515005"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-black text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-zinc-800 transition"
            >
              Order on WhatsApp →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-zinc-500">
          <p>© 2026 Thala Cafe. All Rights Reserved.</p>

          <p>Made with ❤️ for food lovers in Delhi</p>
        </div>
      </div>
    </footer>
  );
}
