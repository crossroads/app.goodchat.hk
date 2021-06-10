
import { IonColor } from "typings/style"
import { IonNote } from "@ionic/react";

// ---------------------------------
// ~ TYPES
// ---------------------------------

export type MessageFooterProps = {
  align?: 'left' | 'right'
  color?: IonColor
  text: string
}

// ---------------------------------
// ~ MESSAGE FOOTER
// ---------------------------------

export const MessageFooter : React.FC<MessageFooterProps> = ({ text, align, color = "light" }) => {
  align = align ?? 'left';

  const style = {
    textAlign: align
  }

  return (
    <IonNote class="chat-message-footer" color={color} style={style}>
      <small>{ text }</small>
    </IonNote>
  );
};

export default MessageFooter
