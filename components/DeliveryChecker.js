// components/DeliveryChecker.js
'use client';

import { useState, useEffect } from 'react';
import { Search, MapPin, CheckCircle, XCircle, MessageCircle } from 'lucide-react';

// Only very close areas (as specified by you, plus minimal adjacent)
const deliveryAreas = [
  "Tara Apartments",
  "Tughlakabad",
  "Hamdard University",
  "Govind Puri",
  "DDA Flats Kalkaji",
  "Kalkaji Extension",
  // Optional: only if needed – can be removed
  // "Nehru Place", // Very close to Kalkaji
  // "Okhla Phase 1", // Close to Tughlakabad
];

const findMatch = (query, areas) => {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return null;
  return areas.find(area => area.toLowerCase().includes(normalizedQuery)) || null;
};

export default function DeliveryChecker() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (query.trim().length === 0) {
      setResult(null);
      return;
    }
    setIsTyping(true);
    const timer = setTimeout(() => {
      const matchedArea = findMatch(query, deliveryAreas);
      setResult(matchedArea ? { available: true, area: matchedArea } : { available: false, query: query.trim() });
      setIsTyping(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  const handleCheck = () => {
    if (!query.trim()) return;
    const matchedArea = findMatch(query, deliveryAreas);
    setResult(matchedArea ? { available: true, area: matchedArea } : { available: false, query: query.trim() });
  };

  const whatsappNumber = '918700629458';
  const whatsappMessage = encodeURIComponent(`Hi GreenBite! I live in "${query}". Do you deliver here? Please confirm.`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gbgreen/10 mb-4">
              <MapPin className="w-8 h-8 text-gbgreen" />
            </div>
            <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-gbblack">
              Delivery Check 
            </h2>
            <p className="font-dm text-gray-500 mt-3 max-w-md mx-auto">
              Enter your area – we&apos;ll instantly tell you if we deliver to you. <br /> <span className='text-red-600' >Currently Limited Areas Only  </span>          </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="e.g., Govind Puri, Kalkaji..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gbgreen focus:border-transparent font-dm"
              />
            </div>
            <button
              onClick={handleCheck}
              className="bg-gbgreen hover:bg-green-600 text-white font-serif font-bold px-6 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <Search size={18} />
              Check
            </button>
          </div>

          {result && !isTyping && (
            <div className="mt-6 animate-fade-in">
              {result.available ? (
                <div className="rounded-xl bg-green-50 border border-green-200 p-5">
                  <div className="flex items-center gap-2 text-green-700 font-semibold">
                    <CheckCircle size={20} />
                    Delivery Available!
                  </div>
                  <p className="mt-2 font-dm text-green-700">
                    Great news! We deliver to <strong>{result.area}</strong>. Your food will arrive hot & fresh within 30 minutes.
                  </p>
                  <div className="mt-4">
                    <a href="/menu" className="inline-block bg-gbgreen text-white font-dm font-semibold px-5 py-2 rounded-full text-sm hover:bg-green-600 transition">
                      Browse Menu →
                    </a>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl bg-red-50 border border-red-200 p-5">
                  <div className="flex items-center gap-2 text-red-700 font-semibold">
                    <XCircle size={20} />
                    Not Available Yet
                  </div>
                  <p className="mt-2 font-dm text-red-700">
                    Sorry, we don&apos;t currently deliver to &quot;{result.query}&quot;.
                  </p>
                  <div className="mt-4 pt-4 border-t border-red-100">
                    <p className="text-sm text-gray-600 mb-3">
                      Not sure? Contact us on WhatsApp – we might be able to deliver nearby.
                    </p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b859] text-white font-dm font-semibold px-5 py-2.5 rounded-full transition-all">
                      <MessageCircle size={18} />
                      Ask on WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="mt-10">
            <h3 className="font-serif font-bold text-xl text-gbblack mb-4">Areas We Serve</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {deliveryAreas.map((area) => (
                <div key={area} className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3 hover:border-gbgreen/30 hover:bg-white transition-all">
                  <MapPin size={18} className="text-gbgreen shrink-0" />
                  <span className="font-dm text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}