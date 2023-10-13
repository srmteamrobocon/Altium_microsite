import React from 'react';
import './Perks.css';

const Perks = () => {
    return (
        <div className="center-container flex items-center justify-center">
            <div className="myCard w-[clamp(260px,80%,300px)] m-4 rounded-lg">
                <div className="innerCard">
                    <div className="frontSide bg-gradient-to-tl from-indigo-950 to-gray-950 p-2">
                        <p className="title font-Orbitron">Perks</p>
                        <small>Hover Me</small>
                    </div>

                    <div className="backSide font-Poppins p-2">
                        <p>Interactive Sessions</p>
                        <p>Altium License</p>
                        <p>ODs & Refreshments</p>
                        <p>Competition</p>
                        <p>Certification</p>
                    </div>
                    <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
                    <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
                </div>
            </div>
        </div>
    );
};

export default Perks;
