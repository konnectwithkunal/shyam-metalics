import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Users, Globe, Award, Factory, TrendingUp, Building2 } from 'lucide-react';

export default function CompanyOverviewPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: '50+', label: 'Years', sublabel: 'In the business of Steel' },
    { value: '95 Mn t.p.a', label: 'Installed Capacity', sublabel: '' },
    { value: '250 MW', label: 'Power', sublabel: 'Captive power plant' }
  ];

  const sectors = [
    { image: '/about1.jpg', name: 'Infrastructure' },
    { image: '/about2.jpg', name: 'Construction' },
    { image: '/about3.jpg', name: 'Automotive' },
    { image: '/about4.jpg', name: 'Energy' }
  ];

  const milestones = [
    {
      year: '1955',
      title: 'Foundation',
      description: 'Shyam Group was established, laying the foundation for decades of industrial excellence'
    },
    {
      year: '1975',
      title: 'First Expansion',
      description: 'Expanded operations with new manufacturing facilities'
    },
    {
      year: '1985',
      title: 'Modernization',
      description: 'Introduced modern technology and automated processes'
    },
    {
      year: '1991',
      title: 'New Era',
      description: 'Shyam SEL and Power Limited incorporated under the leadership of Mr. Mahabir Prasad Agarwal'
    },
    {
      year: '2002',
      title: 'Strategic Growth',
      description: 'Shyam DRI & Power Limited incorporated on 10 December at Kolkata, West Bengal'
    },
    {
      year: '2010',
      title: 'Rebranding',
      description: 'Company renamed to Shyam Metalics and Energy Limited on 05 January'
    },
    {
      year: '2021',
      title: 'IPO Launch',
      description: 'Launched IPO raising approximately ₹909 crore, marking a significant milestone'
    }
  ];

  const businessImages = [
    { image: '/about1.jpg', title: 'Leadership Team' },
    { image: '/about2.jpg', title: 'Strategic Planning' },
    { image: '/about5.jpg', title: 'Operations' },
    { image: '/about6.jpg', title: 'Innovation' }
  ];

  const directors = [
    { name: 'Mr. Brij Bhushan Agarwal', position: 'Vice Chairman & Managing Director', image: '/about1.jpg' },
    { name: 'Mr. Sanjay Agarwal', position: 'Managing Director & CEO', image: '/about2.jpg' },
    { name: 'Ms. Priti Agarwal', position: 'Whole-time Director', image: '/about3.jpg' }
  ];

  const products = [
    { category: 'Iron & Steel', items: ['Iron Pellets', 'Sponge Iron', 'Steel Billets', 'TMT Bars', 'Wire Rods', 'Structural Steel'] },
    { category: 'Ferro Alloys', items: ['Ferro Chrome', 'Ferro Manganese', 'Silico Manganese', 'Ferro Silicon'] },
    { category: 'Aluminium', items: ['Aluminium Foils', 'Food Grade Foils', 'Household Foils'] },
    { category: 'Specialty Products', items: ['Stainless Steel Wire Rods', 'Bright Bars', 'Pig Iron'] }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src="/about1.jpg"
            alt="Industrial Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className={`absolute top-0 left-0 w-full h-full bg-black/60 transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}>
            Through Time <span className="text-orange-400">Endless Innovation</span>
          </h1>
          <p className={`text-lg md:text-xl text-white/90 text-center max-w-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}>
            Building India's infrastructure with strength, sustainability, and excellence
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left - Text Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gray-900">ABOUT</span> <span className="text-orange-500">US</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg">
                  Shyam Metalics and Energy Limited is one of India's leading integrated metal producers, providing comprehensive end-to-end solutions. We are the 6th largest metal producing company in India with a diversified product portfolio spanning Long Steel Products, Ferro Alloys, and Specialty Products.
                </p>
                <p className="text-base md:text-lg">
                  Operating seven state-of-the-art manufacturing plants across India, we maintain an aggregate installed metal capacity of 15.13 MTPA as of December 2024. Our strategic locations span West Bengal, Odisha, Indore, Kharagpur, and Jharkhand, enabling us to serve customers across the nation efficiently.
                </p>
                <p className="text-base md:text-lg">
                  With our robust "Ore to Metal" integrated manufacturing model and 83% captive power generation, we ensure operational excellence, cost efficiency, and sustainable production practices. Our commitment to innovation and quality has positioned us as a trusted partner in India's industrial growth story.
                </p>
              </div>
            </div>

            {/* Right - Statistics */}
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-white border-l-4 border-orange-500 p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-orange-500 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-900">{stat.label}</div>
                  {stat.sublabel && <div className="text-sm text-gray-600">{stat.sublabel}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Powering Core Sectors */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">POWERING CORE</span> <span className="text-orange-500">SECTORS</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <img
                    src={sector.image}
                    alt={sector.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{sector.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Milestones */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">OUR</span> <span className="text-orange-500">MILESTONES</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl font-bold mb-3">{milestone.year}</div>
                <div className="text-xl font-semibold mb-2">{milestone.title}</div>
                <p className="text-sm text-white/90 leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business & Leadership */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">BUSINESS &</span> <span className="text-orange-500">LEADERSHIP</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {businessImages.map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white font-semibold text-sm md:text-base">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">MANUFACTURING</span> <span className="text-orange-400">EXCELLENCE</span>
            </h2>
            <p className="text-white/80 text-lg">State-of-the-art facilities ensuring world-class quality and efficiency</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-64 overflow-hidden rounded-lg">
              <img src="/about1.jpg" alt="Manufacturing" className="w-full h-full object-cover" />
            </div>
            <div className="h-64 overflow-hidden rounded-lg">
              <img src="/iron-steel.jpg" alt="Production" className="w-full h-full object-cover" />
            </div>
            <div className="h-64 overflow-hidden rounded-lg">
              <img src="/about3.jpg" alt="Facility" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">BOARD OF</span> <span className="text-orange-500">DIRECTORS</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {directors.map((director, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-80 overflow-hidden">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{director.name}</h3>
                  <p className="text-gray-600">{director.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence & Export */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">GLOBAL PRESENCE &</span> <span className="text-orange-500">EXPORT</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <img src="/asia.png" alt="Global Presence" className="w-full h-auto" />
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <div className="flex items-center gap-4">
                  <Globe className="w-12 h-12 text-orange-500" />
                  <div>
                    <div className="text-3xl font-bold text-orange-500">50+</div>
                    <div className="text-gray-700">Countries Served</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <div className="flex items-center gap-4">
                  <TrendingUp className="w-12 h-12 text-orange-500" />
                  <div>
                    <div className="text-3xl font-bold text-orange-500">30%</div>
                    <div className="text-gray-700">Export Revenue</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <div className="flex items-center gap-4">
                  <Award className="w-12 h-12 text-orange-500" />
                  <div>
                    <div className="text-3xl font-bold text-orange-500">100+</div>
                    <div className="text-gray-700">Global Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Services Table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">PRODUCTS &</span> <span className="text-orange-500">SERVICES</span>
            </h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Product Category</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Products</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((category, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-gray-900 border-b">{category.category}</td>
                      <td className="px-6 py-4 text-gray-700 border-b">
                        <div className="flex flex-wrap gap-2">
                          {category.items.map((item, idx) => (
                            <span key={idx} className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                              {item}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
