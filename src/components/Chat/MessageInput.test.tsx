import MessageInput from "./MessageInput"
import { render, wait } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { ionFireEvent } from "@ionic/react-test-utils";

test('it renders a text area and send button', () => {
  const { container } = render(
    <MessageInput onSubmit={() => {}}></MessageInput>
  )

  expect(container.querySelector('.chat-message-input ion-textarea')).toBeInTheDocument();
  expect(container.querySelector('.chat-message-input ion-button')).toBeInTheDocument()
})

test('it calls the onSubmit callback when button is pressed', async () => {
  let called = false;
  let params : any = null;

  const { container } = render(
    <MessageInput onSubmit={(arg) => {
      params = arg;
      called = true;
    }}></MessageInput>
  )

  const textarea = container.querySelector('.chat-message-input ion-textarea');
  const button = container.querySelector('ion-button');

  expect(textarea).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  ionFireEvent.ionChange(textarea!, "some text");

  act(() => { button!.click(); });

  await wait(() => called);

  expect(called).toEqual(true);
  expect(params).not.toBeNull();
  expect(params.content).toEqual('some text');
  expect(typeof params.clear).toBe('function')
})

test('it doesnt call onSubmit if the string is empty of characters', async () => {
  let called = false;

  const { container } = render(
    <MessageInput onSubmit={(arg) => {
      called = true;
    }}></MessageInput>
  )

  const textarea = container.querySelector('.chat-message-input ion-textarea');
  const button = container.querySelector('ion-button');

  expect(textarea).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  ionFireEvent.ionChange(textarea!, "     ");

  act(() => {
    button!.click();
  });

  await new Promise((r) => setTimeout(r, 1000));

  expect(called).toEqual(false);
})

test('text is cleared when the clear() callback is used', async () => {
  let called = false;
  let value = "";

  const { container } = render(
    <MessageInput onChange={(v) => value = v} onSubmit={({ clear }) => {
      clear()
      called = true;
    }}></MessageInput>
  )

  const textarea = container.querySelector('.chat-message-input ion-textarea');
  const button = container.querySelector('ion-button');

  expect(textarea).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  ionFireEvent.ionChange(textarea!, "some text");

  expect(value).toEqual("some text")

  act(() => {
    button!.click();
  });

  await wait(() => expect(called).toEqual(true));

  expect(value).toEqual("")
})
