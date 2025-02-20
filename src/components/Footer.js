import React from 'react';
import logo from '../assets/logo.png';
import { FaInstagram } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#071F1D] via-[#146963] to-[#071F1D] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-white p-4 rounded-full shadow-md flex justify-center items-center w-36 h-36 ml-20">
  <img 
    src={logo} 
    alt="Design Crafters Logo" 
    className="h-24 w-auto mx-auto transform transition-transform hover:scale-105"
  />
</div>
          <div className="text-center">
            <h3 className="text-[45px] font-bold mt-2">CT Group of Institutions</h3>
            <p className="text-[20px] text-gray-300 italic">Learn, Innovate, Succeed – The CT Way!</p>
          </div>
          <div className="flex flex-col items-center ml-12">
            <h3 className="text-3xl font-semibold mb-4 mt-6">Contact Us</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="relative hover:bg-teal-400 rounded-full p-3 transition duration-400">
                <FaInstagram size={28} className="text-white" />
              </a>
              <a href="tel:+1234567890" className="relative hover:bg-teal-400 rounded-full p-2 transition duration-300">
                <BsTelephone size={28} className="text-white" />
              </a>
              <a href="mailto:contact@example.com" className="relative hover:bg-teal-400 rounded-full p-2 transition duration-300">
                <MdEmail size={28} className="text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-500 mt-8 pt-6 text-center text-sm text-white-300 mb-6">
          <p>&copy; {new Date().getFullYear()} CT Group of Institutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 