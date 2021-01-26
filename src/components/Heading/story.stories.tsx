import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Heading from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    title: 'React Boilerplate',
  },
  argTypes: {
    title: {
      type: {
        name: 'string',
      },
    },
  },
} as Meta;

export const Default: Story = (args) => <Heading {...args} />;
