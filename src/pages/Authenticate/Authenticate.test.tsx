import { act, render, wait } from "@testing-library/react";
import React from "react";
import Authenticate from "pages/Authenticate/Authenticate";
import userEvent, { TargetElement } from "@testing-library/user-event";
import { createMemoryHistory, MemoryHistory } from "history";
import ReactRouter, { MemoryRouter, Router } from "react-router";
import { ionFireEvent } from "@ionic/react-test-utils";
import { IonButton, IonInput } from "@ionic/react";
import client from "lib/client/client";
import mockResponse from "test-utils/mocks/apiResponses";
import { pageHeader } from "test-utils/matchers";

test("renders without crashing", () => {
  const { container } = render(<Authenticate />, { wrapper: MemoryRouter });
  expect(container).toBeInTheDocument();
});

describe(
  "Authenticate page header",
  pageHeader({
    title: "Authenticate",
    privatePage: false,
    withBackButton: true,
    element: (
      <MemoryRouter>
        <Authenticate />
      </MemoryRouter>
    ),
  })
);

test("back button defaults to navigate to /login", async () => {
  const { container } = render(<Authenticate />, { wrapper: MemoryRouter });
  expect(container.querySelector("ion-back-button")).toHaveAttribute(
    "default-href",
    "/login"
  );
});

test("renders a label opting user to input 2fa code", () => {
  const { container } = render(<Authenticate />, { wrapper: MemoryRouter });
  expect(container.querySelector("ion-label")).toHaveTextContent(
    /please input your 2fa code/i
  );
});

test("renders the label on top of the input", () => {
  const { container } = render(<Authenticate />, { wrapper: MemoryRouter });
  expect(container.querySelector("ion-label")).toHaveAttribute(
    "position",
    "floating"
  );
});

test("renders an input", () => {
  const { container } = render(<Authenticate />, { wrapper: MemoryRouter });
  expect(container.querySelector("ion-input")).toBeInTheDocument();
});

describe("input", () => {
  it("should have a placeholder XXXX", () => {
    const { container } = render(<Authenticate />, { wrapper: MemoryRouter });
    expect(container.querySelector("ion-input")).toHaveAttribute(
      "placeholder",
      "XXXX"
    );
  });

  it("should not allow more than 4 characters to be input", () => {
    const mockIonInputRender = jest.spyOn(IonInput as any, "render");

    render(<Authenticate />, { wrapper: MemoryRouter });

    expect(mockIonInputRender).toHaveBeenCalledWith(
      expect.objectContaining({ maxlength: 4 }),
      null
    );

    mockIonInputRender.mockRestore();
  });

  it("should have its value change accordingly with user input", () => {
    const { container } = render(<Authenticate />, { wrapper: MemoryRouter });

    const input = container.querySelector("ion-input");

    expect(container.querySelector("ion-input")).toHaveAttribute("value", "");

    const inputVal = "1234";
    ionFireEvent.ionChange(input!, inputVal);

    expect(container.querySelector("ion-input")).toHaveAttribute(
      "value",
      inputVal
    );
  });
});

test("renders a login button", () => {
  const { container } = render(<Authenticate />, { wrapper: MemoryRouter });
  expect(container.querySelector("ion-button")).toHaveTextContent(/login/i);
});

describe("login button", () => {
  let mockIonButtonRender: jest.SpyInstance;
  beforeEach(
    () => (mockIonButtonRender = jest.spyOn(IonButton as any, "render"))
  );
  afterEach(() => mockIonButtonRender.mockRestore());

  it("should be disabled when 2fa input length < 4", () => {
    render(<Authenticate />, { wrapper: MemoryRouter });
    expect(mockIonButtonRender).toHaveBeenLastCalledWith(
      expect.objectContaining({
        disabled: true,
      }),
      null
    );
  });

  it("should be enabled when 2fa input length = 4", () => {
    const { container } = render(<Authenticate />, { wrapper: MemoryRouter });

    const input = container.querySelector("ion-input");
    ionFireEvent.ionChange(input!, "1234");

    expect(mockIonButtonRender).toHaveBeenLastCalledWith(
      expect.objectContaining({ disabled: false }),
      null
    );
  });
});

