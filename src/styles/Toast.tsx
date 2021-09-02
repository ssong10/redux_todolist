import { keyframes, css, FlattenSimpleInterpolation } from 'styled-components';

const fadeIn = (count: number) => keyframes`
  from {
    transform: translateY(${-46}px);
  }
  to {
    transform:translateY(${count}px);
  }
`;

const fadeOut = keyframes`
  from {
    opacity:1
  }
  to {
    opacity:0
  }
`;

export const MoveDown = (count: number): FlattenSimpleInterpolation => css`
  animation: ${fadeIn(count)} 0.5s linear;
`;
export const FadeOut = css`
  animation: ${fadeOut} 1.5s linear 3.3s forwards;
`;
