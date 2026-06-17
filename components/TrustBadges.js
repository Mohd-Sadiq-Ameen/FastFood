export default function TrustBadges() {
  const badges = [
    '⭐ Rated 5.0',
    '⚡ 30 Min Delivery',
    '🌱 Fresh Ingredients',
    '🚚 Free Delivery',
  ];

  return (
    <section className="bg-white py-8 border-y border-yellow-100">
      <div className="max-w-7xl mx-auto px-5">

        <div className="flex flex-wrap justify-center gap-4">

          {badges.map((badge) => (
            <div
              key={badge}
              className="bg-yellow-100 text-black px-5 py-3 rounded-full font-semibold shadow-sm"
            >
              {badge}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}