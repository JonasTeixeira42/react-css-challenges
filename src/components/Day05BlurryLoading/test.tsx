import React from 'react';
import { render, screen } from '@testing-library/react';

import Day05BlurryLoading from '.';

describe('<Day05BlurryLoading />', () => {
  it('should render the heading', () => {
    const { container } = render(<Day05BlurryLoading />);

    expect(screen.getByRole('heading', { name: /Day05BlurryLoading/i }),).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
