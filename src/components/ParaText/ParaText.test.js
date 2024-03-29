import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ParaText from './ParaText';

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

it('renders when passing a string and when passing an empty string', () => {
  act(() => {
    render(<ParaText>Hello World!</ParaText>, container);
  });
  expect(container.textContent).toBe("Hello World!");

  act(() => {
    render(<ParaText></ParaText>, container);
  });
  expect(container.textContent).toBe("");
  
});