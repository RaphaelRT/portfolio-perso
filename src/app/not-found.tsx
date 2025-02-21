"use client"
import Link from 'next/link';
import styled from 'styled-components';
import settings from './settings';
const {COLORS: { WHITE, YELLOW }, TYPOGRAPHY: { CURRENT }} = settings
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
`;

const Title = styled.h2`
    font-size: 10rem;
    color: ${WHITE};
    font-family: "Redaction50";
`;

const Message = styled.p`
    font-size: ${CURRENT};
    color: ${WHITE};
    font-family: 'NeueHaasGroteskDisplayPro';
    margin: 10px 0;
`;

const StyledLink = styled(Link)`
    font-size: 1rem;
    font-size: ${CURRENT};
    color: ${YELLOW};
    font-family: 'NeueHaasGroteskDisplayPro';
    text-decoration: none;
    margin-top: 10px;
    &:hover {
        text-decoration: underline;
    }
`;


export default function NotFound() {
    return (
        <Container>
        <Title>404</Title>
        <Message>Désolé, la page que vous recherchez n'existe pas !</Message>
        <StyledLink className="hoverable" href="/">Revenir à la page d'acceuil</StyledLink>
        </Container>
    );
}

