import React, { useState, useEffect, useRef } from 'react';

export default function Testimonials() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [headerInView, setHeaderInView] = useState(false);
  const [cardsInView, setCardsInView] = useState(false);

  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Ravi Bagaria',
      rating: 4,
      shortText:
        'Others have already said plenty about their quality of their TMT bars and steel products. One thing that I believe should be talked more about Shyam Metallics in their CSR initiati...',
      fullText:
        'Others have already said plenty about their quality of their TMT bars and steel products. One thing that I believe should be talked more about Shyam Metallics in their CSR initiatives. They are doing wonderful work in the communities around their facilities, and it shows their commitment to being more than just a manufacturer.',
    },
    {
      id: 2,
      name: 'Saurav Agarwal',
      rating: 4,
      shortText:
        'I was looking for best quality TMT bars, and having heard a lot about Shyam Metalics, so I finally decided to contact them. Comparing the TMT bar price in West Bengal, they are aff...',
      fullText:
        'I was looking for best quality TMT bars, and having heard a lot about Shyam Metalics, so I finally decided to contact them. Comparing the TMT bar price in West Bengal, they are affordable and the quality is top-notch. Their customer service team was very helpful throughout the process.',
    },
    {
      id: 3,
      name: 'Biplap Kar',
      rating: 4,
      shortText:
        'We have been working with Shyam Metalics since 2004. We have worked with them on many projects throughout the years. They do an excellent job from start to finish. We enjoy working...',
      fullText:
        'We have been working with Shyam Metalics since 2004. We have worked with them on many projects throughout the years. They do an excellent job from start to finish. We enjoy working with them and would highly recommend their services to anyone looking for quality steel products and reliable delivery.',
    },
    {
      id: 4,
      name: 'Priya Sharma',
      rating: 5,
      shortText:
        'Shyam Metalics has been our trusted partner for over 5 years. Their commitment to quality and timely delivery has never disappointed us. The TMT bars we received have consistently ...',
      fullText:
        'Shyam Metalics has been our trusted partner for over 5 years. Their commitment to quality and timely delivery has never disappointed us. The TMT bars we received have consistently met our high standards, and their professional approach to business makes them stand out in the industry.',
    },
  ];

  // Intersection Observers for entrance animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    };

    const headerObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHeaderInView(true);
      }
    }, observerOptions);

    const cardsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCardsInView(true);
      }
    }, observerOptions);

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (cardsRef.current) cardsObserver.observe(cardsRef.current);

    return () => {
      if (headerRef.current) headerObserver.unobserve(headerRef.current);
      if (cardsRef.current) cardsObserver.unobserve(cardsRef.current);
    };
  }, []);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mt-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'text-[#F9B233]' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 px-4 lg:px-8 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/testibanner.jpeg')",
        }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/30 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Animation */}
        <div ref={headerRef} className="text-center mb-12">
          <h2
            className={`text-4xl lg:text-5xl font-bold leading-tight mb-4 transition-all duration-1000 ${
              headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            What <span className="text-orange-500">Our</span>
            <br />
            Customer <span className="text-orange-500">Says</span>
          </h2>
          <p
            className={`text-gray-600 text-lg max-w-3xl mx-auto transition-all duration-1000 ${
              headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: headerInView ? '200ms' : '0ms' }}
          >
            Every great relationship starts with trust. These are the voices of
            our clients sharing how our work made a real difference in their
            journey.
          </p>
        </div>

        {/* Cards with Staggered Animation */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            // OUTER: entrance animation only
            <div
              key={testimonial.id}
              style={{
                opacity: cardsInView ? 1 : 0,
                transform: cardsInView ? 'translateY(0) scale(1)' : 'translateY(80px) scale(0.9)',
                transition: 'opacity 0.7s, transform 0.7s',
                transitionDelay: cardsInView ? `${index * 150}ms` : '0ms',
              }}
            >
              {/* INNER: hover only */}
              <div className="bg-white rounded-[30px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] relative flex flex-col cursor-pointer border border-gray-100 overflow-hidden group transition-all duration-150 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:scale-[1.03]">
                {/* Orange top corner like design with Animation */}
                <div
                  className="absolute top-0 right-0"
                  style={{
                    opacity: cardsInView ? 1 : 0,
                    transform: cardsInView ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-90deg)',
                    transition: 'opacity 0.7s, transform 0.7s',
                    transitionDelay: cardsInView ? `${index * 150 + 200}ms` : '0ms',
                  }}
                >
                  <div className="w-0 h-0 border-t-[60px] border-t-[#f97316] border-l-[60px] border-l-transparent" />
                </div>

                <div className="p-6 pb-4 flex-1">
                  {/* Avatar + name + stars with Animation */}
                  <div
                    className="flex items-start gap-3 mb-4"
                    style={{
                      opacity: cardsInView ? 1 : 0,
                      transform: cardsInView ? 'translateX(0)' : 'translateX(-20px)',
                      transition: 'opacity 0.7s, transform 0.7s',
                      transitionDelay: cardsInView ? `${index * 150 + 300}ms` : '0ms',
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#E6ECF4] flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-7 h-7 text-[#5A6C7D]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-3.33 0-6 2.24-6 5v.5A.5.5 0 0 0 6.5 20h11a.5.5 0 0 0 .5-.5c0-2.76-2.67-5-6-5Z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[17px] font-semibold text-[#111827]">
                        {testimonial.name}
                      </h3>
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>

                  {/* Text with Animation */}
                  <p
                    className="text-[#111827] text-[14px] leading-relaxed mb-5 min-h-[120px]"
                    style={{
                      opacity: cardsInView ? 1 : 0,
                      transform: cardsInView ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'opacity 0.7s, transform 0.7s',
                      transitionDelay: cardsInView ? `${index * 150 + 400}ms` : '0ms',
                    }}
                  >
                    {expandedCard === testimonial.id
                      ? testimonial.fullText
                      : testimonial.shortText}
                  </p>

                  {/* Read more with Animation */}
                  <button
                    onClick={() => toggleExpand(testimonial.id)}
                    className="text-[#F25822] font-semibold text-sm hover:opacity-80 flex items-center gap-1"
                    style={{
                      opacity: cardsInView ? 1 : 0,
                      transform: cardsInView ? 'translateX(0)' : 'translateX(-20px)',
                      transition: 'opacity 0.7s, transform 0.7s, color 0.05s',
                      transitionDelay: cardsInView ? `${index * 150 + 500}ms` : '0ms',
                    }}
                  >
                    {expandedCard === testimonial.id ? 'Show Less' : 'Read More'}
                    <svg
                      className="w-4 h-4 transition-transform duration-150"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{
                        transform: expandedCard === testimonial.id ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Thin orange bottom line with Animation */}
                <div
                  className="h-[3px] bg-[#F25822] w-full"
                  style={{
                    opacity: cardsInView ? 1 : 0,
                    transform: cardsInView ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'opacity 0.7s, transform 0.7s',
                    transitionDelay: cardsInView ? `${index * 150 + 600}ms` : '0ms',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
