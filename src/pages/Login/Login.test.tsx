import React from "react";
import { render } from "@testing-library/react";
import Login from "./Login";
import userEvent, { TargetElement } from "@testing-library/user-event";
import AuthContext from "../../context/AuthContext";

test("renders a login title", () => {
  const { container } = render(<Login />);
  expect(container.querySelector("ion-title")).toHaveTextContent(/login/i);
});

test("renders a login button", () => {
  const { container } = render(<Login />);
  expect(container.querySelector("ion-button")).toHaveTextContent(/login/i);
});

test("clicking the login button logs user in", () => {
  const mockSetIsAuthenticated = jest.fn();
  const { container } = render(
    <AuthContext.Provider
      value={{
        isAuthenticated: false,
        setIsAuthenticated: mockSetIsAuthenticated,
      }}
    >
      <Login />
    </AuthContext.Provider>
  );

  userEvent.click(container.querySelector("ion-button") as TargetElement);

  expect(mockSetIsAuthenticated).toHaveBeenCalledWith(true);
  expect(mockSetIsAuthenticated).toHaveBeenCalledTimes(1);
});
