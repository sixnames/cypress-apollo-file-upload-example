import React from 'react';
import classes from './Button.module.css';

interface ButtonPropsInterface {
  theme: 'primary' | 'secondary' | 'gray';
  size?: 'Small' | 'Normal' | 'Big';
  className?: string;
  iconClass?: string;
  children?: any;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  circle?: boolean;
  title?: string;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  icon?: string;
  onClick?: (e: any) => void;
  testId?: string;
}

const Button: React.FC<ButtonPropsInterface> = ({
  theme = 'primary',
  size = 'Normal',
  title = '',
  placement = 'top',
  type = 'button',
  children,
  disabled = false,
  icon,
  iconClass,
  circle = false,
  className,
  testId,
  ...props
}) => {
  const noChildren = !children;
  const buttonClass = `${classes.Button} ${classes[size]} ${classes[theme]} ${
    noChildren ? classes.NoChildren : ''
  } ${circle ? classes.Circle : ''} ${className ? className : ''}`;

  return (
    <button data-cy={testId} disabled={disabled} className={buttonClass} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
