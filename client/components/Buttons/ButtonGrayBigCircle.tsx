import React from 'react';
import ButtonGrayBig from './ButtonGrayBig';

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

const ButtonGrayBigCircle: React.FC<ButtonPropsInterface> = ({ children, ...props }) => {
  return (
    <ButtonGrayBig circle={true} {...props}>
      {children}
    </ButtonGrayBig>
  );
};

export default ButtonGrayBigCircle;
