import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Articles', path: '/articles' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-2xl z-50 border-b border-[#41644A22] shadow-2xl glass-card transition-all duration-300">
      <a href="#main-content" className="sr-only focus:not-sr-only absolute left-2 top-2 bg-[#41644A] text-white px-4 py-2 rounded z-50">Skip to main content</a>
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between min-h-[56px]">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center">
              <img src="https://i.ibb.co/fG9zRcpn/IMG-8537.png" alt="Smart IAS Foundation Logo" className="h-12 w-auto rounded-full shadow border-2 border-[#41644A] bg-white" />
            </a>
            <div className="flex flex-col justify-center">
              <Link to="/" className="group">
                <span className="text-xl font-bold text-[#41644A] tracking-wide drop-shadow-sm transition-colors duration-300 group-hover:text-[#E9762B] font-serif">SmartPreps</span>
              </Link>
              <span className="text-xs text-gray-500 font-medium mt-0.5 ml-1">Initiative by Smart IAS Foundation</span>
            </div>
          </div>
          <div className="flex items-center flex-1">
            <div className="hidden md:flex items-center space-x-6 ml-auto">
              {navItems.map((item, idx) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative transition-all px-5 py-2 rounded-full text-lg font-semibold duration-200 focus:outline-none focus:ring-2 focus:ring-[#41644A] focus:ring-offset-2 focus:ring-offset-white overflow-hidden font-serif
                    ${isActive(item.path)
                      ? 'bg-[#41644A] text-white shadow scale-105'
                      : 'text-[#41644A] hover:bg-[#E9762B] hover:text-white hover:scale-105'}
                  `}
                  style={{ zIndex: 1 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive(item.path) && (
                    <span className="absolute left-0 top-0 w-full h-full rounded-full bg-[#41644A] opacity-10 animate-pulse z-0"></span>
                  )}
                </Link>
              ))}
            </div>
            <span className="hidden md:inline-block ml-auto px-4 py-2 rounded-full bg-white text-[#41644A] font-semibold text-base border border-[#41644A] shadow-sm whitespace-nowrap flex items-center gap-1 transition-all duration-300 hover:bg-[#41644A] hover:text-white hover:scale-105 font-serif" style={{marginLeft: 'auto'}}>
              <span role="img" aria-label="phone">📞</span> +91 9287987525
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
