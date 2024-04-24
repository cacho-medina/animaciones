"use client";
import { motion } from "framer-motion";

function page() {
    return (
        <div
            transition-style="in:circle:hesitate"
            className="h-screen grid place-items-center bg-green-800"
        >
            <h1 className="text-6xl font-extrabold text-slate-300">
                Animaciones de transition css
            </h1>
        </div>
    );
}

export default page;
