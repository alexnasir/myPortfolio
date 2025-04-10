import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

function Header({ navItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 z-10 p-4">
      <nav>
        <div className="flex justify-between items-center">
          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FiMenu size={24} />
          </button>
          <ul
            className={`md:flex md:justify-end md:items-center w-full transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? 'flex flex-col absolute top-full left-0 w-full bg-gray-800'
                : 'hidden md:flex'
            }`}
          >
            {navItems.map((item) => (
              <li key={item.name} className="md:mx-4">
                <button
                  onClick={() => {
                    item.action();
                    setIsMenuOpen(false);
                  }}
                  className="block md:inline py-2 text-white hover:text-blue-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;