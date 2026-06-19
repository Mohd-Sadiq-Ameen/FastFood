import { DM_Sans, Syne } from 'next/font/google';
import './globals.css';

import CartProvider from '@/components/cart/CartProvider';
import CartDrawer from '@/components/cart/CartDrawer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
});

export const metadata = {
  title: 'GreenBite | Fresh Pizza, Burgers & Ice Cold Catch Cola – Delivered Fast',

  description:
    'Order premium pizza, juicy burgers and Catch Cola drinks online. Fast delivery and WhatsApp ordering in Delhi.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
      <body className="m-0 w-full overflow-x-hidden bg-white p-0 antialiased">
        <CartProvider>
          {children}

          <CartDrawer />

          <FloatingWhatsApp />
        </CartProvider>
      </body>
    </html>
  );
}
