import React, { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  const [newsletterInView, setNewsletterInView] = useState(false);
  const [contentInView, setContentInView] = useState(false);
  const [bottomInView, setBottomInView] = useState(false);

  const newsletterRef = useRef(null);
  const contentRef = useRef(null);
  const bottomRef = useRef(null);

  // Intersection Observers for entrance animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const newsletterObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNewsletterInView(true);
      }
    }, observerOptions);

    const contentObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setContentInView(true);
      }
    }, observerOptions);

    const bottomObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setBottomInView(true);
      }
    }, observerOptions);

    if (newsletterRef.current) newsletterObserver.observe(newsletterRef.current);
    if (contentRef.current) contentObserver.observe(contentRef.current);
    if (bottomRef.current) bottomObserver.observe(bottomRef.current);

    return () => {
      if (newsletterRef.current) newsletterObserver.unobserve(newsletterRef.current);
      if (contentRef.current) contentObserver.unobserve(contentRef.current);
      if (bottomRef.current) bottomObserver.unobserve(bottomRef.current);
    };
  }, []);

  const socialIcons = [
    { Icon: FaFacebookF, bg: 'bg-blue-600', href: '#' },
    { Icon: FaInstagram, bg: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500', href: '#' },
    { Icon: FaLinkedinIn, bg: 'bg-blue-700', href: '#' },
    { Icon: FaXTwitter, bg: 'bg-black border border-gray-700', href: '#' },
    { Icon: FaYoutube, bg: 'bg-red-600', href: '#' }
  ];

  return (
    <footer className='bg-black text-white xl-:scale-95 xl-:transition-transform xl-:duration-300'>
      {/* Newsletter Section with Animation */}
      <div 
        ref={newsletterRef}
        className='border-b border-gray-800 py-6'
      >
        <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4'>
          <h2 className={`text-2xl font-bold text-center md:text-left transition-all duration-1000 ${
            newsletterInView
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-10'
          }`}>
            Subscribe to Our News Alerts
          </h2>
          <div className='flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto'>
            <div className='flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto'>
              <input
                type='email'
                placeholder='Email Id'
                className={`px-4 py-2 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 w-full sm:w-64 transition-all duration-1000 ${
                  newsletterInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: newsletterInView ? '200ms' : '0ms' }}
              />
              <button className={`px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded font-semibold text-white transition-all duration-1000 w-full sm:w-auto ${
                newsletterInView
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-75'
              }`}
              style={{ transitionDelay: newsletterInView ? '400ms' : '0ms' }}>
                Subscribe
              </button>
            </div>
            {/* Social Media Icons with Stagger - Responsive */}
            <div className='flex gap-2 sm:gap-3 items-center justify-center flex-wrap sm:ml-2'>
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-9 h-9 sm:w-10 sm:h-10 ${social.bg} rounded-full flex items-center justify-center hover:opacity-70 transition-all duration-700 ${
                    newsletterInView
                      ? 'opacity-100 scale-100 rotate-0'
                      : 'opacity-0 scale-0 rotate-180'
                  }`}
                  style={{ transitionDelay: newsletterInView ? `${600 + (index * 100)}ms` : '0ms' }}
                >
                  <social.Icon className='text-white text-sm sm:text-base' />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content with Animation */}
      <div 
        ref={contentRef}
        className='py-12'
      >
        <div className='max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-8'>
          {/* Certification Badge */}
          <div className={`col-span-2 md:col-span-1 transition-all duration-1000 ${
            contentInView 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-10 scale-90'
          }`}>
            <img
              src='/greatplace.png'
              alt='Great Place To Work Certified'
              className='w-14 h-auto'
            />
          </div>

          {/* About Us */}
          <div className={`transition-all duration-1000 ${
            contentInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: contentInView ? '100ms' : '0ms' }}>
            <h3 className='font-bold mb-4'>About Us</h3>
            <ul className='space-y-2 text-sm text-gray-300'>
              {['Company Overview', 'Our Leadership', 'Awards and Achievements', 'Manufacturing Unit', 'Testimonials', 'News and Events'].map((item, index) => (
                <li 
                  key={item}
                  className={`transition-all duration-700 ${
                    contentInView 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: contentInView ? `${200 + (index * 50)}ms` : '0ms' }}
                >
                  <a href='#' className='hover:text-orange-500 transition-colors'>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Businesses */}
          <div className={`transition-all duration-1000 ${
            contentInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: contentInView ? '200ms' : '0ms' }}>
            <h3 className='font-bold mb-4'>Businesses</h3>
            <ul className='space-y-2 text-sm text-gray-300'>
              {['Iron and Steel', 'Aluminum', 'Energy & Others'].map((item, index) => (
                <li 
                  key={item}
                  className={`transition-all duration-700 ${
                    contentInView 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: contentInView ? `${300 + (index * 50)}ms` : '0ms' }}
                >
                  <a href='#' className='hover:text-orange-500 transition-colors'>{item}</a>
                </li>
              ))}
            </ul>
            <h3 className={`font-bold mt-8 mb-4 transition-all duration-700 ${
              contentInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: contentInView ? '450ms' : '0ms' }}>Community</h3>
            <ul className='space-y-2 text-sm text-gray-300'>
              {['CSR', 'Blogs'].map((item, index) => (
                <li 
                  key={item}
                  className={`transition-all duration-700 ${
                    contentInView 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: contentInView ? `${500 + (index * 50)}ms` : '0ms' }}
                >
                  <a href='#' className='hover:text-orange-500 transition-colors'>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Investors */}
          <div className={`transition-all duration-1000 ${
            contentInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: contentInView ? '300ms' : '0ms' }}>
            <h3 className='font-bold mb-4'>Investors</h3>
            <ul className='space-y-2 text-sm text-gray-300'>
              {['Financial Performance', 'Corporate Governance', 'Shareholder Information', 'Investor Helpdesk'].map((item, index) => (
                <li 
                  key={item}
                  className={`transition-all duration-700 ${
                    contentInView 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: contentInView ? `${400 + (index * 50)}ms` : '0ms' }}
                >
                  <a href='#' className='hover:text-orange-500 transition-colors'>{item}</a>
                </li>
              ))}
            </ul>
            <h3 className={`font-bold mt-8 mb-4 transition-all duration-700 ${
              contentInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: contentInView ? '550ms' : '0ms' }}>Contact Us</h3>
            <ul className='space-y-2 text-sm text-gray-300'>
              {['Contact Form', 'Company Location'].map((item, index) => (
                <li 
                  key={item}
                  className={`transition-all duration-700 ${
                    contentInView 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: contentInView ? `${600 + (index * 50)}ms` : '0ms' }}
                >
                  <a href='#' className='hover:text-orange-500 transition-colors'>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sustainability */}
          <div className={`transition-all duration-1000 ${
            contentInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: contentInView ? '400ms' : '0ms' }}>
            <h3 className='font-bold mb-4'>Sustainability</h3>
            <ul className='space-y-2 text-sm text-gray-300'>
              {['ESG', 'Environment Compliance'].map((item, index) => (
                <li 
                  key={item}
                  className={`transition-all duration-700 ${
                    contentInView 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: contentInView ? `${500 + (index * 50)}ms` : '0ms' }}
                >
                  <a href='#' className='hover:text-orange-500 transition-colors'>{item}</a>
                </li>
              ))}
            </ul>
            <h3 className={`font-bold mt-8 mb-4 transition-all duration-700 ${
              contentInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: contentInView ? '600ms' : '0ms' }}>Careers</h3>
            <ul className='space-y-2 text-sm text-gray-300'>
              {['Life at Shyam', 'Current Openings'].map((item, index) => (
                <li 
                  key={item}
                  className={`transition-all duration-700 ${
                    contentInView 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: contentInView ? `${650 + (index * 50)}ms` : '0ms' }}
                >
                  <a href='#' className='hover:text-orange-500 transition-colors'>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tiger Logo & Employee Login */}
          <div className={`transition-all duration-1000 ${
            contentInView 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-10 scale-90'
          }`}
          style={{ transitionDelay: contentInView ? '500ms' : '0ms' }}>
            <div className='bg-white rounded p-2 mb-4 w-32 flex items-center justify-center'>
              <img
                src='/seltiger.png'
                alt='SEL Tiger Logo'
                className='w-full h-auto'
              />
            </div>
            <div className={`text-sm text-gray-300 mb-3 transition-all duration-700 ${
              contentInView 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-5'
            }`}
            style={{ transitionDelay: contentInView ? '700ms' : '0ms' }}>Overview</div>
            <button className={`px-3 py-2 bg-orange-500 hover:bg-orange-600 rounded font-semibold text-sm text-white transition-all duration-700 ${
              contentInView 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-75'
            }`}
            style={{ transitionDelay: contentInView ? '800ms' : '0ms' }}>
              Employee Login
            </button>
          </div>
        </div>
      </div>

     {/* Bottom Bar - Always Visible */}
<div className='border-t border-gray-800 py-4'>
  <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400'>
    <div className='flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left'>
      <div className='w-12 h-auto bg-orange-500 rounded flex items-center justify-center flex-shrink-0'>
        <img src='/logo.jpeg' alt='Logo' className='w-full h-full object-contain' />
      </div>
      <span className='text-xs sm:text-sm'>Copyright 2025 Shyam Theme by <a href='#' className='text-orange-500 hover:underline'>Shyam</a> | All Rights Reserved</span>
    </div>
    <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-xs sm:text-sm'>
      <a href='#' className='hover:text-orange-500 transition-colors'>Privacy Policy</a>
      <a href='#' className='hover:text-orange-500 transition-colors'>Terms of use</a>
      <span className='flex items-center gap-2'>
        <span className='w-2 h-2 bg-green-500 rounded-full'></span>
        India
      </span>
      <a href='mailto:contact@shyamgroup.com' className='hover:text-orange-500 transition-colors break-all'>contact@shyamgroup.com</a>
    </div>
  </div>
</div>  
    </footer>
  );
}