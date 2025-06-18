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
    <nav className="fixed top-0 w-full bg-[#004823] backdrop-blur-md z-40 border-b border-[#00A64F] shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-green rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
              <img src="https://smartpreps.in/wp-content/uploads/2025/06/cropped-78-scaled-2-112x56.png" alt="logo" />
            </div>
            <span className="text-xl font-bold text-white drop-shadow">SmartPreps</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors px-2 py-1 rounded-full text-lg ${
                  isActive(item.path)
                    ? 'bg-[#00A64F] text-white font-semibold shadow-md'
                    : 'text-[#E7FFF2] hover:bg-[#00A64F] hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
