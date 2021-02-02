import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30rem;
  position: relative;
`;

type LineProps = {
  lineLength: number;
};

export const Line = styled.div<LineProps>`
  ${({ lineLength }) => css`
    width: calc(33% * ${lineLength});
    height: 0.2rem;
    background-color: orange;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
    transition: width 0.5s ease-in-out;
  `}
`;

type CircleProps = {
  isActive: boolean;
};

const circlesModifiers = {
  isActive: () => css`
    background-color: orange;
  `,
};

export const Circle = styled.div<CircleProps>`
  ${({ isActive }) => css`
    width: 1rem;
    height: 1rem;
    background: white;
    border-radius: 50%;
    border: 1px solid orange;

    ${isActive && circlesModifiers.isActive()}
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 1rem;
`;

export const Button = styled.button`
  margin-left: 0.5rem;
  transform: skewX(-30deg);
  outline: 0;
  border: 0;
  background: orange;
  color: #333;
  padding: 0.3rem 0.7rem;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: #222;
    color: orange;

    & > svg {
      color: orange;
    }
  }

  svg {
    transform: skewX(30deg);
    color: #111;
  }
`;
