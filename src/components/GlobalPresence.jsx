import React, { useState, useEffect, useRef } from 'react';

export default function GlobalPresence() {
  const [counts, setCounts] = useState({
    plants: 0,
    countries: 0,
    capacity: 0,
    rank: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const [headerInView, setHeaderInView] = useState(false);
  const [footprintInView, setFootprintInView] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const [mapsInView, setMapsInView] = useState(false);
  
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const footprintRef = useRef(null);
  const statsRef = useRef(null);
  const mapsRef = useRef(null);

  const stats = [
    { key: 'plants', number: 7, suffix: '+', label: 'Plants across India' },
    { key: 'countries', number: 60, suffix: '+', label: 'Serving Countries Across the Globe' },
    { key: 'capacity', number: 15.31, suffix: '+', label: 'MTPA Integred Capcity', decimals: 2 },
    { key: 'rank', number: 2, suffix: 'nd', label: 'Largest DRI Producer in India' }
  ];

  const plants = [
    { name: 'INDORE PLANT', location: 'Madhya Pradesh' },
    { name: 'KHARAGPUR PLANT', location: 'West Bengal' },
    { name: 'SAMBALPUR PLANT', location: 'Odisha' },
    { name: 'PAKURIA PLANT', location: 'West Bengal' },
    { name: 'MANGALPUR PLANT', location: 'West Bengal' },
    { name: 'GIRIDIH PLANT', location: 'Jharkhand' },
    { name: 'JAMURIA PLANT', location: 'West Bengal' }
  ];

  // Intersection Observers for entrance animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const headerObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHeaderInView(true);
      }
    }, observerOptions);

    const footprintObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setFootprintInView(true);
      }
    }, observerOptions);

    const statsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStatsInView(true);
      }
    }, observerOptions);

    const mapsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setMapsInView(true);
      }
    }, observerOptions);

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (footprintRef.current) footprintObserver.observe(footprintRef.current);
    if (statsRef.current) statsObserver.observe(statsRef.current);
    if (mapsRef.current) mapsObserver.observe(mapsRef.current);

    return () => {
      if (headerRef.current) headerObserver.unobserve(headerRef.current);
      if (footprintRef.current) footprintObserver.unobserve(footprintRef.current);
      if (statsRef.current) statsObserver.unobserve(statsRef.current);
      if (mapsRef.current) mapsObserver.unobserve(mapsRef.current);
    };
  }, []);

  // Counter animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat) => {
      let current = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(timer);
        }
        
        setCounts(prev => ({
          ...prev,
          [stat.key]: stat.decimals ? current.toFixed(2) : Math.floor(current)
        }));
      }, interval);
    });
  };

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Header with Animation */}
        <h2 
          ref={headerRef}
          className={`text-4xl lg:text-5xl font-bold text-center mb-16 transition-all duration-1000 ${
            headerInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-10'
          }`}
        >
          Presence Across <span className="text-orange-500">Continents</span>
        </h2>

        {/* Our Global Footprint Section */}
        <div className="mb-12">
          {/* Section Header with Animation */}
          <div 
            ref={footprintRef}
            className={`flex justify-between items-center mb-6 transition-all duration-1000 ${
              footprintInView 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="transition-all duration-700"
              style={{ transitionDelay: footprintInView ? '200ms' : '0ms' }}>
              <h3 className="text-3xl font-bold mb-2">
                Our Global <span className="text-orange-500">Footprint</span>
              </h3>
              <p className="text-gray-600">Metric Verified Data (2024-25)</p>
            </div>
            <button className={`bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-700 flex items-center gap-2 ${
              footprintInView 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-10 scale-95'
            }`}
            style={{ transitionDelay: footprintInView ? '400ms' : '0ms' }}>
              View Global Presence
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Stats Grid with Counter and Animation */}
          <div 
            ref={statsRef}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-50 rounded-2xl p-8 mb-12 transition-all duration-1000 ${
              statsInView 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-95 translate-y-10'
            }`}
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-700 ${
                  statsInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: statsInView ? `${index * 150}ms` : '0ms' }}
              >
                <h4 className={`text-4xl lg:text-5xl font-bold text-orange-500 mb-2 transition-all duration-700 ${
                  statsInView 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-75'
                }`}
                style={{ transitionDelay: statsInView ? `${index * 150 + 200}ms` : '0ms' }}>
                  {counts[stat.key]}{stat.suffix}
                </h4>
                <p className={`text-gray-700 text-sm font-medium transition-all duration-700 ${
                  statsInView 
                    ? 'opacity-100' 
                    : 'opacity-0'
                }`}
                style={{ transitionDelay: statsInView ? `${index * 150 + 300}ms` : '0ms' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Maps Section - Custom Width Distribution with Animation */}
        <div ref={mapsRef} className="flex flex-col lg:flex-row gap-6">
          {/* Global Presence Map - 50% */}
          <div className={`lg:w-1/2 bg-white border-2 border-gray-200 rounded-2xl p-6 transition-all duration-1000 ${
            mapsInView 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 -translate-x-10 scale-95'
          }`}
          style={{ transitionDelay: mapsInView ? '0ms' : '0ms' }}>
            <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 transition-all duration-700 ${
              mapsInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-5'
            }`}
            style={{ transitionDelay: mapsInView ? '200ms' : '0ms' }}>
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
              </svg>
              Global <span className="text-orange-500">Presence</span>
            </h3>
            
            {/* World Map - Centered */}
            <div className={`relative flex items-center justify-center min-h-[400px] transition-all duration-1000 ${
              mapsInView 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-90'
            }`}
            style={{ transitionDelay: mapsInView ? '400ms' : '0ms' }}>
              <img 
                src="/asia.png" 
                alt="Global Presence Map"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* India Map - 30% */}
          <div className={`lg:w-[30%] bg-white border-2 border-gray-200 rounded-2xl p-6 transition-all duration-1000 ${
            mapsInView 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-10 scale-95'
          }`}
          style={{ transitionDelay: mapsInView ? '200ms' : '0ms' }}>
            <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 transition-all duration-700 ${
              mapsInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-5'
            }`}
            style={{ transitionDelay: mapsInView ? '400ms' : '0ms' }}>
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Our <span className="text-orange-500">Plants</span>
            </h3>
            
            {/* India Map - Centered */}
            <div className={`relative flex items-center justify-center min-h-[400px] transition-all duration-1000 ${
              mapsInView 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-90'
            }`}
            style={{ transitionDelay: mapsInView ? '600ms' : '0ms' }}>
              <img 
                src="/india.png" 
                alt="India Map with Plants"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>

       {/* Plants List - 20% */}
