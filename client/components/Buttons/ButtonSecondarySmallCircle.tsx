import React from 'react';
import ButtonSecondarySmall from './ButtonSecondarySmall';

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

const ButtonSecondarySmallCircle: React.FC<ButtonPropsInterface> = ({ children, ...props }) => {
  return (
    <ButtonSecondarySmall circle={true} {...props}>
      {children}
    </ButtonSecondarySmall>
  );
};

export default ButtonSecondarySmallCircle;
