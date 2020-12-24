import { render } from "@testing-library/react";
import React from "react";
import Authenticate from "pages/Authenticate/Authenticate";
import userEvent, { TargetElement } from "@testing-library/user-event";
import * as UseAuthModule from "hooks/useAuth/useAuth";

test("renders without crashing", () => {
  render(<Authenticate />);
});

test("renders an authenticate title", () => {
  const { container } = render(<Authenticate />);
  expect(container.querySelector("ion-title")).toHaveTextContent(
    /authenticate/i
  );
});

test("renders a login button", () => {
  const { container } = render(<Authenticate />);
  expect(container.querySelector("ion-button")).toHaveTextContent(/login/i);
});

describe("Clicking login button", () => {
  test("should call the useAuth login function", () => {
    const mockLogin = jest.fn();
    const mockUseAuth = jest.spyOn(UseAuthModule, "default").mockReturnValue({
      isAuthenticated: false,
      login: mockLogin,
      logout: jest.fn(),
    });

    const { container } = render(<Authenticate />);

    const loginButton = container.querySelector("ion-button");
    userEvent.click(loginButton as TargetElement);

    expect(mockLogin).toHaveBeenCalledTimes(1);

    mockUseAuth.mockRestore();
  });
});
