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
      <Footer>
        <Icon href="https://github.com/kikuchi5555" target="_blank">
          <img src={GitHubIcon} alt="GitHub" />
          <p>kikuchi5555</p>
        </Icon>
      </Footer>
    </Card>
  );
}

const Card = styled.div`
  background: #282828;
  border-radius: .8rem;
  overflow: hidden;
  max-width: 375px;
`;

const Header = styled.div`
  padding: 2.4rem 3.2rem;
`;

const Footer = styled.div`
  background: #222;
  padding: 1.6rem 3.2rem;
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

const Icon = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transition: 300ms;  
  &:hover {
    opacity: .8;
  }

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
