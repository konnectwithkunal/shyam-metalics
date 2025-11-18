import React, { useState, useEffect } from 'react';
import { Factory, MapPin, Award, TrendingUp, Zap, Users, Shield, CheckCircle } from 'lucide-react';

export default function ManufacturingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLocation, setActiveLocation] = useState('Giridih');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const locations = ['Giridih', 'Sambalpur', 'Jamuria', 'Mangalpur', 'Kharagpur', 'Odisha'];

  const stats = [
    { icon: Factory, value: '100 MW', label: 'Power', sublabel: 'Captive power plant' },
    { icon: TrendingUp, value: '4.5 MTPA', label: 'Capacity', sublabel: 'Aggregate installed' },
    { icon: Users, value: '2000+', label: 'Employees', sublabel: 'Skilled workforce' },
    { icon: Award, value: 'ISO Certified', label: 'Quality', sublabel: 'International standards' }
  ];

  const features = [
    {
      icon: Factory,
      title: 'Manufacturing Units',
      subtitle: 'State-of-the-Art',
      description: 'World-class manufacturing facilities with advanced technology and automation'
    },
    {
      icon: Shield,
      title: 'Testing',
      subtitle: 'Rigorous Quality',
      description: 'Comprehensive quality control and testing at every stage of production'
    },
    {
      icon: CheckCircle,
      title: 'Hygiene',
      subtitle: 'International',
      description: 'Clean and safe working environment adhering to global standards'
    },
    {
      icon: Award,
      title: 'Safety',
      subtitle: 'World-Class',
      description: 'Zero-accident culture with comprehensive safety protocols and training'
    },
    {
      icon: Zap,
      title: 'Efficiency',
      subtitle: 'Energy',
      description: 'Optimized processes for maximum efficiency and minimum environmental impact'
    },
    {
      icon: TrendingUp,
      title: 'Productivity',
      subtitle: 'High',
      description: 'Industry-leading production rates with consistent quality output'
    }
  ];

  const timeline = [
    { year: '1991', event: 'Established' },
    { year: '2002', event: 'First Expansion' },
    { year: '2010', event: 'Modernization' },
    { year: '2015', event: 'Capacity Increase' },
    { year: '2020', event: 'Technology Upgrade' },
    { year: '2024', event: 'Green Initiative' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <img src="/about1.jpg" alt="Manufacturing" className="w-full h-full object-cover" />
        </div>
        <div className={`absolute top-0 left-0 w-full h-full bg-black/60 transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

        <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}>
            Giridih, Jharkhand
          </h1>
        </div>

        {/* Location Tabs */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex overflow-x-auto scrollbar-hide gap-2 py-3">
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => setActiveLocation(location)}
                  className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                    activeLocation === location
                      ? 'bg-orange-500 text-white'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Building Tomorrow Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-gray-900">Building Tomorrow With</span> <span className="text-orange-500">Manufacturing Excellence</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-4xl">
            At Shyam Metalics, our manufacturing units are built to set new high standards that sets new high performance on progress and sustainability. We are driven not just by the ability to produce quality products, but also by the determination to build a better future for everyone.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
            Rooted in the heart of India, our facilities are equipped with state-of-the-art technologies and managed by a team of skilled professionals. Our commitment goes beyond production—it's about creating solutions that power industries, build infrastructure, and contribute to the nation's economic growth. Each day, we are innovating and adapting to stay ahead, ensuring that every piece we manufacture reflects the promise of quality, consistency, and reliability that our name has come to represent.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                <stat.icon className="w-10 h-10 text-orange-500 mb-3" />
                <div className="text-3xl font-bold text-orange-500 mb-1">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.sublabel}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-lg text-gray-700">
            <span className="font-semibold">Built for</span> <span className="text-orange-500 font-bold">today</span>, <span className="font-semibold">Built for</span> <span className="text-orange-500 font-bold">tomorrow</span>, <span className="font-semibold">Built for the</span> <span className="text-orange-500 font-bold">nation</span>
          </p>
        </div>
      </section>

      {/* Sambalpur Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/about2.jpg" alt="Sambalpur Plant" className="rounded-lg shadow-xl w-full h-96 object-cover" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-orange-500">Sambalpur</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Integrated steel manufacturing facilities, cutting-edge technology along with best in class production capabilities. Located strategically in Odisha, this plant serves as a key hub for our operations with captive power generation and advanced automation systems. The Sambalpur facility represents our commitment to sustainable manufacturing excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Our Plants Apart */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gray-900">What Sets Our</span> <span className="text-orange-500">Plants Apart</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 hover:shadow-xl transition-all duration-300">
                <feature.icon className="w-12 h-12 text-orange-500 mb-4" />
                <div className="text-xl font-bold text-gray-900 mb-1">{feature.title}</div>
                <div className="text-orange-500 font-semibold text-sm mb-3">{feature.subtitle}</div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified in Growth Timeline */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-white">Unified in</span> <span className="text-orange-400">Growth</span>
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            At Shyam Metalics, we don't just manufacture products—we engineer solutions that empower progress. Our integrated approach brings together innovation, dedication, and sustainability to create a future where quality and growth walk hand in hand.
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-orange-500/30"></div>

            {/* Timeline Items */}
            <div className="relative flex justify-between items-center">
              {timeline.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-orange-500 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg mb-4 relative z-10 border-4 border-gray-900">
                    {item.year}
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-300">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
