import React from "react";
import Img from "../assets/Roel.jpg";

const About = () => {
    return (
        <section className=" text-white py-16" id="about">
            <div className="container mx-auto text-center text-white">
                <h2 className="text-3xl font-semibold mb-8">About the Altium PCB Workshop</h2>
                <p className="text-lg mb-12">
                    Welcome to the Altium PCB Workshop, where we ignite innovation through precision in the world of Printed Circuit Boards (PCBs). Our workshop is designed to empower you with the skills to master PCB design using Altium Designer, a cutting-edge electronic design automation software.
                </p>
                <p className="text-xl font-bold mb-10 animate-pulse text-yellow-400 underline">
                    Date : October 17th-18th 2023
                    <br />
                    Time : 9:00 am
                    <br />
                    Venue : <span><a href="https://maps.app.goo.gl/ktk7RmfYyCDRR462A" target="_blank" >Digital Image Processing Lab,<br /> Hi-Tech Building, Main Campus</a></span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pl-2 pr-2">
                    <div className="md:text-left">
                        <h3 className="text-xl font-semibold mb-4">Why Altium Designer?</h3>
                        <p className=" text-gray-300">
                            As you delve into Altium Designer, you'll discover its prowess in catering to engineers globally. Its extensive feature set covers schematic capture, PCB layout, simulation, and manufacturing capabilities, while its potent design engine effortlessly handles complex projects thus enabling you to turn your creative ideas into functional, manufacturable PCBs.
                        </p>
                    </div>
                    <div className="md:text-left ">
                        <h3 className="text-xl font-semibold mb-4">What You Will Learn</h3>
                        <ul className="list-disc text-gray-300">
                            <li>Mastering Altium Designer</li>
                            <li>Schematic Design</li>
                            <li>PCB Layout Optimization</li>
                            <li>Design Rules Checking (DRC)</li>
                            <li>Bill of Materials (BOM) Generation</li>
                            <li>Gerber File Creation</li>
                            <li>Customization</li>
                        </ul>
                    </div>
                </div>
                <p className="text-lg mt-12">
                    Prepare to unlock the full potential of Altium Designer and elevate your PCB design expertise. Join us in our workshop, meticulously crafted to furnish you with the requisite tools and comprehensive knowledge essential for success in electronic design.
                </p>
                <p className="text-lg mt-6">
                    With limited availability, it is imperative to secure your place today. Seize this opportunity to embark on your journey towards proficiency in PCB design, powered by Altium Designer, a distinguished industry-standard software. Your path to becoming a proficient PCB designer begins here.
                </p>
                {/* Speaker Section */}
                <h2 className="text-3xl font-Orbitron font-semibold mb-4 p-4">Meet Our Speaker</h2>

            </div>
            <div className="flex justify-center items-center mt-2">
                <div className="relative group duration-500 cursor-pointer group overflow-hidden text-black w-56 rounded-2xl hover:duration-700 shadow-lg">
                    <img
                        src={Img} // Replace with the URL of your image
                        alt="Speaker Image"
                        className="w-56 h-72 object-cover object-center"
                    />
                    <div className="absolute bg-gray-50 -bottom-[105px] w-56 p-3 flex flex-col group-hover:-bottom-0 group-hover:duration-600 duration-500">
                        <span className="text-lime-400 font-bold text-2xl">Roel Pais</span>
                        {/* <span className="dark:text-gray-800 text-white font-bold text-3xl">Cheat Sheet</span> */}
                        <p className="text-black">
                            Dedicated engineering scholar, innovative advocate, and collaborative leader.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
