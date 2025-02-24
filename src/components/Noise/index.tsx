"use client"
import StyledElement from "../StyledElement";
import styled, { keyframes, css } from "styled-components";

const noiseAnimation = keyframes`
  0% { transform: translate3d(0, 9rem, 0); }
  10% { transform: translate3d(-1rem, -4rem, 0); }
  20% { transform: translate3d(-8rem, 2rem, 0); }
  30% { transform: translate3d(9rem, -9rem, 0); }
  40% { transform: translate3d(-2rem, 7rem, 0); }
  50% { transform: translate3d(-9rem, -4rem, 0); }
  60% { transform: translate3d(2rem, 6rem, 0); }
  70% { transform: translate3d(7rem, -8rem, 0); }
  80% { transform: translate3d(-9rem, 1rem, 0); }
  90% { transform: translate3d(6rem, -5rem, 0); }
  100% { transform: translate3d(-7rem, 0, 0); }
`;

const NoiseBackground = styled(StyledElement)`
  animation: ${css`${noiseAnimation} 1s infinite`};
  position: absolute;
  left: -20rem;
  top: -20rem;
  width: calc(100vw + 60rem);
  height: calc(100vh + 60rem);
  background-image: url('/images/noise.png');
  background-position: center;
  will-change: transform;
`;

export default function Noise() {
  return (
    <StyledElement
      $extrastyle={{
        mobile: "position: absolute; width: 100%; height: 100vh; overflow: hidden; z-index: -1;",
      }}
    >
      <NoiseBackground/>
    </StyledElement>
  );
}