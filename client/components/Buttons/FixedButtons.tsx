import React from 'react';
import AnimateOpacity from '../AnimateOpacity/AnimateOpacity';
import classes from './FixedButtons.module.css';

interface FixedButtonsInterface {
  children: any;
  visible?: boolean;
  absolute?: boolean;
}

const FixedButtons: React.FC<FixedButtonsInterface> = ({ children, visible = true, absolute }) => {
  if (!visible) {
    return null;
  }

  return (
    <AnimateOpacity
      data-cy={'fixed-buttons'}
      className={`${classes.Frame} ${absolute ? classes.Absolute : classes.Fixed}`}
    >
      {children}
    </AnimateOpacity>
  );
};

export default FixedButtons;
