import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Day03RotatingNavigation, { Props } from '.';

export default {
  title: 'Day03RotatingNavigation',
  component: Day03RotatingNavigation,
} as Meta;

export const Default: Story<Props> = (args) => (
  <Day03RotatingNavigation {...args} />
);

Default.parameters = {
  layout: 'fullscreen',
};
