import React from 'react';
import { animated, config, useSpring } from 'react-spring';

import styled from 'styled-components';

const Container = styled(animated.div)`
  display: inline-block;
  padding: 3em;
  background: #c7d2fe66;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  background-clip: border-box;
  cursor: pointer;
`;

const StyledImg = styled.img`
  width: 200px;
  height: auto;
  border: 2px solid #000;
  border-radius: 50%;
`;

const StyledH1 = styled.h1`
  line-height: 1.5;
  letter-spacing: 1.5;
  font-family: 'Gilroy';
`;

const StyledH3 = styled.h3`
  line-height: 1.5;
  letter-spacing: 1.15;
  font-family: 'Gilroy';
  font-size: 20px;
`;

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

// eslint-disable-next-line
const ProjectCard = ({ projects }: any) => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: config.default }));

  const project = projects.data[0];

  return (
    <Container
      onMouseMove={({ clientX: x, clientY: y }: { clientX: number; clientY: number }) =>
        set({ xys: calc(x, y) })
      }
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
      }}
    >
      <StyledImg src={project.img} />
      <StyledH1>{project.title}</StyledH1>
      <StyledH3>
        {project.app_url} <br /> {project.description}
      </StyledH3>
    </Container>
  );
};

ProjectCard.propTypes = {
  xys: Array,
};

export default ProjectCard;
