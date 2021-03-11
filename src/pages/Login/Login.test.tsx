import React from "react";
import { act, render, wait } from "@testing-library/react";
import Login from "pages/Login/Login";
import { createMemoryHistory } from "history";
import ReactRouter, { MemoryRouter, Router } from "react-router";
import { IonButton, IonInput } from "@ionic/react";
import client from "lib/client/client";
import { ApiError } from "lib/errors";
import { clickButton, fillIonInput } from "./test_utils";

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
    it("should call auth/send_pin API endpoint with the correct mobile value", async () => {
      const mockPost = jest.spyOn(client, "post").mockResolvedValue({
        otp_auth_key: "fdsafdsafds",
      });

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

      mockPost.mockRestore();
    });
  });
});

describe("On receiving successful API response from send_pin", () => {
  let mockPost: jest.SpyInstance;
  const otpAuthKey = "fdsfdsfdsfdsffd";
  beforeEach(() => {
    mockPost = jest.spyOn(client, "post").mockResolvedValue({
      otp_auth_key: otpAuthKey,
    });
  });
  afterEach(() => mockPost.mockRestore());

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
  it("should show an error message", async () => {
    const error = new ApiError({
      httpStatus: 422,
      type: "ValidationError",
      message: "Mobile is invalid",
    });
    const mockPost = jest.spyOn(client, "post").mockRejectedValueOnce(error);
    const history = createMemoryHistory();
    const mockHistoryPush = jest.spyOn(history, "push");

    const { container } = render(
      <Router history={history}>
        <Login />
      </Router>
    );

    expect(container.querySelector('[role="alert"]')).not.toBeInTheDocument();

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

    mockPost.mockRestore();
    mockHistoryPush.mockRestore();
  });
});
