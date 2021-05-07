import { render } from "@testing-library/react";
import Chat from "pages/Chat/Chat";

test("renders without crashing", () => {
  const { container } = render(<Chat />);
  expect(container).toBeInTheDocument();
});
