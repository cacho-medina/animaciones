"use client";
import { motion } from "framer-motion";

function page() {
    const width = window.innerWidth;
    return (
        <motion.div
            className="bg-blue-700 h-screen grid place-items-center"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: width, transition: { duration: 0.3 } }}
        >
            <h1 className="text-white text-center font-bold text-7xl">
                Entrada con Framer Motion
            </h1>
        </motion.div>
    );
}

export default page;
