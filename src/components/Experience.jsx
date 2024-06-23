import React from "react";
import { motion } from "framer-motion";
import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    imageSrc: "ospl logo.jpg", // Updated image source
    startDate: "June 2018",
    endDate: "Present",
    location: "New York, NY",
    experiences: [
      "Developed scalable web applications using React, Node.js, and MongoDB.",
      "Led a team of developers to deliver high-quality software solutions.",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer",
    imageSrc: "frontend.jpg",
    startDate: "January 2016",
    endDate: "May 2018",
    location: "San Francisco, CA",
    experiences: [
      "Built responsive user interfaces using HTML, CSS, and JavaScript frameworks.",
      "Collaborated with UX designers to improve user interaction and experience.",
    ],
  },
  
 
];
const Experience = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="container mx-auto py-12" id="experience">
        <h1 className="text-blue-900 text-4xl mb-3 font-bold text-center mb-8 justify-center">EXPERIENCE</h1>
        {experiences.map((data) => (
          <motion.div
            key={data.id}
            className="flex flex-col md:flex-row items-center justify-center my-8 mx-4 bg-white shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
              <img
                src={`/ospl logo.jpg`} // Ensure the path matches the file name and extension in your /public directory
                alt="OSPL Logo"
                className="w-24 h-24 object-contain"
              />
            </div>
            <div className="md:w-3/4 px-4 py-6">
              <h2 className="text-xl font-bold text-center md:text-left mb-2">
                {data.role}
              </h2>
              <div className="flex items-center justify-center md:justify-start mb-2">
                <FaRegCalendarAlt className="text-gray-600 mr-2" />
                <span className="text-gray-600">
                  {data.startDate} - {data.endDate}
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start mb-4">
                <FaMapMarkerAlt className="text-gray-600 mr-2" />
                <span className="text-gray-600">{data.location}</span>
              </div>
              <div className="text-center md:text-left">
                {data.experiences.map((exp, index) => (
                  <p key={index} className="text-gray-700 mb-2">
                    {exp}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
