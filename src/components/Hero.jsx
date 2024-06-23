import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = useMemo(
    () => ['Full Stack Developer', 'Frontend Developer', 'Backend Developer'],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [roles]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-l from-gray-100 via-gray-200 to-gray-300 py-12 px-8 sm:px-6 lg:py-24 lg:px-8 flex flex-col md:flex-row items-center justify-center text-gray-900"
      style={{ minHeight: 'calc(100vh - 6rem)' }}
    >
      <TextContent role={roles[roleIndex]} />
      <PhotoSection />
    </motion.div>
  );
};

const TextContent = ({ role }) => {
  const [typedRole, setTypedRole] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const maxLength = role.length;

    const timeout = setTimeout(() => {
      const typeRole = () => {
        if (currentIndex <= maxLength) {
          setTypedRole(role.slice(0, currentIndex).padEnd(maxLength, ' '));
          currentIndex++;
          setTimeout(typeRole, 60);
        }
      };
      typeRole();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [role]);

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="mb-6 md:mb-0 md:w-1/2 md:pr-10 text-center md:text-left"
    >
      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight font-serif"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Monish Yedlewar
      </h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-2xl text-gray-900 mb-20"
      >
        {typedRole}
      </motion.p>
      <p className="text-lg text-gray-800 leading-relaxed mb-6">
        Mastering the art of both front-end finesse and back-end brilliance, I thrive on crafting seamless digital experiences. With a passion for innovation and a knack for problem-solving, I transform ideas into dynamic web solutions. Let's code a future where functionality meets creativity, one stack at a time.
      </p>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="flex justify-center md:justify-start space-x-4"
      >
        <ActionButton href="#contact">Contact Me</ActionButton>
        <ActionButton href="/path/to/resume.pdf">Download Resume</ActionButton>
      </motion.div>
    </motion.div>
  );
};

const ActionButton = ({ href, children }) => (
  <a
    href={href}
    className="bg-gray-800 text-white py-3 px-6 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
  >
    {children}
  </a>
);

const PhotoSection = () => (
  <motion.div
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="md:w-1/3 flex justify-center mt-6 md:mt-0"
  >
    <div className="bg-white rounded-t-lg rounded-b-lg shadow-2xl overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105">
      <img
        src="/pexels-joao-cabral-1723948-3299386.jpg"
        alt="Monish Yedlewar"
        className="w-full h-auto object-cover object-center"
      />
    </div>
  </motion.div>
);

export default Hero;
