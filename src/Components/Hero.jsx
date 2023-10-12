import React from 'react';
import "animate.css";
import backgroundImageDesktop from '../assets/altium_desktop.jpg'; // Desktop background image
import backgroundImageMobile from '../assets/Altium_mobile.jpg';   // Mobile background image

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Button_pair from './Button_pair'

const Hero = () => {
    const isMobile = window.innerWidth < 769; // Check if the screen width is below 769px

    return (
        <div
            className="bg-hero-image bg-cover bg-center h-screen relative"
            style={{
                backgroundImage: `url(${isMobile ? backgroundImageMobile : backgroundImageDesktop})`
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                    <h1 className="text-4xl font-semibold mb-4">Altium Workshop</h1>
                    <p className="text-md">Design PCBs with Altium designer</p>
                </div>
            </div>
            <div className="absolute bottom-0 mb-16 text-white text-center w-full">
                <p className="animate__animated animate__bounce animate__infinite animate__delay-1s animate__slow text-md sm:text-xl">
                    Scroll down
                </p>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className="animate__animated animate__fadeInDown animate__infinite animate__slow animate__delay-1s text-3xl"
                />
            </div>
        </div >
    );
};

export default Hero;
