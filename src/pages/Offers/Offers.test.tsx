import React from "react";
import { render } from "@testing-library/react";
import Offers from "pages/Offers/Offers";
import { expectToRenderHeaderWithTitleAndLogoutButton } from "test-utils/matchers";

test("renders without crashing", () => {
  const { container } = render(<Offers />);
  expect(container).toBeInTheDocument();
});

expectToRenderHeaderWithTitleAndLogoutButton({
  element: <Offers />,
  title: "Offers",
});
