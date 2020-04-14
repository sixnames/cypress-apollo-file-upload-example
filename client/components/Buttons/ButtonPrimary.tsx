import React from 'react';
import Button from './Button';

interface ButtonPropsInterface {
  size?: 'Small' | 'Normal' | 'Big';
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

const ButtonPrimary: React.FC<ButtonPropsInterface> = ({ children, ...props }) => {
  return (
    <Button theme={'primary'} {...props}>
      {children}
    </Button>
  );
};

export default ButtonPrimary;
