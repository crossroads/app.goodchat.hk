import userEvent from "@testing-library/user-event";
import AuthProvider from "components/AuthProvider/AuthProvider";
import useAuth from "hooks/useAuth/useAuth";
import { screen } from "@testing-library/react";
import { React } from "@ungap/global-this";
import { renderWithAct } from "test-utils/renderers";

const expectToBeOnPage = (
  container: HTMLElement,
  myPath: string,
  expectedPage: string,
  expectedPath?: string
) => {
  expect(myPath).toEqual(expectedPath ?? `/${expectedPage}`);
  expect(container.querySelector("ion-title")).toHaveTextContent(
    new RegExp(expectedPage, "i")
  );
};

interface PageHeaderProps {
  title: string;
  privatePage: boolean;
  withBackButton: boolean;
  element: React.ReactElement;
}
const testPageHeader = ({
  title,
  privatePage,
  withBackButton,
  element,
}: PageHeaderProps) => {
  test(`should have a ${title} title`, async () => {
    const { container } = await renderWithAct(element);
    expect(container!.querySelector("ion-header ion-title")).toHaveTextContent(
      title
    );
  });

  if (withBackButton) {
    test("should contain a back button", async () => {
      const { container } = await renderWithAct(element);
      expect(
        container!.querySelector("ion-header ion-back-button")
      ).toBeInTheDocument();
    });
  }

  if (privatePage) {
    test("should contain a log out button", async () => {
      const { container } = await renderWithAct(element);
      expect(
        container!.querySelector("ion-header ion-button")
      ).toHaveTextContent(/log out/i);
    });

    describe("log out button", () => {
      test("should log user out on click", async () => {
        let isAuthenticated = true;
        const TestComponent = () => {
          isAuthenticated = useAuth().isAuthenticated;
          return element;
        };

        expect(isAuthenticated).toBe(true);

        await renderWithAct(
          <AuthProvider initialAuthState={true}>
            <TestComponent />
          </AuthProvider>
        );

        const logoutButton = screen.getByText(/log out/i);
        userEvent.click(logoutButton);

        expect(isAuthenticated).toBe(false);
      });
    });
  }
};

export { expectToBeOnPage, testPageHeader };
