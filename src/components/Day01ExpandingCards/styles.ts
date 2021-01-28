import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Content } from '.';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 90%;
  margin: 0 auto;
`;

export const cardModifiers = {
  isSelected: () => css`
    flex: 5;
    border-radius: 2rem;

    ${Title} {
      opacity: 1;
    }
  `,
};

export const Card = styled.article<Pick<Content, 'isSelected'>>`
  ${({ isSelected }) => css`
    flex: 1;
    margin: 10px;
    background-color: red;
    overflow: hidden;
    height: 80vh;
    border-radius: 4.8rem;
    cursor: pointer;
    position: relative;
    background: #f6f7f8;
    ${isSelected === true && cardModifiers.isSelected()};
    transition: all 0.5s ease-in;

    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }

      100% {
        background-position: 40rem 0;
      }
    }

    ${media.lessThan('small')`
      &:nth-child(4),
      &:nth-child(5) {
        display: none;
      }
    `}
  `}
`;

export const Title = styled.h3`
  position: absolute;
  bottom: 2rem;
  left: 1rem;
  font-size: 1.4rem;
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease-in 0.2s;
`;
