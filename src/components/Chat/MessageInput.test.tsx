import userEvent, { TargetElement } from "@testing-library/user-event";
import { ionFireEvent } from "@ionic/react-test-utils";
import { render, wait, screen } from "@testing-library/react";
import MessageInput from "./MessageInput"
import { act } from "react-dom/test-utils";

it('renders a text area and send button', () => {
  const { container } = render(
    <MessageInput onSubmit={() => {}}></MessageInput>
  )

  expect(container.querySelector('.chat-message-input ion-textarea')).toBeInTheDocument();
  expect(container.querySelector('.chat-message-input ion-button')).toBeInTheDocument()
})

it('calls the onSubmit callback when button is pressed', async () => {
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

  act(() => { userEvent.click(button as TargetElement); });

  await wait(() => {
    expect(called).toEqual(true);
  });

  expect(params).not.toBeNull();
  expect(params.content).toEqual('some text');
  expect(typeof params.clear).toBe('function')
})

it('supports submitting with the enter key', async () => {
  let called = false;
  let params : any = null;

  const { container } = render(
    <MessageInput submitOnEnter={true} onSubmit={(arg) => {
      params = arg;
      called = true;
    }}></MessageInput>
  )

  const textarea = container.querySelector('.chat-message-input ion-textarea');

  expect(textarea).toBeInTheDocument();

  ionFireEvent.ionChange(textarea!, "some text");

  act(() => {
    ionFireEvent.keyDown(textarea!, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13
    })
  });

  await wait(() => {
    expect(called).toEqual(true);
  });

  expect(params).not.toBeNull();
  expect(params.content).toEqual('some text');
  expect(typeof params.clear).toBe('function')
})

it('doesnt call onSubmit if the string is empty of characters', async () => {
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
    userEvent.click(button as TargetElement);
  });

  await new Promise((r) => setTimeout(r, 1000));

  expect(called).toEqual(false);
})

it('only calls onSubmit once if the user spams the button during an async operation', async () => {
  let finished = false;

  const onSubmit = jest.fn((arg) => {
    return new Promise((r) => setTimeout(r, 10)).then(() => {
      finished = true;
    })
  });

  const { container } = render(
    <MessageInput onSubmit={onSubmit}></MessageInput>
  )

  const textarea = container.querySelector('.chat-message-input ion-textarea');
  const button = container.querySelector('ion-button');

  expect(textarea).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  ionFireEvent.ionChange(textarea!, "some text");

  await act(async () => {
    userEvent.click(button as TargetElement);
    userEvent.click(button as TargetElement);
    userEvent.click(button as TargetElement);
  });

  await wait(() => expect(finished).toBeTruthy());

  expect(onSubmit).toHaveBeenCalledTimes(1);
})


it('supports an onChange event', async () => {
  const myMock = jest.fn();

  const { container } = render(
    <MessageInput onChange={myMock} onSubmit={() => {}}></MessageInput>
  )

  const textarea = container.querySelector('.chat-message-input ion-textarea');
  expect(textarea).toBeInTheDocument();

  ionFireEvent.ionChange(textarea!, "some text");
  expect(myMock).toHaveBeenCalledWith('some text');

  ionFireEvent.ionChange(textarea!, "some other text");
  expect(myMock).toHaveBeenCalledWith('some text');
})


it('clears the text when the clear() callback is used', async () => {
  let called = false;

  const onSubmit = jest.fn(({ clear }) => {
    clear()
  });

  const { container } = render(
    <MessageInput  onSubmit={onSubmit}></MessageInput>
  )

  const textarea = container.querySelector('.chat-message-input ion-textarea');
  const button = container.querySelector('ion-button');

  expect(textarea).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  ionFireEvent.ionChange(textarea!, "some text");

  expect(textarea?.getAttribute('value')).toEqual("some text")

  act(() => {
    userEvent.click(button as TargetElement);
  });

  await wait(() => {
    expect(onSubmit).toHaveBeenCalled();
  });

  expect(textarea?.getAttribute('value')).toEqual("")
})
