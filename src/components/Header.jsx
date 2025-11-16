import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'ABOUT US', hasDropdown: true },
    { name: 'BUSINESSES', hasDropdown: true },
    { name: 'SELTIGER', hasDropdown: false, icon: '🏆' },
    { name: 'INVESTORS', hasDropdown: true },
    { name: 'COMMUNITY', hasDropdown: true },
    { name: 'SUSTAINABILITY', hasDropdown: true },
    { name: 'CAREERS', hasDropdown: true },
    { name: 'CONTACT US', hasDropdown: true }
  ];

  return (
    <>
      {/* Header */}
      <header 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={
          isScrolled
            ? {
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.6))',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }
            : {
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.15))',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }
        }
      >
        {isScrolled ? (
          // Scrolled State - Single Row
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link to="/" className="flex-shrink-0">
                <img
                  src="/logo.jpeg"
                  alt="Shyam Metallics Logo"
                  className="h-12 object-contain"
                />
              </Link>

              {/* Navigation Menu */}
              <nav className="hidden lg:flex items-center gap-1">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-800 hover:text-orange-600 transition-colors"
                    >
                      {item.icon && <span className="mr-1">{item.icon}</span>}
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    {item.hasDropdown && openDropdown === item.name && (
                      <div
                        className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md py-2 z-50"
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.name === 'ABOUT US' ? (
                          <>
                            <Link to="/company-overview" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                              Company Overview
                            </Link>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                              Vision & Mission
                            </a>
                            <Link to="/leadership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                              Leadership
                            </Link>
                            <Link to="/awards" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                              Awards & Achievements
                            </Link>
                          </>
                        ) : item.name === 'BUSINESSES' ? (
                          <>
                            <Link to="/manufacturing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                              Manufacturing Units
                            </Link>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                              Products
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                              Business Verticals
                            </a>
                          </>
                        ) : item.name === 'COMMUNITY' ? (
                          <>
                            <Link to="/testimonials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                              Testimonials
                            </Link>
                            <Link to="/news-events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                              News & Events
                            </Link>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                              CSR Initiatives
                            </a>
                          </>
                        ) : (
                          <>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                              Option 1
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                              Option 2
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                              Option 3
                            </a>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Search Icon */}
              <button className="hidden lg:block text-gray-800 hover:text-orange-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>

              {/* Mobile Menu Button */}
              <button className="lg:hidden flex flex-col gap-1.5 p-2">
                <span className="w-6 h-0.5 bg-gray-800"></span>
                <span className="w-6 h-0.5 bg-gray-800"></span>
                <span className="w-6 h-0.5 bg-gray-800"></span>
              </button>
            </div>
          </div>
        ) : (
          // Not Scrolled State - Two Columns Layout
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center py-2">
              {/* Left Column - Logo (Vertically Centered) */}
              <Link to="/" className="flex-shrink-0">
                <img
                  src="/logo.jpeg"
                  alt="Shyam Metallics Logo"
                  className="h-12 object-contain"
                />
              </Link>

              {/* Right Column - Two Stacked Rows */}
              <div className="flex-1 flex flex-col ml-8">
                {/* Top Row - Price Info and Search */}
                <div className="hidden lg:flex items-center justify-between px-2 py-2 border-b border-white/10">
                  {/* Price Info */}
                  <div className="text-white text-sm">
                    <span className="opacity-70">Error loading price</span>
                  </div>

                  {/* Search Icon */}
                  <button className="text-white hover:text-orange-400 transition-colors ml-4">
                    <Search className="w-5 h-5" />
                  </button>
                </div>

                {/* Bottom Row - Navigation Menu */}
                <div className="hidden lg:flex items-center justify-start py-2">
                  <nav className="flex items-center gap-1">
                    {menuItems.map((item, index) => (
                      <div
                        key={index}
                        className="relative group"
                        onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <button
                          className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white hover:text-orange-400 transition-colors"
                        >
                          {item.icon && <span className="mr-1">{item.icon}</span>}
                          {item.name}
                          {item.hasDropdown && (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>

                        {/* Dropdown Menu */}
                        {item.hasDropdown && openDropdown === item.name && (
                          <div
                            className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md py-2 z-50"
                            onMouseEnter={() => setOpenDropdown(item.name)}
                            onMouseLeave={() => setOpenDropdown(null)}
                          >
                            {item.name === 'ABOUT US' ? (
                              <>
                                <Link to="/company-overview" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                                  Company Overview
                                </Link>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                                  Vision & Mission
                                </a>
                                <Link to="/leadership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                                  Leadership
                                </Link>
                                <Link to="/awards" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                                  Awards & Achievements
                                </Link>
                              </>
                            ) : item.name === 'BUSINESSES' ? (
                              <>
                                <Link to="/manufacturing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                                  Manufacturing Units
                                </Link>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                                  Products
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                                  Business Verticals
                                </a>
                              </>
                            ) : item.name === 'COMMUNITY' ? (
                              <>
                                <Link to="/testimonials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                                  Testimonials
                                </Link>
                                <Link to="/news-events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                                  News & Events
                                </Link>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                                  CSR Initiatives
                                </a>
                              </>
                            ) : (
                              <>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                                  Option 1
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                                  Option 2
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                                  Option 3
                                </a>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button className="lg:hidden flex flex-col gap-1.5 p-2 ml-auto">
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}