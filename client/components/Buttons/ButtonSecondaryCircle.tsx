import React from 'react';
import ButtonSecondary from './ButtonSecondary';

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

const ButtonSecondaryCircle: React.FC<ButtonPropsInterface> = ({ children, ...props }) => {
  return (
    <ButtonSecondary circle={true} size={'Normal'} {...props}>
      {children}
    </ButtonSecondary>
  );
};

export default ButtonSecondaryCircle;
