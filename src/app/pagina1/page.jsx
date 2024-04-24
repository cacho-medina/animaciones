"use client";
import { motion } from "framer-motion";

function page() {
    return (
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
    );
}

export default page;
