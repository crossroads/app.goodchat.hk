import React from "react";
import { render } from "@testing-library/react";
import Offers from "pages/Offers/Offers";
import {
  expectToRenderHeaderWithTitle,
  expectToRenderLogoutButtonAtHeaderEnd,
} from "test-utils/matchers";

test("renders without crashing", () => {
  const { container } = render(<Offers />);
  expect(container).toBeInTheDocument();
});

expectToRenderHeaderWithTitle({
  element: <Offers />,
  title: "Offers",
});

expectToRenderLogoutButtonAtHeaderEnd(<Offers />);
