import React from 'react';
import backgroundImageDesktop from '../assets/altium_desktop.jpg'; // Desktop background image
import backgroundImageMobile from '../assets/Altium_mobile.jpg';   // Mobile background image

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
                    <p className="text-lg">Learn Altium Designer for PCB Design</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
