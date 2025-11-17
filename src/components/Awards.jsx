import React, { useState, useEffect, useRef } from 'react';

export default function Awards() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textInView, setTextInView] = useState(false);
  const [carouselInView, setCarouselInView] = useState(false);

  const textRef = useRef(null);
  const carouselRef = useRef(null);

  const awards = [
    {
      id: 1,
      image: '/awards1.jpg',
    },
    {
      id: 2,
      image: '/awards2.jpg',
    },
    {
      id: 3,
      image: '/awards3.jpg',
    }
  ];

  // Intersection Observers for entrance animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const textObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTextInView(true);
      }
    }, observerOptions);

    const carouselObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCarouselInView(true);
      }
    }, observerOptions);

    if (textRef.current) textObserver.observe(textRef.current);
    if (carouselRef.current) carouselObserver.observe(carouselRef.current);

    return () => {
      if (textRef.current) textObserver.unobserve(textRef.current);
      if (carouselRef.current) carouselObserver.unobserve(carouselRef.current);
    };
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % awards.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [awards.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % awards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + awards.length) % awards.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto xl-:scale-95 xl-:transition-transform xl-:duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT - Text Content with Animation */}
          <div 
            ref={textRef}
            className={`transition-all duration-1000 ${
              textInView 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className={`text-4xl lg:text-5xl font-bold leading-tight mb-6 transition-all duration-700 ${
              textInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-5'
            }`}
            style={{ transitionDelay: textInView ? '200ms' : '0ms' }}>
              Accreditations <span className="text-orange-500">& Achievements</span>
            </h2>
            
            <p className={`text-gray-700 text-base leading-relaxed transition-all duration-700 ${
              textInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: textInView ? '400ms' : '0ms' }}>
              Recognized by industry leaders and endorsed by global platforms, our journey is defined by trust, quality, and performance. At Shyam Metalics, excellence is not merely a pursuit but a way of life, reflected in every process, product, and partnership we build. Our state-of-the-art facilities, commitment to innovation, and focus on operational excellence enable us to set new benchmarks in the metals and mining sector. Beyond production, our emphasis on sustainability, employee well-being, and community growth ensures that our progress contributes to a larger purpose creating value that lasts.
            </p>
            
            <p className={`text-gray-700 text-base leading-relaxed mt-4 transition-all duration-700 ${
              textInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: textInView ? '600ms' : '0ms' }}>
              Our dedication to responsible growth and continuous improvement has earned us recognition from premier national and international institutions. Every award, certification, and endorsement stands as a testament to the credibility we have built and the impact we continue to create across industries.
            </p>
          </div>

          {/* RIGHT - Image Carousel with Animation */}
          <div 
            ref={carouselRef}
            className={`relative transition-all duration-1000 ${
              carouselInView 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-10 scale-95'
            }`}
          >
            {/* Carousel Container */}
            <div className={`relative overflow-hidden rounded-2xl transition-all duration-700 ${
              carouselInView 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-90'
            }`}
            style={{ transitionDelay: carouselInView ? '200ms' : '0ms' }}>
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {awards.map((award, index) => (
                  <div key={award.id} className="min-w-full">
                    <img
                      src={award.image}
                      alt={`Award ${index + 1}`}
                      className="w-full h-96 object-cover rounded-2xl"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows with Animation */}
              <button
                onClick={prevSlide}
                className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-lg transition-all duration-700 group ${
                  carouselInView 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-5'
                }`}
                style={{ transitionDelay: carouselInView ? '400ms' : '0ms' }}
              >
                <svg className="w-6 h-6 text-gray-800 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-lg transition-all duration-700 group ${
                  carouselInView 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-5'
                }`}
                style={{ transitionDelay: carouselInView ? '400ms' : '0ms' }}
              >
                <svg className="w-6 h-6 text-gray-800 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Indicator with Animation */}
            <div className={`flex justify-center gap-2 mt-6 transition-all duration-700 ${
              carouselInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: carouselInView ? '600ms' : '0ms' }}>
              {awards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-700 ${
                    currentSlide === index 
                      ? 'w-8 bg-orange-500' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  } ${
                    carouselInView 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-0'
                  }`}
                  style={{ transitionDelay: carouselInView ? `${700 + (index * 100)}ms` : '0ms' }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* View All Button with Animation */}
            <div className={`mt-6 transition-all duration-700 ${
              carouselInView 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-5 scale-95'
            }`}
            style={{ transitionDelay: carouselInView ? '1000ms' : '0ms' }}>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                View All
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}