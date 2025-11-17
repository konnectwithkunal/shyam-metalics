import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Calendar, BarChart3, RefreshCw } from 'lucide-react';

export default function SharePrice() {
  const [activeTab, setActiveTab] = useState('share-monitor');
  const [selectedExchange, setSelectedExchange] = useState('NSE');
  const [headerInView, setHeaderInView] = useState(false);
  const [priceInView, setPriceInView] = useState(false);
  const [tabsInView, setTabsInView] = useState(false);
  const [contentInView, setContentInView] = useState(false);

  const headerRef = useRef(null);
  const priceRef = useRef(null);
  const tabsRef = useRef(null);
  const contentRef = useRef(null);

  const [stockData, setStockData] = useState({
    price: '856.00',
    change: '+12.50',
    changePercent: '+1.48%',
    lastUpdated: new Date().toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    })
  });
  const [isLoading, setIsLoading] = useState(false);

  // Intersection Observers for entrance animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const headerObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHeaderInView(true);
      }
    }, observerOptions);

    const priceObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPriceInView(true);
      }
    }, observerOptions);

    const tabsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTabsInView(true);
      }
    }, observerOptions);

    const contentObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setContentInView(true);
      }
    }, observerOptions);

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (priceRef.current) priceObserver.observe(priceRef.current);
    if (tabsRef.current) tabsObserver.observe(tabsRef.current);
    if (contentRef.current) contentObserver.observe(contentRef.current);

    return () => {
      if (headerRef.current) headerObserver.unobserve(headerRef.current);
      if (priceRef.current) priceObserver.unobserve(priceRef.current);
      if (tabsRef.current) tabsObserver.unobserve(tabsRef.current);
      if (contentRef.current) contentObserver.unobserve(contentRef.current);
    };
  }, []);

  // Mock function to fetch stock data
  const fetchStockPrice = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStockData({
        price: '856.00',
        change: '+12.50',
        changePercent: '+1.48%',
        lastUpdated: new Date().toLocaleString('en-IN', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short'
        })
      });
    } catch (error) {
      console.error('Error fetching stock price:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-refresh every 5 minutes
  useEffect(() => {
    fetchStockPrice();
    const interval = setInterval(fetchStockPrice, 300000);
    return () => clearInterval(interval);
  }, [selectedExchange]);

  const tabs = [
    { id: 'share-monitor', label: 'Share monitor', icon: TrendingUp },
    { id: 'financial-calendar', label: 'Financial calendar', icon: Calendar },
    { id: 'results', label: 'Results', icon: BarChart3 }
  ];

  return (
    <section className="py-16 px-4 lg:px-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with Animation */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          {/* Left - Title and Description */}
          <div 
            ref={headerRef}
            className={`transition-all duration-1000 ${
              headerInView 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Share price</h2>
            <p className={`text-gray-600 text-base max-w-2xl transition-all duration-700 ${
              headerInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: headerInView ? '200ms' : '0ms' }}>
              Our share monitor allows investors and analysts to track our share price history in the stock exchanges where we are listed.
            </p>
          </div>

          {/* Right - Stock Price Display with Animation */}
          <div 
            ref={priceRef}
            className={`flex flex-col items-end gap-2 transition-all duration-1000 ${
              priceInView 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-10 scale-95'
            }`}
          >
            {/* Exchange Selector and Refresh */}
            <div className={`flex items-center gap-3 transition-all duration-700 ${
              priceInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-5'
            }`}
            style={{ transitionDelay: priceInView ? '200ms' : '0ms' }}>
              <select
                value={selectedExchange}
                onChange={(e) => setSelectedExchange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="NSE">NSE</option>
                <option value="BSE">BSE</option>
              </select>
              <button
                onClick={fetchStockPrice}
                disabled={isLoading}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
                title="Refresh price"
              >
                <RefreshCw className={`w-5 h-5 text-gray-600 ${isLoading ? 'animate-spin' : ''}`} />
              </button>
            </div>

            {/* Last Updated */}
            <p className={`text-xs text-gray-500 transition-all duration-700 ${
              priceInView 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-5'
            }`}
            style={{ transitionDelay: priceInView ? '300ms' : '0ms' }}>
              {stockData.lastUpdated}
            </p>

            {/* Price Display */}
            <div className={`flex items-baseline gap-2 transition-all duration-700 ${
              priceInView 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-5 scale-90'
            }`}
            style={{ transitionDelay: priceInView ? '400ms' : '0ms' }}>
              <span className="text-5xl font-bold text-gray-900">₹{stockData.price}</span>
              <div className="flex flex-col items-start">
                <span className="text-green-600 text-sm font-semibold">{stockData.change}</span>
                <span className="text-green-600 text-xs">({stockData.changePercent})</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs with Animation */}
        <div 
          ref={tabsRef}
          className="border-b border-gray-200"
        >
          <div className="flex gap-8">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 pb-4 transition-all duration-700 relative ${
                  activeTab === tab.id
                    ? 'text-orange-500 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                } ${
                  tabsInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-5'
                }`}
                style={{ transitionDelay: tabsInView ? `${index * 100}ms` : '0ms' }}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content with Animation */}
        <div 
          ref={contentRef}
          className="mt-8"
        >
          {activeTab === 'share-monitor' && (
            <div className={`bg-gray-50 rounded-xl p-8 transition-all duration-1000 ${
              contentInView 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-10 scale-95'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 transition-all duration-700 ${
                contentInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-5'
              }`}
              style={{ transitionDelay: contentInView ? '200ms' : '0ms' }}>
                Share Monitor
              </h3>
              <p className={`text-gray-600 mb-6 transition-all duration-700 ${
                contentInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: contentInView ? '300ms' : '0ms' }}>
                Track real-time stock price movements and historical performance of Shyam Metalics shares.
              </p>
              
              {/* Stock Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: 'Open', value: '₹843.50', color: '' },
                  { label: 'High', value: '₹862.00', color: 'text-green-600' },
                  { label: 'Low', value: '₹840.25', color: 'text-red-600' },
                  { label: 'Volume', value: '2.5M', color: '' }
                ].map((item, index) => (
                  <div 
                    key={item.label}
                    className={`bg-white rounded-lg p-4 transition-all duration-700 ${
                      contentInView 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-10 scale-90'
                    }`}
                    style={{ transitionDelay: contentInView ? `${400 + (index * 100)}ms` : '0ms' }}
                  >
                    <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                    <p className={`text-xl font-bold ${item.color}`}>{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Placeholder for Chart */}
              <div className={`mt-6 bg-white rounded-lg p-6 h-64 flex items-center justify-center border-2 border-dashed border-gray-300 transition-all duration-1000 ${
                contentInView 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ transitionDelay: contentInView ? '800ms' : '0ms' }}>
                <p className="text-gray-400">Stock Price Chart Placeholder</p>
              </div>
            </div>
          )}

          {activeTab === 'financial-calendar' && (
            <div className={`bg-gray-50 rounded-xl p-8 transition-all duration-1000 ${
              contentInView 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-10 scale-95'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 transition-all duration-700 ${
                contentInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-5'
              }`}
              style={{ transitionDelay: contentInView ? '200ms' : '0ms' }}>
                Financial Calendar
              </h3>
              <p className={`text-gray-600 mb-6 transition-all duration-700 ${
                contentInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: contentInView ? '300ms' : '0ms' }}>
                View upcoming financial events, earnings announcements, and important dates.
              </p>
              <div className={`bg-white rounded-lg p-6 border-2 border-dashed border-gray-300 transition-all duration-1000 ${
                contentInView 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: contentInView ? '400ms' : '0ms' }}>
                <p className="text-gray-400 text-center">Financial Calendar Content</p>
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div className={`bg-gray-50 rounded-xl p-8 transition-all duration-1000 ${
              contentInView 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-10 scale-95'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 transition-all duration-700 ${
                contentInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-5'
              }`}
              style={{ transitionDelay: contentInView ? '200ms' : '0ms' }}>
                Financial Results
              </h3>
              <p className={`text-gray-600 mb-6 transition-all duration-700 ${
                contentInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: contentInView ? '300ms' : '0ms' }}>
                Access quarterly and annual financial results, reports, and performance metrics.
              </p>
              <div className={`bg-white rounded-lg p-6 border-2 border-dashed border-gray-300 transition-all duration-1000 ${
                contentInView 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: contentInView ? '400ms' : '0ms' }}>
                <p className="text-gray-400 text-center">Financial Results Content</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}