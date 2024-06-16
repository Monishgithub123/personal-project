import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-navy-blue text-white p-4 lg:p-6 shadow-lg">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full lg:w-auto mb-4 lg:mb-0">
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none transform transition-transform duration-300"
            >
              <svg
                className={`h-8 w-8 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          {/* Logo (Replace with your actual logo image) */}
          <img
            src="./1145.jpg"
            alt="Logo"
            className="h-14 w-14 lg:h-16 lg:w-16 rounded-full border-2 border-white shadow-sm lg:ml-0 ml-auto"
          />
        </div>
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:space-x-6 text-lg w-full lg:w-auto`}
        >
          <a
            href="#home"
            className="nav-link block py-2 px-4 lg:px-6 text-2xl font-semibold hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="nav-link block py-2 px-4 lg:px-6 text-2xl font-semibold hover:text-gray-300 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#resume"
            className="nav-link block py-2 px-4 lg:px-6 text-2xl font-semibold hover:text-gray-300 transition-colors duration-300"
          >
            Resume
          </a>
          <a
            href="#projects"
            className="nav-link block py-2 px-4 lg:px-6 text-2xl font-semibold hover:text-gray-300 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="nav-link block py-2 px-4 lg:px-6 text-2xl font-semibold hover:text-gray-300 transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
