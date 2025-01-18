import React, { useEffect, useState, useCallback } from "react";

type CustomCursorProps = {
  disabled?: boolean;
};

const CustomCursor: React.FC<CustomCursorProps> = ({ disabled = false }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isDisabledForMobile, setIsDisabledForMobile] = useState(false);

  const updatePosition = useCallback((event: MouseEvent) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  }, []);

  const updateVisibility = useCallback((visible: boolean) => {
    setIsVisible(visible);
  }, []);

  const updateHoverState = useCallback((event: Event) => {
    const target = event.target as HTMLElement;
    const hoverableElement = target.closest(".hoverable");
    setIsHovering(!!hoverableElement);
  }, []);

  // Detect screen size and disable for mobile/tablet
  useEffect(() => {
    const handleResize = () => {
      setIsDisabledForMobile(window.innerWidth <= 1000);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (disabled || isDisabledForMobile) return;

    const handleMouseMove = (event: MouseEvent) => updatePosition(event);
    const handleMouseEnter = () => updateVisibility(true);
    const handleMouseLeave = () => updateVisibility(false);
    const handleMouseDown = () => document.body.classList.add("click-effect");
    const handleMouseUp = () => document.body.classList.remove("click-effect");
    const handleMouseOver = (event: MouseEvent) => updateHoverState(event);
    const handleMouseOut = (event: MouseEvent) => updateHoverState(event);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [disabled, isDisabledForMobile, updatePosition, updateVisibility, updateHoverState]);

  if (disabled || isDisabledForMobile) return null;

  const circleSize = 50;
  const circleRadius = circleSize / 2;

  const cursorStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    transform: `translate(${position.x - circleRadius}px, ${position.y - circleRadius}px) scale(${isHovering ? 1.15 : 1})`,
    width: `${circleSize}px`,
    height: `${circleSize}px`,
    border: isHovering ? "none" : "1px solid #fff",
    borderRadius: "50%",
    backgroundColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "transparent",
    pointerEvents: "none",
    transition: "transform 0.2s cubic-bezier(0.18, 0.89, 0.32, 1)",
    willChange: "transform, background-color",
    zIndex: 9999,
    visibility: isVisible ? "visible" : "hidden",
  };

  return <div style={cursorStyle} id="custom-cursor" />;
};

export default CustomCursor;
