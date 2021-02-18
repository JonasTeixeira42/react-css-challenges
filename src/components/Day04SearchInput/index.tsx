import React, { useState, useCallback, useRef } from 'react';
import { Search } from '@styled-icons/bootstrap/';

import * as S from './styles';

const Day04SearchInput = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSearchInput = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  return (
    <S.Wrapper isActive={isActive}>
      <S.Input placeholder="Search..." />
      <S.Button onClick={toggleSearchInput}>
        <Search color="#333" size={24} />
      </S.Button>
    </S.Wrapper>
  );
};

export default Day04SearchInput;
