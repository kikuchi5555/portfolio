import React from 'react';
import ProfileCard from './components/ProfileCard';
import styled from 'styled-components'
import './App.scss';

function App() {
  return (
    <Container>
      <ProfileCard />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 3.2rem;
  background: #444;
`;

export default App;
