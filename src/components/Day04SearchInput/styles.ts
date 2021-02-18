import styled, { css } from 'styled-components';

type WrapperProps = {
  isActive: boolean;
};

const wrapperModifiers = {
  isActive: () => css`
    ${Input} {
      width: 20rem;
    }

    ${Button} {
      transform: translateX(19.8rem);
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ isActive }) => css`
    position: relative;
    display: flex;

    ${isActive && wrapperModifiers.isActive()};
  `}
`;

export const Input = styled.input`
  height: 5rem;
  outline: 0;
  font-size: 1.8rem;
  background-color: #fff;
  border: 0;
  padding: 1.5rem;
  width: 5rem;
  transition: width 0.3s ease;
`;

export const Button = styled.button`
  height: 5rem;
  width: 5rem;
  outline: 0;
  background-color: #fff;
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  transition: transform 0.3s ease;
`;
