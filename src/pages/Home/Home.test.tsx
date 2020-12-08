import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import AuthContext from "../../context/AuthContext";
import userEvent, { TargetElement } from "@testing-library/user-event";

test("renders a home title", () => {
  const { container } = render(<Home />);
  expect(container.querySelector("ion-title")).toHaveTextContent(/home/i);
});

test("renders a log out button within a header", () => {
  const { container } = render(<Home />);
  expect(container.querySelector("ion-header ion-button")).toHaveTextContent(
    /log out/i
  );
});

test("clicking log out button logs user out", () => {
  const mockSetIsAuthenticated = jest.fn();
  render(
    <AuthContext.Provider
      value={{
        isAuthenticated: true,
        setIsAuthenticated: mockSetIsAuthenticated,
      }}
    >
      <Home />
    </AuthContext.Provider>
  );

  const logoutButton = screen.getByText(/log out/i);
  userEvent.click(logoutButton as TargetElement);

  expect(mockSetIsAuthenticated).toHaveBeenCalledWith(false);
  expect(mockSetIsAuthenticated).toHaveBeenCalledTimes(1);
});
