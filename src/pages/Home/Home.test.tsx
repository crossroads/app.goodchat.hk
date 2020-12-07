import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

test("renders a home title", () => {
  const { container } = render(<Home />);
  expect(container.querySelector("ion-title")).toHaveTextContent(/home/i);
});

test("renders a log out button within a header", () => {
  const { container } = render(<Home />);
  expect(container.querySelector("ion-header ion-button")).toHaveTextContent(
    /log out/i
  );
});
