"use client";
import { motion } from "framer-motion";
import { Slide, JackInTheBox } from "react-awesome-reveal";

export default function Home() {
    return (
        <div>
            <div className="bg-red-400 grid place-items-center h-screen">
                <h1 className="font-medium text-center text-7xl text-black">
                    ANIMACIONES CON <br /> GSAP Y FRAMER MOTION
                </h1>
            </div>
            <div className="grid place-items-center h-screen">
                <Slide>
                    <h1 className="font-medium text-center text-7xl text-black">
                        ANIMACION Slide CON <br /> React Awesome Reveal
                    </h1>
                </Slide>
            </div>
            <div className="bg-green-500 text-white grid place-items-center h-screen">
                <JackInTheBox>
                    <h1 className="font-medium text-center text-7xl text-black">
                        ANIMACION JackInTheBox CON <br /> React Awesome Reveal
                    </h1>
                </JackInTheBox>
            </div>
            <div className="bg-yellow-400 grid place-items-center h-screen">
                <h1 className="text-7xl font-bold">
                    <motion.span
                        initial={{ opacity: 0, y: "300px" }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.5 },
                        }}
                    >
                        TEXTO
                    </motion.span>{" "}
                    <motion.span
                        initial={{ opacity: 0, y: "400px" }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.9 },
                        }}
                    >
                        desde
                    </motion.span>{" "}
                    <motion.span
                        initial={{ opacity: 0, y: "500px" }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1.5 },
                        }}
                    >
                        abajo
                    </motion.span>{" "}
                </h1>
            </div>
        </div>
    );
}
