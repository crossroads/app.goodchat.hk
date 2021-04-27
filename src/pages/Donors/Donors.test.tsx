import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AuthProvider from "components/AuthProvider/AuthProvider";
import useAuth from "hooks/useAuth/useAuth";
import Donors from "pages/Donors/Donors";

test("should render without crashing", () => {
  const { container } = render(<Donors />);
  expect(container).toBeInTheDocument();
});

test("should render a header", () => {
  const { container } = render(<Donors />);
  expect(container.querySelector("ion-header")).toBeInTheDocument();
});

describe("header", () => {
  it("should contain a Donors title", () => {
    const { container } = render(<Donors />);
    expect(container.querySelector("ion-header ion-title")).toHaveTextContent(
      /donors/i
    );
  });

  it("should contain a log out button", () => {
    const { container } = render(<Donors />);
    expect(container.querySelector("ion-header ion-button")).toHaveTextContent(
      /log out/i
    );
  });

  describe("log out button", () => {
    it("should be rendered at the end of the header", () => {
      const { container } = render(<Donors />);
      expect(container.querySelector("ion-header ion-buttons")).toHaveAttribute(
        "slot",
        "end"
      );
    });

    it("should log user out on click", () => {
      let isAuthenticated = true;
      const TestComponent = () => {
        isAuthenticated = useAuth().isAuthenticated;
        return <Donors />;
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
