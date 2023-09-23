import React from "react";
import Img from "../assets/Altium_mobile.jpg";

const Speaker = () => {
    return (
        <div className="flex justify-center items-center mt-4">
            <div className="relative group duration-500 cursor-pointer group overflow-hidden text-gray-50 w-56 rounded-2xl hover:duration-700">
                <img
                    src={Img} // Replace with the URL of your image
                    alt="Speaker Image"
                    className="w-56 h-72 object-cover object-center"
                />
                <div className="absolute dark:bg-gray-50 bg-gray-950 -bottom-[120px] w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                    <span className="text-lime-400 font-bold text-xl">Roel Pais</span>
                    <span className="dark:text-gray-800 text-white font-bold text-3xl">Cheat Sheet</span>
                    <p className="dark:text-neutral-800 text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Speaker;
