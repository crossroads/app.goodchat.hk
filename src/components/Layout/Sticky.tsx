import classNames from 'classnames'
import { style } from 'typestyle'

// ---------------------------------
// ~ TYPES
// ---------------------------------

export type StickyProps = {
  position: "top" | "bottom",
  zIndex?: number
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

export const Sticky: React.FC<StickyProps> = ({ children, position, zIndex }) => {
  const zStyle = zIndex ? { zIndex } : {}

  return (
    <div className={classNames(stickyStyle, position)} style={zStyle}>
      { children }
    </div>
  );
};

export default Sticky
