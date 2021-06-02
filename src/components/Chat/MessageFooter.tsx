
import { IonNote } from "@ionic/react";

// ---------------------------------
// ~ TYPES
// ---------------------------------

export type MessageFooterProps = {
  align?: 'left' | 'right'
  text: string
}

// ---------------------------------
// ~ MESSAGE FOOTER
// ---------------------------------

export const MessageFooter : React.FC<MessageFooterProps> = ({ text, align }) => {
  align = align ?? 'left';

  const style = {
    textAlign: align
  }

  return (
    <IonNote class="chat-message-footer" style={style}>
      <small>{ text }</small>
    </IonNote>
  );
};

export default MessageFooter
