import React from "react";
import { render } from "@testing-library/react";
import Login from "pages/Login/Login";

test("renders a login title", () => {
  const { container } = render(<Login />);
  expect(container.querySelector("ion-title")).toHaveTextContent(/login/i);
});

test("renders a go to authenticate button", () => {
  const { container } = render(<Login />);
  expect(container.querySelector("ion-button")).toHaveTextContent(
    /go to authenticate/i
  );
});

test("go to authenticate button should have a link to /authenticate", () => {
  const { container } = render(<Login />);
  expect(container.querySelector("ion-button")).toHaveAttribute(
    "href",
    "/authenticate"
  );
});
