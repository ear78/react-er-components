import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { store } from './assets/js/lib/redux/store';
import App from './App';

test('renders app component with title and desc text', () => {
  const { getByText } = render(<Provider store={store}><App /></Provider>);
  const welcome = getByText(/Welcome to ER components!/i);
  expect(welcome).toBeInTheDocument();
});
