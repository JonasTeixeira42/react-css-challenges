import React from 'react';
import { render, screen } from '@testing-library/react';

import Day03RotatingNavigation from '.';

describe('<Day03RotatingNavigation />', () => {
  it('should render the heading', () => {
    const { container } = render(<Day03RotatingNavigation />);

    expect(screen.getByRole('heading', { name: /Day03RotatingNavigation/i }),).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
