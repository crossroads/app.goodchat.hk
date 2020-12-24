import React from "react";
import { render } from "@testing-library/react";
import Login from "pages/Login/Login";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import userEvent, { TargetElement } from "@testing-library/user-event";

test("renders a login title", () => {
  const { container } = render(<Login />);
  expect(container.querySelector("ion-title")).toHaveTextContent(/login/i);
});

test("renders a go to authenticate button", () => {
  const { container } = render(<Login />);
  expect(container.querySelector("ion-button")).toHaveTextContent(
    /go to authenticate/i
  );
});

describe("Clicking go to authenticate button", () => {
  test("should navigate to /authenticate", () => {
    const history = createMemoryHistory();
    const mockHistoryPush = jest.spyOn(history, "push");

    const { container } = render(
      <Router history={history}>
        <Login />
      </Router>
    );

    userEvent.click(container.querySelector("ion-button") as TargetElement);

    expect(mockHistoryPush).toHaveBeenCalledWith("/authenticate");
    expect(mockHistoryPush).toHaveBeenCalledTimes(1);

    mockHistoryPush.mockRestore();
  });
});
