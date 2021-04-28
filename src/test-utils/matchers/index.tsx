import userEvent from "@testing-library/user-event";
import AuthProvider from "components/AuthProvider/AuthProvider";
import useAuth from "hooks/useAuth/useAuth";
import { screen, render } from "@testing-library/react";
import { React } from "@ungap/global-this";

const expectToBeOnPage = (
  container: HTMLElement,
  myPath: string,
  expectedPage: string
) => {
  const expectedPath = `/${expectedPage}`;
  expect(myPath).toEqual(expectedPath);
  expect(container.querySelector("ion-title")).toHaveTextContent(
    new RegExp(expectedPage, "i")
  );
};

const expectToRenderHeaderWithTitle = ({
  element,
  title,
}: {
  element: React.ReactElement;
  title: string;
}) => {
  test(`should render a header with ${title} title`, () => {
    const { container } = render(element);
    expect(container.querySelector("ion-header ion-title")).toHaveTextContent(
      title
    );
  });
};

const expectToRenderLogoutButtonAtHeaderEnd = (element: React.ReactElement) => {
  describe("header", () => {
    it("should contain a log out button", () => {
      const { container } = render(element);
      expect(
        container.querySelector("ion-header ion-button")
      ).toHaveTextContent(/log out/i);
    });

    describe("log out button", () => {
      it("should be rendered at the end of the header", () => {
        const { container } = render(element);
        expect(
          container.querySelector("ion-header ion-buttons")
        ).toHaveAttribute("slot", "end");
      });

      it("should log user out on click", () => {
        let isAuthenticated = true;
        const TestComponent = () => {
          isAuthenticated = useAuth().isAuthenticated;
          return element;
        };

        expect(isAuthenticated).toBe(true);

        render(
          <AuthProvider initialAuthState={true}>
            <TestComponent />
          </AuthProvider>
        );

        const logoutButton = screen.getByText(/log out/i);
        userEvent.click(logoutButton);

        expect(isAuthenticated).toBe(false);
      });
    });
  });
};

export {
  expectToBeOnPage,
  expectToRenderHeaderWithTitle,
  expectToRenderLogoutButtonAtHeaderEnd,
};
