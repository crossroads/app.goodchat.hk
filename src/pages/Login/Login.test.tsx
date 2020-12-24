import React from "react";
import { render } from "@testing-library/react";
import Login from "pages/Login/Login";

test("renders a login title", () => {
  const { container } = render(<Login />);
  expect(container.querySelector("ion-title")).toHaveTextContent(/login/i);
});
