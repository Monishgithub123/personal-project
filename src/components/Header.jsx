import React from 'react';

export default function Header() {
  return (
    <header className="bg-navy-blue text-white p-4 lg:p-6 shadow-lg">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center space-x-3 mb-4 lg:mb-0">
          {/* Logo (Replace with your actual logo image) */}
          <img
            src="./1145.jpg"
            alt="Logo"
            className="h-14 w-14 lg:h-16 lg:w-16 rounded-full border-2 border-white shadow-sm"
          />
        </div>
        <nav className="flex flex-wrap lg:flex-nowrap items-center text-lg">
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
