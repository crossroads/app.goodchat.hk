import React from "react";
import { render } from "@testing-library/react";
import Login from "./Login";

test("renders a login title", () => {
  const { container } = render(<Login />);
  const title = container.getElementsByTagName("ion-title")[0];
  expect(title).toHaveTextContent(/login/i);
});
