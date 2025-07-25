import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Logo and Company Info */}
          <div className="md:col-span-1">
            <Link 
              to="/" 
              onClick={handleLinkClick}
              className="flex items-center space-x-1 mb-6"
            >
              <div className="w-12 h-18 flex items-center justify-center p-1" style={{ position: 'relative', zIndex: 10 }}>
                <img 
                  src="/public/logo.png"
                  alt="LSEA Logo"
                  className="w-12 h-18 object-contain"
                  style={{ 
                    filter: 'none',
                    opacity: 1,
                    position: 'relative',
                    zIndex: 11,
                    backgroundColor: 'transparent',
                    backgroundBlendMode: 'normal'
                  }}
                />
              </div>
              <span className="text-3xl font-medium font-montserrat">LSEA Corporation</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading consulting firm with decades of experience in providing civil engineering, consulting, and inspection services to both public and private sectors. Committed to excellence and innovation 
              in every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Our Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4 font-montserrat">Our Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/about" 
                    onClick={handleLinkClick}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    onClick={handleLinkClick}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/portfolio" 
                    onClick={handleLinkClick}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/offices" 
                    onClick={handleLinkClick}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Offices
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/careers" 
                    onClick={handleLinkClick}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    onClick={handleLinkClick}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 font-montserrat">Contact Information</h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <p className="font-medium text-white text-sm">Main Office</p>
                  <p className="text-sm">150 River Road</p>
                  <p className="text-sm">Suite E2</p>
                  <p className="text-sm">New Jersey, NJ 07045</p>
                </div>
                <div>
                  <p className="font-medium text-white text-sm">Phone</p>
                  <p className="text-sm">(973) 588-3122</p>
                </div>
                <div>
                  <p className="font-medium text-white text-sm">Email</p>
                  <p className="text-sm">info@lseacorp.com</p>
                </div>
                <div>
                  <p className="font-medium text-white text-sm">Business Hours</p>
                  <p className="text-sm">Mon-Fri: 9:00 AM - 5:00 PM</p>
                  <p className="text-sm">Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 LSEA Corporation. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                to="/terms-of-use" 
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Use
              </Link>
              <Link 
                to="/privacy-policy" 
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/sitemap" 
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Site Map
              </Link>
              <Link 
                to="/employee-access" 
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Employee Access
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
