import React, { useState, useEffect, useRef } from 'react';

export default function Clients() {
  const [topRowInView, setTopRowInView] = useState(false);
  const [bottomRowInView, setBottomRowInView] = useState(false);

  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  // Top row clients - scrolls left
  const topRowClientsBase = [
    { id: 1, name: 'PWD', logo: '/client1.jpg' },
    { id: 2, name: 'Shapoorji Pallonji', logo: '/client2.png' },
    { id: 3, name: 'BHEL', logo: '/client3.png' },
    { id: 4, name: 'Engineers India Limited', logo: '/client4.jpg' },
    { id: 5, name: 'GRIL', logo: '/client5.jpg' },
  ];

  // Bottom row clients - scrolls right
  const bottomRowClientsBase = [
    { id: 6, name: 'RITES', logo: '/client6.png' },
    { id: 7, name: 'PWD ', logo: '/client7.jpg' },
    { id: 8, name: 'GPT', logo: '/client8.png' },
    { id: 9, name: 'NHAI', logo: '/client9.png' },
  ];

  // Duplicate arrays to ensure seamless loop (3 times each)
  const topRowClients = [...topRowClientsBase, ...topRowClientsBase, ...topRowClientsBase];
  const bottomRowClients = [...bottomRowClientsBase, ...bottomRowClientsBase, ...bottomRowClientsBase];

  // Intersection Observers for entrance animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const topRowObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTopRowInView(true);
      }
    }, observerOptions);

    const bottomRowObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setBottomRowInView(true);
      }
    }, observerOptions);

    if (topRowRef.current) topRowObserver.observe(topRowRef.current);
    if (bottomRowRef.current) bottomRowObserver.observe(bottomRowRef.current);

    return () => {
      if (topRowRef.current) topRowObserver.unobserve(topRowRef.current);
      if (bottomRowRef.current) bottomRowObserver.unobserve(bottomRowRef.current);
    };
  }, []);

  return (
    <section className="py-8 px-4 bg-gradient-to-b bg-white/30 overflow-hidden">
      {/* Top Row - Scrolling Left with Animation */}
      <div 
        ref={topRowRef}
        className={`relative transition-all duration-1000 ${
          topRowInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10'
        }`}
      >
        <div className="flex overflow-hidden">
          <div className={`flex py-4 ${topRowInView ? 'animate-scroll-left' : ''}`}>
            {/* First set of logos */}
            {topRowClients.map((client, index) => (
              <div
                key={`top-${client.id}-${index}`}
                className={`flex-shrink-0 mx-4 h-24 bg-white rounded-2xl transition-all duration-700 flex items-center justify-center px-4 py-4 group cursor-pointer border border-gray-200 hover:border-orange-300 hover:-translate-y-1 ${
                  topRowInView 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-75'
                }`}
                style={{ 
                  transitionDelay: topRowInView ? `${(index % topRowClientsBase.length) * 100}ms` : '0ms' 
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {topRowClients.map((client, index) => (
              <div
                key={`top-dup-${client.id}-${index}`}
                className={`flex-shrink-0 mx-4 h-24 bg-white rounded-2xl transition-all duration-700 flex items-center justify-center px-4 py-4 group cursor-pointer border border-gray-200 hover:border-orange-300 hover:-translate-y-1 ${
                  topRowInView 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-75'
                }`}
                style={{ 
                  transitionDelay: topRowInView ? `${(index % topRowClientsBase.length) * 100}ms` : '0ms' 
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row - Scrolling Right with Animation */}
      <div 
        ref={bottomRowRef}
        className={`relative transition-all duration-1000 ${
          bottomRowInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: bottomRowInView ? '200ms' : '0ms' }}
      >
        <div className="flex overflow-hidden">
          <div className={`flex py-4 ${bottomRowInView ? 'animate-scroll-right' : ''}`}>
            {/* First set of logos */}
            {bottomRowClients.map((client, index) => (
              <div
                key={`bottom-${client.id}-${index}`}
                className={`flex-shrink-0 mx-4 h-24 bg-white rounded-2xl transition-all duration-700 flex items-center justify-center px-4 py-4 group cursor-pointer border border-gray-200 hover:border-orange-300 hover:-translate-y-1 ${
                  bottomRowInView 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-75'
                }`}
                style={{ 
                  transitionDelay: bottomRowInView ? `${200 + ((index % bottomRowClientsBase.length) * 100)}ms` : '0ms' 
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {bottomRowClients.map((client, index) => (
              <div
                key={`bottom-dup-${client.id}-${index}`}
                className={`flex-shrink-0 mx-4 h-24 bg-white rounded-2xl transition-all duration-700 flex items-center justify-center px-4 py-4 group cursor-pointer border border-gray-200 hover:border-orange-300 hover:-translate-y-1 ${
                  bottomRowInView 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-75'
                }`}
                style={{ 
                  transitionDelay: bottomRowInView ? `${200 + ((index % bottomRowClientsBase.length) * 100)}ms` : '0ms' 
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        /* Pause animation on hover */
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}