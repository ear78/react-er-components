import React from 'react';
import { Provider } from 'react-redux';
import { render, act } from '@testing-library/react';
import { store } from '../../assets/js/lib/redux/store';
import Eslider from './Eslider';

const data = [
  { id: 1, image: 'something1.png', text: 'some1' },
  { id: 2, image: 'something2.png', text: 'some2' },
  { id: 3, image: 'something3.png', text: 'some3' },
  { id: 4, image: 'something4.png', text: 'some4' },
];

describe('Eslider component', () => {
  it('renders component with images and text', async () => {
    const { container } = render(
      <Provider store={store}>
        <Eslider data={data} />
      </Provider>
    );

    let slide;
    let overlaytext;
    await act(() => {
      slide = container.firstChild.querySelector('.Slide');
      overlaytext = container.firstChild.querySelector('.OverlayText');
    });

    expect(slide).toHaveStyle(
      `background-image: url(something1.png); margin-right: 2%;`
    );

    expect(overlaytext).toContainHTML('<div class="OverlayText">some1</div>');
  });
});
