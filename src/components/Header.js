import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 z-10 p-4">
      <nav>
        <div className="flex justify-between items-center">
          {/* Hamburger icon for mobile */}
          <button
            className="block md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FiMenu size={24} />
          </button>
          {/* Navigation links */}
          <ul
            className={`md:flex md:justify-end ${
              isMenuOpen
                ? 'flex flex-col absolute top-full left-0 w-full bg-gray-800'
                : 'hidden'
            }`}
          >
            <li className="md:mx-4">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `block md:inline py-2 text-white ${
                    isActive ? 'border-b-2 border-[#9ff0f0]' : ''
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="md:mx-4">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block md:inline py-2 text-white ${
                    isActive ? 'border-b-2 border-[#9ff0f0]' : ''
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li className="md:mx-4">
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `block md:inline py-2 text-white ${
                    isActive ? 'border-b-2 border-[#9ff0f0]' : ''
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </NavLink>
            </li>
            <li className="md:mx-4">
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  `block md:inline py-2 text-white ${
                    isActive ? 'border-b-2 border-[#9ff0f0]' : ''
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </NavLink>
            </li>
            <li className="md:mx-4">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block md:inline py-2 text-white ${
                    isActive ? 'border-b-2 border-[#9ff0f0]' : ''
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;