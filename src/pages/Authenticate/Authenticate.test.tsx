import { render } from "@testing-library/react";
import React from "react";
import Authenticate from "pages/Authenticate/Authenticate";
import userEvent, { TargetElement } from "@testing-library/user-event";
import * as UseAuthModule from "hooks/useAuth/useAuth";
import { createMemoryHistory, MemoryHistory } from "history";
import ReactRouter, { MemoryRouter, Router } from "react-router";

test("renders without crashing", () => {
  const { container } = render(<Authenticate />, { wrapper: MemoryRouter });
  expect(container).toBeInTheDocument();
});

test("renders an authenticate title", () => {
  const { container } = render(<Authenticate />, { wrapper: MemoryRouter });
  expect(container.querySelector("ion-title")).toHaveTextContent(
    /authenticate/i
  );
});

test("renders a login button", () => {
  const { container } = render(<Authenticate />, { wrapper: MemoryRouter });
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

    const { container } = render(<Authenticate />, { wrapper: MemoryRouter });

    const loginButton = container.querySelector("ion-button");
    userEvent.click(loginButton as TargetElement);

    expect(mockLogin).toHaveBeenCalledTimes(1);

    mockUseAuth.mockRestore();
  });

  describe("Redirection", () => {
    let history: MemoryHistory;
    let mockHistoryReplace: jest.SpyInstance;

    beforeEach(() => {
      history = createMemoryHistory();
      mockHistoryReplace = jest.spyOn(history, "replace");
    });

    afterEach(() => mockHistoryReplace.mockRestore());

    describe("Redirection origin not present", () => {
      test("should redirect user to /home", () => {
        const { container } = render(
          <Router history={history}>
            <Authenticate />
          </Router>
        );

        const loginButton = container.querySelector("ion-button");
        userEvent.click(loginButton as TargetElement);

        expect(mockHistoryReplace).toHaveBeenCalledWith("/home");
        expect(mockHistoryReplace).toHaveBeenCalledTimes(1);
      });
    });

    describe("Redirection origin is present", () => {
      test("should redirect user to origin of redirection", () => {
        const mockUseLocation = jest
          .spyOn(ReactRouter, "useLocation")
          .mockReturnValue({
            pathname: "/login",
            search: "",
            hash: "",
            state: { from: "/offers" },
          });

        const { container } = render(
          <Router history={history}>
            <Authenticate />
          </Router>
        );

        const loginButton = container.querySelector("ion-button");
        userEvent.click(loginButton as TargetElement);

        expect(mockHistoryReplace).toHaveBeenCalledWith("/offers");
        expect(mockHistoryReplace).toHaveBeenCalledTimes(1);

        mockUseLocation.mockRestore();
      });
    });
  });
});
