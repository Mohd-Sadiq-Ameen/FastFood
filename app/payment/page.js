import QRCodeSection from '@/components/QRCodeSection';

export const metadata = {
    title: 'Easy Payment – GreenBite',
    description: 'Pay via UPI QR code. Scan, pay, and confirm your order on WhatsApp.',
};

export default function PaymentPage() {
    return (
        <>
            {/* Page header */}

            <QRCodeSection isPage={true} />
        </>
    );
}