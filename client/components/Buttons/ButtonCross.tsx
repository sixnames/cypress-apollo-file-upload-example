import React from 'react';
import ButtonGraySmallCircle from './ButtonGraySmallCircle';

interface ButtonPropsInterface {
  className?: string;
  iconClass?: string;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  title?: string;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  onClick?: () => void;
  testId?: string;
}

const ButtonCross: React.FC<ButtonPropsInterface> = ({ ...props }) => {
  return <ButtonGraySmallCircle icon={'cross'} {...props} />;
};

export default ButtonCross;
