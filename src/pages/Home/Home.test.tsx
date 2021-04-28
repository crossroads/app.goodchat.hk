import React from "react";
import { render } from "@testing-library/react";
import Home from "pages/Home/Home";

import { pageHeader } from "test-utils/matchers";

test("renders without crashing", () => {
  const { container } = render(<Home />);
  expect(container).toBeInTheDocument();
});

describe(
  "Home page header",
  pageHeader({
    title: "Home",
    privatePage: true,
    withBackButton: false,
    element: <Home />,
  })
);
