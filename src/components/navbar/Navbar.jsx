"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function Navbar() {
    return (
        <nav className="flex justify-around items-center gap-10 py-4 bg-pink-800 text-white">
            <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="list-none"
            >
                <Link
                    href="/"
                    className="transition-all font-bold hover:text-slate-800 text-lg hover:underline"
                >
                    INICIO
                </Link>
            </motion.li>
            <div className="bg-pink-600 px-6 py-2 flex justify-center items-center gap-10">
                <motion.li
                    className="list-none"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                >
                    <Link
                        href="/pagina1"
                        className="transition-all text-lg hover:underline"
                    >
                        Page 1
                    </Link>
                </motion.li>
                <motion.li
                    className="list-none"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href="/pagina2"
                        className="transition-all text-lg hover:underline"
                    >
                        Page 2
                    </Link>
                </motion.li>
                <motion.li
                    className="list-none"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href="/pagina3"
                        className="transition-all text-lg hover:underline"
                    >
                        Page 3
                    </Link>
                </motion.li>
                <motion.li
                    className="list-none"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href="/efectos_css"
                        className="transition-all text-lg hover:underline"
                    >
                        css effects
                    </Link>
                </motion.li>
            </div>
        </nav>
    );
}

export default Navbar;
