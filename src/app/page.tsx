"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import StyledElement from "@/components/StyledElement";
import styled from "styled-components";
import { Arrow } from "@/assets/icons";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

import { MainSection } from "@/components/Layout/MainSection";
import { Highlight, SummaryText } from "@/components/Typography";
import { AboutSection } from "@/components/Layout/AboutSection";
import { ExperienceSection } from "@/components/Layout/ExperienceSection";
import { FormationSection } from "@/components/Layout/FormationSection";
import settings from "./settings";
import Link from "next/link";

const { DESKTOP_MIN_WIDTH, COLORS: { YELLOW, WHITE } } = settings;

const Logo = styled(Image)`
    width: 4rem !important;
    flex-shrink: 0;
    margin: 1rem;
    height: max-content;

    @media (min-width: ${DESKTOP_MIN_WIDTH}) {
        margin-left: 1rem;
        margin-right: 1rem;
    }
`;

const StyledArrow = styled(Arrow)`
    width: 2rem;
    fill: ${WHITE};
    cursor: pointer;
    &:hover  {
        color: ${YELLOW};
        fill: ${YELLOW};
    }
`;

export default function Home() {
    const summaryTextRef = useRef<HTMLParagraphElement | null>(null);
    const pageRef = useRef<HTMLDivElement | null>(null);
    const scrollTargetRef = useRef<HTMLDivElement | null>(null);
    const [scrollID, setScrollID] = useState(0.1);

    const handleScrollToTarget = () => {
        const isMobile = window.innerWidth <= Number(DESKTOP_MIN_WIDTH.replace("px", ""));
        const scrollTarget = isMobile ? window : scrollTargetRef.current;
        
        if (scrollTarget) {
            
            const step = "scrollHeight" in scrollTarget 
                ? scrollTarget.scrollHeight / 11 
                : document.documentElement.scrollHeight / 11;
                
            const newScrollPosition = (scrollID + 1) * step;

            gsap.to(scrollTarget, {
                duration: 0.8,
                ease: "power2.out",
                scrollTo: { y: newScrollPosition },
            });
    
            setScrollID((prev) => Math.min(prev + 1, 10));
        }
    };
    
    useEffect(() => {
        if (pageRef.current) {
        gsap.fromTo(
            pageRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.2, ease: "power2.out" }
        );
        }
    }, []);

    return (
        <div ref={pageRef} style={{ opacity: 0 }}>
            <StyledElement
                $as="div"
                $cols={{ mobile: "3fr max-content", desktop: "1.4fr 1.5fr max-content" }}
                $rows={{
                    mobile: "4rem minmax(auto, calc(100vh - 4.5rem))",
                    desktop: "4rem minmax(0,auto) auto",
                }}
                $extrastyle={{
                    mobile:
                    "width: 100vw; gap: 0; margin: 0; padding: 0; border-collapse: collapse; border-spacing: 0;",
                    desktop: "height: 100vh;",
                }}
            >
            <StyledElement
                $as="div"
                $areas={{ mobile: { colStart: 1, rowStart: 1 } }}
                $border={{ mobile: { bottom: true, right: true } }}
            />
            <StyledElement
                $as="div"
                $areas={{ mobile: { colStart: 2, rowStart: 1 } }}
                $border={{ mobile: { bottom: true, right: true } }}
                $extrastyle={{
                    mobile: "hidden",
                    desktop: "block",
                }}
            />
            <StyledElement
                $areas={{
                    mobile: { colStart: 2, rowStart: 1 },
                    desktop: { colStart: 3 },
                }}
                $border={{ mobile: { bottom: true } }}
                $extrastyle={{
                    mobile: "width: max-content; display: flex;",
                }}
            >  
                <Link href={"/"} className="hoverable">
                    <Logo
                        src="/images/logo-white.svg"
                        alt="Logo of ROBERT Raphaël"
                        width={800}
                        height={500}
                    />
                </Link>
                
            </StyledElement>
            <StyledElement
                $areas={{
                    mobile: { colStart: 1, colEnd: 2, rowStart: 2, rowEnd: 3 },
                    desktop: { colStart: 1, rowEnd: 5 },
                }}
                $border={{ mobile: { right: true } }}
                $extrastyle={
                    {
                        mobile:
                            "order: 1; padding-left: 1rem; padding-right: 1rem; padding-top: 1rem; padding-bottom: 1rem;",
                        desktop:
                            "order: 0; padding-left: 2rem; padding-right: 2rem; padding-bottom: 5rem;",
                    }
                }
            >
                <MainSection scrollTargetRef={scrollTargetRef} />
            </StyledElement>
            <StyledElement
                ref={scrollTargetRef}
                className="custom-scroll"
                $areas={{
                    mobile: { colStart: 1, colEnd: 4, rowStart: 3, rowEnd: 4 },
                    desktop: { colStart: 2, colEnd: 3, rowStart: 2, rowEnd: 5 },
                }}
                $rows={{ mobile: "max-content 1fr", desktop: "max-content 1fr" }}
                $border={{
                    desktop: { right: true, top: false },
                    mobile: { top: true },
                }}
                $extrastyle={{
                    mobile:
                        "order: 2; overflow: auto; background-color: var(--background); scrollbar-width: thin; scrollbar-color: var(--scroll-thumb) var(--scroll-track);",
                    desktop: "order: initial;",
                }}
            >
                <StyledElement
                $areas={{ mobile: { rowStart: 1 } }}
                $extrastyle={{
                    mobile:
                    "padding-left: 2rem; padding-right: 2rem; align-items: center; justify-content: center; margin-top: 2rem; margin-bottom: 2rem; display: none; height: calc(50vh - 4.5rem);",
                    desktop: "margin: 0; display: flex;",
                }}
                />
                <StyledElement
                $areas={{ mobile: { rowStart: 2 } }}
                $border={{
                    desktop: { top: true, bottom: false },
                    mobile: { bottom: true },
                }}
                $extrastyle={{
                    mobile:
                    "display: flex; align-items: center; height: max-content; padding: 1.25rem 1.25rem;",
                }}
                >
                    <AnimatedText textRef={summaryTextRef}>
                        <SummaryText ref={summaryTextRef}>
                        Je construit des <Highlight>solution techniques</Highlight> qui
                        font la <Highlight>différence</Highlight>.
                        </SummaryText>
                    </AnimatedText>
                </StyledElement>
                <StyledElement
                    $areas={{ mobile: { rowStart: 3 } }}
                    $border={{ desktop: { top: true } }}
                    $extrastyle={{
                        mobile: "display: flex; align-items: center; height: max-content;",
                    }}
                >
                <AboutSection />
                </StyledElement>
                <StyledElement
                    $areas={{ mobile: { rowStart: 4 } }}
                    $border={{ desktop: { top: true } }}
                    $extrastyle={{
                        mobile: "display: flex; align-items: center; height: max-content;",
                    }}
                >
                <ExperienceSection />
                </StyledElement>
                <StyledElement
                    $areas={{ mobile: { rowStart: 5 } }}
                    $border={{ desktop: { top: true } }}
                    $extrastyle={{
                        mobile: "display: flex; align-items: center; height: max-content;",
                    }}
                >
                <FormationSection />
                </StyledElement>
            </StyledElement>
            <StyledElement
                $areas={{
                mobile: { colStart: 2, rowStart: 2 },
                desktop: { colStart: 3, rowStart: 2 },
                }}
                $extrastyle={{
                    desktop:
                        "min-height: calc(100vh - 4.5rem); display: flex; flex-direction: column; flex-grow: 1;",
                    mobile:
                        "min-height: calc(100vh - 4.5rem); display: flex; flex-direction: column; flex-grow: 1;",
                    }
                }
            >
                <StyledElement
                    $extrastyle={{
                        mobile:
                        "display: flex; justify-content: center; align-items: flex-end; flex-grow: 1; padding-bottom: 5rem;",
                    }}
                >
                    
                    <div className="hoverable" onClick={handleScrollToTarget} style={{ cursor: "pointer" }}>
                        <StyledArrow />
                    </div>
                </StyledElement>
            </StyledElement>
            </StyledElement>
        </div>
    );
}
