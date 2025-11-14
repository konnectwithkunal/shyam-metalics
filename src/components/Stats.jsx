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
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-around gap-6">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <div className="text-center flex-1">
                <div className="text-gray-700 font-semibold text-base leading-5 mb-3">
                  {stat.label}
                </div>
                <div className="text-orange-400 font-bold text-4xl leading-10">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    isActive={inView}
                  />
                </div>
              </div>
              {/* Divider - show only between items, not after last one */}
              {index < stats.length - 1 && (
                <div className="hidden md:flex items-center justify-center">
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

function AnimatedNumber({ value, suffix, decimals, isActive }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isActive) return;

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
  }, [isActive, value]);

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