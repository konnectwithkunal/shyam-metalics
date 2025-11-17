import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

export default function BusinessVerticals() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const verticals = [
    {
      title: 'Iron and Steel',
      description: 'At the heart of our operations is a fully integrated iron and steel value chain, covering the production of TMT bars, structural steel, wire rods, billets, and sponge iron. We are also among the largest producers of Ferro alloys in India, supplying high-grade iron and steel materials and driving innovation in advanced metallurgy.',
      image: '/iron-steel.jpg',
      icon: '🏗️',
      stats: { value: '5M+', label: 'Tonnes/Year' }
    },
    {
      title: 'Aluminium',
      description: 'Our aluminium business is driven by precision engineering, advanced automation, and adherence to stringent global standards. Backed with cutting-edge manufacturing facilities, we produce a broader range of premium-quality aluminium foils tailored for sectors such as pharmaceuticals, energy storage, and FMCG, meeting the global benchmarks for performance.',
      image: '/aluminium.jpg',
      icon: '⚡',
      stats: { value: '20K+', label: 'Tonnes Capacity' }
    },
    {
      title: 'Energy and Others',
      description: 'Our integrated energy and allied businesses form the backbone of our operations, as nearly 83% of our total power requirement is met in-house through advanced captive power plants. In addition to energy, we are actively expanding into high-impact infrastructure segments, including railway wagon manufacturing, crash barriers, and other downstream innovations.',
      image: '/energy.jpg',
      icon: '🔋',
      stats: { value: '83%', label: 'Self-Sufficient' }
    }
  ];

  // Intersection Observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 md:px-12 lg:px-32 xl:px-8 2xl:px-0 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="w-full mx-auto">
        {/* Enhanced Header with Animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="inline-block">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2 block">
              What We Do
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">
              Business <span className="text-orange-500 relative">
                Verticals
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 0 150 0 200 4" stroke="#F97316" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              Discover our diverse portfolio of integrated businesses driving sustainable growth and innovation
            </p>
          </div>
        </div>

        {/* Enhanced Cards Grid with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {verticals.map((vertical, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms' 
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Container */}
              <div className="rounded-3xl overflow-hidden relative h-[520px] shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                {/* Background Image with Zoom Effect */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${vertical.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 group-hover:from-black/90 group-hover:via-black/80 transition-all duration-500" />

                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500 opacity-20 rounded-bl-full" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 text-white">
                  {/* Top Section - Icon & Stats */}
                  <div className="flex justify-between items-start">
                    <div className="text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {vertical.icon}
                    </div>
                    <div className="text-right bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                      <div className="text-2xl font-bold text-orange-400">{vertical.stats.value}</div>
                      <div className="text-xs text-gray-300">{vertical.stats.label}</div>
                    </div>
                  </div>

                  {/* Middle Section - Title & Description */}
                  <div className="flex-grow flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-4 transform transition-all duration-300">
                      {vertical.title}
                    </h3>
                    <div className="relative overflow-hidden">
                      <p className={`text-sm leading-relaxed text-gray-200 transition-all duration-500 ${
                        hoveredIndex === index ? 'max-h-96 opacity-100' : 'max-h-32 opacity-90'
                      }`}>
                        {vertical.description}
                      </p>
                      {hoveredIndex !== index && (
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/80 to-transparent" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Section - Button */}
                  <div className="mt-6">
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-orange-500/50">
                      <span>Read More</span>
                      <ChevronRight className="w-5 h-5 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-3 -left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-[-5deg] opacity-0 group-hover:opacity-100 transition-all duration-300">
                #{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Original Explore All Button with Animation */}
        <div className={`flex justify-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2">
            Explore All Verticals
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}