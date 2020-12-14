import React from "react";
import { render } from "@testing-library/react";
import Login from "pages/Login/Login";
import userEvent, { TargetElement } from "@testing-library/user-event";
import AuthProvider from "components/AuthProvider/AuthProvider";
import ReactRouter, { MemoryRouter } from "react-router";
import * as UseAuthModule from "hooks/useAuth/useAuth";

test("renders a login title", () => {
  const { container } = render(<Login />);
  expect(container.querySelector("ion-title")).toHaveTextContent(/login/i);
});

test("renders a login button", () => {
  const { container } = render(<Login />);
  expect(container.querySelector("ion-button")).toHaveTextContent(/login/i);
});

describe("Clicking login button", () => {
  it("should call the login function", () => {
    const mockLogin = jest.fn();
    const mockUseAuth = jest.spyOn(UseAuthModule, "default").mockReturnValue({
      isAuthenticated: false,
      login: mockLogin,
      logout: jest.fn(),
    });

    const { container } = render(
      <AuthProvider>
        <MemoryRouter initialEntries={["/login"]}>
          <Login />
        </MemoryRouter>
      </AuthProvider>
    );

    userEvent.click(container.querySelector("ion-button") as TargetElement);

    expect(mockLogin).toHaveBeenCalledTimes(1);

    mockUseAuth.mockRestore();
  });

  it("should redirect user to home", () => {
    const mockHistory = { replace: jest.fn() };
    const mockUseHistory = jest
      .spyOn(ReactRouter, "useHistory")
      .mockReturnValue(mockHistory as any);

    const { container } = render(
      <MemoryRouter initialEntries={["/login"]}>
        <Login />
      </MemoryRouter>
    );
    userEvent.click(container.querySelector("ion-button") as TargetElement);

    expect(mockHistory.replace).toHaveBeenCalledWith("/home");
    expect(mockHistory.replace).toHaveBeenCalledTimes(1);

    mockUseHistory.mockRestore();
  });
});
