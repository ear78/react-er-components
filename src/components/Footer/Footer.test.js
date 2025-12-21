import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { store } from '../../assets/js/lib/redux/store';
import Footer from './Footer';

test('Renders Footer component', () => {
  const { container } = render(<Provider store={store}><Footer /></Provider>);
  const footerClass = container.getElementsByClassName('Footer');
  expect(footerClass.length).toBe(1);
});
