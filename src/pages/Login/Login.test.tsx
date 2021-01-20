import React from "react";
import { render, act } from "@testing-library/react";
import Login from "pages/Login/Login";
import { createMemoryHistory, MemoryHistory } from "history";
import ReactRouter, { MemoryRouter, Router } from "react-router";
import userEvent, { TargetElement } from "@testing-library/user-event";
import { IonButton, IonInput } from "@ionic/react";
import client from "lib/client/client";

test("renders a login title", () => {
  const { container } = render(<Login />, { wrapper: MemoryRouter });
  expect(container.querySelector("ion-title")).toHaveTextContent(/login/i);
});

test("renders an ion-item", () => {
  const { container } = render(<Login />, { wrapper: MemoryRouter });
  expect(container.querySelector("ion-item")).toBeInTheDocument();
});

test("renders a +852 label within an ion-item", () => {
  const { container } = render(<Login />, { wrapper: MemoryRouter });
  expect(container.querySelector("ion-item > ion-label")).toHaveTextContent(
    "+852"
  );
});

test("renders an input within an ion-item", () => {
  const { container } = render(<Login />, { wrapper: MemoryRouter });
  expect(container.querySelector("ion-item > ion-input")).toBeInTheDocument();
});

describe("Phone input", () => {
  it("should initially be blank", () => {
    const { container } = render(<Login />, { wrapper: MemoryRouter });

    expect(container.querySelector("ion-item > ion-input")).toHaveAttribute(
      "value",
      ""
    );
  });

  it("should have its value change accordingly with user input", () => {
    const { container } = render(<Login />, { wrapper: MemoryRouter });

    const input = container.querySelector("ion-item > ion-input");
    act(() => {
      input!.dispatchEvent(
        new CustomEvent("ionChange", {
          detail: { value: "12345678" },
        })
      );
    });

    expect(container.querySelector("ion-item > ion-input")).toHaveAttribute(
      "value",
      "12345678"
    );
  });

  it("should not allow more than 8 characters to be input", () => {
    const mockIonInputRender = jest.spyOn(IonInput as any, "render");

    render(<Login />, { wrapper: MemoryRouter });

    expect(mockIonInputRender).toHaveBeenCalledWith(
      expect.objectContaining({ maxlength: 8 }),
      null
    );

    mockIonInputRender.mockRestore();
  });
});

test("renders the label on the left of the input", () => {
  const { container } = render(<Login />, { wrapper: MemoryRouter });

  const labelElement = container.querySelector("ion-item > ion-label");
  const firstChild = container.querySelector("ion-item")!.children[0];

  expect(firstChild).toBe(labelElement);
});

test("renders a get sms pin button", () => {
  const { container } = render(<Login />, { wrapper: MemoryRouter });
  expect(container.querySelector("ion-button")).toHaveTextContent(
    /get 4-digit sms code/i
  );
});

describe("Get SMS PIN button", () => {
  it("should be disabled when input length < 8", () => {
    const mockIonButtonRender = jest.spyOn(IonButton as any, "render");

    render(<Login />, { wrapper: MemoryRouter });

    expect(mockIonButtonRender).toHaveBeenLastCalledWith(
      expect.objectContaining({ disabled: true }),
      null
    );

    mockIonButtonRender.mockRestore();
  });

  it("should be enabled when input length = 8", () => {
    const mockIonButtonRender = jest.spyOn(IonButton as any, "render");

    const { container } = render(<Login />, { wrapper: MemoryRouter });
    const input = container.querySelector("ion-item > ion-input");
    act(() => {
      input!.dispatchEvent(
        new CustomEvent("ionChange", {
          detail: { value: "12345678" },
        })
      );
    });

    expect(mockIonButtonRender).toHaveBeenLastCalledWith(
      expect.objectContaining({ disabled: false }),
      null
    );

    mockIonButtonRender.mockRestore();
  });

  describe("on click", () => {
    const mockPost = jest.spyOn(client, "post").mockResolvedValue({
      otp_auth_key: "fdsafdsafds",
    });

    afterEach(() => mockPost.mockClear());

    afterAll(() => mockPost.mockRestore());

      const phoneInput = "12345678";
      const { container } = render(<Login />, { wrapper: MemoryRouter });

      const button = container.querySelector("ion-button");
      const input = container.querySelector("ion-item > ion-input");
      act(() => {
        input!.dispatchEvent(
          new CustomEvent("ionChange", {
            detail: { value: phoneInput },
          })
        );
      });
      userEvent.click(button as TargetElement);

      expect(mockFetch).toHaveBeenCalledWith(
        `${process.env.REACT_APP_API_V2_URL}/auth/send_pin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ mobile: `+852${phoneInput}` }),
        }
      );

      mockFetch.mockRestore();
    });

    describe("navigation", () => {
      let history: MemoryHistory;
      let mockHistoryPush: jest.SpyInstance;

      beforeEach(() => {
        history = createMemoryHistory();
        mockHistoryPush = jest.spyOn(history, "push");
      });

      afterEach(() => mockHistoryPush.mockRestore());

      it("should navigate to /authenticate", () => {
        const { container } = render(
          <Router history={history}>
            <Login />
          </Router>
        );

        userEvent.click(container.querySelector("ion-button") as TargetElement);

        expect(mockHistoryPush).toHaveBeenCalledWith("/authenticate");
        expect(mockHistoryPush).toHaveBeenCalledTimes(1);
      });

      it("should pass redirection origin to next page", () => {
        const mockUseLocation = jest
          .spyOn(ReactRouter, "useLocation")
          .mockReturnValue({
            pathname: "/login",
            search: "",
            hash: "",
            state: { from: "/offers" },
          });

        const { container } = render(
          <Router history={history}>
            <Login />
          </Router>
        );

        userEvent.click(container.querySelector("ion-button") as TargetElement);

        expect(mockHistoryPush).toHaveBeenCalledWith("/authenticate", {
          from: "/offers",
        });
        expect(mockHistoryPush).toHaveBeenCalledTimes(1);

        mockUseLocation.mockRestore();
      });
    });
  });
});
