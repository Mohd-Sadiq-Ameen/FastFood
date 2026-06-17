import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import {
    getItemBySlug,
    getRelatedItems,
    menuItems,
} from '@/data/menuData';

import WhatsAppOrderButton from '@/components/WhatsAppOrderButton';
import MenuItemCard from '@/components/MenuItemCard';

export async function generateStaticParams() {
    return menuItems.map((item) => ({
        slug: item.slug,
    }));
}

export async function generateMetadata({ params }) {
    const item = getItemBySlug(params.slug);
    if (!item) return {};

    return {
        title: `${item.name} — Thala Cafe`,
        description: `${item.tagline || item.description} · ₹${item.price}`,
        alternates: {
            canonical: `https://thala-cafe.in/menu/${item.slug}`,
        },
        openGraph: {
            title: `${item.name} — Thala Cafe`,
            description: item.tagline || item.description,
            type: 'website',
        },
    };
}

export default function ItemDetailPage({ params }) {
    const item = getItemBySlug(params.slug);

    if (!item) notFound();

    const related = getRelatedItems(item, 3);

    const nutrition = [
        { label: 'Calories', value: item.nutrition.calories },
        { label: 'Protein', value: item.nutrition.protein },
        { label: 'Carbs', value: item.nutrition.carbs },
        { label: 'Fat', value: item.nutrition.fat },
    ];

    const isHighProtein = item.nutrition.protein && item.nutrition.protein !== '0g';

    return (
        <div className="bg-white min-h-screen">

            {/* Breadcrumb */}
            <div className="max-w-5xl mx-auto px-4 pt-6 text-sm text-gray-400 flex gap-2">
                <Link href="/" className="hover:text-black">Home</Link>
                <span>/</span>
                <Link href="/menu" className="hover:text-black">Menu</Link>
                <span>/</span>
                <span className="text-black truncate">{item.name}</span>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-8">

                {/* HERO */}
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* IMAGE */}
                    <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg bg-gray-100">
                        {item.image ? (
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="flex items-center justify-center text-6xl h-full">
                                {item.emoji}
                            </div>
                        )}
                    </div>

                    {/* INFO */}
                    <div>

                        {isHighProtein && (
                            <span className="inline-block mb-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                                🔥 High Protein
                            </span>
                        )}

                        <h1 className="text-4xl font-bold">{item.name}</h1>

                        <p className="text-gray-500 mt-2">
                            {item.tagline || item.description}
                        </p>

                        <p className="text-3xl font-bold mt-4">
                            ₹{item.price}
                        </p>

                        <div className="mt-6">
                            <WhatsAppOrderButton
                                itemName={item.name}
                                price={item.price}
                            />
                        </div>
                    </div>
                </div>

                {/* INGREDIENTS */}
                <div className="mt-14">
                    <h2 className="text-2xl font-bold mb-4">What's Inside</h2>

                    <div className="flex flex-wrap gap-3">
                        {item.ingredients.map((ing, i) => (
                            <span
                                key={i}
                                className="bg-gray-100 px-4 py-2 rounded-full text-sm"
                            >
                                {ing}
                            </span>
                        ))}
                    </div>
                </div>


                {/* NUTRITION */}
                <div className="mt-14">
                    <h2 className="text-2xl font-bold mb-4">Nutrition Info</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {nutrition.map((n) => (
                            <div
                                key={n.label}
                                className="border rounded-2xl p-4 text-center shadow-sm"
                            >
                                <p className="text-2xl font-bold">{n.value}</p>
                                <p className="text-gray-500 text-sm">{n.label}</p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* RELATED */}
                {related.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold mb-6">
                            You May Also Like
                        </h2>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                            {related.map((r) => (
                                <MenuItemCard key={r.slug} item={r} />
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}