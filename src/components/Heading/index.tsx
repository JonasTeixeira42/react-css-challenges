import React from 'react';

import * as S from './styles';

const Heading = ({ title = 'Hello World' }) => {
  return <S.Wrapper>{title}</S.Wrapper>;
};

export default Heading;
