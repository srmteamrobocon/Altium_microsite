import React from "react";
import Img from "../assets/Roel.jpg";

const Speaker = () => {
    return (
        <div className="flex justify-center items-center mt-4">
            <div className="relative group duration-500 cursor-pointer group overflow-hidden text-gray-50 w-56 rounded-2xl hover:duration-700">
                <img
                    src={Img} // Replace with the URL of your image
                    alt="Speaker Image"
                    className="w-56 h-72 object-cover object-center"
                />
                <div className="absolute bg-gray-50  -bottom-[105px] w-56 p-3 flex flex-col group-hover:-bottom-0 group-hover:duration-600 duration-500">
                    <span className="text-lime-400 font-bold text-2xl">Roel Pais</span>
                    {/* <span className="dark:text-gray-800 text-white font-bold text-3xl">Cheat Sheet</span> */}
                    <p className=" text-black">
                        Diligent engineering student, innovation enthusiast, and collaborative leader.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Speaker;
