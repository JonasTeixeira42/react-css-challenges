import React, { useState, useCallback } from 'react';
import { ArrowRight } from '@styled-icons/evaicons-solid/ArrowRight';
import { ArrowLeft } from '@styled-icons/evaicons-solid/ArrowLeft';

import * as S from './styles';

export type ProgressCircle = {
  active: boolean;
};

const Day02ProgressSteps = () => {
  const [circles, setCircles] = useState([true, false, false, false]);
  const [lineLength, setLineLength] = useState(0);

  const changeLineLength = useCallback(
    (direction) => {
      if (
        (direction === 'next' && lineLength + 1 > circles.length - 1) ||
        (direction === 'prev' && lineLength - 1 < 0)
      ) {
        return;
      }

      setLineLength(direction === 'next' ? lineLength + 1 : lineLength - 1);
    },
    [lineLength, circles],
  );

  return (
    <S.Wrapper>
      <S.ProgressBar>
        <S.Line lineLength={lineLength} />
        {circles.map((circle, index) => {
          return <S.Circle key={index} isActive={circle} />;
        })}
      </S.ProgressBar>
      <S.ButtonWrapper>
        <S.Button onClick={() => changeLineLength('next')}>
          <ArrowRight size={20} />
        </S.Button>
        <S.Button onClick={() => changeLineLength('prev')}>
          <ArrowLeft size={20} />
        </S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default Day02ProgressSteps;
