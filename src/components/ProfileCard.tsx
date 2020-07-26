import React from 'react';
import styled from 'styled-components'
import GitHubIcon from '../github_icon.svg';

function ProfileCard() {
  return (
    <Card>
      <Header>
        <Heading>kikuchi tetsuro</Heading>
        <SubHeading>front-end development <br />& design</SubHeading>
      </Header>
      <Footer href="https://github.com/kikuchi5555" target="_blank">
        <Icon>
          <img src={GitHubIcon} alt="GitHub" />
          <p>kikuchi5555</p>
        </Icon>
      </Footer>
    </Card>
  );
}

const Card = styled.div`
  position: relative;
  background: #282828;
  border-radius: .8rem;
  overflow: hidden;
  width: 100%;
  max-width: 375px;
  z-index: 10;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
`;

const Header = styled.div`
  padding: 2.4rem 3.2rem 4.8rem;
`;

const Footer = styled.a`
  display: block;
  background: #222;
  padding: 1.6rem 3.2rem;
  transition: 300ms;  
  @media screen and (min-width: 768px) {
    &:hover {
      opacity: .5;
    }
  }
`;

const Heading = styled.h1`
  color: white;
  font-size: 2rem;
  line-height: 3.2rem;
  margin-bottom: .8rem;
`;

const SubHeading = styled.p`
  color: white;
  font-size: 1.4rem;
  line-height: 2.4rem;
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  text-decoration: none;

  img {
    width: 2.4rem;
    height: auto;
  }

  p {
    color: white;
    font-size: 1.2rem;
    line-heigth: 1.5;
    margin: 0 0 0 10px;
  }
`;

export default ProfileCard;
