import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Day02ProgressSteps from '.';

export default {
  title: 'Day02ProgressSteps',
  component: Day02ProgressSteps,
} as Meta;

export const Default: Story = () => (
  <div
    style={{
      height: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Day02ProgressSteps />
  </div>
);
