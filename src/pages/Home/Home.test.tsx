import React from "react";
import { render } from "@testing-library/react";
import Home from "pages/Home/Home";

import {
  expectToRenderHeaderWithTitle,
  expectToRenderLogoutButtonAtHeaderEnd,
} from "test-utils/matchers";

test("renders without crashing", () => {
  const { container } = render(<Home />);
  expect(container).toBeInTheDocument();
});

expectToRenderHeaderWithTitle({
  element: <Home />,
  title: "Home",
});

expectToRenderLogoutButtonAtHeaderEnd(<Home />);
