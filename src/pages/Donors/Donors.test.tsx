import { render } from "@testing-library/react";
import Donors from "pages/Donors/Donors";
import {
  expectToRenderHeaderWithTitle,
  expectToRenderLogoutButtonAtHeaderEnd,
} from "test-utils/matchers";

test("should render without crashing", () => {
  const { container } = render(<Donors />);
  expect(container).toBeInTheDocument();
});

expectToRenderHeaderWithTitle({
  element: <Donors />,
  title: "Donors",
});

expectToRenderLogoutButtonAtHeaderEnd(<Donors />);
