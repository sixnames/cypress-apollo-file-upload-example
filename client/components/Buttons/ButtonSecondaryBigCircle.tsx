import React from 'react';
import ButtonSecondaryBig from './ButtonSecondaryBig';

interface ButtonPropsInterface {
  className?: string;
  iconClass?: string;
  children?: any;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  title?: string;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  icon?: string;
  onClick?: () => void;
  testId?: string;
}

const ButtonSecondaryBigCircle: React.FC<ButtonPropsInterface> = ({ children, ...props }) => {
  return (
    <ButtonSecondaryBig circle={true} {...props}>
      {children}
    </ButtonSecondaryBig>
  );
};

export default ButtonSecondaryBigCircle;
