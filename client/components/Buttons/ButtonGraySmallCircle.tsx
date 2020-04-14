import React from 'react';
import ButtonGraySmall from './ButtonGraySmall';

interface ButtonPropsInterface {
  className?: string;
  iconClass?: string;
  children?: any;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  title?: string;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  icon?: string;
  onClick?: (e: any) => void;
  testId?: string;
}

const ButtonGraySmallCircle: React.FC<ButtonPropsInterface> = ({ children, ...props }) => {
  return (
    <ButtonGraySmall circle={true} {...props}>
      {children}
    </ButtonGraySmall>
  );
};

export default ButtonGraySmallCircle;
