import React from "react";
import { render, screen } from "@testing-library/react";
import { testPageHeader } from "test-utils/matchers";
import Menu from "pages/Menu/Menu";
import userEvent from "@testing-library/user-event";
import AuthProvider from "components/AuthProvider/AuthProvider";
import { renderPage } from "test-utils/renderers";
import useAuth from "hooks/useAuth/useAuth";

test("renders without crashing", async () => {
  const { container } = await renderPage('/menu');
  expect(container).toBeInTheDocument();
});

describe("Menu page header", () =>
  testPageHeader({
    title: "Menu",
    withBackButton: false,
    element: <Menu />,
  }));

test('Should contain a log out button', async () => {
  await renderPage('/menu')
  expect(screen.getByText(/log out/i)).toBeInTheDocument()
});

describe('log out button', () => {
  test("should log user out on click", async () => {
    let isAuthenticated: boolean | undefined
    const TestComponent = () => {
      isAuthenticated = useAuth().isAuthenticated
      return <Menu />
    }

    render(
      <AuthProvider initialAuthState={true}>
        <TestComponent />
      </AuthProvider>
    )

    expect(isAuthenticated).toBe(true)

    const logoutButton = screen.getByText(/log out/i)
    userEvent.click(logoutButton);

    expect(isAuthenticated).toBe(false)
  })
});
