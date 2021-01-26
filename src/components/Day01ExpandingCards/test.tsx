import React from 'react';
import { render, screen } from '@testing-library/react';

import Day01ExpandingCards from '.';

describe('<Day01ExpandingCards />', () => {
  it('should render the heading', () => {
    render(<Day01ExpandingCards />);

    expect(
      screen.getByRole('heading', { name: /Day01ExpandingCards/i }),
    ).toBeInTheDocument();
  });
});
