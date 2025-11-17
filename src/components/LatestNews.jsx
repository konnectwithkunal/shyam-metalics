import React, { useEffect, useRef, useState } from 'react';

export default function LatestNews() {
  const [headerInView, setHeaderInView] = useState(false);
  const [featuredInView, setFeaturedInView] = useState(false);
  const [cardsInView, setCardsInView] = useState(false);
  const [buttonsInView, setButtonsInView] = useState(false);

  const headerRef = useRef(null);
  const featuredRef = useRef(null);
  const cardsRef = useRef(null);
  const buttonsRef = useRef(null);

  const featuredNews = {
    id: 1,
    category: 'Finance',
    image: '/awards2.jpg',
    title: 'Tanishi Agarwal Recognised for leadership in advancing strategic philanthropy Shyam Metalics Cares.',
    date: '01 JUN 2025',
    author: 'Admin',
    categoryLabel: 'Philanthropy',
    commentsCount: 5,
  };

  const newsItems = [
    {
      id: 2,
      category: 'News',
      image: '/awards1.jpg',
      title: 'Shyam Metalics Secures Major Export Order to Southeast Asia',
      date: '15 MAY 2025',
      author: 'Admin',
      commentsCount: 2,
      description: 'Expanding Global Footprint with 50,000 MT Steel Shipment to Vietnam & Indonesia. High-grade TMT bars and wire rods to support infrastructure project',
    },
    {
      id: 3,
      category: 'News',
      image: '/awards3.jpg',
      title: 'Shyam Metalics Partners with IIT Bombay for Green Steel Research',
      date: '20 MAY 2025',
      author: 'Research',
      commentsCount: 3,
      description: 'Pioneering Sustainable Steel Solutions with Cutting-Edge Technology. Joint R&D focus: Hydrogen-based steel production & carbon capture.',
    },
  ];

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

    const featuredObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setFeaturedInView(true);
      }
    }, observerOptions);

    const cardsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCardsInView(true);
      }
    }, observerOptions);

    const buttonsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setButtonsInView(true);
      }
    }, observerOptions);

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (featuredRef.current) featuredObserver.observe(featuredRef.current);
    if (cardsRef.current) cardsObserver.observe(cardsRef.current);
    if (buttonsRef.current) buttonsObserver.observe(buttonsRef.current);

    return () => {
      if (headerRef.current) headerObserver.unobserve(headerRef.current);
      if (featuredRef.current) featuredObserver.unobserve(featuredRef.current);
      if (cardsRef.current) cardsObserver.unobserve(cardsRef.current);
      if (buttonsRef.current) buttonsObserver.unobserve(buttonsRef.current);
    };
  }, []);

  return (
    <section className="py-16 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header with Animation */}
        <div 
          ref={headerRef}
          className="mb-12"
        >
          <h2 className={`text-4xl lg:text-5xl font-bold leading-tight mb-3 transition-all duration-1000 ${
            headerInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-10'
          }`}>
            Latest <span className="text-orange-500">News</span>
          </h2>
          <p className={`text-orange-500 text-xl font-semibold transition-all duration-1000 ${
            headerInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: headerInView ? '200ms' : '0ms' }}>
            Innovating Today, Leading Tomorrow
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Featured News - Large Card (Left) with Animation */}
          <div 
            ref={featuredRef}
            className={`lg:col-span-1 group cursor-pointer transition-all duration-1000 ${
              featuredInView 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 -translate-x-10 scale-95'
            }`}
          >
            <div className="relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              {/* Image with overlay */}
              <div className="relative h-[540px] overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
                
                {/* Category Badge - Top Left with Animation */}
                <div className={`absolute top-6 left-6 transition-all duration-700 ${
                  featuredInView 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 -translate-y-5 scale-75'
                }`}
                style={{ transitionDelay: featuredInView ? '200ms' : '0ms' }}>
                  <span className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded">
                    {featuredNews.category}
                  </span>
                </div>
                
                {/* Content - Bottom with Animation */}
                <div className={`absolute bottom-0 left-0 right-0 p-8 text-white transition-all duration-700 ${
                  featuredInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: featuredInView ? '400ms' : '0ms' }}>
                  <h3 className="text-3xl font-bold mb-6 leading-tight">
                    {featuredNews.title}
                  </h3>
                  
                  {/* Meta Info */}
                  <div className="flex items-center gap-3 text-base border-t border-white/20 pt-4">
                    <span className="font-semibold">{featuredNews.date}</span>
                    <span className="text-white/60">—</span>
                    <span>{featuredNews.categoryLabel}</span>
                    <span className="text-white/60">—</span>
                    <span>{featuredNews.author}</span>
                  </div>
                </div>

                {/* Comments Badge - Bottom Right with Animation */}
                <div className={`absolute bottom-8 right-8 bg-blue-900/80 backdrop-blur-sm px-4 py-2 rounded transition-all duration-700 ${
                  featuredInView 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 translate-x-5 scale-75'
                }`}
                style={{ transitionDelay: featuredInView ? '600ms' : '0ms' }}>
                  <span className="text-white text-sm font-semibold">{featuredNews.commentsCount} Comments</span>
                </div>
              </div>
            </div>
          </div>

          {/* Regular News Cards (Right) with Animation */}
          <div 
            ref={cardsRef}
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {newsItems.map((news, index) => (
              <div
                key={news.id}
                className={`group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-700 hover:-translate-y-1 flex flex-col h-[540px] ${
                  cardsInView 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-20 scale-90'
                }`}
                style={{ 
                  transitionDelay: cardsInView ? `${index * 200}ms` : '0ms',
                  // Separate transition for hover
                  transition: cardsInView 
                    ? 'opacity 0.7s, transform 0.7s, box-shadow 0.3s, translate 0.3s, scale 0.3s' 
                    : 'opacity 0.7s, transform 0.7s'
                }}
              >
                {/* Image - Half of card */}
                <div className="relative h-[270px] overflow-hidden flex-shrink-0">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Category Badge with Animation */}
                  <div className={`absolute top-4 left-4 transition-all duration-700 ${
                    cardsInView 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 -translate-y-5 scale-75'
                  }`}
                  style={{ transitionDelay: cardsInView ? `${index * 200 + 200}ms` : '0ms' }}>
                    <span className="px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-lg">
                      {news.category}
                    </span>
                  </div>
                </div>

                {/* Content - Other half */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className={`text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-all duration-700 line-clamp-2 ${
                    cardsInView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: cardsInView ? `${index * 200 + 300}ms` : '0ms' }}>
                    {news.title}
                  </h3>
                  
                  {/* Meta Info with Animation */}
                  <div className={`flex items-center gap-3 text-sm text-gray-600 mb-3 transition-all duration-700 ${
                    cardsInView 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: cardsInView ? `${index * 200 + 400}ms` : '0ms' }}>
                    <span>{news.date}</span>
                    <span>{news.author}</span>
                    <span>{news.commentsCount} Comments</span>
                  </div>

                  {/* Description with Animation */}
                  <p className={`text-gray-700 text-sm leading-relaxed mb-4 flex-1 line-clamp-3 transition-all duration-700 ${
                    cardsInView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: cardsInView ? `${index * 200 + 500}ms` : '0ms' }}>
                    {news.description}
                  </p>

                  {/* Read More Link with Animation */}
                  <div className={`flex items-center text-orange-500 font-semibold text-sm group-hover:gap-2 transition-all duration-700 ${
                    cardsInView 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: cardsInView ? `${index * 200 + 600}ms` : '0ms' }}>
                    <span>View Full News</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Buttons with Animation */}
        <div 
          ref={buttonsRef}
          className={`flex flex-col md:flex-row gap-4 justify-between items-center transition-all duration-1000 ${
            buttonsInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <button className={`inline-flex items-center gap-2 text-gray-700 font-semibold hover:text-orange-500 transition-all duration-700 group ${
            buttonsInView 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 -translate-x-5 scale-95'
          }`}
          style={{ transitionDelay: buttonsInView ? '200ms' : '0ms' }}>
            <span>View All Case Studies</span>
            <div className="bg-orange-500 text-white p-2 rounded group-hover:bg-orange-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button className={`bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-700 shadow-md hover:shadow-lg inline-flex items-center gap-2 ${
            buttonsInView 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 translate-x-5 scale-95'
          }`}
          style={{ transitionDelay: buttonsInView ? '400ms' : '0ms' }}>
            View Full News
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}