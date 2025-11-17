import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background with Fade In */}
      <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/heroVid.webm" type="video/webm" />
        </video>
      </div>

      {/* Overlay with Fade In */}
      <div className={`absolute top-0 left-0 w-full h-full bg-black/30 transition-opacity duration-1500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}></div>

      {/* Content with Staggered Animations */}
      <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
        <div className="max-w-2xl">
          {/* Title with Slide Up Animation */}
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}>
            Empowering Nation <span className="text-orange-400">Building Legacies</span>
          </h1>
          
          {/* Decorative Line with Scale Animation */}
          <div className={`h-0.5 bg-orange-400 mb-6 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 w-20' 
              : 'opacity-0 w-0'
          }`}
          style={{ 
            transitionDelay: isVisible ? '800ms' : '0ms',
            transformOrigin: 'left'
          }}></div>
          
          {/* Tagline with Slide Up Animation */}
          <p className={`text-base md:text-lg text-white/90 font-light transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '1100ms' : '0ms' }}>
            The Strength Behind Tomorrow
          </p>
        </div>
      </div>
    </section>
  );
}