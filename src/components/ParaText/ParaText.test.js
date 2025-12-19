import { createRoot } from "react-dom/client";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react";
import ParaText from './ParaText';

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

it('renders when passing a string and when passing an empty string', () => {
  act(() => {
    const root = createRoot(container);
    root.render(<ParaText>Hello World!</ParaText>);
  });
  expect(container.textContent).toBe("Hello World!");

  act(() => {
    const root = createRoot(container);
    root.render(<ParaText></ParaText>);
  });
  expect(container.textContent).toBe("");
  
});