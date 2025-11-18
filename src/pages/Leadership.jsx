import React, { useState, useEffect } from 'react';
import { Mail, Linkedin } from 'lucide-react';

export default function Leadership() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const boardChairman = {
    name: 'Mr. Brindra Agarwal',
    position: 'Board Chairman',
    image: '/about1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  };

  const boardOfDirectors = [
    { name: 'Mrs. Sanjay Agarwal', position: 'Managing Director & CEO', image: '/about2.jpg' },
    { name: 'Mr. Priti Agarwal', position: 'Whole-time Director', image: '/about3.jpg' },
    { name: 'Mr. Rahul Agarwal', position: 'Independent Director', image: '/about4.jpg' }
  ];

  const committees = [
    {
      title: 'Audit Committee',
      members: [
        { name: 'Mr. Ravi Jhunjhunwala', position: 'Chairman', image: '/about1.jpg' },
        { name: 'Mr. Ghanshyam Das', position: 'Member', image: '/about2.jpg' },
        { name: 'Mrs. Priti Agarwal', position: 'Member', image: '/about3.jpg' }
      ]
    },
    {
      title: 'Nomination and Remuneration Committee',
      members: [
        { name: 'Mr. Arvind Singhal', position: 'Chairman', image: '/about4.jpg' },
        { name: 'Mr. Ravi Jhunjhunwala', position: 'Member', image: '/about5.jpg' },
        { name: 'Mr. Ghanshyam Das', position: 'Member', image: '/about6.jpg' }
      ]
    },
    {
      title: 'Stakeholders Relationship Committee',
      members: [
        { name: 'Mr. Ghanshyam Das', position: 'Chairman', image: '/about1.jpg' },
        { name: 'Mr. Brij Bhushan', position: 'Member', image: '/about2.jpg' },
        { name: 'Mrs. Priti Agarwal', position: 'Member', image: '/about3.jpg' }
      ]
    },
    {
      title: 'Corporate Social Responsibility Committee',
      members: [
        { name: 'Mrs. Priti Agarwal', position: 'Chairman', image: '/about4.jpg' },
        { name: 'Mr. Arvind Singhal', position: 'Member', image: '/about5.jpg' },
        { name: 'Mr. Sanjay Agarwal', position: 'Member', image: '/about6.jpg' }
      ]
    },
    {
      title: 'Risk Management Committee',
      members: [
        { name: 'Mr. Ravi Jhunjhunwala', position: 'Chairman', image: '/about1.jpg' },
        { name: 'Mr. Brij Bhushan', position: 'Member', image: '/about2.jpg' },
        { name: 'Mr. Sanjay Agarwal', position: 'Member', image: '/about3.jpg' }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - 100vh */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src="/about1.jpg"
            alt="Leadership"
            className="w-full h-full object-cover"
          />
        </div>
        <div className={`absolute top-0 left-0 w-full h-full bg-black/60 transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

        <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}>
            Leadership
          </h1>
          <p className={`text-lg md:text-xl text-white/90 max-w-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}>
            Meet the visionary leaders driving Shyam Metalics towards excellence
          </p>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="text-gray-900">Meet Our</span> <span className="text-orange-500">Team</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Board Chairman Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{boardChairman.position}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{boardChairman.description}</p>
              <div className="inline-block">
                <div className="text-xl font-bold text-orange-500">{boardChairman.name}</div>
                <div className="text-gray-600">{boardChairman.position}</div>
              </div>
            </div>

            {/* Right - Chairman Image */}
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={boardChairman.image}
                  alt={boardChairman.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Board of Directors Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gray-900">Board of</span> <span className="text-orange-500">Directors</span>
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
              Our board of directors brings together diverse expertise and extensive experience in the metals industry. They provide strategic guidance and ensure corporate governance excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Board of Committees */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gray-900">BOARD OF</span> <span className="text-orange-500">COMMITTEES</span>
          </h2>

          <div className="space-y-12">
            {committees.map((committee, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-6 border-b-2 border-orange-200 pb-3">
                  {committee.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {committee.members.map((member, index) => (
                    <div
                      key={index}
                      className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-orange-500 transition-all duration-300"
                    >
                      <div className="h-64 overflow-hidden bg-gray-100">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h4 className="font-bold text-gray-900 mb-1">{member.name}</h4>
                        <p className="text-sm text-orange-500 font-semibold">{member.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-orange-500">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Leadership Philosophy
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At Shyam Metalics, our leadership team is committed to building a sustainable and future-ready organization.
                We believe in transparent governance, ethical business practices, and creating value for all our stakeholders.
              </p>
              <p>
                Our board brings together diverse expertise from across industries, ensuring that we maintain the highest
                standards of corporate governance while driving innovation and growth.
              </p>
              <p className="font-semibold text-orange-600 text-lg">
                "Building India's future through sustainable metal solutions and ethical leadership."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
