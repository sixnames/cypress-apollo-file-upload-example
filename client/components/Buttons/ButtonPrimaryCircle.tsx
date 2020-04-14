import React from 'react';
import ButtonPrimary from './ButtonPrimary';

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

const ButtonPrimaryCircle: React.FC<ButtonPropsInterface> = ({ children, ...props }) => {
  return (
    <ButtonPrimary circle={true} size={'Normal'} {...props}>
      {children}
    </ButtonPrimary>
  );
};

export default ButtonPrimaryCircle;
