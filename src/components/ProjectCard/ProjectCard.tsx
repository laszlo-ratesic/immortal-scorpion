import { FC, ReactElement } from 'react';
import { config, useSpring } from 'react-spring';

import { Container, StyledH1, StyledImg, StyledP } from './styled';

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
