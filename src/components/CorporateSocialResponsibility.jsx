import React, { useRef, useState, useEffect } from 'react';

export default function CorporateSocialResponsibility() {
  const videoRefs = useRef([]);
  const modalVideoRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState('');
  const [videoGridInView, setVideoGridInView] = useState(false);
  const [csrInfoInView, setCsrInfoInView] = useState(false);

  const videoGridRef = useRef(null);
  const csrInfoRef = useRef(null);

  const csrCategories = [
    { icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>), title: 'Education' },
    { icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>), title: 'Healthcare' },
    { icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>), title: 'Sanitation' },
    { icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>), title: 'Livelihood' },
    { icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>), title: 'Environment' },
    { icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>), title: 'Community' },
  ];

  const videos = [
    { id: 1, videoSrc: '/school.mp4' },
    { id: 2, videoSrc: '/sewing.mp4' },
    { id: 3, videoSrc: '/drawing.mp4' },
    { id: 4, videoSrc: '/football.mp4' }
  ];

  // Intersection Observers for entrance animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const videoGridObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVideoGridInView(true);
      }
    }, observerOptions);

    const csrInfoObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCsrInfoInView(true);
      }
    }, observerOptions);

    if (videoGridRef.current) videoGridObserver.observe(videoGridRef.current);
    if (csrInfoRef.current) csrInfoObserver.observe(csrInfoRef.current);

    return () => {
      if (videoGridRef.current) videoGridObserver.unobserve(videoGridRef.current);
      if (csrInfoRef.current) csrInfoObserver.unobserve(csrInfoRef.current);
    };
  }, []);

  const handleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };

  const openModal = (videoSrc) => {
    setCurrentVideoSrc(videoSrc);
    setIsModalOpen(true);
    // Pause all preview videos
    videoRefs.current.forEach((v) => {
      if (v) {
        v.pause();
        v.currentTime = 0;
      }
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
    setCurrentVideoSrc('');
  };

  return (
    <section className="py-16 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* LEFT - Video Grid with Animation */}
          <div
            ref={videoGridRef}
            className={`bg-white rounded-2xl border border-gray-100 shadow-lg p-6 lg:p-8 flex flex-col transition-all duration-1000 ${videoGridInView
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 -translate-x-10 scale-95'
              }`}
          >
            <div className={`inline-flex items-center space-x-3 mb-4 transition-all duration-700 ${videoGridInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-5'
              }`}
              style={{ transitionDelay: videoGridInView ? '200ms' : '0ms' }}>
              <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold">
                Our Initiatives
              </span>
              <span className="text-xs text-gray-400">Media & Stories</span>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-3 flex-1 h-full">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`relative rounded-xl overflow-hidden group cursor-pointer h-full transition-all duration-700 ${videoGridInView
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-10 scale-90'
                    }`}
                  style={{ transitionDelay: videoGridInView ? `${400 + (index * 150)}ms` : '0ms' }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  onClick={() => openModal(video.videoSrc)}
                >
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="w-full h-full object-cover block"
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src={video.videoSrc} type="video/mp4" />
                  </video>

                  <div className="absolute inset-0 bg-black/28 group-hover:bg-black/36 transition-all duration-300" />

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-black/60 rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg ring-4 ring-white/8">
                      <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-6 flex items-center justify-between gap-4 transition-all duration-700 ${videoGridInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: videoGridInView ? '1000ms' : '0ms' }}>
              <div className="text-sm text-gray-600">Watch our field stories and impact videos.</div>
              <button className="bg-transparent text-orange-600 font-semibold px-3 py-2 rounded-md hover:bg-orange-50 transition">
                View All Videos
              </button>
            </div>
          </div>

          {/* RIGHT - CSR Info with Animation */}
          <div
            ref={csrInfoRef}
            className={`transition-all duration-1000 ${csrInfoInView
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 translate-x-10 scale-95'
              }`}
          >
            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 lg:p-10 h-full">
              <div className={`inline-flex items-center space-x-3 mb-4 transition-all duration-700 ${csrInfoInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-5'
                }`}
                style={{ transitionDelay: csrInfoInView ? '200ms' : '0ms' }}>
                <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold">
                  Our Initiatives
                </span>
                <span className="text-xs text-gray-400">Community Impact</span>
              </div>

              <h2 className={`text-4xl lg:text-5xl font-extrabold leading-tight mb-3 transition-all duration-700 ${csrInfoInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: csrInfoInView ? '300ms' : '0ms' }}>
                Corporate Social <span className="text-orange-500">Responsibility</span>
              </h2>

              <h3 className={`text-lg font-medium text-orange-500 mb-6 transition-all duration-700 ${csrInfoInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: csrInfoInView ? '400ms' : '0ms' }}>
                Building communities, empowering lives
              </h3>

              <p className={`text-gray-700 mb-4 text-base leading-relaxed transition-all duration-700 ${csrInfoInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: csrInfoInView ? '500ms' : '0ms' }}>
                Shyam Metalics stands for more than steel — we invest in people and places.
                Our CSR mission focuses on education, healthcare, livelihood and sustainable development to create long-term, measurable impact in the communities we serve.
              </p>

              <p className={`text-gray-600 mb-6 text-sm leading-relaxed transition-all duration-700 ${csrInfoInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: csrInfoInView ? '600ms' : '0ms' }}>
                We believe in collaborative programs that drive dignity, opportunity and environmental stewardship — shaping a future that's stronger and more inclusive for all.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
  {csrCategories.map((cat, idx) => (
    // OUTER: entrance animation only
    <div
      key={idx}
      style={{ 
        opacity: csrInfoInView ? 1 : 0,
        transform: csrInfoInView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.75)',
        transition: 'opacity 0.7s, transform 0.7s',
        transitionDelay: csrInfoInView ? `${700 + (idx * 100)}ms` : '0ms'
      }}
    >
      {/* INNER: hover only */}
      <div
        className="flex flex-col items-center text-center space-y-3 p-3 rounded-xl cursor-pointer group hover:shadow-xl hover:scale-105 hover:bg-orange-50/50 transition-all duration-150"
      >
        <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shadow-sm group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg group-hover:scale-110 transition-all duration-150">
          {cat.icon}
        </div>
        <div className="text-xs font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-150">
          {cat.title}
        </div>
      </div>
    </div>
  ))}
</div>


              <div className={`h-px bg-gray-100 my-4 transition-all duration-700 ${csrInfoInView
                  ? 'opacity-100 scale-x-100'
                  : 'opacity-0 scale-x-0'
                }`}
                style={{ transitionDelay: csrInfoInView ? '1300ms' : '0ms' }} />

              <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 transition-all duration-700 ${csrInfoInView
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-5 scale-95'
                }`}
                style={{ transitionDelay: csrInfoInView ? '1400ms' : '0ms' }}>
                <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-md inline-flex items-center gap-3">
                  Learn More About Our Impact
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl mx-4 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Player */}
            <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
              <video
                ref={modalVideoRef}
                className="w-full h-auto"
                controls
                autoPlay
                playsInline
              >
                <source src={currentVideoSrc} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.95);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}