import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { store } from './assets/js/lib/redux/store';
import App from './App';

beforeEach(() => {
  // Mock window.scrollTo
  window.scrollTo = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('App component', () => {
  it('renders app component', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const welcome = screen.getByTestId('app-component');
    expect(welcome).toBeInTheDocument();
  });
});
