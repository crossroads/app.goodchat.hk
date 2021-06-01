import { MessageContent } from "../../typings/goodchat";
import {
  IonImg,
  IonLabel
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
      <IonLabel class="chat-message-content text">
        { content.text }
      </IonLabel>
    );
  }

  if (content.type === 'image') {
    return (
      <IonImg class="chat-message-content image" src={content.mediaUrl}></IonImg>
    );
  }

  return (
    <IonLabel class="chat-message-content unknown">
      <i>Cannot display message</i>
    </IonLabel>
  );
};

export default MessageBody
