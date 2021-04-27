import React from "react";
import { render } from "@testing-library/react";
import Home from "pages/Home/Home";

import { expectToRenderHeaderWithTitleAndLogoutButton } from "test-utils/matchers";

test("renders without crashing", () => {
  const { container } = render(<Home />);
  expect(container).toBeInTheDocument();
});

expectToRenderHeaderWithTitleAndLogoutButton(Home, "Home");
