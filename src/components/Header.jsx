import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, TrendingUp, TrendingDown } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [stockData, setStockData] = useState({
    nse: { price: '856.00', change: '+12.50', changePercent: '+1.48%', isPositive: true },
    bse: { price: '855.75', change: '+11.25', changePercent: '+1.33%', isPositive: true }
  });

  useEffect(() => {
    // Trigger entrance animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Mock function to fetch stock prices
    // Replace with actual API call
    const fetchStockPrices = async () => {
      try {
        // Mock API call - Replace with actual API
        // Example: const response = await fetch('YOUR_API_ENDPOINT');
        // const data = await response.json();
        
        // Mock data - Replace with actual API response
        setStockData({
          nse: { 
            price: '856.00', 
            change: '+12.50', 
            changePercent: '+1.48%', 
            isPositive: true 
          },
          bse: { 
            price: '855.75', 
            change: '+11.25', 
            changePercent: '+1.33%', 
            isPositive: true 
          }
        });
      } catch (error) {
        console.error('Error fetching stock prices:', error);
      }
    };

    fetchStockPrices();
    // Auto-refresh every 5 minutes
    const stockInterval = setInterval(fetchStockPrices, 300000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      clearInterval(stockInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { name: 'ABOUT US', hasDropdown: true },
    { name: 'BUSINESSES', hasDropdown: true },
    { name: 'SELTIGER', hasDropdown: false, icon: '🏆' }, // icon kept, but we override rendering below
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
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
              {/* Logo with Animation */}
              <Link 
                to="/" 
                className={`flex-shrink-0 transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <img
                  src="/logo.jpeg"
                  alt="Shyam Metallics Logo"
                  className="h-12 object-contain"
                />
              </Link>

              {/* Navigation Menu with Stagger */}
              <nav className="hidden lg:flex items-center gap-1">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className={`relative group transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                    }`}
                    style={{ transitionDelay: `${300 + (index * 50)}ms` }}
                    onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-800 hover:text-orange-600 transition-colors"
                    >
                      {/* ✅ Only change: SELTIGER shows tiger logo instead of emoji */}
                    {item.name === 'SELTIGER' ? (
  <img
    src="/tiger.png"
    alt="SelTiger Logo"
    className="h-4 w-auto mr-1 object-contain"
    style={{
      filter: isScrolled ? 'brightness(0) saturate(100%)' : 'none'
    }}
  />
) : (
  item.icon && <span className="mr-1">{item.icon}</span>
)}
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    {item.hasDropdown && openDropdown === item.name && (
                      <div
                        className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md py-2 z-50 animate-fadeInDown"
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

              {/* Search Icon with Animation */}
              <button 
                className={`hidden lg:block text-gray-800 hover:text-orange-600 transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-180'
                }`}
                style={{ transitionDelay: '700ms' }}
              >
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
              {/* Left Column - Logo (Vertically Centered) with Animation */}
              <Link 
                to="/" 
                className={`flex-shrink-0 transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <img
                  src="/logo.jpeg"
                  alt="Shyam Metallics Logo"
                  className="h-12 object-contain"
                />
              </Link>

              {/* Right Column - Two Stacked Rows */}
              <div className="flex-1 flex flex-col ml-8">
                {/* Top Row - Stock Prices and Search with Animation */}
                <div className={`hidden lg:flex items-center justify-between px-2 py-2 border-b border-white/10 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: '300ms' }}>
                  {/* Stock Prices */}
                  <div className="flex items-center gap-6 text-white text-xs">
                    {/* NSE Price */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-300">NSE:</span>
                      <span className="font-bold">₹{stockData.nse.price}</span>
                      <span className={`flex items-center gap-1 ${
                        stockData.nse.isPositive ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {stockData.nse.isPositive ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        <span className="font-semibold">{stockData.nse.change}</span>
                        <span className="text-[10px]">({stockData.nse.changePercent})</span>
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="h-4 w-px bg-white/20"></div>

                    {/* BSE Price */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-300">BSE:</span>
                      <span className="font-bold">₹{stockData.bse.price}</span>
                      <span className={`flex items-center gap-1 ${
                        stockData.bse.isPositive ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {stockData.bse.isPositive ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        <span className="font-semibold">{stockData.bse.change}</span>
                        <span className="text-[10px]">({stockData.bse.changePercent})</span>
                      </span>
                    </div>
                  </div>

                  {/* Search Icon - Positioned above CONTACT US */}
                  <button className={`text-white hover:text-orange-400 transition-all duration-700 ${
                    isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-180'
                  }`}
                  style={{ transitionDelay: '500ms' }}>
                    <Search className="w-5 h-5" />
                  </button>
                </div>

                {/* Bottom Row - Navigation Menu with Stagger */}
                <div className="hidden lg:flex items-center justify-between py-2">
                  <nav className="flex items-center gap-1">
                    {menuItems.map((item, index) => (
                      <div
                        key={index}
                        className={`relative group transition-all duration-700 ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}
                        style={{ transitionDelay: `${400 + (index * 50)}ms` }}
                        onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <button
                          className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white hover:text-orange-400 transition-colors"
                        >
                          {/* ✅ Same SELTIGER logo logic for non-scrolled state */}
                          {item.name === 'SELTIGER' ? (
                            <img
                              src="/tiger.png"
                              alt="SelTiger Logo"
                              className="h-4 w-auto mr-1 object-contain"
                            />
                          ) : (
                            item.icon && <span className="mr-1">{item.icon}</span>
                          )}
                          {item.name}
                          {item.hasDropdown && (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>

                        {/* Dropdown Menu */}
                        {item.hasDropdown && openDropdown === item.name && (
                          <div
                            className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md py-2 z-50 animate-fadeInDown"
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

                  {/* Invisible placeholder to maintain alignment with search icon above */}
                  <div className="w-5 h-5"></div>
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

      {/* CSS for dropdown animation */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
