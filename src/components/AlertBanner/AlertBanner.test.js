import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AlertBanner from './AlertBanner';

describe('AlertBanner', () => {
  it('renders children correctly', () => {
    render(
      <AlertBanner>
        <p>This is an alert message.</p>
      </AlertBanner>
    );

    const alertElement = screen.getByTestId('alert-banner');
    expect(alertElement).toBeInTheDocument();
  });

  it('applies dark mode class when isDarkMode is true', () => {
    const { container } = render(
      <AlertBanner isDarkMode={true}>
        <p>Dark mode alert message.</p>
      </AlertBanner>
    );

    expect(container.firstChild).toHaveClass('Dark');
  });
});