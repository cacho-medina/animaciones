"use client";
import { motion } from "framer-motion";
import AOS from "aos";
import { useEffect } from "react";
import Locomotive from "@/components/Locomotive";

function AosPage() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <motion.div
                className="bg-blue-700 h-screen grid place-items-center"
                /* initial={{ width: 0 }}
            animate={{ width: "100%" }} */
                initial={{ x: "-100%" }}
                animate={{ x: "0" }}
            >
                <h1 className="text-white text-center font-bold text-7xl">
                    Entrada con Framer Motion
                </h1>
            </motion.div>
            <div className="h-screen bg-[#def] p-8 flex flex-col lg:flex-row justify-center items-center gap-4">
                <div
                    data-aos="flip-right"
                    className="bg-pink-500 w-[200px] h-[200px] rounded-xl"
                ></div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="300"
                    className="bg-pink-500 w-[200px] h-[200px] rounded-xl"
                ></div>
                <div
                    data-aos="zoom-out-down"
                    data-aos-duration="600"
                    className="bg-pink-500 w-[200px] h-[200px] rounded-xl"
                ></div>
                <div
                    data-aos="fade-right"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-sine"
                    className="bg-pink-500 w-[200px] h-[200px] rounded-xl"
                ></div>
            </div>
            {/* <Locomotive /> */}
        </div>
    );
}

export default AosPage;
