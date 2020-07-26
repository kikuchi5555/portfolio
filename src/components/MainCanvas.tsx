import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Stage, Sprite } from '@inlet/react-pixi';
import GitHubIcon from '../github_icon.svg';

const MainCanvas = () => {
  const { width, height } = useWindowDimensions();
  const { clientX, clientY } = useMouseLocation();

  console.log(clientX, clientY);

  return (
    <Container>
      <Stage width={width} height={height} options={{ backgroundColor: 0xeef1f5 }}>
        <Sprite
          image={GitHubIcon}
          scale={{ x: 0.5, y: 0.5 }}
          anchor={0.5}
          x={clientX}
          y={clientY}
        />
      </Stage>
    </Container>
  );
}

// get window size
const useWindowDimensions = () => {
 
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
 
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return windowDimensions;
}

// get mouse location
const useMouseLocation = () => {
  const getMouseLocation = () => {
    return {
      clientX: 0,
      clientY: 0
    };
  }

  const [mouseLocation, setMouseLocation] = useState(getMouseLocation());
  useEffect(() => {
    const onMouseMove: { (event: MouseEvent): void } = (event: MouseEvent) => {
      setMouseLocation({
        clientX: event.clientX,
        clientY: event.clientY
      });
    }
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);
  return mouseLocation;
}

// get window size
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export default MainCanvas;
