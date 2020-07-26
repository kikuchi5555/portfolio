import React from 'react';
import ProfileCard from './components/ProfileCard';
import MainCanvas from './components/MainCanvas';
import styled from 'styled-components'
import './App.scss';

function App() {
  return (
    <Container>
      <ProfileCard />
      <MainCanvas />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.2rem;
  background: #444;
`;

export default App;
