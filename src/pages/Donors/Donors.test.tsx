import { render } from "@testing-library/react";
import Donors from "pages/Donors/Donors";
import { pageHeader } from "test-utils/matchers";

test("should render without crashing", () => {
  const { container } = render(<Donors />);
  expect(container).toBeInTheDocument();
});

describe(
  "Donors page header",
  pageHeader({
    title: "Donors",
    privatePage: true,
    withBackButton: false,
    element: <Donors />,
  })
);
