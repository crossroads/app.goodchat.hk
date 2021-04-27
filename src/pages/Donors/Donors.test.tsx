import { render } from "@testing-library/react";
import Donors from "pages/Donors/Donors";
import { expectToRenderHeaderCorrectly } from "test-utils/matchers";

test("should render without crashing", () => {
  const { container } = render(<Donors />);
  expect(container).toBeInTheDocument();
});

expectToRenderHeaderCorrectly(Donors, "Donors");
