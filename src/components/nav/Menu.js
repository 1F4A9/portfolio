import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FaHome, FaCode } from 'react-icons/fa';
import { MdWork, MdEmail } from 'react-icons/md';
import { IoMdContact } from 'react-icons/io';

const Container = styled.div`
  height: 100vh;
  width: ${props => props.isMenuActive ? '30vw' : '0vw'};
  padding-top: calc(var(--padding-lg) * 2 + 3rem);

  transition: 0.3s;

  position: fixed;
  right: 0;
  top: 0;

  background-color: #34a1cd;
  z-index: 5;

  display: flex;
  flex-direction: column;

  @media (max-width: 880px) {
    width: ${props => props.isMenuActive ? '100vw' : '0vw'};
  }
`;

const LinkContainer = styled.span`
  padding: var(--padding-xs) var(--padding-xs) var(--padding-xs) var(--padding-lg);
  margin-bottom: 1.45rem;
  color: var(--bg-off-white);
  transition: color 0.15s ease-out;

  :hover {
    color: var(--bg-eerie-black);
  }
  
  @media (max-width: 880px) {
    padding-left: var(--padding-xxl);
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  width: 100%;
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: inherit;
  cursor: pointer;
  font-weight: 600;
  
  svg {
    font-size: 1.4rem;
    margin-right: var(--margin-sm);
  }
`;

export default function Menu({ isMenuActive }) {
  return (
    <Container isMenuActive={isMenuActive} >
      <LinkContainer>
        <StyledLink to="#home"><FaHome />Home</StyledLink>
      </LinkContainer>
      <LinkContainer>
        <StyledLink to="#projects"><MdWork />Projects</StyledLink>
      </LinkContainer>
      <LinkContainer>
        <StyledLink to="#skills"><FaCode />Skills</StyledLink>
      </LinkContainer>
      <LinkContainer>
        <StyledLink to="#about"><IoMdContact />About</StyledLink>
      </LinkContainer>
      <LinkContainer>
        <StyledLink to="#contact"><MdEmail />Contact</StyledLink>
      </LinkContainer>
    </Container>
  )
}
