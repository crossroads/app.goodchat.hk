import { render, wait } from "@testing-library/react";
import React from "react";
import Authenticate from "pages/Authenticate/Authenticate";
import userEvent, { TargetElement } from "@testing-library/user-event";
import { createMemoryHistory, MemoryHistory } from "history";
import ReactRouter, { MemoryRouter, Router } from "react-router";
import { ionFireEvent } from "@ionic/react-test-utils";
import { IonButton, IonInput } from "@ionic/react";
import AuthenticationService from "lib/services/AuthenticationService/AuthenticationService";

test("renders without crashing", () => {
  const { container } = render(<Authenticate />, { wrapper: MemoryRouter });
  expect(container).toBeInTheDocument();
});

test("renders an authenticate title", () => {
  const { container } = render(<Authenticate />, { wrapper: MemoryRouter });
  expect(container.querySelector("ion-title")).toHaveTextContent(
    /authenticate/i
  );
});

test("renders a back button in the header", () => {
  const { container } = render(<Authenticate />, { wrapper: MemoryRouter });
  expect(
    container.querySelector("ion-header ion-back-button")
  ).toBeInTheDocument();
});

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
    const mockIonInputRender = jest.spyOn(IonInput, "render" as never);

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
  beforeAll(
    () => (mockIonButtonRender = jest.spyOn(IonButton, "render" as never))
  );
  afterEach(() => mockIonButtonRender.mockClear());
  afterAll(() => mockIonButtonRender.mockRestore());

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
  let mockAuthenticate: jest.SpyInstance;
  beforeAll(
    () =>
      (mockAuthenticate = jest
        .spyOn(AuthenticationService, "authenticate")
        .mockImplementation())
  );
  afterAll(() => mockAuthenticate.mockRestore());

  it("should call AuthenticationService authenticate correctly", () => {
    const { container } = render(<Authenticate />, { wrapper: MemoryRouter });

    const inputVal = "1234";
    const input = container.querySelector("ion-input");
    const loginButton = container.querySelector("ion-button");
    ionFireEvent.ionChange(input!, inputVal);
    userEvent.click(loginButton as TargetElement);

    expect(mockAuthenticate).toHaveBeenCalledTimes(1);
    expect(mockAuthenticate).toHaveBeenCalledWith(inputVal);
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
        it("should redirect user to origin of redirection", async () => {
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
              <Authenticate />
            </Router>
          );

          const loginButton = container.querySelector("ion-button");
          userEvent.click(loginButton as TargetElement);

          await wait(() => expect(mockHistoryReplace).toHaveBeenCalledTimes(1));
          expect(mockHistoryReplace).toHaveBeenCalledWith("/offers");

          mockUseLocation.mockRestore();
        });
      });
    });
  });

  describe("Unsuccessful response", () => {
    const error = new Error();
    beforeAll(() => mockAuthenticate.mockRejectedValue(error));
    afterAll(() => mockAuthenticate.mockReset());

    it("should show a message that something went wrong", async () => {
      const { container } = render(<Authenticate />, { wrapper: MemoryRouter });

      expect(container.querySelector('[role="alert"]')).not.toBeInTheDocument();

      const loginButton = container.querySelector("ion-button");
      userEvent.click(loginButton as TargetElement);

      await wait(() =>
        expect(container.querySelector('[role="alert"]')).toHaveTextContent(
          /something went wrong/i
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
