import React from 'react';
import { Factory, MapPin, Zap, TrendingUp, Package, Shield, Train, Gauge } from 'lucide-react';

export default function ManufacturingPage() {
  const plants = [
    {
      name: 'Sambalpur Plant',
      location: 'Sambalpur, Odisha',
      type: 'Ore to Metal Integrated Steel Plant',
      capacity: '4.5 MTPA',
      products: ['Iron Pellets', 'Sponge Iron', 'Billets', 'TMT Bars', 'Wire Rods', 'Ferro Alloys'],
      features: [
        'Captive railway sidings for efficient logistics',
        'Captive power plant - 150 MW capacity',
        'Iron ore pelletization plant',
        'Multiple DRI kilns',
        'TMT and wire rod rolling mills',
        'Ferro alloy production facilities'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Jamuria Plant',
      location: 'Jamuria, West Bengal',
      type: 'Ore to Metal Integrated Steel Plant',
      capacity: '3.8 MTPA',
      products: ['Sponge Iron', 'Billets', 'TMT Bars', 'Structural Products', 'Ferro Alloys'],
      features: [
        'Strategic location with railway connectivity',
        'Captive power plant - 100 MW capacity',
        'Advanced DRI production units',
        'Structural steel rolling mill',
        'TMT bar manufacturing facility',
        'Ferro alloy plant with modern technology'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Mangalpur Plant',
      location: 'Mangalpur, West Bengal',
      type: 'Specialized Manufacturing Plant',
      capacity: '2.5 MTPA',
      products: ['Sponge Iron', 'Ferro Alloys', 'Billets'],
      features: [
        'Focus on ferro alloys production',
        'Captive power generation - 75 MW',
        'DRI production facility',
        'Energy-efficient processes',
        'Quality control laboratories',
        'Environmental management systems'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Kharagpur Plant',
      location: 'Kharagpur, West Bengal',
      type: 'Specialized Products Plant',
      capacity: '1.8 MTPA',
      products: ['Aluminium Foils', 'Stainless Steel Wire Rods', 'Bright Bars'],
      features: [
        'Food-grade aluminium foil production',
        'Stainless steel manufacturing',
        'Bright bar production facility',
        'Advanced quality control systems',
        'Modern automated processes',
        'R&D and testing facilities'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Odisha Expansion Unit',
      location: 'Odisha',
      type: 'Integrated Production Facility',
      capacity: '2.5 MTPA',
      products: ['Sponge Iron', 'Billets', 'Long Steel Products'],
      features: [
        'New generation technology',
        'Captive power plant',
        'Environmental compliance systems',
        'Automated material handling',
        'Digital monitoring systems',
        'Sustainable production practices'
      ],
      color: 'from-red-500 to-red-600'
    }
  ];

  const capabilities = [
    {
      icon: Factory,
      title: '7 Manufacturing Plants',
      description: 'State-of-the-art facilities across multiple states'
    },
    {
      icon: TrendingUp,
      title: '15.13 MTPA Capacity',
      description: 'Aggregate installed metal production capacity'
    },
    {
      icon: Zap,
      title: '376 MW Power',
      description: 'Captive power generation capacity'
    },
    {
      icon: Package,
      title: 'Diversified Portfolio',
      description: '12+ product categories manufactured'
    }
  ];

  const strengths = [
    'Integrated "Ore to Metal" manufacturing model',
    '83% captive power generation for energy security',
    'Strategic locations with railway connectivity',
    'Advanced technology and automation',
    'Strong focus on quality and sustainability',
    'Continuous capacity expansion and modernization',
    'Skilled workforce and management expertise',
    'Robust supply chain and logistics network'
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Factory className="w-16 h-16 text-orange-500 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Manufacturing</span>{' '}
            <span className="text-orange-500">Units</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            World-class integrated facilities powered by innovation, sustainability, and operational excellence
          </p>
        </div>

        {/* Key Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-orange-500"
            >
              <div className="flex flex-col items-center text-center">
                <capability.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-sm text-gray-600">{capability.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Manufacturing Plants */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            <span className="text-gray-900">Our</span>{' '}
            <span className="text-orange-500">Manufacturing Plants</span>
          </h2>
          <div className="space-y-8">
            {plants.map((plant, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${plant.color} p-6 md:p-8 text-white`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{plant.name}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-5 h-5" />
                        <span className="text-lg">{plant.location}</span>
                      </div>
                      <p className="text-white/90">{plant.type}</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-center">
                      <div className="flex items-center gap-2 justify-center mb-1">
                        <Gauge className="w-5 h-5" />
                        <span className="text-sm font-semibold">Capacity</span>
                      </div>
                      <div className="text-2xl font-bold">{plant.capacity}</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Products */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Package className="w-6 h-6 text-orange-500" />
                        <h4 className="text-xl font-bold text-gray-900">Key Products</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {plant.products.map((product, idx) => (
                          <span
                            key={idx}
                            className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Shield className="w-6 h-6 text-orange-500" />
                        <h4 className="text-xl font-bold text-gray-900">Key Features</h4>
                      </div>
                      <ul className="space-y-2">
                        {plant.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <span className="text-orange-500 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturing Strengths */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-10">
            <Shield className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gray-900">Manufacturing</span>{' '}
              <span className="text-orange-500">Strengths</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Core competencies that drive our operational excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-lg p-4 hover:border-orange-500 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="font-medium text-gray-800">{strength}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure Highlight */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-lg p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <Train className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Railway Connectivity</h3>
              <p className="text-orange-100">Captive railway sidings at major plants</p>
            </div>
            <div className="text-center">
              <Zap className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Power Independence</h3>
              <p className="text-orange-100">83% captive power generation</p>
            </div>
            <div className="text-center">
              <Factory className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Integrated Model</h3>
              <p className="text-orange-100">Complete ore to metal production</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
