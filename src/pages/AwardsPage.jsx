import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AwardsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const heroSlides = [
    { image: '/awards1.jpg', alt: 'Awards Ceremony 1' },
    { image: '/awards2.jpg', alt: 'Awards Ceremony 2' },
    { image: '/awards3.jpg', alt: 'Awards Ceremony 3' }
  ];

  const tabs = [
    'Global Awards for Leadership & Excellence',
    'Great Place to Work Certification',
    'Harun Philanthropy',
    'Samsung Business Award',
    'The India Philanthropy Awards',
    'Green pro Certification',
    'Corporate Excellence',
    'Innovation',
    'Sustainability',
    'Industry Recognition'
  ];

  const awards = [
    {
      title: 'Global Awards for Leadership & Excellence',
      subtitle: 'Global Awards for Leadership',
      year: '2025',
      image: '/awards1.jpg',
      description: 'Recognized for outstanding leadership and business excellence'
    },
    {
      title: 'Great Place to Work Certification',
      subtitle: 'Great Place to Work 2024',
      image: '/greatplace.png',
      description: 'Certified as a great workplace for employee satisfaction'
    },
    {
      title: 'Harun Philanthropy',
      subtitle: 'Harun Philanthropy Award',
      image: '/awards2.jpg',
      description: 'Awarded for exceptional philanthropic contributions'
    },
    {
      title: 'Samsung Business Award',
      subtitle: 'Samsung Business Award',
      image: '/awards3.jpg',
      description: 'Recognition for business excellence and innovation'
    },
    {
      title: 'The India Philanthropy Awards',
      subtitle: 'The India Philanthropy Awards',
      image: '/awards1.jpg',
      description: 'Honored for impactful CSR initiatives'
    },
    {
      title: 'Green pro Certification',
      subtitle: 'Green pro Certification',
      image: '/awards2.jpg',
      description: 'Certified for environmental sustainability practices'
    },
    {
      title: 'Workplace Awards',
      subtitle: 'Workplace Awards',
      image: '/awards3.jpg',
      description: 'Excellence in workplace environment and culture'
    },
    {
      title: 'Two Star Export House',
      subtitle: 'Two Star Export House',
      image: '/awards1.jpg',
      description: 'Recognition for export achievements'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Carousel */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
          </div>
        ))}

        <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}>
            Awards
          </h1>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-orange-500 w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-orange-500 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-1 py-3 min-w-max">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded transition-all ${
                    activeTab === index
                      ? 'bg-white text-orange-500'
                      : 'text-white hover:bg-orange-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Grid Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gray-900">AWARDS &</span> <span className="text-orange-500">ACHIEVEMENTS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
              >
                <div className="h-64 overflow-hidden bg-gray-100">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                  <p className="text-orange-500 font-semibold text-sm mb-3">{award.subtitle}</p>
                  {award.year && (
                    <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {award.year}
                    </span>
                  )}
                  <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Statement */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-orange-500">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Committed to Excellence
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              These awards and achievements reflect our unwavering commitment to quality, sustainability,
              and innovation. We continue to set new benchmarks in the Indian metallics industry while
              contributing to the nation's industrial growth and environmental sustainability.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
