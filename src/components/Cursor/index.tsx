"use client"
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import settings from "@/app/settings";
const { DESKTOP_MIN_WIDTH, COLORS: { WHITE } } = settings;
interface CursorProps {
    disabled?: boolean;
}

const Cursor: React.FC<CursorProps> = ({ disabled = false }) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= Number(DESKTOP_MIN_WIDTH.replace("px", "")));
        };

        checkIfMobile(); // Vérifie à l'initialisation
        window.addEventListener("resize", checkIfMobile);

        return () => {
            window.removeEventListener("resize", checkIfMobile);
        };
    }, []);


    useEffect(() => {
        if (disabled || isMobile) return;
        
        const cursor = document.getElementById("cursor");
        if (!cursor) return;

        const moveCursor = (event: MouseEvent) => {
            gsap.to(cursor, {
                x: event.clientX - 25,
                y: event.clientY - 25,
                opacity:1,
                duration: 0.2,
                ease: "power2.out",
            });
            };

            const handleHover = (event: MouseEvent) => {
                const target = event.target as HTMLElement;
                setIsHovering(!!target.closest(".hoverable"));
            };

            document.addEventListener("mousemove", moveCursor);
            document.addEventListener("mouseover", handleHover);
            document.addEventListener("mouseout", handleHover);

            return () => {
            document.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseover", handleHover);
            document.removeEventListener("mouseout", handleHover);
        };
    }, [disabled, isMobile]);

    if (isMobile) return null;

    return <StyledCursor id="cursor" $isHovering={isHovering} style={{display: isMobile ? "none" : "block"}}/>;
};

const StyledCursor = styled.div<{ $isHovering: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 50px;
    opacity:0;
    height: 50px;
    border-radius: 50%;
    border: ${({ $isHovering }) => ($isHovering ? "none" : `1px solid ${WHITE}`)};
    background-color: ${({ $isHovering }) => ($isHovering ? `rgba(225, 240, 100, 0.1)` : "transparent")};
    pointer-events: none;
    z-index: 9999;
    transition: background-color ease-in 0.1s;
    will-change: transform, background-color;
`;

export default Cursor;
