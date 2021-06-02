import { MessageContent } from "../../typings/goodchat";
import {
  IonImg,
  IonText
} from "@ionic/react";


// ---------------------------------
// ~ TYPES
// ---------------------------------

export type MessageBodyProps = {
  content: MessageContent
}

// ---------------------------------
// ~ MESSAGE CONTENT
// ---------------------------------

export const MessageBody: React.FC<MessageBodyProps> = ({ content }) => {

  if (content.type === 'text') {
    return (
      <IonText class="chat-message-content text" style={{ display: 'block' }}>
        { content.text }
      </IonText>
    );
  }

  if (content.type === 'image') {
    return (
      <IonImg class="chat-message-content image" src={content.mediaUrl}></IonImg>
    );
  }

  return (
    <IonText class="chat-message-content unknown" style={{ display: 'block' }}>
      <i>Cannot display message</i>
    </IonText>
  );
};

export default MessageBody
