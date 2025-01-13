import React, { useEffect, useState } from "react";

type CustomCursorProps = {
  disabled?: boolean;
};

const CustomCursor: React.FC<CustomCursorProps> = ({ disabled = false }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseDown = () => document.body.classList.add("click-effect");
    const handleMouseUp = () => document.body.classList.remove("click-effect");

    const handleHoverStart = (event: MouseEvent) => {
      if ((event.target as HTMLElement).classList.contains("hoverable")) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = (event: MouseEvent) => {
      if ((event.target as HTMLElement).classList.contains("hoverable")) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
    };
  }, [disabled]);

  if (disabled) return null;

  const circleSize = 50;
  const circleRadius = circleSize / 2;

  const cursorStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    transform: `translate(${position.x - circleRadius}px, ${position.y - circleRadius}px) scale(${isHovering ?  1.15 : 1})`,
    width: `${circleSize}px`,
    height: `${circleSize}px`,
    border: isHovering ? "none" : "1px solid #fff",
    borderRadius: "50%",
    backgroundColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "transparent",
    pointerEvents: "none",
    transition: "transform 0.15s cubic-bezier(0.18, 0.89, 0.32, 1)",
    willChange: "transform, background-color",
    zIndex: 9999,
    visibility: isVisible ? "visible" : "hidden",
  };

  return <div style={cursorStyle} id="cursor" />;
};

export default CustomCursor;
