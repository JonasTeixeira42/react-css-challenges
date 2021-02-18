import React from 'react';
import { render, screen } from '@testing-library/react';

import Day04SearchInput from '.';

describe('<Day04SearchInput />', () => {
  it('should render the heading', () => {
    const { container } = render(<Day04SearchInput />);

    expect(screen.getByRole('heading', { name: /Day04SearchInput/i }),).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
