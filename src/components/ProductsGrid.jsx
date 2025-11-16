import React, { useState } from 'react';

export default function ProductsGrid() {
  const [activeTab, setActiveTab] = useState('Iron and Steel');

  const products = {
    'Iron and Steel': [
      { name: 'Ferro Alloys', image: '/products/ferro-alloys.jpg' },
      { name: 'Pellet', image: '/products/pellet.jpg' },
      { name: 'Sponge iron', image: '/products/sponge-iron.jpg' },
      { name: 'Pig iron', image: '/products/pig-iron.jpg' },
      { name: 'Billets', image: '/products/billets.jpg' },
      { name: 'Crash Barrier', image: '/products/crash-barrier.jpg' },
      { name: 'TMT Bar', image: '/products/tmt-bar.jpg' },
      { name: 'Coil TMT', image: '/products/coil-tmt.jpg' },
      { name: 'Structural steel', image: '/products/structural-steel.jpg' },
      { name: 'Wire Rod', image: '/products/wire-rod.jpg' },
      { name: 'Hot Rolled (HR) Coils', image: '/products/hr-coils.jpg' },
      { name: 'Stainless steel Billets', image: '/products/ss-billets.jpg' },
      { name: 'Stainless Steel Rebar', image: '/products/ss-rebar.jpg' },
      { name: 'Stainless steel Wire & Wire Rod', image: '/products/ss-wire-rod.jpg' },
      { name: 'Stainless steel welding wire', image: '/products/ss-welding-wire.jpg' },
      { name: 'Stainless steel Bright Bar', image: '/products/ss-bright-bar.jpg' },
      { name: 'Stainless steel Hot Rolled Bar', image: '/products/ss-hot-rolled-bar.jpg' },
      { name: 'Corrugated / Profiled Roofing Sheets', image: '/products/roofing-sheets.jpg' },
      { name: 'PPGL Coils & Sheets', image: '/products/ppgl-coils.jpg' },
      { name: 'Galvalume (GL) Roofing Sheets & Coils', image: '/products/galvalume.jpg' },
      { name: 'CRFH Steel', image: '/products/crfh-steel.jpg' },
      { name: 'CRCA Steel', image: '/products/crca-steel.jpg' },
    ],
    'Aluminium': [
      { name: 'Bare Aluminium Foil', image: '/products/bare-alu-foil.jpg' },
      { name: 'Sel-Tiger-Foil', image: '/products/sel-tiger-foil.jpg' },
      { name: 'Battery Foil', image: '/products/battery-foil.jpg' },
      { name: 'Fin stock', image: '/products/fin-stock.jpg' },
    ],
    'Energy and Others': [
      { name: 'Captive & Renewable Power', image: '/products/renewable-power.jpg' },
      { name: 'Railway Wagon', image: '/products/railway-wagon.jpg' },
    ]
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
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
                marginBottom: '-2px'
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
              className="bg-white rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-300 hover:shadow-lg"
            >
              {/* Hover State - Orange to White Gradient Background */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-orange-300 via-orange-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
              />

              {/* Content Container */}
              <div className="relative">
                {/* Top Section - Product Name */}
                <div className="p-4 pb-2">
                  <h3 className="text-base font-semibold text-gray-900 min-h-[48px]">
                    {product.name}
                  </h3>
                </div>

                {/* Bottom Section - Arrow and Image */}
                <div className="px-4 pb-4 flex items-center gap-3">
                  {/* Arrow Button */}
                  <button className="bg-orange-500 hover:bg-orange-600 text-white w-10 h-10 rounded-md flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Product Image */}
                  <div className="flex-1 h-28 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain"
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
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}