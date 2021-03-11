import React from "react";
import { render, screen } from "@testing-library/react";
import Offers from "pages/Offers/Offers";
import userEvent from "@testing-library/user-event";
import AuthProvider from "components/AuthProvider/AuthProvider";
import useAuth from "hooks/useAuth/useAuth";

const TestComponent: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated)
    return (
      <div data-testid="offers">
        <Offers />
      </div>
    );
  return null;
};

test("renders correctly", () => {
  const { container } = render(<Offers />);
  expect(container).toMatchSnapshot();
});

test("clicking log out button should call the logout function", () => {
  render(
    <AuthProvider initialAuthState={true}>
      <TestComponent />
    </AuthProvider>
  );

  const logoutButton = screen.getByText(/log out/i);
  userEvent.click(logoutButton);

  expect(screen.queryByTestId(/offers/i)).not.toBeInTheDocument();
});
