import { render } from "@testing-library/react";
import React from "react";
import Authenticate from "pages/Authenticate/Authenticate";
import userEvent, { TargetElement } from "@testing-library/user-event";
import * as UseAuthModule from "hooks/useAuth/useAuth";
import { createMemoryHistory } from "history";
import { MemoryRouter, Router } from "react-router";

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

    const { container } = render(<Authenticate />, { wrapper: MemoryRouter });

    const loginButton = container.querySelector("ion-button");
    userEvent.click(loginButton as TargetElement);

    expect(mockLogin).toHaveBeenCalledTimes(1);

    mockUseAuth.mockRestore();
  });

  test("should redirect user to /home", () => {
    const history = createMemoryHistory();
    const mockHistoryReplace = jest.spyOn(history, "replace");

    const { container } = render(
      <Router history={history}>
        <Authenticate />
      </Router>
    );

    const loginButton = container.querySelector("ion-button");
    userEvent.click(loginButton as TargetElement);

    expect(mockHistoryReplace).toHaveBeenCalledWith("/home");
    expect(mockHistoryReplace).toHaveBeenCalledTimes(1);

    mockHistoryReplace.mockRestore();
  });
});
