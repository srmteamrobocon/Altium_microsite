import React from "react";
import Img from "../assets/Roel.jpg";

const About = () => {
    return (
        <section className="bg-gradient-to-b from-custom_dark to-grey-950 text-white py-16" id="about">
            <div className="container mx-auto text-center text-black dark:text-white">
                <h2 className="text-3xl font-semibold mb-8">About the Altium PCB Workshop</h2>
                <p className="text-lg mb-12">
                    Welcome to the Altium PCB Workshop, where we ignite innovation through precision in the world of Printed Circuit Boards (PCBs). Our workshop is designed to empower you with the skills to master PCB design using Altium Designer, a cutting-edge electronic design automation software.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="md:text-left">
                        <h3 className="text-xl font-semibold mb-4">Why Altium Designer?</h3>
                        <p className=" dark:text-gray-300 text-black">
                            Altium Designer is renowned for its user-friendly interface, powerful features, and unmatched flexibility. Whether you're a seasoned PCB designer or new to electronics, Altium Designer enables you to turn your creative ideas into functional, manufacturable PCBs.
                        </p>
                    </div>
                    <div className="md:text-left ">
                        <h3 className="text-xl font-semibold mb-4">What You Will Learn</h3>
                        <ul className="list-none dark:text-gray-300 text-black">
                            <li>Introduction to PCB Design</li>
                            <li>Altium Designer Basics</li>
                            <li>Schematic Design</li>
                            <li>PCB Layout</li>
                            <li>Design Rules and Constraints</li>
                            <li>Library Management</li>
                            <li>3D Modeling</li>
                            <li>Prototyping and Manufacturing</li>
                        </ul>
                    </div>
                </div>
                <p className="text-lg mt-12">
                    Are you ready to unlock the potential of Altium Designer and PCB design? Join us for an engaging and informative workshop that equips you with the tools and knowledge to excel in electronic design.
                </p>
                <p className="text-lg mt-6">
                    Space is limited, so reserve your spot today and take the first step towards becoming a proficient PCB designer with Altium Designer.
                </p>
                {/* Speaker Section */}
                <h2 className="text-3xl font-semibold mb-4 p-4">Meet Our Speaker</h2>

            </div>
            <div className="flex justify-center items-center mt-2">
                <div className="relative group duration-500 cursor-pointer group overflow-hidden text-gray-50 w-56 rounded-2xl hover:duration-700">
                    <img
                        src={Img} // Replace with the URL of your image
                        alt="Speaker Image"
                        className="w-56 h-72 object-cover object-center"
                    />
                    <div className="absolute dark:bg-gray-50 bg-gray-950 -bottom-[105px] w-56 p-3 flex flex-col group-hover:-bottom-0 group-hover:duration-600 duration-500">
                        <span className="text-lime-400 font-bold text-2xl">Roel Pais</span>
                        {/* <span className="dark:text-gray-800 text-white font-bold text-3xl">Cheat Sheet</span> */}
                        <p className="dark:text-neutral-800 text-white">
                            Diligent engineering student, innovation enthusiast, and collaborative leader.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
