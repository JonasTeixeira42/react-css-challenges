import React, { useCallback, useState } from 'react';

import * as S from './styles';

export type Content = {
  image: string;
  title: string;
  isSelected: boolean;
};

export type CardProps = {
  cards: Content[];
};

const Day01ExpandingCards = ({ cards }: CardProps) => {
  const [items, setItems] = useState<Content[]>(cards);

  const removeSelect = useCallback(() => {
    const newArray = [...items];
    newArray.forEach((item) => (item.isSelected = false));

    setItems([...newArray]);
  }, [items]);

  const selectCard = useCallback(
    (id) => {
      removeSelect();

      const data = [...items];
      data[id].isSelected = !data[id].isSelected;

      setItems(data);
    },
    [items, removeSelect],
  );

  return (
    <S.Wrapper>
      {items.map((card, id) => (
        <S.Card
          key={id}
          onClick={() => selectCard(id)}
          isSelected={card.isSelected}
        >
          <img src={card.image} alt={card.title} />
          <S.Title>{card.title}</S.Title>
        </S.Card>
      ))}
    </S.Wrapper>
  );
};

export default Day01ExpandingCards;
