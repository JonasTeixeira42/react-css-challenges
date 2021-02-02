import React from 'react';
import { render, screen } from '@testing-library/react';

import Day02ProgressSteps from '.';

describe('<Day02ProgressSteps />', () => {
  it('should render the heading', () => {
    const { container } = render(<Day02ProgressSteps />);

    expect(screen.getByRole('heading', { name: /Day02ProgressSteps/i }),).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
