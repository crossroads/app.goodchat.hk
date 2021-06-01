import { MessageImageContent, MessageTextContent, MessageContent } from "../../typings/goodchat";
import MessageBody from "./MessageBody"
import { render } from "@testing-library/react";
import Message from './Message'
import faker from "faker"
import React from "react";

const imageContent : MessageImageContent = {
  type: 'image',
  mediaUrl: faker.image.imageUrl(),
  mediaType: 'image/png',
  mediaSize: 1
};

const textContent : MessageTextContent = {
  type: 'text',
  text: faker.lorem.words(4)
};

const unknownContent = {
  type: 'weird',
  other: 'prop'
} as any

test('it renders type "image" as an image', () => {
  const { container } = render(
    <Message>
      <MessageBody content={imageContent}></MessageBody>
    </Message>
  )

  const imageElement = container.querySelector('ion-img.chat-message-content.image');

  expect(imageElement).toBeTruthy();
  expect(imageElement.getAttribute('src')).toEqual(imageContent.mediaUrl);
})

test('it renders type "text" as a label', () => {
  const { container } = render(
    <Message>
      <MessageBody content={textContent}></MessageBody>
    </Message>
  )

  const textElement = container.querySelector('ion-label.chat-message-content.text');

  expect(textElement).toBeTruthy();
  expect(textElement.textContent).toEqual(textContent.text);
})

test('it renders type unknown content types as "unknown"', () => {
  const { container } = render(
    <Message>
      <MessageBody content={unknownContent}></MessageBody>
    </Message>
  )

  const textElement = container.querySelector('.chat-message-content.unknown');

  expect(textElement).toBeTruthy();
  expect(textElement.textContent).toEqual('Cannot display message');
})

