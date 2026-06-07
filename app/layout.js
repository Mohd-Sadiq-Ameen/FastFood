import { DM_Sans, Syne } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
      <body className="font-dm antialiased bg-white m-0 p-0 overflow-x-hidden w-full">
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}