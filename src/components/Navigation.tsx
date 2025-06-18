import React from 'react';
import { BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full bg-[#181818] backdrop-blur-md z-40 border-b border-[#00A64F] shadow-lg">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between min-h-[48px]">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center border-2 border-[#00A64F] bg-[#232323] shadow-md overflow-hidden">
              <BookOpen className="w-4 h-4 text-[#00A64F]" />
              <img src="https://smartpreps.in/wp-content/uploads/2025/06/cropped-78-scaled-2-112x56.png" alt="logo" className="h-5 ml-1" />
            </div>
            <span className="text-lg font-bold text-white tracking-wide drop-shadow-sm">SmartPreps</span>
          </Link>
          <div className="flex items-center flex-1">
            <div className="hidden md:flex items-center space-x-6 ml-auto">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`transition-colors px-3 py-1 rounded-full text-base font-medium duration-150 focus:outline-none focus:ring-2 focus:ring-[#00A64F] focus:ring-offset-2 focus:ring-offset-[#181818] ${
                    isActive(item.path)
                      ? 'bg-[#00A64F] text-white shadow'
                      : 'text-[#E7FFF2] hover:bg-[#00A64F] hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <span className="hidden md:inline-block ml-auto px-3 py-1 rounded-full bg-[#232323] text-[#00A64F] font-semibold text-sm border border-[#00A64F] shadow-sm whitespace-nowrap flex items-center gap-1" style={{marginLeft: 'auto'}}>
              <span role="img" aria-label="phone">📞</span> +91 9287987525
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
