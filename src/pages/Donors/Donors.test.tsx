import { render } from "@testing-library/react";
import Donors from "pages/Donors/Donors";
import { expectToRenderHeaderWithTitleAndLogoutButton } from "test-utils/matchers";

test("should render without crashing", () => {
  const { container } = render(<Donors />);
  expect(container).toBeInTheDocument();
});

expectToRenderHeaderWithTitleAndLogoutButton(Donors, "Donors");
