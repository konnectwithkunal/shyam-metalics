import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export default function Leadership() {
  const leaders = [
    {
      name: 'Brij Bhushan Agarwal',
      position: 'Vice-Chairman & Managing Director',
      image: '/leaders/brij-bhushan.jpg',
      description: 'A visionary leader with decades of experience in the metals industry, driving strategic growth and operational excellence.',
      linkedin: '#',
      email: '#'
    },
    {
      name: 'Sanjay Kumar Agarwal',
      position: 'Whole-time Director & CFO',
      image: '/leaders/sanjay-kumar.jpg',
      description: 'Expert in financial strategy and corporate governance, ensuring sustainable growth and stakeholder value.',
      linkedin: '#',
      email: '#'
    },
    {
      name: 'Susil Kumar Agarwal',
      position: 'Whole-time Director',
      image: '/leaders/susil-kumar.jpg',
      description: 'Passionate about operational excellence and innovation in manufacturing processes.',
      linkedin: '#',
      email: '#'
    },
    {
      name: 'Ravi Jhunjhunwala',
      position: 'Independent Director',
      image: '/leaders/ravi-jhunjhunwala.jpg',
      description: 'Brings extensive expertise in corporate strategy and governance.',
      linkedin: '#',
      email: '#'
    },
    {
      name: 'Ghanshyam Das Agarwal',
      position: 'Independent Director',
      image: '/leaders/ghanshyam-das.jpg',
      description: 'Seasoned professional with deep industry knowledge and strategic insights.',
      linkedin: '#',
      email: '#'
    },
    {
      name: 'Arvind Kumar Singhal',
      position: 'Independent Director',
      image: '/leaders/arvind-kumar.jpg',
      description: 'Expert in business development and strategic planning.',
      linkedin: '#',
      email: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Leadership</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Meet the visionary leaders driving Shyam Metalics towards excellence and sustainable growth
            </p>
          </div>
        </div>
        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Leadership Team Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-orange-500">Board of</span> Directors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our board combines extensive industry experience with strategic vision to guide Shyam Metalics towards continued success.
            </p>
          </div>

          {/* Leadership Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-orange-500"
              >
                {/* Image Container */}
                <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  {/* Placeholder for leader image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-4xl font-bold">
                      {leader.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </div>
                  </div>
                  {/* Uncomment when images are available */}
                  {/* <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  /> */}
                </div>

                {/* Content Container */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {leader.name}
                  </h3>
                  <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full inline-block mb-4">
                    <p className="text-sm font-semibold">{leader.position}</p>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {leader.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <a
                      href={leader.linkedin}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-4 border-orange-500">
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
                standards of corporate governance while driving innovation and growth. Together, we are steering Shyam
                Metalics towards becoming a global benchmark in the metals industry.
              </p>
              <p className="font-semibold text-orange-600">
                "Building India's future through sustainable metal solutions and ethical leadership."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
