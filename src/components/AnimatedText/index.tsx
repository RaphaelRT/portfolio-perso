import React, { useEffect, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

interface AnimatedTextProps {
  children: ReactNode;
  textRef: RefObject<HTMLParagraphElement | null | HTMLElement >;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, textRef }) => {
  useEffect(() => {
    if (!textRef.current) return;

    const splitInstance = new SplitType(textRef.current, {
      types: "lines",
      lineClass: "line overflow-hidden",
    });

    const lineElements = Array.from(textRef.current.querySelectorAll<HTMLElement>(".line"));

    lineElements.forEach((lineElement) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("line-inner");
      wrapper.style.whiteSpace = "nowrap";
      wrapper.innerHTML = lineElement.innerHTML;
      lineElement.innerHTML = "";
      lineElement.appendChild(wrapper);
    });

    gsap.fromTo(
      ".line-inner",
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.1 }
    );

    return () => {
      lineElements.forEach((lineElement) => {
        const wrapper = lineElement.querySelector(".line-inner");
        if (wrapper) {
          lineElement.innerHTML = wrapper.innerHTML;
        }
      });
      splitInstance.revert();
    };
  }, [textRef]);

  return <>{children}</>;
};

export default AnimatedText;
