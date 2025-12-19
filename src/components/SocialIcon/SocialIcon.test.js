import { createRoot } from "react-dom/client";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react";
import SocialIcon from './SocialIcon';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  const root = createRoot(container);
  root.unmount();
  container.remove();
  container = null;
});

it('renders when passing a string to href', () => {
  act(() => {
    const root = createRoot(container);
    root.render(<SocialIcon path="https://helloworld.com" platform="twitter-square"/>);
  });
  expect(container.firstChild.href).toBe("https://helloworld.com/");
  
});