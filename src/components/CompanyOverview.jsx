import React from 'react';
import { Building2, Factory, Award, Zap, TrendingUp, MapPin, Users, Shield, Landmark, Globe2, Boxes, LineChart } from 'lucide-react';

export default function CompanyOverview() {
  const milestones = [
    { year: '1991', event: 'Shyam SEL and Power Limited incorporated under the leadership of Mr. Mahabir Prasad Agarwal' },
    { year: '2002', event: 'Shyam DRI & Power Limited incorporated on 10 December at Kolkata, West Bengal' },
    { year: '2010', event: 'Company renamed to Shyam Metalics and Energy Limited on 05 January' },
    { year: '2021', event: 'Launched IPO raising approximately ₹909 crore, marking a significant milestone' },
    { year: '2024', event: 'Expanded to 15.13 MTPA aggregate installed metal capacity across seven manufacturing plants' }
  ];

  const facilities = [
    {
      location: 'Sambalpur, Odisha',
      type: 'Ore to Metal Integrated Steel Plant',
      features: ['Captive railway sidings', 'Captive power plants', 'Iron pellet & sponge iron', 'Billet, TMT & wire rod mills', 'Ferro alloy plants']
    },
    {
      location: 'Jamuria, West Bengal',
      type: 'Ore to Metal Integrated Steel Plant',
      features: ['Captive railway sidings', 'Captive power plants', 'Structural mills', 'TMT manufacturing', 'Ferro alloy production']
    },
    {
      location: 'Mangalpur, West Bengal',
      type: 'Specialized Manufacturing Plant',
      features: ['Sponge iron production', 'Ferro alloy plants', 'Captive power plant']
    }
  ];

  const products = [
    { name: 'Iron Pellets', category: 'Primary Products' },
    { name: 'Sponge Iron', category: 'Primary Products' },
    { name: 'Steel Billets', category: 'Long Steel' },
    { name: 'TMT Bars', category: 'Long Steel' },
    { name: 'Wire Rods', category: 'Long Steel' },
    { name: 'Structural Products', category: 'Long Steel' },
    { name: 'Ferro Chrome', category: 'Ferro Alloys' },
    { name: 'Ferro Manganese', category: 'Ferro Alloys' },
    { name: 'Silico Manganese', category: 'Ferro Alloys' },
    { name: 'Pig Iron', category: 'Ferro Alloys' },
    { name: 'Aluminium Foils', category: 'Specialized Products' },
    { name: 'Stainless Steel Wire Rods', category: 'Specialized Products' }
  ];

  const keyStats = [
    { icon: Factory, value: '7', label: 'Manufacturing Plants', description: 'Across West Bengal, Odisha, Indore, Kharagpur & Jharkhand' },
    { icon: TrendingUp, value: '15.13 MTPA', label: 'Installed Capacity', description: 'Aggregate metal production capacity as of Dec 2024' },
    { icon: Zap, value: '376 MW', label: 'Power Generation', description: 'Captive power plants capacity as of March 2024' },
    { icon: Award, value: '6th Largest', label: 'Market Position', description: 'Metal producing company in India' }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Building2 className="w-16 h-16 text-orange-500 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Company</span>{' '}
            <span className="text-orange-500">Overview</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            One of India's leading integrated metal producers with end-to-end solutions and a diversified product portfolio
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            About <span className="text-orange-500">Shyam Metalics</span>
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Shyam Metalics is the <strong>6th largest metal producing company in India</strong>, providing end-to-end solutions with integrated capabilities. We specialize in Long Steel Products and Ferro Alloys, and are amongst the largest ferro alloys producers in terms of installed capacity in India.
            </p>
            <p className="text-lg">
              Operating seven state-of-the-art manufacturing plants across India, we maintain an aggregate installed metal capacity of <strong>15.13 MTPA</strong> as of December 2024. Our strategic locations span West Bengal, Odisha, Indore, Kharagpur, and Jharkhand, enabling us to serve customers across the nation efficiently.
            </p>
            <p className="text-lg">
              With a robust "Ore to Metal" integrated manufacturing model and <strong>83% captive power generation</strong>, we ensure operational excellence, cost efficiency, and sustainable production practices. Our commitment to innovation and quality has positioned us as a trusted partner in India's industrial growth story.
            </p>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-orange-500"
            >
              <div className="flex flex-col items-center text-center">
                <stat.icon className="w-12 h-12 text-orange-500 mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* History & Milestones */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-lg p-8 md:p-12 mb-12 text-white">
          <div className="flex items-center gap-3 mb-8">
            <Landmark className="w-10 h-10" />
            <h2 className="text-3xl font-bold">Our Journey</h2>
          </div>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex gap-6 items-start bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="bg-white text-orange-600 font-bold text-xl px-4 py-2 rounded-lg shadow-md">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-lg leading-relaxed">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturing Facilities */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gray-900">Manufacturing</span>{' '}
              <span className="text-orange-500">Excellence</span>
            </h2>
            <p className="text-gray-600 text-lg">
              World-class integrated facilities powered by innovation and sustainability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
                  <MapPin className="w-8 h-8 mb-3" />
                  <h3 className="text-xl font-bold mb-2">{facility.location}</h3>
                  <p className="text-orange-100 text-sm">{facility.type}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {facility.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Shield className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Products Portfolio */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-10">
            <Boxes className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gray-900">Product</span>{' '}
              <span className="text-orange-500">Portfolio</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive range of high-quality metal products for diverse industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-4 hover:border-orange-500 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{product.name}</h4>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-8 border-2 border-orange-200">
            <Globe2 className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Strengths</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Fully integrated "Ore to Metal" manufacturing model</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>83% captive power generation ensuring energy security</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Strategic locations with captive railway sidings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Diversified product portfolio across multiple segments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>State-of-the-art manufacturing facilities</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-2 border-gray-200">
            <LineChart className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Recent Expansions</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Entry into Food Grade Aluminium Foils manufacturing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Launch of Stainless Steel Wire Rods production</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Bright Bars manufacturing capability added</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Continuous capacity expansion across facilities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Enhanced ferro alloys production capacity</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
