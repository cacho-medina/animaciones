/* 
"use client";
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, createRef } from "react";
function Locomotive() {
    const scrollRef = createRef();
    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
        });
    });
    return (
        <div
            ref={scrollRef}
            className="h-screen bg-teal-800 text-slate-300 flex flex-row justify-center items-center gap-14 md:gap-0 md:justify-evenly"
        >
            <div
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="3"
                data-scroll-direction="horizontal"
            >
                <h2 className="font-bold text-5xl">Locomotive Scroll</h2>
                <p>text</p>
            </div>
            <div className="bg-slate-300 w-[200px] h-[200px] transition-colors cursor-pointer rounded-[50%] hover:bg-slate-400"></div>
        </div>
    );
}

export default Locomotive; */
