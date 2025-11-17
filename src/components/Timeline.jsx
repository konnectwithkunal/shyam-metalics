import React, { useState, useEffect, useRef } from 'react';

export default function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [headerInView, setHeaderInView] = useState(false);
  const [timelineInView, setTimelineInView] = useState(false);
  
  const headerRef = useRef(null);
  const timelineRef = useRef(null);

  const timelineData = [
    { 
      year: '1991', 
      title: 'The Beginning of a Legacy', 
      description: 'Mangalpur Plant:',
      image: '/about1.jpg',
      details: [
        'Detail point 1 for 1991',
        'Detail point 2 for 1991',
        'Detail point 3 for 1991'
      ]
    },
    { 
      year: '2002', 
      title: 'The First Spark', 
      description: 'Mangalpur Plant:',
      image: '/about2.jpg',
      details: [
        'Detail point 1 for 2002',
        'Detail point 2 for 2002',
        'Detail point 3 for 2002'
      ]
    },
    { 
      year: '2013', 
      title: 'Building the Foundation', 
      description: 'Sambalpur Plant:',
      image: '/about3.jpg',
      details: [
        'Sambalpur Plant:',
        'Commercial production started at the Sponge Iron plant (0.3 MTPA)',
        'Jamuria Plant:',
        'Started production of Sponge Iron, Iron Pellets, and Billets (0.6 MTPA)'
      ]
    },
    { 
      year: '2014', 
      title: 'Integrating Strength', 
      description: 'Sambalpur Plant:',
      image: '/about4.jpg',
      details: [
        'Detail point 1 for 2014',
        'Detail point 2 for 2014',
        'Detail point 3 for 2014'
      ]
    },
    { 
      year: '2015', 
      title: 'Infrastructure in Motion', 
      description: 'Sambalpur Plant:',
      image: '/about5.jpg',
      details: [
        'Detail point 1 for 2015',
        'Detail point 2 for 2015',
        'Detail point 3 for 2015'
      ]
    },
    { 
      year: '2019', 
      title: 'Strengthening the Core', 
      description: 'Sambalpur Plant:',
      image: '/about6.jpg',
      details: [
        'Detail point 1 for 2019',
        'Detail point 2 for 2019',
        'Detail point 3 for 2019'
      ]
    },
    { 
      year: '2021', 
      title: 'Emerging Stronger', 
      description: 'Expanded TMT & Wire Rod capacities',
      image: '/about1.jpg',
      details: [
        'Detail point 1 for 2021',
        'Detail point 2 for 2021',
        'Detail point 3 for 2021'
      ]
    },
    { 
      year: '2022', 
      title: 'Diversifying the Future', 
      description: 'TMT Bar capacity touched 1.17 MTPA',
      image: '/about2.jpg',
      details: [
        'Detail point 1 for 2022',
        'Detail point 2 for 2022',
        'Detail point 3 for 2022'
      ]
    },
    { 
      year: '2024', 
      title: 'Leading with Purpose', 
      description: 'Forayed into Food Grade Aluminium Foils',
      image: '/about3.jpg',
      details: [
        'Detail point 1 for 2024',
        'Detail point 2 for 2024',
        'Detail point 3 for 2024'
      ]
    },
    { 
      year: '2025', 
      title: 'Scaling with Next-Gen Transformation', 
      description: 'Sambalpur Plant:',
      image: '/about4.jpg',
      details: [
        'Detail point 1 for 2025',
        'Detail point 2 for 2025',
        'Detail point 3 for 2025'
      ]
    },
  ];

  // SEPARATE SPEED CONTROLS
  const timelineSpeed = '10s';
  const waveSpeed = '90s';

  // GAP CONTROLS
  const orangeTitleGap = 'mt-10';
  const blackTitleGap = 'mb-0';
  const orangeCardGap = 'mb-24';
  const blackCardGap = 'mt-10';

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

    const timelineObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimelineInView(true);
      }
    }, observerOptions);

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (timelineRef.current) timelineObserver.observe(timelineRef.current);

    return () => {
      if (headerRef.current) headerObserver.unobserve(headerRef.current);
      if (timelineRef.current) timelineObserver.unobserve(timelineRef.current);
    };
  }, []);

  // Auto-cycle through years every 3 seconds - only when not paused
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % timelineData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Duplicate timeline data for infinite scroll effect
  const duplicatedData = [...timelineData, ...timelineData, ...timelineData];

  const getYearColor = (index) => {
    return index % 2 === 0 ? 'bg-orange-500' : 'bg-black';
  };

  const isOrange = (index) => index % 2 === 0;

  const handleYearClick = (item) => {
    setSelectedYear(item);
  };

  const closePopup = () => {
    setSelectedYear(null);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsPaused(false);
  };

  return (
    <section className="pt-16 bg-white overflow-visible">
      {/* Header with Animation */}
      <div 
        ref={headerRef}
        className={`text-center mb-8 px-4 transition-all duration-1000 ${
          headerInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10'
        }`}
      >
        <h1 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          The Shyam <span className="text-orange-600">Journey</span>
        </h1>
        <p className={`text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
          headerInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-5'
        }`}
        style={{ transitionDelay: headerInView ? '200ms' : '0ms' }}>
          A timeline of innovation, growth, and excellence in the steel and metals industry
        </p>
      </div>

      {/* Timeline Container - Full Width with Animation */}
      <div 
        ref={timelineRef}
        className={`relative w-full py-52 overflow-hidden bg-white transition-all duration-1200 ${
          timelineInView 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        }`}
        style={{ 
          backgroundImage: 'url(/timeline.jpg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
          transitionDelay: timelineInView ? '400ms' : '0ms'
        }}
      >
        {/* Wave Line SVG - Scrolling with separate speed */}
        <div className={`absolute top-1/2 left-0 -translate-y-1/2 z-0 pointer-events-none w-full transition-all duration-1000 ${
          timelineInView 
            ? 'opacity-100 scale-x-100' 
            : 'opacity-0 scale-x-75'
        }`}
        style={{ transitionDelay: timelineInView ? '600ms' : '0ms' }}>
          <div
            className="animate-scroll-infinite flex"
            style={{
              width: 'max-content',
              animationDuration: waveSpeed,
              animationPlayState: isPaused || !timelineInView ? 'paused' : 'running'
            }}
          >
            <svg
              className="h-32 flex-shrink-0"
              style={{ width: '6400px' }}
              preserveAspectRatio="none"
              viewBox="0 0 6400 150"
            >
              <path
                d="M0 75 Q 200 15, 400 75 T 800 75 T 1200 75 T 1600 75 T 2000 75 T 2400 75 T 2800 75 T 3200 75 T 3600 75 T 4000 75 T 4400 75 T 4800 75 T 5200 75 T 5600 75 T 6000 75 T 6400 75"
                stroke="#FFFFFF"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <svg
              className="h-32 flex-shrink-0"
              style={{ width: '6400px' }}
              preserveAspectRatio="none"
              viewBox="0 0 6400 150"
            >
              <path
                d="M0 75 Q 200 15, 400 75 T 800 75 T 1200 75 T 1600 75 T 2000 75 T 2400 75 T 2800 75 T 3200 75 T 3600 75 T 4000 75 T 4400 75 T 4800 75 T 5200 75 T 5600 75 T 6000 75 T 6400 75"
                stroke="#FFFFFF"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <svg
              className="h-32 flex-shrink-0"
              style={{ width: '6400px' }}
              preserveAspectRatio="none"
              viewBox="0 0 6400 150"
            >
              <path
                d="M0 75 Q 200 15, 400 75 T 800 75 T 1200 75 T 1600 75 T 2000 75 T 2400 75 T 2800 75 T 3200 75 T 3600 75 T 4000 75 T 4400 75 T 4800 75 T 5200 75 T 5600 75 T 6000 75 T 6400 75"
                stroke="#FFFFFF"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Infinite Scrolling Timeline with Staggered Year Animations */}
        <div className={`relative z-10 transition-opacity duration-1000 ${
          timelineInView ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: timelineInView ? '800ms' : '0ms' }}>
          <div
            className="flex items-center gap-20 animate-scroll-infinite"
            style={{ 
              animationDuration: timelineSpeed,
              animationPlayState: isPaused || !timelineInView ? 'paused' : 'running'
            }}
          >
            {duplicatedData.map((item, index) => {
              const originalIndex = index % timelineData.length;
              const isActive = originalIndex === currentIndex;
              const isHovered = hoveredIndex === index;
              const orangeYear = isOrange(originalIndex);
              const showCard = (isActive && !isPaused) || isHovered;

              return (
                <div 
                  key={`${item.year}-${index}`} 
                  className={`flex flex-col items-center relative flex-shrink-0 transition-all duration-700 ${
                    timelineInView 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-10 scale-75'
                  }`}
                  style={{ 
                    transitionDelay: timelineInView ? `${1000 + (originalIndex * 100)}ms` : '0ms' 
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Card - Above for orange, Below for black with different gaps */}
                  {showCard && (
                    <div className={`absolute ${orangeYear ? `bottom-full ${orangeCardGap}` : `top-full ${blackCardGap}`} w-72 animate-cardFadeIn z-50`}>
                      <div className="bg-white rounded-2xl shadow-xl p-4">
                        <h3 className="text-lg font-bold mb-2 text-gray-900">{item.year}</h3>
                        <h4 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  )}

                  {/* Year Badge with Breathing Ring - Positioned on wave line */}
                  <div className={`relative ${orangeYear ? '-mt-12' : 'mt-12'}`}>
                    {/* Breathing Ring Animation - only on active year */}
                    {isActive && !isPaused && timelineInView && (
                      <div className="absolute inset-0 rounded-full pointer-events-none">
                        <div className="absolute inset-0 rounded-full border-4 border-white animate-breathe"></div>
                      </div>
                    )}

                    {/* Year Circle - Now clickable and hoverable */}
                    <div
                      onClick={() => handleYearClick(item)}
                      className={`relative ${getYearColor(originalIndex)} text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-base shadow-lg z-10 transition-all duration-300 cursor-pointer hover:scale-105 ${
                        (isActive && !isPaused) || isHovered ? 'scale-110 ring-4 ring-white ring-opacity-50' : ''
                      }`}
                    >
                      {item.year}
                    </div>
                  </div>

                  {/* Title - Below for orange, Above for black */}
                  <div className={`absolute ${orangeYear ? `top-full ${orangeTitleGap}` : `bottom-full ${blackTitleGap}`} text-center w-40`}>
                    <p className={`text-xs font-semibold leading-tight transition-colors ${
                      (isActive && !isPaused) || isHovered ? 'text-gray-900' : 'text-gray-800'
                    }`}>
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedYear && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4" onClick={closePopup}>
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-popupFadeIn" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <div className="sticky top-0 bg-white rounded-t-3xl p-6 pb-4 flex justify-between items-start border-b">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">{selectedYear.year}</h2>
                <h3 className="text-xl font-semibold text-gray-800">{selectedYear.title}</h3>
              </div>
              <button 
                onClick={closePopup}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Image */}
              {selectedYear.image && (
                <img 
                  src={selectedYear.image} 
                  alt={selectedYear.title}
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
              )}

              {/* Details */}
              <ul className="space-y-3">
                {selectedYear.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700 text-base">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 20s linear infinite;
        }

        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-breathe {
          animation: breathe 1.5s ease-in-out infinite;
        }

        @keyframes cardFadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-cardFadeIn {
          animation: cardFadeIn 0.4s ease-out;
        }

        @keyframes popupFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-popupFadeIn {
          animation: popupFadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}