import React from 'react';
import ButtonPrimaryBig from './ButtonPrimaryBig';

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

const ButtonPrimaryBigCircle: React.FC<ButtonPropsInterface> = ({ children, ...props }) => {
  return (
    <ButtonPrimaryBig circle={true} {...props}>
      {children}
    </ButtonPrimaryBig>
  );
};

export default ButtonPrimaryBigCircle;
