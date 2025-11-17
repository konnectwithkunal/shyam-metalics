import React, { useState, useEffect, useRef } from 'react';

export default function Stats() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { label: 'Metal Production Capacity', value: 15.13, suffix: 'MTPA', decimals: 2 },
    { label: 'Employees', value: 17500, suffix: '+', decimals: 0 },
    { label: 'Captive Power Infrastructure', value: 83, suffix: '%', decimals: 0 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
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
    <section ref={sectionRef} className="max-w-6xl mx-auto px-4 py-8">
      {/* Container with scale and fade animation */}
      <div className={`bg-white rounded-xl shadow-md p-6 md:p-8 transition-all duration-1000 ${
        inView 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-95 translate-y-10'
      }`}>
        <div className="flex flex-col md:flex-row items-center justify-around gap-6">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              {/* Individual stat with staggered animation */}
              <div 
                className={`text-center flex-1 transition-all duration-700 ${
                  inView 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-10'
                }`}
                style={{ 
                  transitionDelay: inView ? `${index * 200 + 300}ms` : '0ms' 
                }}
              >
                <div className="text-gray-700 font-semibold text-base leading-5 mb-3">
                  {stat.label}
                </div>
                <div className="text-orange-400 font-bold text-4xl leading-10">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    isActive={inView}
                    delay={index * 200 + 300}
                  />
                </div>
              </div>
              {/* Divider with fade animation */}
              {index < stats.length - 1 && (
                <div className={`hidden md:flex items-center justify-center transition-all duration-700 ${
                  inView ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                }`}
                style={{ 
                  transitionDelay: inView ? `${index * 200 + 500}ms` : '0ms' 
                }}>
                  <div className="w-px h-16 bg-orange-400"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({ value, suffix, decimals, isActive, delay = 0 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    // Wait for the delay before starting animation
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [isActive, delay]);

  useEffect(() => {
    if (!started) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, value);
      setDisplayValue(current);

      if (step >= steps) {
        setDisplayValue(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [started, value]);

  const formattedValue = decimals > 0 
    ? displayValue.toFixed(decimals)
    : Math.floor(displayValue).toLocaleString();

  return (
    <>
      {formattedValue}
      {suffix}
    </>
  );
}