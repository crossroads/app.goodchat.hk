import { render } from "@testing-library/react";
import React from "react";
import Authenticate from "pages/Authenticate/Authenticate";

test("renders without crashing", () => {
  render(<Authenticate />);
});
