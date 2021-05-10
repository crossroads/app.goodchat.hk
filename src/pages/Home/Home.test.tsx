import React from "react";
import { render } from "@testing-library/react";
import Home from "pages/Home/Home";

import { testPageHeader } from "test-utils/matchers";

test("renders without crashing", () => {
  const { container } = render(<Home />);
  expect(container).toBeInTheDocument();
});

describe("Home page header", () =>
  testPageHeader({
    title: "Home",
    privatePage: true,
    withBackButton: false,
    element: <Home />,
  }));
