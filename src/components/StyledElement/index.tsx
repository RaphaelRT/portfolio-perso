import React from "react";
import styled, { css } from "styled-components";
import { JSX } from "react";
import settings from "@/app/settings";

const { COLORS: { WHITE } } = settings;
const desktopMinWidth = "1410px"

type BorderStyles = {
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
};

type AreaStyles = {
  colStart?: number;
  colEnd?: number;
  rowStart?: number;
  rowEnd?: number
};
type ResponsiveStyle = { mobile: string; desktop?: string };

type StyledElementProps<T extends keyof JSX.IntrinsicElements = "div"> = {
  $as?: T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?:any;
  $children?: React.ReactNode;
  $cols?: ResponsiveStyle;
  $rows?: ResponsiveStyle;
  $border?: {
    mobile?: BorderStyles;
    desktop?: BorderStyles;
  };
  $areas?: {
    mobile?: AreaStyles;
    desktop?: AreaStyles;
  };
  $extrastyle?: ResponsiveStyle;
} & React.ComponentPropsWithoutRef<T>;

const generateBorders = (border?: BorderStyles) => {
  if (!border) return "";
  return css`
    ${border.top != undefined ? border.top === true ? `border-top: solid 0.1px ${WHITE};` : "border-top: 0;" : ""}
    ${border.right != undefined ? border.right === true ? `border-right: solid 0.1px ${WHITE};` : "border-right: 0;": ""}
    ${border.bottom != undefined? border.bottom  === true ? `border-bottom: solid 0.1px ${WHITE};` : "border-bottom: 0;": ""}
    ${border.left != undefined ? border.left  === true ? `border-left: solid 0.1px ${WHITE};` : "border-bottom: 0;": ""}
  `;
};
const generateAreas = (area?: AreaStyles) => {
  if (!area) return "";
  return css`
    ${area.colStart ? `grid-column-start: ${area.colStart};` : ""}
    ${area.colEnd ? `grid-column-end: ${area.colEnd};` : ""}
    ${area.rowStart? `grid-row-start: ${area.rowStart};` : ""}
    ${area.rowEnd ? `grid-row-end: ${area.rowEnd};` : ""}
  `;
};



const StyledComponent = styled.div<StyledElementProps>`
  display: ${({ $cols, $rows }) => ($cols || $rows ? "grid" : "block")};
  overflow: auto;

  ${({ $cols }) => $cols?.mobile && `grid-template-columns: ${$cols.mobile};`}
  ${({ $rows }) => $rows?.mobile && `grid-template-rows: ${$rows.mobile};`}

  ${({ $border }) => $border?.mobile && generateBorders($border.mobile)}
  ${({ $areas }) => $areas?.mobile && generateAreas($areas.mobile)}
  ${({ $extrastyle }) => $extrastyle?.mobile && $extrastyle.mobile}
  
  @media (min-width: ${desktopMinWidth}) {
    ${({ $cols }) => $cols?.desktop && `grid-template-columns: ${$cols.desktop};`}
    ${({ $rows }) => $rows?.desktop && `grid-template-rows: ${$rows.desktop};`}

    ${({ $border }) => $border?.desktop && generateBorders($border.desktop)}
    ${({ $areas }) => $areas?.desktop && generateAreas($areas.desktop)}
    ${({ $extrastyle }) => $extrastyle?.desktop && css`${$extrastyle.desktop}`}
  }
  scrollbar-width: none;
`;


const StyledElement = <T extends keyof JSX.IntrinsicElements = "div">({
  $as,
  ref,
  children,
  ...props
}: StyledElementProps<T>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <StyledComponent ref={ref} as={$as as any} {...props}>
    {children}
  </StyledComponent>;
};

export default StyledElement;
