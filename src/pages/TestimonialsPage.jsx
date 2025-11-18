import React, { useState, useEffect } from 'react';
import { Quote, Star, Play } from 'lucide-react';

export default function TestimonialsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO, BuildTech Industries',
      company: 'BuildTech Industries',
      image: '/about1.jpg',
      quote: 'Working with Shyam Metalics has been an exceptional experience. Their commitment to quality and timely delivery has made them our preferred partner for all steel requirements.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      position: 'Director, Infrastructure Solutions',
      company: 'Infrastructure Solutions',
      image: '/about2.jpg',
      quote: 'The quality of products and professionalism displayed by Shyam Metalics is commendable. They have consistently exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      position: 'Managing Director, Steel Corp',
      company: 'Steel Corp',
      image: '/about3.jpg',
      quote: 'Shyam Metalics sets the benchmark for excellence in the industry. Their innovative approach and customer-centric solutions are truly remarkable.',
      rating: 5
    }
  ];

  const videoTestimonials = [
    {
      title: 'Customer Testimonial',
      name: 'John Anderson',
      position: 'Project Manager',
      thumbnail: '/about4.jpg',
      duration: '2:30'
    },
    {
      title: 'Customer Testimonial',
      name: 'Sarah Williams',
      position: 'Operations Head',
      thumbnail: '/about5.jpg',
      duration: '3:15'
    }
  ];

  const visionPoints = [
    {
      icon: '🎯',
      title: 'Quality First',
      description: 'Maintaining the highest standards in every product we deliver'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Committed to environmentally responsible manufacturing'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Continuously improving processes and products'
    }
  ];

  const expertTestimonials = [
    {
      title: 'Engineering Brilliance Throughout the Steel Value Chain',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'Dr. Kumar Singh',
      position: 'Industry Expert',
      image: '/about1.jpg'
    },
    {
      title: 'What Clients & Experts Say',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'Prof. Anjali Mehta',
      position: 'Technical Advisor',
      image: '/about2.jpg'
    },
    {
      title: 'Excellence in Manufacturing',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      author: 'Mr. Vikram Rao',
      position: 'Quality Consultant',
      image: '/about3.jpg'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - 100vh */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <img src="/testibanner.jpeg" alt="Testimonials" className="w-full h-full object-cover" />
        </div>
        <div className={`absolute top-0 left-0 w-full h-full bg-black/60 transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

        <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}>
            Testimonials
          </h1>
          <p className={`text-lg md:text-xl text-white/90 max-w-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}>
            Hear what our valued clients and partners say about us
          </p>
        </div>
      </section>

      {/* What Our Clients Say */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-gray-900">What Our</span> <span className="text-orange-500">Clients Say</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Hear from our valued clients about their experience working with Shyam Metalics
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 hover:shadow-xl transition-all duration-300">
                <Quote className="w-10 h-10 text-orange-500 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-xs text-orange-500">{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 px-4 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our <span className="text-white">Vision</span>
          </h2>
          <p className="text-lg mb-12 max-w-3xl mx-auto">
            To be the leading integrated metal producer in India, setting benchmarks for quality, sustainability, and innovation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visionPoints.map((point, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                <p className="text-white/90">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Clients & Experts Say */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gray-900">What Clients &</span> <span className="text-orange-500">Experts Say</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{testimonial.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{testimonial.description}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                      <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gray-900">Customer</span> <span className="text-orange-500">Testimonials</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoTestimonials.map((video, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img src={video.thumbnail} alt={video.title} className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex items-center justify-center">
                  <button className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all transform group-hover:scale-110">
                    <Play className="w-8 h-8 ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{video.title}</h3>
                  <p className="text-white/90">{video.name}</p>
                  <p className="text-sm text-white/70">{video.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            If You Are Satisfied With Us, Share Your Experience
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Your feedback helps us improve and serves as a guide for others looking for quality metal solutions.
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl">
            Share Your Testimonial
          </button>
        </div>
      </section>
    </div>
  );
}
