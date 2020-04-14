import React from 'react';
import ButtonPrimarySmall from './ButtonPrimarySmall';

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

const ButtonPrimarySmallCircle: React.FC<ButtonPropsInterface> = ({ children, ...props }) => {
  return (
    <ButtonPrimarySmall circle={true} {...props}>
      {children}
    </ButtonPrimarySmall>
  );
};

export default ButtonPrimarySmallCircle;
