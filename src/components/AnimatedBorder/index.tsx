"use client";
import { RefObject, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import settings from "@/app/settings";

const {
  COLORS: { WHITE },
} = settings;

type BorderStyles = {
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
};

type BorderDirections = {
  top?: "left-to-right" | "right-to-left";
  right?: "top-to-bottom" | "bottom-to-top";
  bottom?: "right-to-left" | "left-to-right";
  left?: "bottom-to-top" | "top-to-bottom";
};

type AnimatedBorderProps = {
  borderStyles?: BorderStyles;
  borderDirections?: BorderDirections;
  animationDuration?: number;
  order?: { mobile?: string; desktop?: string };
  containerRef: RefObject<HTMLDivElement | null>;
};

export default function AnimatedBorder({
  borderStyles = { top: true, right: true, bottom: true, left: true },
  borderDirections = {
    top: "left-to-right",
    right: "top-to-bottom",
    bottom: "right-to-left",
    left: "bottom-to-top",
  },
  animationDuration = 0.8,
  order = { mobile: "0", desktop: "0" },
  containerRef,
}: AnimatedBorderProps) {
  const borderRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ width: "0px", height: "0px", top: "0px", left: "0px" });
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const updateSizeAndPosition = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setSize({
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        top: `${rect.top + window.scrollY}px`,
        left: `${rect.left + window.scrollX}px`,
      });
    };

    const checkScreenSize = () => setIsDesktop(window.innerWidth >= 1410);

    const handleResizeOrScroll = () => {
      requestAnimationFrame(updateSizeAndPosition);
    };

    checkScreenSize();
    updateSizeAndPosition();
    window.addEventListener("resize", handleResizeOrScroll);
    window.addEventListener("scroll", handleResizeOrScroll);

    return () => {
      window.removeEventListener("resize", handleResizeOrScroll);
      window.removeEventListener("scroll", handleResizeOrScroll);
    };
  }, [containerRef]);

  useEffect(() => {
    if (!borderRef.current || isDesktop === null) return;

    const borderElements = {
      top: borderRef.current.querySelector(".border-top"),
      right: borderRef.current.querySelector(".border-right"),
      bottom: borderRef.current.querySelector(".border-bottom"),
      left: borderRef.current.querySelector(".border-left"),
    };

    const activeBorders = Object.entries(borderStyles)
      .filter(([, isActive]) => isActive)
      .map(([key]) => ({ key, element: borderElements[key as keyof typeof borderElements] }))
      .filter(({ element }) => element);

    if (activeBorders.length === 0) return;

    const borderAnimations = activeBorders.map(({ key, element }) => {
      let fromValue = -200;
      let toValue = 0;

      switch (borderDirections[key as keyof BorderDirections]) {
        case "left-to-right":
        case "top-to-bottom":
          fromValue = -200;
          toValue = 0;
          break;
        case "right-to-left":
        case "bottom-to-top":
          fromValue = 200;
          toValue = 0;
          break;
      }

      return { element, fromValue, toValue };
    });

    gsap.set(borderAnimations.map(({ element }) => element), { strokeDasharray: 200, strokeDashoffset: -200 });

    gsap.to(
      borderAnimations.map(({ element }) => element),
      {
        strokeDashoffset: 0,
        duration: animationDuration,
        stagger: animationDuration,
        ease: "power2.out",
        delay: (isDesktop ? Number(order.desktop) : Number(order.mobile)) ?? 0 * animationDuration * 1.1,
      }
    );
  }, [animationDuration, borderStyles, order, isDesktop, borderDirections]);

  return (
    <div
      ref={borderRef}
      style={{
        position: "absolute",
        top: size.top,
        left: size.left,
        width: size.width,
        height: size.height,
        pointerEvents: "none",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      >
        {borderStyles.top && (
          <line className="border-line border-top" x1="0" y1="0" x2="200" y2="0" stroke={WHITE} strokeWidth="1" />
        )}
        {borderStyles.right && (
          <line className="border-line border-right" x1="200" y1="0" x2="200" y2="200" stroke={WHITE} strokeWidth="1" />
        )}
        {borderStyles.bottom && (
          <line className="border-line border-bottom" x1="200" y1="200" x2="0" y2="200" stroke={WHITE} strokeWidth="1" />
        )}
        {borderStyles.left && (
          <line className="border-line border-left" x1="0" y1="200" x2="0" y2="0" stroke={WHITE} strokeWidth="1" />
        )}
      </svg>
    </div>
  );
}
