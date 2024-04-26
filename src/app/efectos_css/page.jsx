"use client";
import { useEffect } from "react";
import Image from "next/image";

function Efectos() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;

            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);
    return (
        <div transition-style="in:wipe:top-right" className="css-container">
            <div className="div-effect h-screen grid place-items-center bg-blue-300">
                <h1 className="font-bold text-6xl">Css Effects</h1>
            </div>
            <div className="div-effect h-screen grid place-items-center bg-blue-600">
                <h2 className="text-5xl font-medium text-white">
                    Hover effect
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-300 p-6 rounded-xl btn-container">
                    <div className="w-[200px] h-[200px] rounded-xl btn bg-pink-400"></div>
                    <div className="w-[200px] h-[200px] rounded-xl btn bg-blue-500"></div>
                    <div className="w-[200px] h-[200px] rounded-xl btn bg-green-300"></div>
                </div>
            </div>
            <div className="bg-[#def] h-[300px] overflow-hidden flex items-center">
                <div className="wrapper">
                    <Image
                        src="/bootstrap.png"
                        alt="brand-logo"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/css.png"
                        alt="brand-logo"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/git.png"
                        alt="brand-logo"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/html.png"
                        alt="brand-logo"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/vite.png"
                        alt="brand-logo"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/mongo.png"
                        alt="brand-logo"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/Js.png"
                        alt="brand-logo"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/bootstrap.png"
                        alt="brand-logo"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/css.png"
                        alt="brand-logo"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/git.png"
                        alt="brand-logo"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/html.png"
                        alt="brand-logo"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/vite.png"
                        alt="brand-logo"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/mongo.png"
                        alt="brand-logo"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/Js.png"
                        alt="brand-logo"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            <div className="div-effect h-screen flex flex-col items-center justify-center gap-16 bg-red-300 py-14">
                <h2 className="text-5xl font-medium text-white">BG Parallax</h2>
                <div className="flex gap-10">
                    <div className="w-[200px] h-[200px] rounded-xl btn bg-blue-500"></div>
                    <div className="w-[200px] h-[200px] rounded-xl btn bg-pink-400"></div>
                </div>
            </div>
            <div className="div-effect h-screen grid place-items-center bg-slate-600">
                <h2 className="text-5xl font-medium text-white">Zoom Image</h2>
                <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-300 p-6 rounded-xl btn-container">
                    <div className="w-[200px] h-[200px] rounded-xl overflow-hidden zoom">
                        <Image
                            src="/bg.webp"
                            alt="img"
                            width={200}
                            height={200}
                            className="rounded-xl object-cover w-full h-full"
                        />
                    </div>
                    <div className="w-[200px] h-[200px] rounded-xl overflow-hidden zoom">
                        <Image
                            src="/img2.jpg"
                            alt="img"
                            width={200}
                            height={200}
                            className="rounded-xl object-cover w-full h-full"
                        />
                    </div>
                    <div className="w-[200px] h-[200px] rounded-xl overflow-hidden zoom">
                        <Image
                            src="/img3.jpg"
                            alt="img"
                            width={200}
                            height={200}
                            className="rounded-xl object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Efectos;
