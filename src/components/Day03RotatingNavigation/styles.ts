import styled, { css } from 'styled-components';
import { Props } from '.';

export const Wrapper = styled.div`
  min-height: 100vh;
  background: #333;
  position: relative;
  z-index: 20;
  overflow-x: hidden;
`;

export const Content = styled.div<Props>`
  ${({ activeMenu }) => css`
    background-color: #ffffe7;
    transform-origin: top left;
    transform: ${activeMenu ? 'rotate(-20deg)' : 'rotate(0deg)'};
    width: 100vw;
    min-height: 100vh;
    padding: 50px;
    transition: transform 0.3s linear;

    & > div {
      width: 80rem;
      margin: 0 auto;
      margin-top: 5rem;
    }

    img {
      max-width: 100%;
    }
  `}
`;

export const CircleContainer = styled.div<Props>`
  ${({ activeMenu }) => css`
    position: fixed;
    top: -10rem;
    left: -10rem;
    z-index: 10;

    & > div {
      position: relative;
      width: 20rem;
      height: 20rem;
      background-color: #ff7979;
      border-radius: 50%;
      transform: ${activeMenu ? 'rotate(-90deg)' : 'rotate(0)'};
      transition: transform 0.5s linear;

      button {
        cursor: pointer;
        position: absolute;
        top: 50%;
        left: 50%;
        height: 10rem;
        background: transparent;
        border: 0;
        color: #fff;
        outline: 0;
      }

      button#open {
        left: 65%;
      }

      button#close {
        top: 60%;
        transform: rotate(90deg);
        transform-origin: top left;
      }
    }
  `}
`;

export const Navigation = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  color: #fff;
`;
