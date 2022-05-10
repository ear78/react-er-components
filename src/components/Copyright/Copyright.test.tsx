import React from 'react';
import { render } from '@testing-library/react';
import Copyright from './Copyright';

test('renders copyright component with rights text and current dynamic year', () => {
  const d = new Date();
  const year = d.getFullYear();

  const { getByText } = render(<Copyright />);
  const allRights = getByText(`All Rights Reserved Elliot Richardson © ${year}`);
  expect(allRights).toBeInTheDocument();
});
