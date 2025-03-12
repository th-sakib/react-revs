import App from "./App";
import React from "./react";
import { render } from "./react-dom";

export function createElement(type, props, ...children) {
  const reactElement = {
    type,
    props: {
      ...props,
    },
  };

  if (children.length) reactElement.props.children = children;

  return reactElement;
}

// let currentState;

const states = [];
let currentIndex = 0;

export function useState(initialState) {
  // currentState = currentState || initialState
  states[currentIndex] = states[currentIndex] ?? initialState;
  const localIndex = currentIndex;

  const setState = (newState) => {
    // currentState = newState;
    states[localIndex] = newState;
    currentIndex = 0;
    render(<App />, document.getElementById("root"));
  };

  currentIndex++;

  return [states[localIndex], setState];
}

export default {
  createElement,
  useState,
};
