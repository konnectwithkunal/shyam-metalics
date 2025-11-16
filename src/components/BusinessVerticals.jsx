import React from 'react';

export default function BusinessVerticals() {
  const verticals = [
    {
      title: 'Iron and Steel',
      description: 'At the heart of our operations is a fully integrated iron and steel value chain, covering the production of TMT bars, structural steel, wire rods, billets, and sponge iron. We are also among the largest producers of Ferro alloys in India, supplying high-grade iron and steel materials and driving innovation in advanced metallurgy.',
      image: '/verticals/iron-steel.jpg',
    },
    {
      title: 'Aluminium',
      description: 'Our aluminium business is driven by precision engineering, advanced automation, and adherence to stringent global standards. Backed with cutting-edge manufacturing facilities, we produce a broader range of premium-quality aluminium foils tailored for sectors such as pharmaceuticals, energy storage, and FMCG, meeting the global benchmarks for performance.',
      image: '/verticals/aluminium.jpg',
    },
    {
      title: 'Energy and Others',
      description: 'Our integrated energy and allied businesses form the backbone of our operations, as nearly 83% of our total power requirement is met in-house through advanced captive power plants. In addition to energy, we are actively expanding into high-impact infrastructure segments, including railway wagon manufacturing, crash barriers, and other downstream innovations.',
      image: '/verticals/energy.jpg',
    }
  ];

  return (
    <section className="py-16 px-36 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl lg:text-5xl font-bold mb-12">
          Business <span className="text-orange-500">Verticals</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {verticals.map((vertical, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden relative h-[450px] group transition-transform duration-300 hover:scale-105"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${vertical.image})` }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8 text-white">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-center">{vertical.title}</h3>
                  <p className="text-md leading-relaxed text-justify">
                    {vertical.description}
                  </p>
                </div>

                {/* Read More Button */}
                <div className="flex justify-center mt-6">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-3 rounded-lg transition-colors duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Button */}
        <div className="flex justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-lg transition-colors duration-300 flex items-center gap-2 text-lg">
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