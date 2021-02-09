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

    h1 {
      font-size: 2.6rem;
    }

    h3 {
      font-size: 0.9rem;
      margin-bottom: 0.3rem;
    }

    & div small {
      font-size: 1rem;
    }

    & div p {
      font-size: 1.4rem;
      margin: 1rem 0;
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

const navModifiers = {
  activeMenu: () => css`
    opacity: 1;
    transform: translateX(0);
  `,
};

export const Navigation = styled.nav<Props>`
  ${({ activeMenu }) => css`
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    z-index: 10;
    color: #fff;
    opacity: 0;
    transform: translateX(-3rem);
    transition: all 0.3s linear 0.2s;

    ${activeMenu && navModifiers.activeMenu()}

    ul {
      list-style: none;
      font-size: 2rem;

      li {
        margin-bottom: 1rem;
        cursor: pointer;
      }

      li + li {
        margin-left: 1.5rem;
      }

      li + li + li {
        margin-left: 3rem;
      }
    }
  `}
`;
