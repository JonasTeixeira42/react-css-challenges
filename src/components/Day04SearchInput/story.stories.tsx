import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Day04SearchInput from '.';

export default {
  title: 'Day04SearchInput',
  component: Day04SearchInput,
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'fullscreen',
  },
} as Meta;

export const Default: Story = () => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ee82ee',
    }}
  >
    <Day04SearchInput />
  </div>
);
