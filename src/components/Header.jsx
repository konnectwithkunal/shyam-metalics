import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, TrendingUp, TrendingDown, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
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
    const fetchStockPrices = async () => {
      try {
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
    const stockInterval = setInterval(fetchStockPrices, 300000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      clearInterval(stockInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const menuItems = [
    { name: 'ABOUT US', hasDropdown: true },
    { name: 'BUSINESSES', hasDropdown: true },
    { name: 'SELTIGER', hasDropdown: false },
    { name: 'INVESTORS', hasDropdown: true },
    { name: 'COMMUNITY', hasDropdown: true },
    { name: 'SUSTAINABILITY', hasDropdown: true },
    { name: 'CAREERS', hasDropdown: true },
    { name: 'CONTACT US', hasDropdown: true }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileOpenDropdown(null);
  };

  const toggleMobileDropdown = (itemName) => {
    setMobileOpenDropdown(mobileOpenDropdown === itemName ? null : itemName);
  };

  const getDropdownContent = (itemName) => {
    switch(itemName) {
      case 'ABOUT US':
        return [
          { to: '/company-overview', label: 'Company Overview' },
          { to: '#', label: 'Vision & Mission' },
          { to: '/leadership', label: 'Leadership' },
          { to: '/awards', label: 'Awards & Achievements' }
        ];
      case 'BUSINESSES':
        return [
          { to: '/manufacturing', label: 'Manufacturing Units' },
          { to: '#', label: 'Products' },
          { to: '#', label: 'Business Verticals' }
        ];
      case 'COMMUNITY':
        return [
          { to: '/testimonials', label: 'Testimonials' },
          { to: '/news-events', label: 'News & Events' },
          { to: '#', label: 'CSR Initiatives' }
        ];
      default:
        return [
          { to: '#', label: 'Option 1' },
          { to: '#', label: 'Option 2' },
          { to: '#', label: 'Option 3' }
        ];
    }
  };

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
          <div className="w-full mx-auto px-4 max-w-7xl">
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
                  className="h-10 md:h-12 object-contain"
                />
              </Link>

              {/* Navigation Menu with Stagger */}
              <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
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
                      {item.name === 'SELTIGER' && (
                        <img
                          src="/tiger.png"
                          alt="SelTiger Logo"
                          className="h-4 w-auto mr-1 object-contain"
                          style={{
                            filter: isScrolled ? 'brightness(0) saturate(100%)' : 'none'
                          }}
                        />
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
                        {getDropdownContent(item.name).map((link, idx) => (
                          <Link 
                            key={idx}
                            to={link.to} 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Search Icon with Animation */}
              <button 
                className={`hidden lg:block text-gray-800 hover:text-orange-600 transition-all duration-700 flex-shrink-0 ${
                  isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-180'
                }`}
                style={{ transitionDelay: '700ms' }}
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMobileMenu}
                className="lg:hidden flex flex-col gap-1.5 p-2 flex-shrink-0"
                aria-label="Toggle mobile menu"
              >
                <span className="w-6 h-0.5 bg-gray-800 transition-all"></span>
                <span className="w-6 h-0.5 bg-gray-800 transition-all"></span>
                <span className="w-6 h-0.5 bg-gray-800 transition-all"></span>
              </button>
            </div>
          </div>
        ) : (
          // Not Scrolled State - Two Columns Layout
          <div className="w-full mx-auto px-4 max-w-7xl">
    <div className="flex items-center py-2">
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
                  className="h-10 md:h-12 object-contain"
                />
              </Link>

              {/* Right Column - Two Stacked Rows */}
              <div className="hidden lg:flex flex-1 flex-col ml-8">
                {/* Top Row - Stock Prices and Search with Animation */}
                <div className={`flex items-center justify-between px-2 py-2 border-b border-white/10 transition-all duration-700 ${
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

                  {/* Search Icon */}
                  <button className={`text-white hover:text-orange-400 transition-all duration-700 ${
                    isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-180'
                  }`}
                  style={{ transitionDelay: '500ms' }}>
                    <Search className="w-5 h-5" />
                  </button>
                </div>

                {/* Bottom Row - Navigation Menu with Stagger */}
                <div className="flex items-center justify-between py-2">
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
                          {item.name === 'SELTIGER' && (
                            <img
                              src="/tiger.png"
                              alt="SelTiger Logo"
                              className="h-4 w-auto mr-1 object-contain"
                            />
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
                            {getDropdownContent(item.name).map((link, idx) => (
                              <Link 
                                key={idx}
                                to={link.to} 
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Invisible placeholder */}
                  <div className="w-5 h-5"></div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMobileMenu}
                className="lg:hidden flex flex-col gap-1.5 p-2 ml-auto flex-shrink-0"
                aria-label="Toggle mobile menu"
              >
                <span className="w-6 h-0.5 bg-white transition-all"></span>
                <span className="w-6 h-0.5 bg-white transition-all"></span>
                <span className="w-6 h-0.5 bg-white transition-all"></span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-[60] lg:hidden animate-fadeIn"
            onClick={toggleMobileMenu}
          />
          
          {/* Mobile Menu Drawer */}
          <div className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] lg:hidden shadow-2xl animate-slideInRight overflow-y-auto">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <img
                src="/logo.jpeg"
                alt="Shyam Metallics Logo"
                className="h-10 object-contain"
              />
              <button 
                onClick={toggleMobileMenu}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <nav className="py-4">
              {menuItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="w-full flex items-center justify-between px-6 py-4 text-gray-800 hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown 
                          className={`w-5 h-5 transition-transform duration-200 ${
                            mobileOpenDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {/* Mobile Dropdown Content */}
                      {mobileOpenDropdown === item.name && (
                        <div className="bg-gray-50 animate-slideDown">
                          {getDropdownContent(item.name).map((link, idx) => (
                            <Link
                              key={idx}
                              to={link.to}
                              onClick={toggleMobileMenu}
                              className="block px-8 py-3 text-sm text-gray-600 hover:text-orange-600 hover:bg-white transition-colors"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to="#"
                      onClick={toggleMobileMenu}
                      className="flex items-center px-6 py-4 text-gray-800 hover:bg-gray-50 transition-colors"
                    >
                      {item.name === 'SELTIGER' && (
                        <img
                          src="/tiger.png"
                          alt="SelTiger Logo"
                          className="h-4 w-auto mr-2 object-contain"
                          style={{ filter: 'brightness(0) saturate(100%)' }}
                        />
                      )}
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Footer - Search */}
            <div className="p-6 border-t border-gray-200">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                <Search className="w-5 h-5" />
                <span className="font-medium">Search</span>
              </button>
            </div>
          </div>
        </>
      )}

      {/* CSS for animations */}
      <style>{`
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.3s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
}