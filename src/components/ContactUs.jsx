import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 md:flex">
        <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6 flex flex-col justify-center">
          <div className="mb-6 flex items-center hover:bg-gray-200 hover:shadow-md p-3 rounded-lg transition-all duration-300">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple-500 bg-white rounded-full p-3 shadow-md mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600">4671 Sugar Camp Road, Owatonna, Minnesota, 55060</p>
            </div>
          </div>
          <div className="mb-6 flex items-center hover:bg-gray-200 hover:shadow-md p-3 rounded-lg transition-all duration-300">
            <FontAwesomeIcon icon={faPhone} className="text-purple-500 bg-white rounded-full p-3 shadow-md mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+91-9630485801</p>
            </div>
          </div>
          <div className="mb-6 flex items-center hover:bg-gray-200 hover:shadow-md p-3 rounded-lg transition-all duration-300">
            <FontAwesomeIcon icon={faEnvelope} className="text-purple-500 bg-white rounded-full p-3 shadow-md mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">sudhanshu01mishra@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-inner">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Contact Us</h2>
          <p className="mt-4 text-gray-600 text-center">Feel free to reach out to us for any inquiries or feedback.</p>
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input 
                type="text" 
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-400" 
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input 
                type="email" 
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-400" 
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea 
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-400" 
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
