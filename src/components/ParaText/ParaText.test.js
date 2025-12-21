import React from 'react';
import { act, screen, render } from '@testing-library/react';
import ParaText from './ParaText';

describe('ParaText component', () => {
  it('renders when passing a string and when passing an empty string', () => {
    render(<ParaText>Hello World!</ParaText>);
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
