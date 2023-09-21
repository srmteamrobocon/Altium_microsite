import React, { useState, useEffect } from 'react';
import Homeimg from '../assets/home_icon.svg';
import applyimg from '../assets/apply_icon.png';
import aboutimg from '../assets/about_icon.svg';
import contactimg from '../assets/contact_icon.svg';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";



const InstagramNavbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Set the threshold width for mobile view

  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update the state based on the screen width
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    // Render the mobile navigation bar
    return (
      <div className="relative">
        <nav className="fixed bottom-0 w-full bg-opacity-70 backdrop-blur-sm z-10">
          <div className="flex justify-between mx-4 p-2">
            <a href="#" className="p-1">
              <img src={Homeimg} alt="Home" className="w-6 h-6" />
            </a>
            <a href="#" className="p-1">
              <img src={aboutimg} alt="About" className="w-6 h-6" />
            </a>
            <a href="#" className="p-1">
              <img src={applyimg} alt="Apply" className="w-6 h-6" />
            </a>
            <a href="#" className="p-1">
              <img src={contactimg} alt="Apply" className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </div>
    );
  } else {
    // Render the desktop navigation bar
    return (
      <nav className="bg-blue-gray-900 bg-opacity-70 backdrop-blur-sm text-black dark:text-white py-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            SRM Team Robocon
          </a>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Apply
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};

export default InstagramNavbar;
