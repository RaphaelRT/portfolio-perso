import settings from "@/app/settings"
import { FC, JSX } from "react";
import StyledElement from "@/components/StyledElement";
import Link from "next/link";
import styled from "styled-components";

const { COLORS: { WHITE, YELLOW }, TYPOGRAPHY: { CURRENT } } = settings

const SvgContainer = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    fill: inherit;
`;

const LinkEl = styled(Link)`
    display: flex;
    align-items: center;
    font-size: ${CURRENT};
    font-family: "NeueHaasGroteskDisplayPro";
    font-weight: 350;
    letter-spacing: 0.10rem;
    text-decoration: none;
    color: ${WHITE};
`;

type MenuLinkProps = {
    image: JSX.Element;
    text: string;
    href: string;
};

export const MenuLink: FC<MenuLinkProps> = ({ image, text, href }) => {
    return (
        <StyledElement
            className="hoverable"
            $cols={{ mobile: "1.1rem max-content" }}
            $extrastyle={{
            mobile: `
                margin-bottom: 0.40rem;
                gap: 1.1rem;
                align-items: center;
                fill: ${WHITE};
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                &:hover ${SvgContainer} *, &:hover ${LinkEl} {
                    color: ${YELLOW};
                    fill: ${YELLOW} !important;
                }`,
            }}
        >
            <StyledElement
                $extrastyle={{
                    mobile: `
                        width: 1.5rem;
                        height: 1.5rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    `,
                }}
            >
                <SvgContainer>{image}</SvgContainer>
            </StyledElement>
            <LinkEl href={href} target={href.includes("https") ? "_blank": "_self"} rel={href.includes("https") ? "noopener noreferrer": ""}>{text}</LinkEl>
        </StyledElement>
    );
    };