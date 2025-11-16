import React from 'react';
import { Award, Trophy, Star, Medal, Target, Calendar } from 'lucide-react';

export default function AwardsPage() {
  const awards = [
    {
      year: '2024',
      title: 'Excellence in Manufacturing',
      category: 'Industry Recognition',
      description: 'Awarded for outstanding contribution to the Indian steel and metallics sector',
      icon: Trophy
    },
    {
      year: '2023',
      title: 'Sustainability Leadership Award',
      category: 'Environmental Excellence',
      description: 'Recognized for sustainable practices and green energy initiatives',
      icon: Star
    },
    {
      year: '2023',
      title: 'Quality Excellence Award',
      category: 'Quality Management',
      description: 'Honored for maintaining superior quality standards in production',
      icon: Medal
    },
    {
      year: '2022',
      title: 'Best Integrated Steel Producer',
      category: 'Business Excellence',
      description: 'Acknowledged for end-to-end integrated manufacturing capabilities',
      icon: Target
    },
    {
      year: '2022',
      title: 'Safety Excellence Award',
      category: 'Workplace Safety',
      description: 'Recognized for exemplary safety standards and zero-accident initiatives',
      icon: Award
    },
    {
      year: '2021',
      title: 'Corporate Social Responsibility Award',
      category: 'Community Impact',
      description: 'Awarded for significant contributions to community development',
      icon: Star
    }
  ];

  const achievements = [
    {
      title: '6th Largest Metal Producer',
      description: 'Among India\'s top metal producing companies',
      icon: Trophy
    },
    {
      title: '15.13 MTPA Capacity',
      description: 'Aggregate installed metal production capacity',
      icon: Target
    },
    {
      title: '83% Captive Power',
      description: 'Self-sufficient energy generation capability',
      icon: Star
    },
    {
      title: '7 Manufacturing Plants',
      description: 'State-of-the-art facilities across India',
      icon: Medal
    }
  ];

  const certifications = [
    'ISO 9001:2015 - Quality Management System',
    'ISO 14001:2015 - Environmental Management System',
    'ISO 45001:2018 - Occupational Health & Safety',
    'ISO 50001:2018 - Energy Management System',
    'SA 8000:2014 - Social Accountability',
    'BIS Certification for all products'
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Award className="w-16 h-16 text-orange-500 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Awards &</span>{' '}
            <span className="text-orange-500">Achievements</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Celebrating excellence, innovation, and leadership in the Indian metallics industry
          </p>
        </div>

        {/* Key Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            <span className="text-gray-900">Key</span>{' '}
            <span className="text-orange-500">Achievements</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-orange-500"
              >
                <div className="flex flex-col items-center text-center">
                  <achievement.icon className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            <span className="text-gray-900">Recent</span>{' '}
            <span className="text-orange-500">Awards</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <award.icon className="w-8 h-8" />
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-semibold">{award.year}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                  <p className="text-orange-100 text-sm">{award.category}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-10">
            <Medal className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gray-900">Certifications &</span>{' '}
              <span className="text-orange-500">Standards</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Committed to maintaining the highest international standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-lg p-4 hover:border-orange-500 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="font-medium text-gray-800">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Statement */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-lg p-8 md:p-12 text-white text-center">
          <Trophy className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Committed to Excellence</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-orange-50">
            These awards and achievements reflect our unwavering commitment to quality, sustainability,
            and innovation. We continue to set new benchmarks in the Indian metallics industry while
            contributing to the nation's industrial growth and environmental sustainability.
          </p>
        </div>
      </div>
    </section>
  );
}
