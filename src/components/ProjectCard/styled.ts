import { animated } from 'react-spring';

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

const StyledH3 = styled.h3`
  line-height: 1.5;
  letter-spacing: 1.15;
  font-family: 'Gilroy-Regular';
  font-size: 20px;
  text-align: center;
  width: 36rem;
`;

const StyledP = styled.p`
  width: 18rem;
  font-family: 'Gilroy-Light';
  font-size: 18px;
  text-align: center;
`;

export { Container, StyledH1, StyledH3, StyledImg, StyledP };
