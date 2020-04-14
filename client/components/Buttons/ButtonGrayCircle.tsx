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
  onClick?: () => void;
  testId?: string;
}

const ButtonGrayCircle: React.FC<ButtonPropsInterface> = ({ children, ...props }) => {
  return (
    <ButtonGray circle={true} size={'Normal'} {...props}>
      {children}
    </ButtonGray>
  );
};

export default ButtonGrayCircle;
