import React, { useState, useEffect, useRef } from 'react';
import { Eye, Target, Heart, ChevronLeft, ChevronRight, Flame, Factory, Users, MessageSquare, Globe, Leaf } from 'lucide-react';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsInView, setCardsInView] = useState(false);
  const [overviewInView, setOverviewInView] = useState(false);
  const [highlightsInView, setHighlightsInView] = useState(false);
  
  const cardsRef = useRef(null);
  const overviewRef = useRef(null);
  const highlightsRef = useRef(null);
  
  const cards = [
    {
      icon: Eye,
      title: 'Vision',
      content: "We aspire to be the global benchmark in the metal industry by engineering high-performance solutions through value creation and process innovation. Our vision is to transform Shyam Metallics into a next-generation steel leader by pioneering advanced alloys and empowering Bharat's growth with clean, smart, globally competitive 'Made in India' steel."
    },
    {
      icon: Target,
      title: 'Mission',
      content: "Consistent with our vision, we strive to engineer stronger metal solutions through integrated operations, cost-efficiency, and responsible business practices. Our mission is to empower industries and drive sustainable growth by optimizing both natural and human resources, thereby strengthening India's industrial base."
    },
    {
      icon: Heart,
      title: 'Values',
      content: "We value integrity, innovation, and inclusivity in every facet of our operations. Our values guide us to uphold the highest standards of ethics, responsibility, and performance as we grow together with all our stakeholders and contribute meaningfully to society."
    }
  ];

  const slides = [
    '/about1.jpg',
    '/about2.jpg',
    '/about3.jpg',
    '/about4.jpg',
    '/about5.jpg',
    '/about6.jpg'
  ];

  const highlights = [
    { icon: Flame, title: 'Leading Sponge Iron & Pellet Producers' },
    { icon: Factory, title: 'Integrated Steel Powerhouse' },
    { icon: Users, title: 'Leading Ferro Alloys Producer' },
    { icon: MessageSquare, title: 'Major Aluminium Foil Exporter' },
    { icon: Globe, title: 'Future-Ready & Globally Aligned' },
    { icon: Leaf, title: 'Driven by Sustainability & Governance' }
  ];

  // Intersection Observers for entrance animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const cardsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCardsInView(true);
      }
    }, observerOptions);

    const overviewObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setOverviewInView(true);
      }
    }, observerOptions);

    const highlightsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHighlightsInView(true);
      }
    }, observerOptions);

    if (cardsRef.current) cardsObserver.observe(cardsRef.current);
    if (overviewRef.current) overviewObserver.observe(overviewRef.current);
    if (highlightsRef.current) highlightsObserver.observe(highlightsRef.current);

    return () => {
      if (cardsRef.current) cardsObserver.unobserve(cardsRef.current);
      if (overviewRef.current) overviewObserver.unobserve(overviewRef.current);
      if (highlightsRef.current) highlightsObserver.unobserve(highlightsRef.current);
    };
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-16 px-4 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Vision, Mission, Values Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 items-stretch">

          {cards.map((card, index) => (
            // OUTER: scroll / entrance only
            <div
              key={index}
              style={{
                opacity: cardsInView ? 1 : 0,
                transform: cardsInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.7s, transform 0.7s',
                transitionDelay: cardsInView ? `${index * 150}ms` : '0ms'
              }}
            >
              {/* INNER: hover only */}
             <div className="
  bg-white rounded-3xl border-2 border-orange-500
  p-6 md:p-8 lg:p-6 xl:p-10
  pt-8 md:pt-10 lg:pt-8 xl:pt-12
  pb-10 md:pb-12 lg:pb-10 xl:pb-14
  flex flex-col items-center text-center
  h-full
  transition-all duration-150 hover:scale-[1.02] hover:shadow-xl
">

                {/* Icon with rotation animation */}
                <div
                  className="mb-6"
                  style={{
                    opacity: cardsInView ? 1 : 0,
                    transform: cardsInView ? 'rotate(0deg) scale(1)' : 'rotate(-45deg) scale(0.5)',
                    transition: 'opacity 0.7s, transform 0.7s',
                    transitionDelay: cardsInView ? `${index * 150 + 200}ms` : '0ms'
                  }}
                >
                  <card.icon className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-orange-500" strokeWidth={2} />
                </div>

                {/* Title Badge with slide animation */}
                <div
                  className="bg-orange-500 text-white px-6 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-3 rounded-2xl mb-4 lg:mb-5 xl:mb-6 shadow-md"
                  style={{
                    opacity: cardsInView ? 1 : 0,
                    transform: cardsInView ? 'scale(1)' : 'scale(0.75)',
                    transition: 'opacity 0.7s, transform 0.7s',
                    transitionDelay: cardsInView ? `${index * 150 + 300}ms` : '0ms'
                  }}
                >
                  <h3 className="text-lg lg:text-lg xl:text-xl font-bold">{card.title}</h3>
                </div>

                {/* Content with fade animation */}
                <p
                  className="text-gray-800 text-sm lg:text-sm xl:text-base leading-relaxed"
                  style={{
                    opacity: cardsInView ? 1 : 0,
                    transition: 'opacity 0.7s',
                    transitionDelay: cardsInView ? `${index * 150 + 400}ms` : '0ms'
                  }}
                >
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Company Overview Section */}
        <div ref={overviewRef} className="max-w-7xl mx-auto px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <div
              className={`space-y-6 transition-all duration-1000 ${
                overviewInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-orange-500">Shyam Metalics:</span>{' '}
                <span className="text-gray-900">India's Leading Integrated Metal Conglomerate</span>
              </h2>

              <p
                className={`text-gray-700 text-base leading-relaxed transition-all duration-700 ${
                  overviewInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: overviewInView ? '200ms' : '0ms' }}
              >
                Shyam Metalics is one of India's fastest-growing and most trusted integrated metal
                producers, with a diversified portfolio spanning carbon steel, stainless steel, ferro
                alloys, aluminium foil, and long steel products...
              </p>

              <p
                className={`text-gray-700 text-base leading-relaxed transition-all duration-700 ${
                  overviewInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: overviewInView ? '400ms' : '0ms' }}
              >
                As a diversified metal conglomerate, Shyam Metalics operates with a fully integrated
                ore-to-metal manufacturing model, supported by 83% captive power generation and
                state-of-the-art facilities...
              </p>

              <button
                className={`bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-700 flex items-center gap-2 ${
                  overviewInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: overviewInView ? '600ms' : '0ms' }}
              >
                Read More →
              </button>
            </div>

            {/* Right Side - Image Carousel */}
            <div
              className={`relative rounded-2xl overflow-hidden bg-gray-900 h-96 transition-all duration-1000 ${
                overviewInView ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
              }`}
              style={{ transitionDelay: overviewInView ? '300ms' : '0ms' }}
            >
              {/* Carousel Images with Animation */}
              <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide}
                    alt={`Factory ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                      index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === index ? 'bg-orange-500 w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div ref={highlightsRef} className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {highlights.map((item, index) => (
              // OUTER: entrance animation only
              <div
                key={index}
                style={{
                  opacity: highlightsInView ? 1 : 0,
                  transform: highlightsInView ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'opacity 0.7s, transform 0.7s',
                  transitionDelay: highlightsInView ? `${index * 100}ms` : '0ms'
                }}
              >
                {/* INNER: hover only */}
                <div className="bg-white border border-gray-200 rounded-lg px-3 py-7 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-150">
                  <div
                    className="mb-2"
                    style={{
                      opacity: highlightsInView ? 1 : 0,
                      transform: highlightsInView ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(180deg)',
                      transition: 'opacity 0.7s, transform 0.7s',
                      transitionDelay: highlightsInView ? `${index * 100 + 200}ms` : '0ms'
                    }}
                  >
                    <item.icon className="w-8 h-8 text-orange-500" strokeWidth={2} />
                  </div>
                  <h4
                    className="text-sm font-semibold text-gray-900 leading-tight"
                    style={{
                      opacity: highlightsInView ? 1 : 0,
                      transition: 'opacity 0.7s',
                      transitionDelay: highlightsInView ? `${index * 100 + 300}ms` : '0ms'
                    }}
                  >
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
