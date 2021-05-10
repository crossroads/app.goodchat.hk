import { render } from "@testing-library/react";
import Chat from "pages/Chat/Chat";
import { pageHeader } from "test-utils/matchers";

test("renders without crashing", () => {
  const { container } = render(<Chat />);
  expect(container).toBeInTheDocument();
});

describe(
  "Chat page header",
  pageHeader({
    title: "Chat",
    privatePage: true,
    withBackButton: true,
    element: <Chat />,
  })
);
