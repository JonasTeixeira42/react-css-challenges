import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Day01ExpandingCards from '.';
import items from './mock';

export default {
  title: 'Day01ExpandingCards',
  component: Day01ExpandingCards,
  args: {
    cards: items,
  },
} as Meta;

export const Default: Story = (args) => (
  <Day01ExpandingCards cards={items} {...args} />
);
