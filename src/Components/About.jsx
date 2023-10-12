import React from "react";
import Img from "../assets/Roel.jpg";

const About = () => {
    return (
        <section className=" text-white py-16" id="about">
            <div className="container mx-auto text-center text-white">
                <h2 className="text-3xl font-Orbitron font-semibold mb-8">About the Altium PCB Workshop</h2>
                <p className="text-lg mb-5 font-Poppins px-2">
                    Welcome to the Altium PCB Workshop, where we ignite innovation through precision in the world of Printed Circuit Boards (PCBs). Our workshop is designed to empower you with the skills to master PCB design using Altium Designer, a cutting-edge electronic design automation software.
                </p>
                {/* <div className="flex justify-center items-center">
                    <p className="text-xl font-bold mb-10 animate-pulse text-yellow-400 outline-double w-96">
                        Date : October 17th-18th 2023
                        <br />
                        Time : 9:00 am
                        <br />
                        Venue : <span><a href="https://maps.app.goo.gl/ktk7RmfYyCDRR462A" target="_blank">Digital Image Processing Lab,<br /> Hi-Tech Building, Main Campus</a></span>
                    </p>
                </div> */}

                <div className="flex justify-center items-center mb-5">
                    <div className="card text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative">
                        <div className="px-8 py-10">
                            <div className="bg-orange-500 w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all"></div>
                            <div className="uppercase font-bold text-xl">
                                9:00 am
                            </div>
                            <div className="text-gray-300 uppercase tracking-widest">
                                October 17th-18th 2023
                            </div>
                            <div className="text-gray-400 mt-8">
                                <a href="https://maps.app.goo.gl/ktk7RmfYyCDRR462A" target="_blank"><p className="font-bold">Digital Image Processing Lab,</p>
                                    <p>Hi-Tech Building, Main Campus</p></a>
                            </div>
                        </div>
                        <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
                        <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pl-2 pr-2">
                    <div className="md:text-left">
                        <h3 className="text-xl font-Orbitron font-semibold mb-4 underline">Why Altium Designer?</h3>
                        <p className=" text-gray-300 font-Poppins">
                            As you delve into Altium Designer, you'll discover its prowess in catering to engineers globally. Its extensive feature set covers schematic capture, PCB layout, simulation, and manufacturing capabilities, while its potent design engine effortlessly handles complex projects thus enabling you to turn your creative ideas into functional, manufacturable PCBs.
                        </p>
                    </div>
                    <div className="md:text-left ">
                        <h3 className="text-xl font-Orbitron font-semibold mb-4 underline">What You Will Learn</h3>
                        <ul className="list-disc text-gray-300 font-Poppins">
                            <li>Mastering Altium Designer</li>
                            <li>Schematic Design</li>
                            <li>PCB Layout Optimization</li>
                            <li>Design Rules Checking (DRC)</li>
                            <li>Gerber File Creation</li>
                            <li>Customization</li>
                        </ul>
                    </div>
                </div>
                <p className="text-lg mt-12 px-2 font-Poppins">
                    Prepare to unlock the full potential of Altium Designer and elevate your PCB design expertise. Join us in our workshop, meticulously crafted to furnish you with the requisite tools and comprehensive knowledge essential for success in electronic design.
                </p>
                <p className="text-lg mt-6 px-2 font-Poppins">
                    With limited availability, it is imperative to secure your place today. Seize this opportunity to embark on your journey towards proficiency in PCB design, powered by Altium Designer, a distinguished industry-standard software for <span className="text-xl font-bold">Rs 549</span>  only. Your path to becoming a proficient PCB designer begins here. <br /><span className=" font-Poppins font-bold text-yellow-200">"The enrolled participants will receive communication regarding the subsequent steps at a later time."</span>
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
                        <span className="text-green-700 font-bold text-2xl">Roel Pais</span>
                        {/* <span className="dark:text-gray-800 text-white font-bold text-3xl">Cheat Sheet</span> */}
                        <p className="text-black font-Poppins">
                            Dedicated engineering scholar, innovative advocate, and collaborative leader.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
