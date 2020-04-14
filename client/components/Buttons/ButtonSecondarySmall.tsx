import React from 'react';
import ButtonSecondary from './ButtonSecondary';

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

const ButtonSecondarySmall: React.FC<ButtonPropsInterface> = ({ children, ...props }) => {
  return (
    <ButtonSecondary size={'Small'} {...props}>
      {children}
    </ButtonSecondary>
  );
};

export default ButtonSecondarySmall;
