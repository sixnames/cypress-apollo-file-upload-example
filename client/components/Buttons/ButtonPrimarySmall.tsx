import React from 'react';
import ButtonPrimary from './ButtonPrimary';

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

const ButtonPrimarySmall: React.FC<ButtonPropsInterface> = ({ children, ...props }) => {
  return (
    <ButtonPrimary size={'Small'} {...props}>
      {children}
    </ButtonPrimary>
  );
};

export default ButtonPrimarySmall;
