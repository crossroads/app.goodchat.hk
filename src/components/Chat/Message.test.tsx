import { MessageImageContent, MessageTextContent } from "../../typings/goodchat";
import MessageBody from "./MessageBody"
import { render } from "@testing-library/react";
import Message from './Message'
import faker from "faker"
import React from "react";

const textContent : MessageTextContent = {
  type: 'text',
  text: faker.lorem.words(4)
};

test('allows creating a left-styled message bubble', () => {
  const { container } = render(
    <Message slot={'start'}>
      <MessageBody content={textContent}></MessageBody>
    </Message>
  )

  const imageElement = container.querySelector('.chat-message');

  expect(imageElement).toBeTruthy();
  expect(imageElement!.classList).toContain('start')
})

test('allows creating a right-styled message bubble', () => {
  const { container } = render(
    <Message slot={'end'}>
      <MessageBody content={textContent}></MessageBody>
    </Message>
  )

  const imageElement = container.querySelector('.chat-message');

  expect(imageElement).toBeTruthy();
  expect(imageElement!.classList).toContain('end')
})
