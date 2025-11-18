import React, { useState, useEffect } from 'react';
import { Check, Download, Share2, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useParams } from 'react-router-dom';

export default function SingleProductPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const { productId } = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Auto-change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % 4);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + 4) % 4);
  };

  const product = {
    name: 'TMT Bars',
    category: 'Iron & Steel',
    images: ['/iron-steel.jpg', '/about2.jpg', '/about3.jpg', '/about4.jpg'],
    description: 'High-strength Thermo-Mechanically Treated (TMT) bars designed for superior performance in construction and infrastructure projects.',
    longDescription: 'Our TMT bars are manufactured using state-of-the-art technology and undergo rigorous quality control processes. They offer excellent strength, ductility, and corrosion resistance, making them ideal for modern construction needs.',
    specifications: [
      { label: 'Grade', value: 'Fe 500, Fe 500D, Fe 550' },
      { label: 'Diameter', value: '8mm to 32mm' },
      { label: 'Length', value: '12m standard' },
      { label: 'Standard', value: 'IS 1786:2008' }
    ],
    features: [
      'Superior strength and ductility',
      'Excellent corrosion resistance',
      'Earthquake resistant properties',
      'Easy to bend and weld',
      'Cost-effective solution',
      'BIS certified quality'
    ],
    applications: [
      'Residential buildings',
      'Commercial complexes',
      'Bridges and flyovers',
      'Industrial structures',
      'Infrastructure projects',
      'High-rise buildings'
    ]
  };

  return (
    <div className="bg-white">
      {/* Hero Section - 100vh */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Images with Crossfade */}
        {product.images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              selectedImage === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
        <div className={`absolute top-0 left-0 w-full h-full bg-black/60 transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

        <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className={`inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}>
            {product.category}
          </span>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}>
            {product.name}
          </h1>
          <p className={`text-lg md:text-xl text-white/90 max-w-2xl mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}>
            {product.description}
          </p>

          <div className={`flex gap-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '1000ms' : '0ms' }}>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all shadow-lg">
              Request Quote
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30">
              <Download className="w-5 h-5 inline mr-2" />
              Download Brochure
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all border border-white/30 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
          style={{ transitionDelay: isVisible ? '1200ms' : '0ms' }}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all border border-white/30 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
          style={{ transitionDelay: isVisible ? '1200ms' : '0ms' }}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Bullet Navigation */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: isVisible ? '1100ms' : '0ms' }}>
          {product.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`transition-all duration-300 rounded-full ${
                selectedImage === index
                  ? 'w-12 h-3 bg-orange-500'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Description */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: isVisible ? '1200ms' : '0ms' }}>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-gray-900">Product</span> <span className="text-orange-500">Overview</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">{product.longDescription}</p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    style={{ transitionDelay: isVisible ? `${1400 + index * 100}ms` : '0ms' }}
                  >
                    <Check className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Specifications & Applications */}
            <div className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: isVisible ? '1400ms' : '0ms' }}>
              {/* Specifications */}
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
                <div className="space-y-3">
                  {product.specifications.map((spec, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center py-2 border-b border-gray-200 last:border-0 transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                      }`}
                      style={{ transitionDelay: isVisible ? `${1600 + index * 100}ms` : '0ms' }}
                    >
                      <span className="font-semibold text-gray-700">{spec.label}</span>
                      <span className="text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Applications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.applications.map((app, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                      }`}
                      style={{ transitionDelay: isVisible ? `${2000 + index * 100}ms` : '0ms' }}
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className={`bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: isVisible ? '2600ms' : '0ms' }}>
                <h3 className="text-xl font-bold mb-3">Need More Information?</h3>
                <p className="text-orange-100 mb-4">Our technical team is ready to help you with product selection and specifications.</p>
                <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all w-full">
                  Contact Technical Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold mb-8 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '2800ms' : '0ms' }}>
            <span className="text-gray-900">Related</span> <span className="text-orange-500">Products</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['Wire Rods', 'Structural Steel', 'Ferro Alloys', 'Sponge Iron'].map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isVisible ? `${3000 + index * 150}ms` : '0ms' }}
              >
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300"></div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{item}</h3>
                  <p className="text-sm text-gray-600 mt-2">High-quality {item.toLowerCase()} for various applications</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
