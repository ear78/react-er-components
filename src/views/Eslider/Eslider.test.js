import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Eslider from './Eslider';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders without crashing, passes array of data', () => {
  let data = [
    {image: 'something1.png', text: 'some1'},
    {image: 'something2.png', text: 'some2'},
    {image: 'something3.png', text: 'some3'},
    {image: 'something4.png', text: 'some4'}
  ]

  act(() => {
    render(<Eslider data={data}/>, container);
  })
  
});