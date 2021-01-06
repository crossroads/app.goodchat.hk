import React from "react";
import { render } from "@testing-library/react";
import Login from "pages/Login/Login";
import { createMemoryHistory, MemoryHistory } from "history";
import ReactRouter, { MemoryRouter, Router } from "react-router";
import userEvent, { TargetElement } from "@testing-library/user-event";

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

describe("Clicking get sms pin button", () => {
  let history: MemoryHistory;
  let mockHistoryPush: jest.SpyInstance;

  beforeEach(() => {
    history = createMemoryHistory();
    mockHistoryPush = jest.spyOn(history, "push");
  });

  afterEach(() => mockHistoryPush.mockRestore());

  test("should navigate to /authenticate", () => {
    const { container } = render(
      <Router history={history}>
        <Login />
      </Router>
    );

    userEvent.click(container.querySelector("ion-button") as TargetElement);

    expect(mockHistoryPush).toHaveBeenCalledWith("/authenticate");
    expect(mockHistoryPush).toHaveBeenCalledTimes(1);
  });

  test("should pass redirection origin to next page", () => {
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
