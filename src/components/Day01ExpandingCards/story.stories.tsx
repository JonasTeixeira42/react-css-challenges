import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Day01ExpandingCards from '.';

export default {
  title: 'Day01ExpandingCards',
  component: Day01ExpandingCards,
} as Meta;

export const Default: Story = () => <Day01ExpandingCards />;
