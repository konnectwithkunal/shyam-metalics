import React, { useState, useEffect } from 'react';
import { Package, Zap, Factory, TrendingUp, Award, Users } from 'lucide-react';

export default function BusinessPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Iron & Steel');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const tabs = ['Iron & Steel', 'Carbon Steel', 'Stainless Steel', 'Flat Steel', 'Energy and Others'];

  const products = {
    'Iron & Steel': [
      { name: 'Wide range of steel products', image: '/iron-steel.jpg', description: 'Comprehensive steel solutions' },
      { name: 'Ferro Alloys', image: '/products/ferro-alloys.jpg', description: 'High-quality ferro alloys' },
      { name: 'Ferro Chrome', image: '/products/ferro-chrome.jpg', description: 'Premium ferro chrome' },
      { name: 'Ferro Manganese', image: '/products/ferro-manganese.jpg', description: 'Superior ferro manganese' }
    ],
    'Carbon Steel': [
      { name: 'Bars Aluminium Foil', image: '/products/aluminium-foil.jpg', description: 'Premium aluminium foils' },
      { name: 'Bar Paper Foil', image: '/products/paper-foil.jpg', description: 'Food-grade paper foils' },
      { name: 'Fin Alloy', image: '/products/fin-alloy.jpg', description: 'High-grade fin alloys' },
      { name: 'Battery Foil', image: '/products/battery-foil.jpg', description: 'Specialized battery foils' }
    ],
    'Stainless Steel': [
      { name: 'Renewable Power', image: '/products/renewable.jpg', description: 'Green energy solutions' },
      { name: 'Captive Power', image: '/products/captive-power.jpg', description: 'Self-sufficient power' }
    ]
  };

  const stats = [
    { icon: Factory, value: '15.13 MTPA', label: 'Production Capacity' },
    { icon: TrendingUp, value: '6th Largest', label: 'Metal Producer in India' },
    { icon: Zap, value: '83%', label: 'Captive Power Generation' },
    { icon: Award, value: '50+ Years', label: 'Industry Experience' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - 100vh */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <img src="/about1.jpg" alt="Business" className="w-full h-full object-cover" />
        </div>
        <div className={`absolute top-0 left-0 w-full h-full bg-black/60 transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

        <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}>
            Business
          </h1>
          <p className={`text-lg md:text-xl text-white/90 max-w-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}>
            Discover our comprehensive range of products and services across multiple verticals
          </p>
        </div>
      </section>

      {/* Diverse Product Offerings Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '1000ms' : '0ms' }}>
            Diverse Product <span className="text-orange-500">Offerings</span>
          </h2>
          <p className={`text-gray-700 leading-relaxed mb-12 max-w-4xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '1200ms' : '0ms' }}>
            Shyam Metalics offers one of the most comprehensive product portfolios in India's metal industry covering finished products, raw materials, and value-added metals. With a strong focus on quality, versatility, and sector relevance, we serve diverse industries including infrastructure, construction, automotive, engineering, railways, and renewables.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-orange-50 to-white border-l-4 border-orange-500 p-6 rounded-lg hover:shadow-lg transition-all duration-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: isVisible ? `${1400 + index * 100}ms` : '0ms' }}
              >
                <stat.icon className="w-10 h-10 text-orange-500 mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Tabs Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex overflow-x-auto scrollbar-hide gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products[activeTab]?.map((product, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with India's Leading Metal Producer</h2>
          <p className="text-lg mb-8 text-orange-100">
            Discover how our comprehensive product range can power your business growth
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl">
            Get In Touch
          </button>
        </div>
      </section>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
