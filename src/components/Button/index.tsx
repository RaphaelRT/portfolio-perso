"use client";
import React, { useMemo } from "react";
import styled from "styled-components";
import settings from "@/app/settings";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
const { DESKTOP_MIN_WIDTH, TYPOGRAPHY: { CURRENT }, COLORS: { YELLOW, WHITE, DARK_GREY } } = settings

const ButtonContainer = styled.div`
  position: relative;
  width: max-content;
  background-color: ${YELLOW};
  &:hover ${"div"} {
    border-color: ${WHITE};
  }
`;

const StyledButton = styled.button`
  font-family: "Redaction50";
  color: black;
  font-size: ${CURRENT};
  letter-spacing: 0.10rem;
  transition: background-color 150ms ease-in, color 150ms ease-in;
  padding: 0.35rem 0.55rem;
  width: max-content;
  height: max-content;
  display: block;
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${DARK_GREY};
    color: ${WHITE};
  }

`;

const Corner = styled.div`
  position: absolute;
  background-color: ${DARK_GREY};
  width: 0.2rem;
  height: 0.2rem;
  transition: border 0.15s ease-in-out;
`;

const generateCorners = (isHovered: boolean) => {
  return [
    { left: 0, top: 0, borderRight: "2px solid", borderBottom: isHovered ? "2px solid": "none" },
    { right: 0, top: 0, borderLeft: "2px solid", borderBottom: isHovered ? "2px solid": "none" },
    { left: 0, bottom: 0, borderRight: "2px solid", borderTop: isHovered ? "2px solid": "none" },
    { right: 0, bottom: 0, borderLeft: "2px solid", borderTop: isHovered ? "2px solid": "none" },
  ].map((style, index) => (
    <Corner key={index} style={style} />
  ));
};
const scrollToAnchor = (anchorId: string, scrollTargetRef: React.RefObject<HTMLDivElement | null>) => {
  const isMobile = window.innerWidth <= Number(DESKTOP_MIN_WIDTH.replace("px", ""));
  gsap.to(isMobile ? window : scrollTargetRef.current, {
      duration: 1.2,
      ease: "power2.out",
      scrollTo: anchorId
  });
}

export default function Button({ children, href, scrollTargetRef }: { children: React.ReactNode, href: string, scrollTargetRef: React.RefObject<HTMLDivElement | null> }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const corners = useMemo(() => generateCorners(isHovered), [isHovered]);

  return (
    <ButtonContainer
      className="hoverable"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {corners}
      <StyledButton onClick={() => scrollToAnchor(href, scrollTargetRef)}>{children}</StyledButton>
    </ButtonContainer>
  );
}
