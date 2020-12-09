import React from "react";
import { render } from "@testing-library/react";
import Login from "pages/Login/Login";
import userEvent, { TargetElement } from "@testing-library/user-event";
import AuthContext from "context/AuthContext";
import ReactRouter, { MemoryRouter } from "react-router";

test("renders a login title", () => {
  const { container } = render(<Login />);
  expect(container.querySelector("ion-title")).toHaveTextContent(/login/i);
});

test("renders a login button", () => {
  const { container } = render(<Login />);
  expect(container.querySelector("ion-button")).toHaveTextContent(/login/i);
});

describe("Clicking login button", () => {
  it("should set authentication state to true", () => {
    const mockSetIsAuthenticated = jest.fn();
    const { container } = render(
      <AuthContext.Provider
        value={{
          isAuthenticated: false,
          setIsAuthenticated: mockSetIsAuthenticated,
        }}
      >
        <MemoryRouter initialEntries={["/login"]}>
          <Login />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    userEvent.click(container.querySelector("ion-button") as TargetElement);

    expect(mockSetIsAuthenticated).toHaveBeenCalledWith(true);
    expect(mockSetIsAuthenticated).toHaveBeenCalledTimes(1);
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

  it("should set auth state in localStorage", () => {
    window.localStorage.clear();

    const { container } = render(
      <MemoryRouter initialEntries={["/login"]}>
        <Login />
      </MemoryRouter>
    );

    userEvent.click(container.querySelector("ion-button") as TargetElement);

    expect(window.localStorage.getItem("authenticated")).toBeTruthy();
  });
});
