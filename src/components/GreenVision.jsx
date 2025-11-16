import React, { useState, useEffect, useRef } from 'react';

export default function GreenVision() {
  const [counts, setCounts] = useState({
    actual: 0,
    offsets: 0,
    net: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { 
      key: 'actual',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
      ),
      title: 'ACTUAL IMPACT',
      number: 314519,
      label: 'MtCO₂e'
    },
    { 
      key: 'offsets',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
        </svg>
      ),
      title: 'OFFSETS',
      number: 219482,
      label: 'MtCO₂e'
    },
    { 
      key: 'net',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      ),
      title: 'NET IMPACT',
      number: 95037,
      label: 'MtCO₂e'
    }
  ];

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
    const duration = 2000;
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
          [stat.key]: Math.floor(current).toLocaleString()
        }));
      }, interval);
    });
  };

  return (
    <section ref={sectionRef} className="bg-white">
      {/* Title - Outside video section */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <h2 className="text-4xl lg:text-5xl font-bold">
          Green <span className="text-orange-500">Vision</span>
        </h2>
      </div>

      {/* Video Section */}
      <div className="relative min-h-[100vh] flex items-end overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/environment.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Stats Container - Positioned at Bottom - Smaller with Hover Effects */}
        <div className="relative z-10 w-full pb-12">
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 inline-flex gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center min-w-[160px] transition-all duration-300 hover:scale-110 hover:bg-white hover:bg-opacity-10 rounded-xl p-4 cursor-pointer group"
                >
                  {/* Icon */}
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 mb-3 transition-all duration-300 group-hover:bg-orange-500 group-hover:scale-110">
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-semibold text-xs mb-2 tracking-wide transition-colors duration-300 group-hover:text-orange-300">
                    {stat.title}
                  </h3>

                  {/* Number */}
                  <p className="text-white text-3xl font-bold mb-1 transition-all duration-300 group-hover:text-orange-400">
                    {counts[stat.key] || '0'}
                  </p>

                  {/* Label */}
                  <p className="text-white text-xs opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}