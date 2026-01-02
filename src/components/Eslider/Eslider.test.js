import React from 'react';
import { Provider } from 'react-redux';
import { render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { store } from '../../assets/js/lib/redux/store';
import Eslider from './Eslider';

const data = [
  { id: 1, image: 'something1.png', text: 'some1' },
  { id: 2, image: 'something2.png', text: 'some2' },
  { id: 3, image: 'something3.png', text: 'some3' },
  { id: 4, image: 'something4.png', text: 'some4' },
];

beforeEach(() => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});

afterEach(() => {
  jest.clearAllMocks();
});

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

  it('has disabled button on init', () => {
    const { container } = render(
      <Provider store={store}>
        <Eslider data={data} />
      </Provider>
    );

    expect(container.querySelector('button')).toHaveAttribute('disabled');
  });

  it('has disabled right button if end of scroll', async () => {
    const { container } = render(
      <Provider store={store}>
        <Eslider data={data} />
      </Provider>
    );

    await userEvent.click(container.querySelectorAll('button')[1]);
    expect(container.querySelectorAll('button')[0]).toHaveAttribute('disabled');
  });

  it('hides buttons if !areButtonsEnabled', () => {
    const { container } = render(
      <Provider store={store}>
        <Eslider data={data} areButtonsEnabled={false} />
      </Provider>
    );

    expect(container.querySelector('.SlideBtns')).not.toBeInTheDocument();
  });

  it('should populate a string id on outer wrapper passed as carouselId prop', () => {
    const { container } = render(
      <Provider store={store}>
        <Eslider data={data} carouselId='hello-world' />
      </Provider>
    );

    expect(container.firstChild).toHaveAttribute('id', 'hello-world');
  });
});
