import settings from "@/app/settings"
import styled from "styled-components";

const { DESKTOP_MIN_WIDTH, COLORS: { WHITE }, TYPOGRAPHY: { CURRENT, CURRENT_LH, CURRENT_LP } } = settings

export const Title = styled.h1`
    font-size: 3rem;
    font-family: "NeueHaasGroteskDisplayPro";
    font-weight: 350;
    line-height: 3.2rem;
    color: ${WHITE};
    margin-top: 1rem;

    @media (min-width: ${DESKTOP_MIN_WIDTH}) {
        font-size: 5rem;
        line-height: 4.8rem;
    }
`;

export const SubTitle = styled.p`
    font-size: ${CURRENT};
    font-family: "NeueHaasGroteskDisplayPro";
    font-weight: 350;
    letter-spacing: 0.05rem;
    line-height: ${CURRENT_LH};
    color: ${WHITE};

`;

export const SummaryText = styled.p`
    font-size: 7rem;
    line-height: 6rem;
    font-family: "NeueHaasGroteskDisplayPro";
    font-weight: 350;
    max-width: 100%;
    color: ${WHITE};
    margin-top: 3rem;
    margin-bottom: 3rem;
    @media (min-width: ${DESKTOP_MIN_WIDTH}) {
        font-size: 5rem;
        line-height: 4.6rem;
    }

    @media (max-width: 950px) {
        font-size: 5rem;
        line-height: 4.6rem;
    }

    @media (max-width: 670px) {
        font-size: 3rem;
        line-height: 3.6rem;
    }
`;


export const Highlight = styled.strong`
    font-family: "Redaction35";
    font-style: italic;
`;

export const CategoryTitle = styled.h2`
    line-height: ${CURRENT_LH};
    font-size: ${CURRENT};
    color: ${WHITE};
    font-family: "Redaction50";
`;

export const DescriptiveText = styled.p`
    color: ${WHITE};
    font-weight: 100;
    font-family: "NeueHaasGroteskDisplayPro";
    font-size: ${CURRENT};
    line-height: ${CURRENT_LH};
    letter-spacing: ${CURRENT_LP};
    padding-bottom: ${CURRENT_LH};
    b {
        font-weight: bold;
        font-family: "Redaction50";
    }
`;
