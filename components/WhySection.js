export default function WhySection() {
  const features = [
    {
      icon: '✓',
      title: '100% Halal',
      text: 'All meat is sourced from trusted halal suppliers.',
    },
    {
      icon: '🧼',
      title: 'Kitchen Hygiene',
      text: 'Prepared daily in a clean and sanitised kitchen.',
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      text: 'Hot food delivered quickly to your doorstep.',
    },
    {
      icon: '💰',
      title: 'Best Value',
      text: 'Large portions and affordable combo deals.',
    },
  ];

  return (
    <section className="bg-[#FFFDF7] py-24">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-yellow-500 font-semibold text-sm">
            WHY THALA CAFE
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4">
            Fresh Food. Fast Delivery.
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 border border-yellow-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-4">
                {item.icon}
              </div>

              <h3 className="font-serif text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-zinc-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}