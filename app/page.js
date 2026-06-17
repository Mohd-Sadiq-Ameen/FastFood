import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

import Hero from '@/components/Hero';
import DeliveryChecker from '@/components/DeliveryChecker';
import HomeMenuSection from '@/components/HomeMenuSection';
import WhySection from '@/components/WhySection';
import Reviews from '@/components/Reviews';
import QRCodeSection from '@/components/QRCodeSection';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="w-full">
        <Hero />
        <HomeMenuSection featuredOnly={true} maxItems={6} />
        <DeliveryChecker />
        <WhySection />
        <Reviews />
        <QRCodeSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}