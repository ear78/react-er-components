import React from 'react';
import { render, screen } from '@testing-library/react';
import Copyright from './Copyright';

test('renders copyright component with rights text and current dynamic year', () => {
  const d = new Date();
  const year = d.getFullYear();

  render(<Copyright />);
  const allRights = screen.getByTestId('copyright-component');
  expect(allRights.innerHTML).toBe('<p>All Rights Reserved Elliot Richardson © 2026</p>');
});
