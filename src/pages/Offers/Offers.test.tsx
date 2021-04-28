import React from "react";
import { render } from "@testing-library/react";
import Offers from "pages/Offers/Offers";
import { pageHeader } from "test-utils/matchers";

test("renders without crashing", () => {
  const { container } = render(<Offers />);
  expect(container).toBeInTheDocument();
});

describe(
  "Offers page header",
  pageHeader({
    title: "Offers",
    privatePage: true,
    withBackButton: false,
    element: <Offers />,
  })
);
