import React from "react";
import { render, wait } from "@testing-library/react";
import Login from "pages/Login/Login";
import { createMemoryHistory } from "history";
import ReactRouter, { MemoryRouter, Router } from "react-router";
import { IonButton, IonInput } from "@ionic/react";
import client from "lib/client/client";
import { ApiError } from "lib/errors";
import { clickButton, fillInput } from "./test_utils";

test("renders a login title", () => {
  const { container } = render(<Login />, { wrapper: MemoryRouter });
  expect(container.querySelector("ion-title")).toHaveTextContent(/login/i);
});

test("renders an ion-item", () => {
  const { container } = render(<Login />, { wrapper: MemoryRouter });
  expect(container.querySelector("ion-item")).toBeInTheDocument();
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

    fillInput(container, "12345678");

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
    fillInput(container, "12345678");

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

    it("should call auth/send_pin API endpoint with the correct mobile value", () => {
      const phoneInput = "12345678";
      const { container } = render(<Login />, { wrapper: MemoryRouter });

      fillInput(container, phoneInput);
      clickButton(container);

      expect(mockPost).toHaveBeenCalledTimes(1);
      expect(mockPost).toHaveBeenCalledWith("auth/send_pin", {
        mobile: `+852${phoneInput}`,
      });
    });
  });
});

describe("On receiving successful API response from send_pin", () => {
  it("should navigate to /authenticate", async () => {
    const history = createMemoryHistory();
    const mockHistoryPush = jest.spyOn(history, "push");
    const mockPost = jest.spyOn(client, "post").mockResolvedValueOnce({
      otp_auth_key: "fdsfdsfdsfdsffd",
    });

    const { container } = render(
      <Router history={history}>
        <Login />
      </Router>
    );

    const phoneInput = "12345678";
    fillInput(container, phoneInput);
    clickButton(container);

    expect(mockPost).toHaveBeenCalledTimes(1);
    expect(mockPost).toHaveBeenCalledWith("auth/send_pin", {
      mobile: `+852${phoneInput}`,
    });
    await wait(() => expect(mockHistoryPush).toHaveBeenCalledTimes(1));
    expect(mockHistoryPush).toHaveBeenCalledWith("/authenticate");

    mockHistoryPush.mockRestore();
    mockPost.mockRestore();
  });
});

describe("On receiving error response from send_pin", () => {
  it("should log the error to the console", async () => {
    const error = new ApiError({
      httpStatus: 422,
      type: "ValidationError",
      message: "Mobile is invalid",
    });
    const history = createMemoryHistory();
    const mockPost = jest.spyOn(client, "post").mockRejectedValueOnce(error);
    const mockHistoryPush = jest.spyOn(history, "push");
    const mockConsoleLog = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});

    const { container } = render(
      <Router history={history}>
        <Login />
      </Router>
    );

    const phoneInput = "12345678";
    fillInput(container, phoneInput);
    clickButton(container);

    expect(mockPost).toHaveBeenCalledTimes(1);
    expect(mockPost).toHaveBeenCalledWith("auth/send_pin", {
      mobile: `+852${phoneInput}`,
    });
    await wait(() => {
      expect(mockConsoleLog).toHaveBeenCalledTimes(1);
    });
    expect(mockConsoleLog).toHaveBeenCalledWith(error);
    expect(mockHistoryPush).not.toHaveBeenCalled();

    mockPost.mockRestore();
    mockHistoryPush.mockRestore();
    mockConsoleLog.mockRestore();
  });
});

describe("Upon being navigated to authenticate", () => {
  it("should pass origin of redirection as history state", async () => {
    const history = createMemoryHistory();
    const mockHistoryPush = jest.spyOn(history, "push");
    const mockPost = jest.spyOn(client, "post").mockResolvedValueOnce({
      otp_auth_key: "fdsfdsfdsfdsffd",
    });
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

    const phoneInput = "12345678";
    fillInput(container, phoneInput);
    clickButton(container);

    await wait(() => expect(mockHistoryPush).toHaveBeenCalledTimes(1));
    expect(mockHistoryPush).toHaveBeenCalledWith("/authenticate", {
      from: "/offers",
    });

    mockHistoryPush.mockRestore();
    mockPost.mockRestore();
    mockUseLocation.mockRestore();
  });
});
