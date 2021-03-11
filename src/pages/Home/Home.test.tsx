import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "pages/Home/Home";
import AuthProvider from "components/AuthProvider/AuthProvider";
import userEvent, { TargetElement } from "@testing-library/user-event";
import useAuth from "hooks/useAuth/useAuth";

const TestComponent: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated)
    return (
      <div data-testid="home">
        <Home />
      </div>
    );
  return null;
};

test("renders correctly", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});

test("clicking log out button should log user out", () => {
  render(
    <AuthProvider initialAuthState={true}>
      <TestComponent />
    </AuthProvider>
  );

  const logoutButton = screen.getByText(/log out/i);
  userEvent.click(logoutButton as TargetElement);

  expect(screen.queryByTestId(/home/i)).not.toBeInTheDocument();
});
