import classNames from 'classnames'
import { style } from 'typestyle'

// ---------------------------------
// ~ TYPES
// ---------------------------------

export type StickyProps = {
  position: "top" | "bottom"
}

// ---------------------------------
// ~ STYLE
// ---------------------------------

const stickyStyle = style({
  position: 'sticky',
  '$nest': {
    '&.top': {
      top: '0px'
    },
    '&.bottom': {
      bottom: '0px'
    }
  }
})

// ---------------------------------
// ~ FLOATING STICKY COMPONENT
// ---------------------------------

export const Sticky: React.FC<StickyProps> = ({ children, position }) => {
  return (
    <div className={classNames(stickyStyle, position)}>
      { children }
    </div>
  );
};

export default Sticky
