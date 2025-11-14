import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/heroVid.webm" type="video/webm" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Empowering Nation <span className="text-orange-400">Building Legacies</span>
          </h1>
          
          {/* Decorative Line */}
          <div className="w-20 h-0.5 bg-orange-400 mb-6"></div>
          
          <p className="text-base md:text-lg text-white/90 font-light">
            The Strength Behind Tomorrow
          </p>
        </div>
      </div>
    </section>
  );
}