import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

// Project Component
const Project = ({ title, description, backgroundImage, githubLink, deployLink }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 group">
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-center text-white p-4">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
          </div>
        </div>
      </div>
      {/* Description slide-up */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div className="p-4">
          <p className="text-lg text-gray-700">{description}</p>
        </div>
      </div>
      {/* Links */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-100">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
            <i className="fab fa-github text-gray-900 text-2xl hover:text-gray-700 transition-colors duration-300"></i>
          </a>
        )}
        {deployLink && (
          <a href={deployLink} target="_blank" rel="noopener noreferrer" aria-label="Deployment Link">
            <i className="fas fa-external-link-alt text-gray-900 text-2xl hover:text-gray-700 transition-colors duration-300"></i>
          </a>
        )}
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  githubLink: PropTypes.string,
  deployLink: PropTypes.string,
};

// ProjectsSection Component
const ProjectsSection = () => {
  const projects = [
    {
      title: 'Music Player',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quasi, nemo quisquam doloribus vitae tempora odit quis et aperiam, impedit quos harum assumenda.',
      backgroundImage: 'blaz-photo-cZWZjymwI9o-unsplash.jpg',
      githubLink: 'https://github.com/yourusername/music-player',
      deployLink: 'https://yourdeploysite.com/music-player',
    },
    {
      title: 'LinkedIn Clone',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quasi, nemo quisquam doloribus vitae tempora odit quis et aperiam, impedit quos harum assumenda.',
      backgroundImage: 'inaki-del-olmo-NIJuEQw0RKg-unsplash.jpg',
      githubLink: 'https://github.com/yourusername/linkedin-clone',
      deployLink: 'https://yourdeploysite.com/linkedin-clone',
    },
    {
      title: 'NodeJS Authentication',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quasi, nemo quisquam doloribus vitae tempora odit quis et aperiam, impedit quos harum assumenda.',
      backgroundImage: 'jernej-graj-Z7k3qLCyCOg-unsplash.jpg',
      githubLink: 'https://github.com/yourusername/nodejs-auth',
      deployLink: 'https://yourdeploysite.com/nodejs-auth',
    },
    {
      title: 'NodeJS Authentication',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quasi, nemo quisquam doloribus vitae tempora odit quis et aperiam, impedit quos harum assumenda.',
      backgroundImage: '\IMG-20230401-WA00588.jpg',
      githubLink: 'https://github.com/yourusername/nodejs-auth',
      deployLink: 'https://yourdeploysite.com/nodejs-auth',
    },
    // Add more projects here
  ];

  const [visibleProjects, setVisibleProjects] = useState(3); // Initially show 3 projects

  const showMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3); // Show 3 more projects each time
  };

  return (
    <div id="services" className="py-10 bg-gray-200">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-black font-bold mb-10">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              backgroundImage={project.backgroundImage}
              githubLink={project.githubLink}
              deployLink={project.deployLink}
            />
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={showMoreProjects}
              className="bg-gray-300 text-gray-900 py-3 px-6 rounded-lg shadow-md hover:bg-gray-400 hover:text-gray-800 transition duration-300 ease-in-out"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
