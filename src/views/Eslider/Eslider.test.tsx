import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { store } from '../../assets/js/lib/redux/store';
import Eslider from './Eslider';
import '@testing-library/jest-dom';

type IData = {
  id: number;
  image: string;
  text: string;
};

const data: IData[] = [
  { id: 1, image: 'something1.png', text: 'some1' },
  { id: 2, image: 'something2.png', text: 'some2' },
  { id: 3, image: 'something3.png', text: 'some3' },
  { id: 4, image: 'something4.png', text: 'some4' },
];

it('renders without crashing, passes array of data and prints it', () => {
  const { getByText } = render(<Provider store={store}><Eslider data={data} /></Provider>);
  expect(getByText('some2')).toBeInTheDocument();
});
