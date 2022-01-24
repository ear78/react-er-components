import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import SocialIcon from './SocialIcon';

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

it('renders when passing a string to href', () => {
  act(() => {
    render(<SocialIcon path="https://helloworld.com" platform="twitter-square"/>, container);
  });
  expect(container.firstChild.href).toBe("https://helloworld.com/");
  
});