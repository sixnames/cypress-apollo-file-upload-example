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

const ButtonPrimaryBig: React.FC<ButtonPropsInterface> = ({ children, ...props }) => {
  return (
    <ButtonPrimary size={'Big'} {...props}>
      {children}
    </ButtonPrimary>
  );
};

export default ButtonPrimaryBig;
