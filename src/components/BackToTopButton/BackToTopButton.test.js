import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BackToTopButton from './BackToTopButton';

describe('BackToTopButton', () => {
  beforeEach(() => {
    // Mock window.scrollTo
    window.scrollTo = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the button', () => {
    render(<BackToTopButton />);
    const button = screen.getByRole('button', { name: /back to top/i });
    expect(button).toBeInTheDocument();
  });

  it('has aria-label', () => {
    render(<BackToTopButton />);
    const button = screen.getByRole('button', { name: /back to top/i });
    expect(button).toHaveAttribute('aria-label', 'Back to top');
  });

  it('has type="button"', () => {
    render(<BackToTopButton />);
    const button = screen.getByRole('button', { name: /back to top/i });
    expect(button).toHaveAttribute('type', 'button');
  });

  it('renders the chevron up icon', () => {
    const { container } = render(<BackToTopButton />);
    const button = screen.getByRole('button', { name: /back to top/i });
    const icon = button.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('scrolls to top when clicked', () => {
    render(<BackToTopButton />);
    const button = screen.getByRole('button', { name: /back to top/i });

    fireEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });

  it('applies the correct CSS class', () => {
    render(<BackToTopButton />);
    const button = screen.getByRole('button', { name: /back to top/i });
    expect(button.className).toContain('BackToTop');
  });
});
