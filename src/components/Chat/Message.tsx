import classnames from 'classnames'
import { style } from 'typestyle'
import React from 'react'

const RIGHT_COLOR = '#DCF8C6';
const LEFT_COLOR = '#FFFFFF';

// ---------------------------------
// ~ TYPES
// ---------------------------------

export type MessageProps = {
  slot?: 'end' | 'start'
}

// ---------------------------------
// ~ STYLE
// ---------------------------------

const bubbleStyle = style({
  color: 'black',
  margin: '1rem',
  padding: '1.5rem',
  display: 'inline-block',
  position: 'relative',
  minWidth: '4rem',
  maxWidth: '13rem',
  height: 'auto',
  borderRadius: '20px',
  border: '2px solid #666',
  content: ' ',
  $nest: {
    '&.end': {
      backgroundColor: RIGHT_COLOR,
      textAlign: 'right'
    },
    '&.start': {
      backgroundColor: LEFT_COLOR,
      textAlign: 'left'
    },
    '&::before': {
      content: `' '`,
      position: 'absolute',
      width: '0',
      height: '0',
      top: '-2px',
      bottom: 'auto',
      border: '16px solid',
      borderColor: '#666 transparent transparent transparent'
    },
    '&.end::before': {
      left: 'auto',
      right: '-16px',
    },
    '&.start::before': {
      right: 'auto',
      left: '-16px',
    },
    '&::after': {
      content: `' '`,
      position: 'absolute',
      width: '0',
      height: '0',
      top: '0px',
      bottom: 'auto',
      border: '14px solid',
    },
    '&.end::after': {
      left: 'auto',
      right: '-12px',
      borderColor: `${RIGHT_COLOR} transparent transparent transparent`
    },
    '&.start::after': {
      right: 'auto',
      left: '-12px',
      borderColor: `${LEFT_COLOR} transparent transparent transparent`
    }
  }
});

// ---------------------------------
// ~ MESSAGE BUBBLE
// ---------------------------------

export const Message: React.FC<MessageProps> = ({ slot, children }) => {
  slot = slot ?? 'start';

  return (
    <div className={classnames('chat-message', slot, bubbleStyle)} slot={slot} >
      {
        children
      }
    </div>
  );
};

export default Message
