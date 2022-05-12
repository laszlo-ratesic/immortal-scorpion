import { FC, ReactElement } from 'react';
import { animated, config, useSpring } from 'react-spring';

import styled from 'styled-components';

const Container = styled(animated.div)`
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2em;
  background: #c7d2fe66;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  background-clip: border-box;
  cursor: pointer;
  transform: translateZ(0, 0, 0);
`;

const StyledImg = styled.img`
  width: 90px;
  height: auto;
  /* border: 2px solid #000; */
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const StyledH1 = styled.h1`
  line-height: 1.5;
  letter-spacing: 1.5;
  font-family: 'Gilroy-Medium';
  text-align: center;
`;

// const StyledH3 = styled.h3`
//   line-height: 1.5;
//   letter-spacing: 1.15;
//   font-family: 'Gilroy-Regular';
//   font-size: 20px;
// `;

const StyledP = styled.p`
  width: 18rem;
  font-family: 'Gilroy-Light';
  font-size: 18px;
  text-align: center;
`;

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

interface IProps {
  title: string;
  description?: string;
  app_url?: string;
  repo_link?: string;
  img?: string;
  xys?: Array<number>;
}

const ProjectCard: FC<IProps> = (currentProject: IProps): ReactElement => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: config.default }));

  const { title, description, app_url, img } = currentProject;

  return (
    <Container
      onMouseMove={({ clientX: x, clientY: y }: { clientX: number; clientY: number }) =>
        set({ xys: calc(x, y) })
      }
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
      }}
      href={app_url}
    >
      <StyledImg src={img} />
      <StyledH1>{title}</StyledH1>
      <StyledP>{description}</StyledP>
    </Container>
  );
};

export default ProjectCard;
