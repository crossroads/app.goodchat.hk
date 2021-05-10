import { render } from "@testing-library/react";
import Chat from "pages/Chat/Chat";
import { testPageHeader } from "test-utils/matchers";

test("renders without crashing", () => {
  const { container } = render(<Chat />);
  expect(container).toBeInTheDocument();
});

describe("Chat page header", () => {
  testPageHeader({
    title: "Chat",
    privatePage: true,
    withBackButton: true,
    element: <Chat />,
  });
});

test("back button should default to /chats", () => {
  const { container } = render(<Chat />);

  expect(container.querySelector("ion-header ion-back-button")).toHaveAttribute(
    "default-href",
    "/chats"
  );
});
