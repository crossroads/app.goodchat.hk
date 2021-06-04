import MessageFooter from "./MessageFooter"
import { render } from "@testing-library/react"
import Message from "./Message"

test('it renders the footer text', () => {
  const { container } = render(
    <Message>
      <MessageFooter text={"hello"}></MessageFooter>
    </Message>
  )

  const footerElement = container.querySelector('ion-note.chat-message-footer');

  expect(footerElement).toBeTruthy();
  expect(footerElement?.textContent).toEqual("hello");
})
