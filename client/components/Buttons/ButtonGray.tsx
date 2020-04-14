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
  onClick?: (e: any) => void;
  testId?: string;
}

const ButtonGray: React.FC<ButtonPropsInterface> = ({ children, ...props }) => {
  return (
    <Button theme={'gray'} {...props}>
      {children}
    </Button>
  );
};

export default ButtonGray;
