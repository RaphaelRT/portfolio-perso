"use client";

import Button from "@/components/Button";
import StyledElement from "@/components/StyledElement";
import { Linkedin, Github, Phone, Mail, Download } from "@/assets/icons";
import { Title, SubTitle } from "@/components/Typography";
import { MenuLink } from "@/components/MenuLink";
import settings from "@/app/settings";
const { TYPOGRAPHY: { CURRENT } } = settings
export const MainSection = ({scrollTargetRef}: { scrollTargetRef: React.RefObject<HTMLDivElement | null> }) => (
    <StyledElement
        $extrastyle={{
            mobile: "display: flex; justify-content: space-between; flex-direction: column; height: 100%;"
        }}
    >
        <div>
            <Title>Raphaël Robert</Title>
            <SubTitle>Full Stack Developer | Data Engineer | DevOps</SubTitle>
            <StyledElement
            $extrastyle={{
                mobile: `gap: 0.30rem; padding-bottom: 1.25rem; font-weight: 200; font-family: 'NeueHaasGroteskDisplayPro'; letter-spacing: 0.10rem; font-size: ${CURRENT}; margin-top: 3.5rem;`
            }}
            >
            <MenuLink image={<Phone />} text="06 83 03 34 51" href="tel:+330683033451" />
            <MenuLink image={<Mail />} text="raphaelrobert.pro@gmail.com" href="mailto:raphaelrobert.pro@gmail.com" />
            <MenuLink image={<Linkedin />} text="Raphaël Robert" href="https://linkedin.com/in/raphael-rbrt" />
            <MenuLink image={<Github />} text="RaphaelRT" href="https://github.com/RaphaelRT" />
            <MenuLink image={<Download />} text="Curriculum Vitae" href="/download/CV_ROBERT_Raphael_2025.pdf" />
            </StyledElement>
        </div>
        <div>
            <StyledElement
                $extrastyle={{
                mobile: "gap: 0.5rem; padding-top: 0.25rem; display: flex; flex-direction: column;"
                }}
            >
            <Button href="#about" scrollTargetRef={scrollTargetRef}>[ à propos ]</Button>
            <Button href="#experiences" scrollTargetRef={scrollTargetRef}> [ expériences ]</Button>
            <Button href="#formation" scrollTargetRef={scrollTargetRef}>[ formation ]</Button>
    
            </StyledElement>
        </div>
    </StyledElement>
)