import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import "transition-style";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Animaciones Web",
    description: "Recopilacion de librerias de animaciones",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header>
                    <Navbar />
                </header>

                {/* <TransitionPage></TransitionPage> */}
                <main>{children}</main>
            </body>
        </html>
    );
}
