import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('Renders Footer component', () => {
  const { container } = render(<Footer />);
  const footerClass = container.getElementsByClassName('Footer');
  expect(footerClass.length).toBe(1);
});
