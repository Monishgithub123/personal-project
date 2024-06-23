import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="w-full p-8 pb-5">
        <div className="flex justify-center mb-8 space-x-4">
          <a href="#" className="transition duration-500 hover:scale-110">
            <i className="fab fa-facebook text-4xl text-blue-600 hover:text-blue-800"></i>
          </a>
          <a href="#" className="transition duration-500 hover:scale-110">
            <i className="fab fa-instagram text-4xl text-pink-500 hover:text-pink-700"></i>
          </a>
          <a href="#" className="transition duration-500 hover:scale-110">
            <i className="fab fa-twitter text-4xl text-blue-400 hover:text-blue-600"></i>
          </a>
          <a href="#" className="transition duration-500 hover:scale-110">
            <i className="fab fa-google-plus text-4xl text-red-600 hover:text-red-800"></i>
          </a>
          <a href="#" className="transition duration-500 hover:scale-110">
            <i className="fab fa-youtube text-4xl text-red-500 hover:text-red-700"></i>
          </a>
        </div>
        <div className="mb-8">
          <ul className="flex justify-center flex-wrap space-x-8 space-y-4 md:space-y-0">
            <li>
              <a href="#" className="text-white text-2xl opacity-70 transition-opacity duration-500 hover:opacity-100">Home</a>
            </li>
            <li>
              <a href="#" className="text-white text-2xl opacity-70 transition-opacity duration-500 hover:opacity-100">About</a>
            </li>
            <li>
              <a href="#" className="text-white text-2xl opacity-70 transition-opacity duration-500 hover:opacity-100">Experience</a>
            </li>
            <li>
              <a href="#" className="text-white text-2xl opacity-70 transition-opacity duration-500 hover:opacity-100">Project</a>
            </li>
            <li>
              <a href="#" className="text-white text-2xl opacity-70 transition-opacity duration-500 hover:opacity-100">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-black p-5 text-center">
        <p className="text-white">
          sudhanshu01mishra@gmail.com; Designed by <span className="uppercase tracking-wide font-medium opacity-70">Sudhanshu</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
