import React from "react";
import Logo from "../assets/Robocon_logo.gif";
import SRM from "../assets/SRM_logo.png";
import Linkedin from "../assets/linkedin.svg";
import Insta from "../assets/instagram.svg";

const Footer = () => {
    return (
        <footer className="text-black dark:text-white">
            <div className="container">
                <div className="footer-middle p-4 overflow-hidden text-center md:text-left w-screen">
                    {/* Center the text on desktop screens */}
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="p-2 md:ml-10">
                            <img
                                src={Logo}
                                alt="ROBOCON LOGO"
                                className="w-40 mx-auto md:mx-0"
                            />
                        </div>
                        <div className="flex flex-col justify-center text-center">
                            <p className="my-0 text-2xl font-bold">SRM TEAM ROBOCON</p>
                            <h3 className="text-xl">Robotics Reimagined</h3>
                            <div className="flex justify-center text-center p-2 dark:invert">
                                <a
                                    href="https://in.linkedin.com/company/srmteamrobocon/"
                                    target="_blank"
                                    className="p-1 text-center"
                                >
                                    <img className="h-8 w-8" src={Linkedin} alt="Linkedin" />
                                </a>
                                <a
                                    href="https://www.instagram.com/srmteamrobocon/"
                                    target="_blank"
                                    className="p-1"
                                >
                                    <img className="h-8 w-8" src={Insta} alt="Linkedin" />
                                </a>
                            </div>
                            <p className="">
                                604, 5th Floor, Basic Engineering Lab,
                                <br />
                                SRMIST, Kattankulathur, Chennai (603203)
                            </p>
                        </div>
                        <div className="p-2 md:mr-10">
                            <img
                                src={SRM}
                                alt="SRM LOGO"
                                className="w-40 mx-auto md:mx-0"
                            />
                        </div>
                    </div>
                    <div className="row p-4 pb-7">
                        <div className="">
                            <hr />
                            <p className="flex justify-center text-center mt-2">Innovation in Every Byte,<br /> © 2023 SRM Team Robocon</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
