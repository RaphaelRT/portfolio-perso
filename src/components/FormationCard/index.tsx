"use client";
import React from "react";
import { Formation } from "@/components/Layout/FormationSection/formation";
import { BulletArrow } from "@/assets/icons";
import StyledElement from "../StyledElement";
import styled from "styled-components";
import Link from "next/link";
import settings from "@/app/settings";

const {COLORS: { WHITE, YELLOW }, TYPOGRAPHY: {CURRENT, CURRENT_LH, CURRENT_LP}} = settings

const StyledBulletArrow = styled(BulletArrow)`
  width: 0.7rem;
  fill: ${WHITE};
`;
const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${WHITE};
  &:hover {
    color: ${YELLOW};
  }
`;


const generateText = (text: string) => {
  return text
    .split("- ")
    .filter((desc) => desc.trim() !== "")
    .map((desc, idx) => (
      <StyledElement
        key={idx}
        $cols={{ mobile: "1.5rem 1fr" }}
        $extrastyle={{
          mobile: `margin-top: 0.5rem; align-items: start; line-height: ${CURRENT_LH};`,
        }}
      >
        <StyledBulletArrow />
        <StyledElement
          $extrastyle={{
            mobile: `font-size: ${CURRENT}; font-weight: 100; letter-spacing: ${CURRENT_LP}; line-height: ${CURRENT_LH};`,
          }}
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </StyledElement>
    ));
};

export default function FormationCard({
  formation,
  id,
  isLast
}: {
  formation: Formation;
  id: number;
  isLast: boolean;
}) {
  const { diploma, school, place, begin, end, link, description } = formation;

  return (
    <StyledElement
      key={`${diploma}-${id}`}
      $extrastyle={{
        mobile: `font-family: NeueHaasGroteskDisplayPro; color: var(--curr_white); max-width: 100%; ${!isLast ? "border-bottom: 0.1px solid" : ""}; padding: 1.25rem;`,
      }}
    >
      <StyledElement
        $cols={{ mobile: "1fr auto" }}
        $extrastyle={{
          mobile: "align-items: start; width: 100%; justify-content: space-between;",
        }}
      >
        <StyledElement $extrastyle={{ mobile: `line-height: ${CURRENT_LH};` }}>
          <StyledElement $extrastyle={{ mobile: `font-size: ${CURRENT}; letter-spacing: ${CURRENT_LP}; max-width: 80%;` }}>
            {diploma}
          </StyledElement>
          <StyledElement $extrastyle={{ mobile: `font-size: ${CURRENT}; letter-spacing: ${CURRENT_LP}; font-weight: 100;` }}>
            <StyledLink className="hoverable" href={link} target="_blank" rel="noopener noreferrer">{school}</StyledLink>, {place}
          </StyledElement>
        </StyledElement>
        <StyledElement $extrastyle={{ mobile: "white-space: nowrap;" }}>
          {begin}
          {end ? ` – ${end}` : ""}
        </StyledElement>
      </StyledElement>
      <StyledElement $extrastyle={{ mobile: "margin-top: 0.9rem;" }}>{description.map((desc) => generateText(desc))}</StyledElement>
    </StyledElement>
  );
}
