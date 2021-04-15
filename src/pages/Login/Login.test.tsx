import React from "react";
import { act, render, wait } from "@testing-library/react";
import Login from "pages/Login/Login";
import { createMemoryHistory } from "history";
import ReactRouter, { MemoryRouter, Router } from "react-router";
import { IonButton, IonInput } from "@ionic/react";
import client from "lib/client/client";
import { ionFireEvent } from "@ionic/react-test-utils";
import userEvent, { TargetElement } from "@testing-library/user-event";
import mockApiResponse from "test-utils/mocks/mockApiResponse";

function fillIonInput(container: HTMLElement, phoneInput: string) {
  const input = container.querySelector("ion-input");
  ionFireEvent.ionChange(input!, phoneInput);
}

function clickButton(container: HTMLElement) {
  const button = container.querySelector("ion-button");
  userEvent.click(button as TargetElement);
}

test("renders a login title", () => {
  const { container } = render(<Login />, { wrapper: MemoryRouter });
  expect(container.querySelector("ion-title")).toHaveTextContent(/login/i);
});

test("renders a +852 label", () => {
  const { container } = render(<Login />, { wrapper: MemoryRouter });
  expect(container.querySelector("ion-item > ion-label")).toHaveTextContent(
    "+852"
  );
});

test("renders an input", () => {
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

    fillIonInput(container, "12345678");

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
  describe("disabled state", () => {
    let mockIonButtonRender: jest.SpyInstance;
    beforeEach(
      () => (mockIonButtonRender = jest.spyOn(IonButton as any, "render"))
    );
    afterEach(() => mockIonButtonRender.mockRestore());

    it("should be true when input length < 8", () => {
      render(<Login />, { wrapper: MemoryRouter });
      expect(mockIonButtonRender).toHaveBeenLastCalledWith(
        expect.objectContaining({ disabled: true }),
        null
      );
    });

    it("should be false when input length = 8", () => {
      const { container } = render(<Login />, { wrapper: MemoryRouter });
      fillIonInput(container, "12345678");

      expect(mockIonButtonRender).toHaveBeenLastCalledWith(
        expect.objectContaining({ disabled: false }),
        null
      );
    });
  });

  describe("on click", () => {
    let mockPost: jest.SpyInstance;
    beforeEach(() => {
      mockPost = jest
        .spyOn(client, "post")
        .mockResolvedValue(mockApiResponse["auth/send_pin"].success);
    });
    afterEach(() => mockPost.mockRestore());

    it("should call auth/send_pin API endpoint with the correct mobile value", async () => {
      const phoneInput = "12345678";
      const { container } = render(<Login />, { wrapper: MemoryRouter });

      fillIonInput(container, phoneInput);
      await act(async () => {
        clickButton(container);
      });

      expect(mockPost).toHaveBeenCalledTimes(1);
      expect(mockPost).toHaveBeenCalledWith("auth/send_pin", {
        mobile: `+852${phoneInput}`,
      });
    });

    describe("On receiving successful API response from send_pin", () => {
      it("should navigate to /authenticate", async () => {
        const history = createMemoryHistory();
        const mockHistoryPush = jest.spyOn(history, "push");

        const { container } = render(
          <Router history={history}>
            <Login />
          </Router>
        );

        const phoneInput = "12345678";
        fillIonInput(container, phoneInput);
        clickButton(container);

        expect(mockPost).toHaveBeenCalledTimes(1);
        expect(mockPost).toHaveBeenCalledWith("auth/send_pin", {
          mobile: `+852${phoneInput}`,
        });
        await wait(() => expect(mockHistoryPush).toHaveBeenCalledTimes(1));
        expect(mockHistoryPush).toHaveBeenCalledWith("/authenticate");

        mockHistoryPush.mockRestore();
      });

      it("should pass origin of redirection as history state", async () => {
        const history = createMemoryHistory();
        const mockHistoryPush = jest.spyOn(history, "push");
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

        fillIonInput(container, "12345678");
        clickButton(container);

        await wait(() => expect(mockHistoryPush).toHaveBeenCalledTimes(1));
        expect(mockHistoryPush).toHaveBeenCalledWith("/authenticate", {
          from: "/offers",
        });

        mockHistoryPush.mockRestore();
        mockUseLocation.mockRestore();
      });
    });

    describe("On receiving error response from send_pin", () => {
      const error = mockApiResponse["auth/send_pin"].error[422];
      beforeEach(
        () =>
          (mockPost = jest.spyOn(client, "post").mockRejectedValueOnce(error))
      );

      it("should show an error message", async () => {
        const history = createMemoryHistory();
        const mockHistoryPush = jest.spyOn(history, "push");

        const { container } = render(
          <Router history={history}>
            <Login />
          </Router>
        );

        expect(
          container.querySelector('[role="alert"]')
        ).not.toBeInTheDocument();

        const phoneInput = "12345678";
        fillIonInput(container, phoneInput);
        clickButton(container);

        expect(mockPost).toHaveBeenCalledTimes(1);
        expect(mockPost).toHaveBeenCalledWith("auth/send_pin", {
          mobile: `+852${phoneInput}`,
        });
        await wait(() =>
          expect(container.querySelector('[role="alert"]')).toHaveTextContent(
            error.message
          )
        );
        expect(mockHistoryPush).not.toHaveBeenCalled();

        mockHistoryPush.mockRestore();
      });
    });
  });
});
