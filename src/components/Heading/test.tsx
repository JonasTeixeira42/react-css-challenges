import React from 'react';
import { render, screen } from '@testing-library/react';

import Heading from '.';

describe('<Heading />', () => {
  it('should render the heading', () => {
    const { container } = render(<Heading />);

    expect(
      screen.getByRole('heading', { name: /hello world/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /hello world/i }),
    ).toHaveStyleRule('color', '#333');

    expect(container.firstChild).toMatchSnapshot();
  });
});
