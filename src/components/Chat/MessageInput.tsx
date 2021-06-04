import { paperPlane } from 'ionicons/icons'
import { throttle } from 'lib/utils/async';
import { useState } from 'react'
import classnames from 'classnames';
import { style } from 'typestyle'
import {
  IonGrid,
  IonRow,
  IonCol,
  IonSpinner,
  IonTextarea,
  IonIcon,
  IonButton
} from '@ionic/react';

// ---------------------------------
// ~ TYPES
// ---------------------------------

export type MessageInputContent = string

export type MessageInputCallback = (
  params: {
    content: MessageInputContent
    clear: () => void
  }
) => any

export type MessageInputProps = {
  onSubmit: MessageInputCallback
  onChange?: (content: MessageInputContent) => any
  submitOnEnter?: boolean
}


// ---------------------------------
// ~ STYLE
// ---------------------------------

const inputStyle = style({
  borderTop: '1px solid black',
  background: 'var(--background)',
  '$nest': {
    '.grow': {
      flexGrow: 1
    },
    '.shrink': {
      flexGrow: 0
    },
    '.center-vertical': {
      display: 'flex',
      alignItems: 'center'
    },
    'ion-textarea': {
      backgroundColor: 'white',
      color: 'black',
      minHeight: '2rem',
      maxHeight: '10rem',
      borderRadius: '10px',
      border: '1px solid gray',
      padding: '0.5rem'
    }
  }
})

// ---------------------------------
// ~ MESSAGE INPUT
// ---------------------------------

export const MessageInput: React.FC<MessageInputProps> = ({ onSubmit, onChange, submitOnEnter }) => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState<MessageInputContent>("");

  const applyChange = (text: string) => {
    setText(text);
    if (onChange) {
      onChange(text);
    }
  }

  const clear = () => {
    applyChange("");
  }

  const trySubmit = throttle(async () => {
    if (loading) return;

    const trimmed = text.trim();
    if (trimmed.length > 0) {
      setLoading(true);
      try {
        await onSubmit({
          content: trimmed,
          clear: clear
        });
      } finally {
        setLoading(false);
      }
    }
  })

  const keyListener = (e : React.KeyboardEvent<HTMLIonTextareaElement>) => {
    if (submitOnEnter && /enter/i.test(e.key)) {
      trySubmit();
      e.preventDefault();
    }
  }

  return (
    <IonGrid className={classnames('chat-message-input', inputStyle)}>
      <IonRow>
        <IonCol className="grow">
          <IonTextarea
            onKeyDown={keyListener}
            autoGrow={true}
            inputmode='text'
            enterkeyhint='enter'
            spellcheck={true}
            value={text}
            onIonChange={e => applyChange(e.detail.value!)}
          ></IonTextarea>
        </IonCol>
        <IonCol className="shrink center-vertical">
          <IonButton onClick={trySubmit}>
            {
              loading ? (
                <IonSpinner name="crescent" />
              ) : (
                <IonIcon icon={paperPlane} />
              )
            }
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default MessageInput
