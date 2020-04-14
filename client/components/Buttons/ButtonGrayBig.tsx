import React from 'react';
import ButtonGray from './ButtonGray';

interface ButtonPropsInterface {
  className?: string;
  iconClass?: string;
  children?: any;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  circle?: boolean;
  title?: string;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  icon?: string;
  onClick?: () => void;
  testId?: string;
}

const ButtonGrayBig: React.FC<ButtonPropsInterface> = ({ children, ...props }) => {
  return (
    <ButtonGray size={'Big'} {...props}>
      {children}
    </ButtonGray>
  );
};

export default ButtonGrayBig;
