import React, { useState, useEffect, useRef } from 'react';

export default function ProductsGrid() {
  const [activeTab, setActiveTab] = useState('Iron and Steel');
  const [animateProducts, setAnimateProducts] = useState(false);
  const [sectionInView, setSectionInView] = useState(false);
  const sectionRef = useRef(null);

  const products = {
    'Iron and Steel': [
      { name: 'Ferro Alloys', image: '/products/ferroalloy.png' },
      { name: 'Pellet', image: '/products/pellet.jpg' },
      { name: 'Sponge iron', image: '/products/spongeiron.jpg' },
      { name: 'Pig iron', image: '/products/pigiron.jpg' },
      { name: 'Billets', image: '/products/billets.jpg' },
      { name: 'Crash Barrier', image: '/products/crash.png' },
      { name: 'TMT Bar', image: '/products/tmtbar.jpg' },
      { name: 'Coil TMT', image: '/products/coiltmt.png' },
      { name: 'Structural steel', image: '/products/structuralsteel.jpg' },
      { name: 'Wire Rod', image: '/products/wirerod.jpg' },
      { name: 'Hot Rolled (HR) Coils', image: '/products/hrcoil.jpg' },
      { name: 'Stainless steel Billets', image: '/products/steelbillets.png' },
      { name: 'Stainless Steel Rebar', image: '/products/steelrebar.jpeg' },
      { name: 'Stainless steel Wire & Wire Rod', image: '/products/steelwire.jpg' },
      { name: 'Stainless steel welding wire', image: '/products/ss-welding-wire.jpg' },
      { name: 'Stainless steel Bright Bar', image: '/products/brightbar.png' },
      { name: 'Stainless steel Hot Rolled Bar', image: '/products/hotrolled.jpg' },
      { name: 'Corrugated / Profiled Roofing Sheets', image: '/products/roofingsheet.jpeg' },
      { name: 'PPGL Coils & Sheets', image: '/products/ppgl.jpg' },
      { name: 'Galvalume (GL) Roofing Sheets & Coils', image: '/products/gl.png' },
      { name: 'CRFH Steel', image: '/products/crfh.jpg' },
      { name: 'CRCA Steel', image: '/products/crca.jpg' },
    ],
    Aluminium: [
      { name: 'Bare Aluminium Foil', image: '/products/bare-alu-foil.jpg' },
      { name: 'Sel-Tiger-Foil', image: '/products/sel-tiger-foil.jpg' },
      { name: 'Battery Foil', image: '/products/battery-foil.jpg' },
      { name: 'Fin stock', image: '/products/fin-stock.jpg' },
    ],
    'Energy and Others': [
      { name: 'Captive & Renewable Power', image: '/products/renewable-power.jpg' },
      { name: 'Railway Wagon', image: '/products/railway-wagon.jpg' },
    ],
  };

  // Observe section visibility
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionInView(true);
          // if you only want it once:
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Trigger entrance animation only when section is in view
  useEffect(() => {
    if (!sectionInView) return; // don't animate until visible

    setAnimateProducts(false);
    const t = setTimeout(() => setAnimateProducts(true), 300);
    return () => clearTimeout(t);
  }, [activeTab, sectionInView]);

  return (
    <section ref={sectionRef} className="py-16 px-4 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">
          Integrated <span className="text-orange-500">Steel Solutions</span>
        </h2>

        {/* Tabs */}
        <div className="flex gap-0 mb-8 border-b-2 border-gray-200">
          {Object.keys(products).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-semibold text-sm transition-all ${
                activeTab === tab
                  ? 'text-orange-500 border-b-3 border-orange-500'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={{
                borderBottom: activeTab === tab ? '3px solid #f97316' : 'none',
                marginBottom: '-2px',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {products[activeTab].map((product, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden relative group cursor-pointer 
                hover:shadow-xl bg-white transition-all duration-500
                ${
                  sectionInView && animateProducts
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-5 scale-95'
                }`}
              style={{
                transitionDelay:
                  sectionInView && animateProducts ? `${index * 50}ms` : '0ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  'linear-gradient(to bottom right, #fed7aa, #ffedd5, white)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
              }}
            >
              <div className="relative">
                {/* Product name */}
                <div className="p-4 pb-2">
                  <h3 className="text-base font-semibold text-gray-900 min-h-[48px]">
                    {product.name}
                  </h3>
                </div>

                {/* Arrow + image */}
                <div className="px-4 pb-4 flex items-center gap-3">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white w-10 h-10 rounded-md flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  <div
                    className="flex-1 h-28 flex items-center justify-center"
                    style={{ background: 'transparent' }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain mix-blend-multiply"
                      style={{ background: 'transparent' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400 hidden">
                      {product.name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Button */}
        <div className="flex justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2">
            Explore All
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
