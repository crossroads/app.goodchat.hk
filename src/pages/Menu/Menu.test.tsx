import React from "react";
import { render, screen } from "@testing-library/react";
import { testPageHeader } from "test-utils/matchers";
import Menu from "pages/Menu/Menu";
import userEvent, { TargetElement } from "@testing-library/user-event";
import AuthProvider from "components/AuthProvider/AuthProvider";
import { renderPage } from "test-utils/renderers";
import useAuth from "hooks/useAuth/useAuth";
import { ionFireEvent } from "@ionic/react-test-utils";
import i18n from "i18n/i18n";
import { act } from "react-dom/test-utils";

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

test('renders a selector to select language', async () => {
  await renderPage('/menu')
  expect(screen.getByText(/select language/i)).toBeInTheDocument()
})

describe('language selector', () => {
  afterEach(() => {
    // reset lang back to default
    act(() => {
      i18n.changeLanguage('en')
    })
  })

  it('defaults to the selected I18n language', async () => {
    const { container } = await renderPage('/menu')

    expect(container.querySelector('ion-select'))
      .toHaveAttribute('value', 'en')

    ionFireEvent.ionChange(
      container.querySelector('ion-select') as TargetElement,  
      'zh-TW'
    )

    expect(container.querySelector('ion-select'))
      .toHaveAttribute('value', "zh-TW")
  })

  it('should allow the user to change the language', async () => {
    const { container } = await renderPage('/menu')

    expect(container.querySelector('ion-select'))
      .toHaveAttribute('value', "en")

    ionFireEvent.ionChange(
      container.querySelector('ion-select') as TargetElement, 
      'zh-TW'
    )

    expect(container.querySelector('ion-select'))
      .toHaveAttribute('value', "zh-TW")
  });
});
