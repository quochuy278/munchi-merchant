import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

describe("1st test", () => {
  it('Rendering App"', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(<App />).toBeCalled();
  });
});