describe("Clicking login button", () => {
  let mockPost: jest.SpyInstance;
  beforeEach(
    () =>
      (mockPost = jest
        .spyOn(client, "post")
        .mockResolvedValue(mockResponse["auth/verify"].success))
  );
  afterEach(() => mockPost.mockRestore());

  it("should call auth/verify correctly", async () => {
    const { container } = render(<Authenticate />, { wrapper: MemoryRouter });

    const inputVal = "1234";
    const input = container.querySelector("ion-input");
    const loginButton = container.querySelector("ion-button");
    ionFireEvent.ionChange(input!, inputVal);
    await act(async () => userEvent.click(loginButton as TargetElement));

    expect(mockPost).toHaveBeenCalledTimes(1);
    expect(mockPost).toHaveBeenCalledWith("auth/verify", {
      pin: inputVal,
      otp_auth_key: expect.any(String),
    });
  });

  describe("Successful response", () => {
    describe("Redirection", () => {
      let history: MemoryHistory;
      let mockHistoryReplace: jest.SpyInstance;
      beforeEach(() => {
        history = createMemoryHistory();
        mockHistoryReplace = jest.spyOn(history, "replace");
      });
      afterEach(() => mockHistoryReplace.mockRestore());

      describe("Redirection origin not present", () => {
        it("should redirect user to /home", async () => {
          const { container } = render(
            <Router history={history}>
              <Authenticate />
            </Router>
          );

          const loginButton = container.querySelector("ion-button");
          userEvent.click(loginButton as TargetElement);

          await wait(() => expect(mockHistoryReplace).toHaveBeenCalledTimes(1));
          expect(mockHistoryReplace).toHaveBeenCalledWith("/home");
        });
      });

      describe("Redirection origin is present", () => {
        let mockUseLocation: jest.SpyInstance;
        beforeEach(() => {
          mockUseLocation = jest
            .spyOn(ReactRouter, "useLocation")
            .mockReturnValue({
              pathname: "/login",
              search: "",
              hash: "",
              state: { from: "/offers" },
            });
        });
        afterEach(() => mockUseLocation.mockRestore());

        it("should redirect user to origin of redirection", async () => {
          const { container } = render(
            <Router history={history}>
              <Authenticate />
            </Router>
          );

          const loginButton = container.querySelector("ion-button");
          userEvent.click(loginButton as TargetElement);

          await wait(() => expect(mockHistoryReplace).toHaveBeenCalledTimes(1));
          expect(mockHistoryReplace).toHaveBeenCalledWith("/offers");
        });
      });
    });
  });

  describe("Unsuccessful response", () => {
    const error = mockResponse["auth/verify"].error[401];
    beforeEach(() => mockPost.mockRejectedValue(error));

    it("should show the error message", async () => {
      const { container } = render(<Authenticate />, { wrapper: MemoryRouter });

      expect(container.querySelector('[role="alert"]')).not.toBeInTheDocument();

      const loginButton = container.querySelector("ion-button");
      userEvent.click(loginButton as TargetElement);

      await wait(() =>
        expect(container.querySelector('[role="alert"]')).toHaveTextContent(
          error.message
        )
      );
    });

    it("should NOT redirect user", async () => {
      const history = createMemoryHistory();
      const mockHistoryReplace = jest.spyOn(history, "replace");
      const { container } = render(
        <Router history={history}>
          <Authenticate />
        </Router>
      );

      const loginButton = container.querySelector("ion-button");
      userEvent.click(loginButton as TargetElement);

      await wait(() => expect(mockHistoryReplace).not.toHaveBeenCalled());

      mockHistoryReplace.mockRestore();
    });
  });
});
