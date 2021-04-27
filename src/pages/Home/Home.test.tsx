import React from "react";
import { render } from "@testing-library/react";
import Home from "pages/Home/Home";

import { expectToRenderHeaderCorrectly } from "test-utils/matchers";

test("renders without crashing", () => {
  const { container } = render(<Home />);
  expect(container).toBeInTheDocument();
});

expectToRenderHeaderCorrectly(Home, "Home");
