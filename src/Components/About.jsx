import React from "react";

const About = () => {
    return (
        <section className="bg-blue-900 text-white py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-8">About the Altium PCB Workshop</h2>
                <p className="text-lg mb-12">
                    Welcome to the Altium PCB Workshop, where we ignite innovation through precision in the world of Printed Circuit Boards (PCBs). Our workshop is designed to empower you with the skills to master PCB design using Altium Designer, a cutting-edge electronic design automation software.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="md:text-left">
                        <h3 className="text-xl font-semibold mb-4">Why Altium Designer?</h3>
                        <p className="text-gray-300">
                            Altium Designer is renowned for its user-friendly interface, powerful features, and unmatched flexibility. Whether you're a seasoned PCB designer or new to electronics, Altium Designer enables you to turn your creative ideas into functional, manufacturable PCBs.
                        </p>
                    </div>
                    <div className="md:text-left">
                        <h3 className="text-xl font-semibold mb-4">What You Will Learn</h3>
                        <ul className="list-none text-gray-300">
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
                <p className="text-lg mt-6">
                    For inquiries or registration, please contact us at <a href="tel:123-456-7890" className="underline">123-456-7890</a> or <a href="mailto:info@example.com" className="underline">info@example.com</a>.
                </p>
            </div>
        </section>
    );
};

export default About;
