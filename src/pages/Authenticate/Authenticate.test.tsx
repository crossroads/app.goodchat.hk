import { render } from "@testing-library/react";
import React from "react";
import Authenticate from "pages/Authenticate/Authenticate";

test("renders without crashing", () => {
  render(<Authenticate />);
});

test("renders an authenticate title", () => {
  const { container } = render(<Authenticate />);
  expect(container.querySelector("ion-title")).toHaveTextContent(
    /authenticate/i
  );
});
