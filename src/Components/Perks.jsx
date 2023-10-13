import React from 'react';
import './Perks.css';

const Perks = () => {

    return (
        <div className='center-container mt-4'>
            <div className="card w-[clamp(260px,80%,300px)]">

                <div className="content">
                    <div className="back">
                        <div className="back-content bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950">
                            {/* <div className="bg-orange-500 w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all"></div> */}
                            <strong className='text-2xl font-Orbitron'>Perks</strong>
                            <p className='text-sm'>Hover Me</p>
                        </div>
                    </div>
                    <div className="front">
                        <div className="img">
                            <div className="circle"></div>
                            <div className="circle" id="right"></div>
                            <div className="circle" id="bottom"></div>
                        </div>
                        <div className="front-content font-bold">
                            <small className="badge">Perks</small>
                            <div className="description">
                                <div className="title">
                                    <ul>
                                        <li>Interactive Sessions</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="description">
                                <div className="title">
                                    <ul>
                                        <li>Altium License</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="description">
                                <div className="title">
                                    <ul>
                                        <li>ODs and Refreshments</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="description">
                                <div className="title">
                                    <ul>
                                        <li>Competition</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="description">
                                <div className="title">
                                    <ul>
                                        <li>Certification</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perks;
