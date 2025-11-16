import React, { useState } from 'react';
import { Eye, Target, Heart, ChevronLeft, ChevronRight, Flame, Factory, Users, MessageSquare, Globe, Leaf } from 'lucide-react';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
    '/factory1.jpg',
    '/factory2.jpg',
    '/factory3.jpg'
  ];

  const highlights = [
    { icon: Flame, title: 'Leading Sponge Iron & Pellet Producers' },
    { icon: Factory, title: 'Integrated Steel Powerhouse' },
    { icon: Users, title: 'Leading Ferro Alloys Producer' },
    { icon: MessageSquare, title: 'Major Aluminium Foil Exporter' },
    { icon: Globe, title: 'Future-Ready & Globally Aligned' },
    { icon: Leaf, title: 'Driven by Sustainability & Governance' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Vision, Mission, Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border-2 border-orange-500 p-10 pt-12 pb-14 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              {/* Icon */}
              <div className="mb-6">
                <card.icon className="w-16 h-16 text-orange-500" strokeWidth={2} />
              </div>

              {/* Title Badge */}
              <div className="bg-orange-500 text-white px-8 py-3 rounded-2xl mb-6 shadow-md">
                <h3 className="text-xl font-bold">{card.title}</h3>
              </div>

              {/* Content */}
              <p className="text-gray-800 text-base leading-relaxed">
                {card.content}
              </p>
            </div>
          ))}
        </div>

        {/* Company Overview Section */}
        <div className="max-w-7xl mx-auto px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-orange-500">Shyam Metalics:</span>{' '}
                <span className="text-gray-900">India's Leading Integrated Metal Conglomerate</span>
              </h2>
              
              <p className="text-gray-700 text-base leading-relaxed">
                Shyam Metalics is one of India's fastest-growing and most trusted integrated metal producers, with a diversified portfolio spanning carbon steel, stainless steel, ferro alloys, aluminium foil, and long steel products...
              </p>
              
              <p className="text-gray-700 text-base leading-relaxed">
                As a diversified metal conglomerate, Shyam Metalics operates with a fully integrated ore-to-metal manufacturing model, supported by 83% captive power generation and state-of-the-art facilities...
              </p>
              
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2">
                Read More →
              </button>
            </div>

            {/* Right Side - Image Carousel */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-900 h-96">
              {/* Carousel Image */}
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                <span className="text-white text-lg">Factory Image {currentSlide + 1}</span>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg px-3 py-7 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                <div className="mb-2">
                  <item.icon className="w-8 h-8 text-orange-500" strokeWidth={2} />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 leading-tight">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}