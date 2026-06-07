import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gbblack text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-full bg-gbgreen flex items-center justify-center text-white font-syne font-extrabold text-base">
                G
              </span>
              <span className="font-syne font-extrabold text-lg">
                Green<span className="text-gbgreen">Bite</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm font-dm leading-relaxed">
              Fresh. Fast. Flavourful.<br />
              Made with love in Delhi.
            </p>
            <div className="flex gap-3 mt-4 text-xs text-gray-500 font-dm">
              <span>🔒 Safe Ordering</span>
              <span>🚚 Fast Delivery</span>
              <span>✅ Hygienic</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-syne font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 font-dm text-sm text-gray-400">
              {[
                { href: '/',      label: 'Home'  },
                { href: '/menu',  label: 'Menu'  },
                { href: '/about', label: 'About' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-gbgreen transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-syne font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Contact Us
            </h3>
            <div className="space-y-2 font-dm text-sm text-gray-400">
              <p>📍 Delhi, India</p>
              <a
                href="https://wa.me/918700629458"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gbgreen hover:text-green-400 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                +91 87006 29458
              </a>
              <p className="text-gray-500 text-xs mt-1">Mon – Sun · 10 AM – 11 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600 font-dm">
          <span>© 2025 GreenBite. All rights reserved.</span>
          <span>Made with 💚 in India</span>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
