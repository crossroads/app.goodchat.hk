import React from "react";
import { render, screen } from "@testing-library/react";
import Offers from "pages/Offers/Offers";
import userEvent from "@testing-library/user-event";
import AuthProvider from "components/AuthProvider/AuthProvider";
import * as UseAuthModule from "hooks/useAuth/useAuth";

test("renders an offers title", () => {
  const { container } = render(<Offers />);
  expect(container.querySelector("ion-title")).toHaveTextContent(/offers/i);
});

test("renders a log out button in the header", () => {
  const { container } = render(<Offers />);
  expect(container.querySelector("ion-header ion-button")).toHaveTextContent(
    /log out/i
  );
});

test("clicking log out button should call the logout function", () => {
  const mockLogout = jest.fn();
  const mockUseAuth = jest.spyOn(UseAuthModule, "default").mockReturnValue({
    isAuthenticated: true,
    login: jest.fn(),
    logout: mockLogout,
  });

  render(
    <AuthProvider initialAuthState={true}>
      <Offers />
    </AuthProvider>
  );

  const logoutButton = screen.getByText(/log out/i);
  userEvent.click(logoutButton);

  expect(mockLogout).toHaveBeenCalledTimes(1);

  mockUseAuth.mockRestore();
});