<div
  className={`lg:w-[20%] bg-orange-50 rounded-2xl p-6 border-2 border-orange-100 transition-all duration-1000 ${
    mapsInView
      ? 'opacity-100 translate-x-0 scale-100'
      : 'opacity-0 translate-x-10 scale-95'
  }`}
  style={{ transitionDelay: mapsInView ? '400ms' : '0ms' }}
>
  <h4
    className={`font-bold text-lg mb-4 flex items-center gap-2 transition-all duration-700 ${
      mapsInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
    }`}
    style={{ transitionDelay: mapsInView ? '600ms' : '0ms' }}
  >
    <svg
      className="w-5 h-5 text-orange-500"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
    Our Plants
  </h4>

  <div className="space-y-2">
    {plants.map((plant, index) => (
      // OUTER WRAPPER = entrance animation only
      <div
        key={index}
        style={{
          opacity: mapsInView ? 1 : 0,
          transform: mapsInView ? 'translateX(0)' : 'translateX(-20px)',
          transition: 'opacity 0.7s, transform 0.7s',
          transitionDelay: mapsInView ? `${800 + index * 100}ms` : '0ms',
        }}
      >
        {/* INNER DIV = hover only (no inline transition) */}
        <div className="
          border-b border-orange-200 pb-3 last:border-0 last:pb-0
          cursor-pointer
          hover:bg-white hover:px-3 hover:py-2 hover:rounded-lg hover:shadow-md hover:-translate-y-1
          transition-all duration-150
        ">
          <p className="font-bold text-sm text-gray-900">{plant.name}</p>
          <p className="text-sm text-gray-600">{plant.location}</p>
        </div>
      </div>
    ))}
  </div>
</div>


        </div>
      </div>
    </section>
  );
}