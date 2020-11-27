import React from "react";
import { screen, render } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});

test("renders an ion-router-outlet", () => {
  render(<App />);
  expect(screen.getByTestId("ion-router-outlet")).toBeInTheDocument();
});
