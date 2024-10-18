import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/image.svg" alt="Logo" className="h-6" />
        </div>

        {/* Contact Link */}
        <nav>
          <ul className="flex space-x-6 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-900">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
