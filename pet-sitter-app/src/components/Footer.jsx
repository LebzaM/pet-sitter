import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 font-gaya">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 flex-col">
          <span className="ml-3 text-xl lg:mr-40">Barkey, Inc.</span>
          
        </div>
        
        <div className="sm:ml-auto sm:mt-0 mt-4 sm:flex-grow flex flex-col p">
          <span className="text-lg font-medium">Follow Us</span>
          <div className="flex justify-center sm:justify-start gap-2">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="sm:flex-grow sm:mt-0 mt-4 sm:text-left text-center flex flex-col gap-2 lg:ml-36">
          <span className="text-lg font-medium">Subscribe to Our Newsletter</span>
          <div className="flex justify-center sm:justify-start">
            <input type="text" placeholder="Enter your email" className="bg-white rounded-full border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 sm:w-auto w-full" />
            <button className="lg:ml-4 mt-2 sm:mt-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full">Subscribe</button>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 flex justify-center">© {new Date().getFullYear()} Barkley, Inc. All rights reserved</p>
    </footer>
  );
};

export default Footer;