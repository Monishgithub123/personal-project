import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-300 py-12 px-4 sm:px-6 lg:py-24 lg:px-8 flex flex-col md:flex-row items-center justify-center">
      {/* Left side (Text Content) */}
      <div className="mb-10 md:mb-0 md:w-1/2 md:pr-10 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-2 leading-tight font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
         Monish Yedlewar🤞
        </h1>
        <div className="text-2xl text-gray-800 mb-4">FULL STACK DEVELOPER</div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Mastering the art of both front-end finesse and back-end brilliance, I thrive on crafting seamless digital experiences. With a passion for innovation and a knack for problem-solving, I transform ideas into dynamic web solutions. Let's code a future where functionality meets creativity, one stack at a time.
        </p>
        {/* Buttons */}
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="#contact"
            className="bg-white text-gray-900 py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 hover:text-gray-800 transition duration-300 ease-in-out"
          >
            Contact Me
          </a>
          <a
            href="/path/to/resume.pdf"
            className="bg-gray-300 text-gray-900 py-3 px-6 rounded-lg shadow-md hover:bg-gray-400 hover:text-gray-800 transition duration-300 ease-in-out"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right side (Photo) */}
      <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
        <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
          <img
            src="/pexels-joao-cabral-1723948-3299386.jpg"
            alt="Monish Yedlewar"
            className="w-full h-auto object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
