import React from "react";
import { render } from "@testing-library/react";
import Login from "pages/Login/Login";
import userEvent, { TargetElement } from "@testing-library/user-event";
import ReactRouter, { MemoryRouter } from "react-router";
import * as UseAuthModule from "hooks/useAuth/useAuth";

test("renders a login title", () => {
  const { container } = render(<Login />, { wrapper: MemoryRouter });
  expect(container.querySelector("ion-title")).toHaveTextContent(/login/i);
});

test("renders a login button", () => {
  const { container } = render(<Login />, { wrapper: MemoryRouter });
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

    const { container } = render(<Login />, { wrapper: MemoryRouter });

    userEvent.click(container.querySelector("ion-button") as TargetElement);

    expect(mockLogin).toHaveBeenCalledTimes(1);

    mockUseAuth.mockRestore();
  });

  describe("Redirection", () => {
    let mockHistory: { replace: jest.Mock };
    let mockUseHistory: jest.SpyInstance;

    beforeAll(() => {
      mockHistory = { replace: jest.fn() };
      mockUseHistory = jest
        .spyOn(ReactRouter, "useHistory")
        .mockReturnValue(mockHistory as any);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    afterAll(() => {
      mockUseHistory.mockRestore();
    });

    describe("User directly arrived at login page", () => {
      it("should redirect user to home", () => {
        const { container } = render(<Login />, { wrapper: MemoryRouter });

        userEvent.click(container.querySelector("ion-button") as TargetElement);

        expect(mockHistory.replace).toHaveBeenCalledWith("/home");
        expect(mockHistory.replace).toHaveBeenCalledTimes(1);
      });
    });

    describe("User was redirected to login", () => {
      it("should redirect user back to the origin of redirection", () => {
        const mockUseLocation = jest
          .spyOn(ReactRouter, "useLocation")
          .mockReturnValue({
            pathname: "/login",
            search: "",
            hash: "",
            state: { from: "/offers" },
          });

        const { container } = render(<Login />, { wrapper: MemoryRouter });

        userEvent.click(container.querySelector("ion-button") as TargetElement);

        expect(mockHistory.replace).toHaveBeenCalledWith("/offers");
        expect(mockHistory.replace).toHaveBeenCalledTimes(1);

        mockUseLocation.mockRestore();
      });
    });
  });
});
