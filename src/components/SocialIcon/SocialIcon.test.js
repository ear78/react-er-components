import React from 'react';
import { render } from '@testing-library/react';
import SocialIcon from './SocialIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

it('renders href when passing a string to href', () => {
  const { container } = render(
    <SocialIcon path='https://helloworld.com/'>
      <FontAwesomeIcon icon={faTwitterSquare} />
    </SocialIcon>
  );
  expect(container.firstChild.href).toBe('https://helloworld.com/');
});