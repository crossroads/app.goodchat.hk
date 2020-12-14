import React from "react";
import { render } from "@testing-library/react";
import Offers from "pages/Offers/Offers";

test("renders an offers title", () => {
  const { container } = render(<Offers />);
  expect(container.querySelector("ion-title")).toHaveTextContent(/offers/i);
});
