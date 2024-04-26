"use client";
import { useEffect } from "react";
import styles from "./style.module.css";
import Intro from "../../components/Intro";
import Description from "@/components/Description/Description";
import Projects from "@/components/Projects/Projects";
function ScrollAnimation() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;

            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);
    return (
        <div>
            {/* <div></div>
            <div></div>
            <div></div> */}
            <Intro />
            <Description />
            <Projects />
        </div>
    );
}

export default ScrollAnimation;
