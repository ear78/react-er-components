import React from 'react';
import { render, screen } from '@testing-library/react';
import Sections from './Sections';

describe('Sections component', () => {
  it('renders, creates component with data', () => {
    let data = [
      { id: 0, img: 'test-img', text: 'test-text' },
      { id: 1, img: 'test-img-2', text: 'test-text-2' },
      { id: 2, img: 'test-img-3', text: 'test-text-3' },
      { id: 3, img: 'test-img-4', text: 'test-text-4' },
      { id: 4, img: 'test-img-5', text: 'test-text-5' },
    ];
    let elementRefs = data.map(() => React.createRef());
    const { container } = render(<Sections ref={elementRefs} data={data} />);
    expect(container.querySelector('.BgImage')).toHaveStyle(
      `background-image: url(test-img);`
    );
    expect(screen.getByText('test-text')).toBeInTheDocument();
  });
});
