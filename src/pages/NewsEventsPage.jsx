import React, { useState } from 'react';
import { Newspaper, Calendar, Tag, TrendingUp, Users, Award, Rocket } from 'lucide-react';

export default function NewsEventsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const newsItems = [
    {
      id: 1,
      category: 'expansion',
      title: 'Shyam Metalics Announces Major Capacity Expansion',
      date: '2024-11-10',
      excerpt: 'The company announces a significant expansion of its manufacturing capacity across multiple plants, aiming to increase aggregate capacity to 18 MTPA by 2025.',
      image: null,
      tags: ['Expansion', 'Growth', 'Manufacturing']
    },
    {
      id: 2,
      category: 'achievement',
      title: 'Recognized as 6th Largest Metal Producer in India',
      date: '2024-10-25',
      excerpt: 'Shyam Metalics achieves milestone recognition as India\'s 6th largest metal producing company, demonstrating continued growth and market leadership.',
      image: null,
      tags: ['Achievement', 'Industry Leadership']
    },
    {
      id: 3,
      category: 'sustainability',
      title: 'Achieves Carbon Neutrality Target Ahead of Schedule',
      date: '2024-10-15',
      excerpt: 'The company successfully achieves its carbon neutrality goals six months ahead of schedule, reinforcing commitment to environmental sustainability.',
      image: null,
      tags: ['Sustainability', 'Environment', 'Green Energy']
    },
    {
      id: 4,
      category: 'product',
      title: 'Launch of New Premium TMT Bar Series',
      date: '2024-09-30',
      excerpt: 'Introducing a new range of high-strength TMT bars with superior ductility and corrosion resistance for modern construction needs.',
      image: null,
      tags: ['Product Launch', 'Innovation', 'TMT Bars']
    },
    {
      id: 5,
      category: 'partnership',
      title: 'Strategic Partnership with Leading Infrastructure Developer',
      date: '2024-09-20',
      excerpt: 'Shyam Metalics enters into a strategic partnership to supply long steel products for mega infrastructure projects across India.',
      image: null,
      tags: ['Partnership', 'Infrastructure', 'Growth']
    },
    {
      id: 6,
      category: 'achievement',
      title: 'Wins Safety Excellence Award 2024',
      date: '2024-08-15',
      excerpt: 'Recognized with the prestigious Safety Excellence Award for maintaining zero-accident records and implementing best safety practices.',
      image: null,
      tags: ['Award', 'Safety', 'Excellence']
    },
    {
      id: 7,
      category: 'expansion',
      title: 'New Stainless Steel Plant Inaugurated',
      date: '2024-08-01',
      excerpt: 'The new state-of-the-art stainless steel wire rod manufacturing facility begins operations in Kharagpur, West Bengal.',
      image: null,
      tags: ['New Plant', 'Stainless Steel', 'Expansion']
    },
    {
      id: 8,
      category: 'financial',
      title: 'Q2 Results Show 25% Revenue Growth',
      date: '2024-07-28',
      excerpt: 'Company reports strong financial performance with 25% year-on-year revenue growth and improved EBITDA margins in Q2 FY2024-25.',
      image: null,
      tags: ['Financial Results', 'Growth', 'Performance']
    }
  ];

  const upcomingEvents = [
    {
      title: 'Annual Investor Meet 2024',
      date: '2024-12-15',
      location: 'Mumbai, Maharashtra',
      type: 'Investor Relations'
    },
    {
      title: 'Plant Open Day - Sambalpur',
      date: '2024-12-20',
      location: 'Sambalpur, Odisha',
      type: 'Community Event'
    },
    {
      title: 'Industry Leadership Summit',
      date: '2025-01-10',
      location: 'New Delhi',
      type: 'Conference'
    },
    {
      title: 'Sustainability Workshop',
      date: '2025-01-25',
      location: 'Kolkata, West Bengal',
      type: 'Workshop'
    }
  ];

  const filters = [
    { id: 'all', label: 'All News', icon: Newspaper },
    { id: 'expansion', label: 'Expansion', icon: Rocket },
    { id: 'achievement', label: 'Achievements', icon: Award },
    { id: 'sustainability', label: 'Sustainability', icon: TrendingUp },
    { id: 'product', label: 'Products', icon: Tag }
  ];

  const filteredNews = activeFilter === 'all'
    ? newsItems
    : newsItems.filter(item => item.category === activeFilter);

  const getCategoryColor = (category) => {
    const colors = {
      expansion: 'from-blue-500 to-blue-600',
      achievement: 'from-orange-500 to-orange-600',
      sustainability: 'from-green-500 to-green-600',
      product: 'from-purple-500 to-purple-600',
      partnership: 'from-pink-500 to-pink-600',
      financial: 'from-indigo-500 to-indigo-600'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Newspaper className="w-16 h-16 text-orange-500 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">News &</span>{' '}
            <span className="text-orange-500">Events</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest news, announcements, and upcoming events from Shyam Metalics
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-orange-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow'
              }`}
            >
              <filter.icon className="w-5 h-5" />
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Articles */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Latest <span className="text-orange-500">News</span>
            </h2>
            <div className="space-y-6">
              {filteredNews.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`bg-gradient-to-r ${getCategoryColor(item.category)} h-2`}></div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`bg-gradient-to-r ${getCategoryColor(item.category)} text-white px-3 py-1 rounded-full text-xs font-semibold uppercase`}>
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        {new Date(item.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-500 transition-colors cursor-pointer">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium hover:bg-orange-100 hover:text-orange-600 transition-colors cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events Sidebar */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Upcoming <span className="text-orange-500">Events</span>
            </h2>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-orange-500"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Calendar className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{event.title}</h4>
                      <p className="text-sm text-orange-600 font-medium mb-2">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Users className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {event.type}
                  </span>
                </div>
              ))}
            </div>

            {/* Media Contact */}
            <div className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Media Contact</h3>
              <p className="text-sm text-orange-100 mb-4">
                For press inquiries and media relations, please contact our communications team.
              </p>
              <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-300 w-full">
                Contact Media Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
