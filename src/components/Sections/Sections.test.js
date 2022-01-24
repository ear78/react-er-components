import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Sections from './Sections';

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

it('renders without crashing, passes refs, passes array of data', () => {
  let data = [0,1,2,3,4]
  let elementRefs = data.map(() => React.createRef());
  act(() => {
    render(<Sections ref={elementRefs} data={data}/>, container);
  })
  
  
});