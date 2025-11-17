import React, { useState, useEffect, useRef } from 'react';

export default function GreenVision() {
  const [counts, setCounts] = useState({
    actual: 0,
    offsets: 0,
    net: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const [titleInView, setTitleInView] = useState(false);
  const [videoInView, setVideoInView] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const videoRef = useRef(null);
  const statsRef = useRef(null);

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

  // Intersection Observers for entrance animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const titleObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTitleInView(true);
      }
    }, observerOptions);

    const videoObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVideoInView(true);
      }
    }, observerOptions);

    const statsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStatsInView(true);
      }
    }, { threshold: 0.5 });

    if (titleRef.current) titleObserver.observe(titleRef.current);
    if (videoRef.current) videoObserver.observe(videoRef.current);
    if (statsRef.current) statsObserver.observe(statsRef.current);

    return () => {
      if (titleRef.current) titleObserver.unobserve(titleRef.current);
      if (videoRef.current) videoObserver.unobserve(videoRef.current);
      if (statsRef.current) statsObserver.unobserve(statsRef.current);
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
      {/* Title - Outside video section with Animation */}
      <div 
        ref={titleRef}
        className="max-w-7xl mx-auto px-4 pt-16 pb-8"
      >
        <h2 className={`text-4xl lg:text-5xl font-bold transition-all duration-1000 ${
          titleInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10'
        }`}>
          Green <span className="text-orange-500">Vision</span>
        </h2>
      </div>

      {/* Video Section with Animation */}
      <div 
        ref={videoRef}
        className="relative min-h-[100vh] flex items-end overflow-hidden"
      >
        {/* Video Background with Fade and Scale */}
        <div className={`absolute inset-0 transition-all duration-1500 ${
          videoInView 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-105'
        }`}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/environment.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark Overlay with Fade */}
        <div className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-1500 ${
          videoInView 
            ? 'opacity-100' 
            : 'opacity-0'
        }`} />

        {/* Stats Container - Positioned at Bottom with Animation */}
        <div 
          ref={statsRef}
          className="relative z-10 w-full pb-12"
        >
          <div className="flex justify-center">
            <div className={`bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 inline-flex gap-6 transition-all duration-1000 ${
              statsInView 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-10 scale-90'
            }`}>
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col items-center text-center min-w-[160px] rounded-xl p-4 cursor-pointer group ${
                    statsInView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transition: statsInView ? 'opacity 0.7s, transform 0.7s' : 'opacity 0.3s, transform 0.3s, background-color 0.3s, scale 0.3s',
                    transitionDelay: statsInView ? `${index * 200}ms` : '0ms' 
                  }}
                >
                  {/* Card hover effect - separate div for faster hover transition */}
                  <div className="absolute inset-0 rounded-xl bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 group-hover:scale-110" />

                  {/* Icon with Rotation Animation */}
                  <div 
                    className={`relative bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 mb-3 ${
                      statsInView 
                        ? 'opacity-100 rotate-0 scale-100' 
                        : 'opacity-0 rotate-180 scale-50'
                    }`}
                    style={{ 
                      transition: statsInView ? 'all 0.7s' : 'all 0.3s',
                      transitionDelay: statsInView ? `${index * 200 + 200}ms` : '0ms' 
                    }}
                  >
                    {/* Icon background hover - faster transition */}
                    <div className="absolute inset-0 rounded-xl bg-transparent group-hover:bg-orange-500 transition-all duration-300 group-hover:scale-110" />
                    <div className="relative text-white">
                      {stat.icon}
                    </div>
                  </div>

                  {/* Title with Slide Animation */}
                  <h3 
                    className={`relative text-white font-semibold text-xs mb-2 tracking-wide group-hover:text-orange-300 ${
                      statsInView 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-5'
                    }`}
                    style={{ 
                      transition: statsInView ? 'all 0.7s' : 'color 0.3s, opacity 0.3s, transform 0.3s',
                      transitionDelay: statsInView ? `${index * 200 + 300}ms` : '0ms' 
                    }}
                  >
                    {stat.title}
                  </h3>

                  {/* Number with Scale Animation - FIXED HOVER */}
                  <p 
                    className={`relative text-white text-3xl font-bold mb-1 group-hover:text-orange-400 group-hover:scale-110 ${
                      statsInView 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-50'
                    }`}
                    style={{ 
                      transition: statsInView ? 'all 0.7s' : 'color 0.3s, transform 0.3s',
                      transitionDelay: statsInView ? `${index * 200 + 400}ms` : '0ms' 
                    }}
                  >
                    {counts[stat.key] || '0'}
                  </p>

                  {/* Label with Fade Animation - FIXED HOVER */}
                  <p 
                    className={`relative text-white text-xs opacity-80 group-hover:opacity-100 ${
                      statsInView 
                        ? '' 
                        : 'opacity-0'
                    }`}
                    style={{ 
                      transition: statsInView ? `opacity 0.7s` : 'opacity 0.3s',
                      transitionDelay: statsInView ? `${index * 200 + 500}ms` : '0ms',
                      opacity: !statsInView ? 0 : undefined
                    }}
                  >
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