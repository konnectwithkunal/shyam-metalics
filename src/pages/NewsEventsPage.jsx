import React, { useState, useEffect } from 'react';
import { Calendar, Filter, ChevronRight, Clock, MapPin } from 'lucide-react';

export default function NewsEventsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const filters = ['All', 'News', 'Events', 'Press Release', 'Media Coverage'];

  const newsItems = [
    {
      date: '15 Nov 2024',
      title: 'Shyam Metalics Announces Record Production',
      category: 'News',
      image: '/about1.jpg',
      excerpt: 'Company achieves highest ever quarterly production numbers across all manufacturing units.',
      readTime: '5 min read'
    },
    {
      date: '10 Nov 2024',
      title: 'New Manufacturing Plant Inauguration',
      category: 'Events',
      image: '/about2.jpg',
      excerpt: 'State-of-the-art facility launched in Odisha with advanced automation.',
      readTime: '4 min read'
    },
    {
      date: '05 Nov 2024',
      title: 'Sustainability Initiative Launch',
      category: 'Press Release',
      image: '/about3.jpg',
      excerpt: 'Company commits to carbon neutral operations by 2030 with green energy.',
      readTime: '6 min read'
    },
    {
      date: '01 Nov 2024',
      title: 'Q3 Financial Results Announced',
      category: 'Press Release',
      image: '/about4.jpg',
      excerpt: 'Strong growth across all business segments with record EBITDA.',
      readTime: '3 min read'
    },
    {
      date: '28 Oct 2024',
      title: 'Industry Excellence Award 2024',
      category: 'News',
      image: '/awards1.jpg',
      excerpt: 'Recognized for outstanding contribution to Indian steel industry.',
      readTime: '4 min read'
    },
    {
      date: '25 Oct 2024',
      title: 'Annual Investor Meet',
      category: 'Events',
      image: '/about5.jpg',
      excerpt: 'Successful investor meet held in Mumbai with 200+ participants.',
      readTime: '5 min read'
    }
  ];

  const upcomingEvents = [
    {
      date: '20 Dec 2024',
      title: 'Plant Open Day - Sambalpur',
      location: 'Sambalpur, Odisha',
      time: '10:00 AM - 4:00 PM'
    },
    {
      date: '15 Jan 2025',
      title: 'Industry Leadership Summit',
      location: 'New Delhi',
      time: '9:00 AM - 6:00 PM'
    },
    {
      date: '25 Jan 2025',
      title: 'Sustainability Workshop',
      location: 'Kolkata, West Bengal',
      time: '11:00 AM - 3:00 PM'
    }
  ];

  const filteredNews = activeFilter === 'All'
    ? newsItems
    : newsItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-white">
      {/* Hero Section - 100vh */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <img src="/about1.jpg" alt="News and Events" className="w-full h-full object-cover" />
        </div>
        <div className={`absolute top-0 left-0 w-full h-full bg-black/60 transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

        <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}>
            News and Events
          </h1>
          <p className={`text-lg md:text-xl text-white/90 max-w-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}>
            Stay updated with the latest news, announcements, and upcoming events from Shyam Metalics
          </p>
        </div>
      </section>

      {/* Filter Tabs - Sticky */}
      <section className="bg-orange-500 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 py-3 min-w-max">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                    activeFilter === filter
                      ? 'bg-white text-orange-500'
                      : 'bg-orange-600 text-white hover:bg-orange-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main News Column */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">
                <span className="text-gray-900">Latest</span> <span className="text-orange-500">News</span>
              </h2>

              <div className="space-y-6">
                {filteredNews.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3 h-48 md:h-auto overflow-hidden bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                            {item.category}
                          </span>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>{item.date}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span>{item.readTime}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-500 transition-colors cursor-pointer">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{item.excerpt}</p>
                        <button className="text-orange-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                          Read More <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar - Upcoming Events */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                <span className="text-gray-900">Upcoming</span> <span className="text-orange-500">Events</span>
              </h2>

              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-orange-500 hover:shadow-lg transition-all duration-300 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                    style={{ transitionDelay: isVisible ? `${600 + index * 100}ms` : '0ms' }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-orange-500 text-white p-3 rounded-lg text-center min-w-[60px]">
                        <div className="text-2xl font-bold">{event.date.split(' ')[0]}</div>
                        <div className="text-xs">{event.date.split(' ')[1]}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2">{event.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className={`mt-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: isVisible ? '900ms' : '0ms' }}>
                <h3 className="text-xl font-bold mb-3">Do you have queries?</h3>
                <p className="text-sm text-orange-100 mb-4">
                  Subscribe to our newsletter to stay updated with the latest news and events
                </p>
                <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-300 w-full">
                  Contact Us
                </button>
              </div>

              {/* News Center */}
              <div className={`mt-6 bg-white border-2 border-gray-200 rounded-xl p-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: isVisible ? '1000ms' : '0ms' }}>
                <h3 className="text-lg font-bold text-gray-900 mb-3">News center</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Access our complete news archive and press releases
                </p>
                <button className="text-orange-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  View All News <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
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
