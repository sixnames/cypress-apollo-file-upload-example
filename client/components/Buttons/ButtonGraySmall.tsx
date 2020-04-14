import React from 'react';
import ButtonGray from './ButtonGray';

interface ButtonPropsInterface {
  className?: string;
  iconClass?: string;
  children?: any;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  title?: string;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  icon?: string;
  circle?: boolean;
  onClick?: (e: any) => void;
  testId?: string;
}

const ButtonGraySmall: React.FC<ButtonPropsInterface> = ({ children, ...props }) => {
  return (
    <ButtonGray size={'Small'} {...props}>
      {children}
    </ButtonGray>
  );
};

export default ButtonGraySmall;
