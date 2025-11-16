import React from 'react';
import { MessageSquare, Star, Building2, Quote } from 'lucide-react';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Ravi Bagaria',
      company: 'ABC Construction Ltd.',
      role: 'CEO',
      text: 'Shyam Metalics has been our trusted partner for over 5 years. Their TMT bars are of exceptional quality and delivery is always on time. The consistency in product quality has helped us maintain our project timelines.',
      rating: 5,
      image: null
    },
    {
      name: 'Saurav Agarwal',
      company: 'Agarwal Infrastructure',
      role: 'Managing Director',
      text: 'Excellent customer service and a comprehensive product range. The technical support team is very knowledgeable and always ready to help. We have been using their products for various infrastructure projects.',
      rating: 5,
      image: null
    },
    {
      name: 'Pooja Sharma',
      company: 'Sharma Builders & Developers',
      role: 'Director',
      text: 'Reliable supplier for all our construction projects. The quality of steel products is top-notch and meets all industry standards. Their commitment to sustainability is also commendable.',
      rating: 5,
      image: null
    },
    {
      name: 'Amit Kumar',
      company: 'Kumar Steel Trading',
      role: 'Proprietor',
      text: 'Consistent quality products and professional service. We have been dealing with Shyam Metalics for years and have never faced any quality issues. Highly recommended for anyone in the steel industry.',
      rating: 5,
      image: null
    },
    {
      name: 'Rajesh Patel',
      company: 'Patel Engineering Works',
      role: 'General Manager',
      text: 'Outstanding product quality and timely delivery. The ferro alloy products meet all our specifications perfectly. Their technical team provides excellent support for our specific requirements.',
      rating: 5,
      image: null
    },
    {
      name: 'Priya Verma',
      company: 'Verma Industries',
      role: 'Purchase Manager',
      text: 'Great experience working with Shyam Metalics. The wire rods we purchase are always of superior quality. Their competitive pricing and flexible payment terms make them our preferred supplier.',
      rating: 5,
      image: null
    },
    {
      name: 'Vikram Singh',
      company: 'Singh Construction Group',
      role: 'CEO',
      text: 'Top-quality steel products for our mega projects. The structural steel products are robust and meet international standards. Their commitment to quality and customer satisfaction is exceptional.',
      rating: 5,
      image: null
    },
    {
      name: 'Anjali Mehta',
      company: 'Mehta Alloys Pvt. Ltd.',
      role: 'Director',
      text: 'Excellent ferro alloys supplier with consistent quality. The purity levels are always as specified and packaging is excellent. We have partnered with them for our entire ferro alloy requirements.',
      rating: 5,
      image: null
    }
  ];

  const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '1000+', label: 'Projects Completed' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '30+', label: 'Years Experience' }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <MessageSquare className="w-16 h-16 text-orange-500 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Client</span>{' '}
            <span className="text-orange-500">Testimonials</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear what our valued clients have to say about their experience with Shyam Metalics
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border-t-4 border-orange-500"
            >
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-16 h-16 text-orange-500" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="border-t pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Building2 className="w-3 h-3 text-orange-500" />
                      <p className="text-xs text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-lg p-8 md:p-12 text-white text-center">
          <MessageSquare className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Family</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-orange-50 mb-6">
            Experience the quality and reliability that our clients trust. Partner with Shyam Metalics
            for all your steel and metallics requirements.
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-300 shadow-lg">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
}
