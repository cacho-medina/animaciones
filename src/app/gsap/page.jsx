"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
function LoadPage() {
    const comp = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            t1.from("#intro-slider", {
                xPercent: "-100",
                duration: 1.3,
                delay: 0.3,
            })
                .from(["#title-1", "#title-2", "#title-3"], {
                    opacity: 0,
                    y: "+=30",
                    stagger: 0.5,
                })
                .to(["#title-1", "#title-2", "#title-3"], {
                    opacity: 0,
                    y: "-=30",
                    delay: 0.3,
                    stagger: 0.5,
                })
                .to("#intro-slider", {
                    xPercent: "-100",
                    duration: 1.3,
                })
                .from("#welcome", {
                    opacity: 0,
                    duration: 0.5,
                });
        }, comp);
        return () => ctx.revert();
    }, []);
    return (
        <div className="relative" ref={comp}>
            <div
                id="intro-slider"
                className="h-screen p-10 bg-violet-800 text-yellow-400 absolute top-0 left-0 z-10 w-full flex flex-col justify-center items-center text-start gap-10 tracking-tight"
            >
                <h1 id="title-1" className="text-8xl">
                    Animacion de
                </h1>
                <h1 id="title-2" className="text-8xl">
                    slider con
                </h1>
                <h1 id="title-3" className="text-8xl">
                    GSAP
                </h1>
            </div>
            <div className="h-screen grid place-items-center bg-white text-slate-800">
                <h2 id="welcome" className="font-bold text-6xl underline">
                    Load page.
                </h2>
            </div>
        </div>
    );
}

export default LoadPage;
