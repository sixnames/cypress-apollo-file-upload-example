import React from 'react';
import InputLine from './InputLine';
import classes from './Input.module.css';

interface InputPropsInterface {
  name: string;
  className?: string;
  lineClass?: string;
  label?: string;
  low?: boolean;
  wide?: boolean;
  labelPostfix?: any;
  isHorizontal?: boolean;
  postfix?: 'percent' | 'currency' | 'amount' | 'hours' | 'days' | 'human' | 'minutes';
  labelLink?: any;
  isRequired?: boolean;
  size?: 'Small' | 'Normal' | 'Big';
  value?: any;
  notValid?: boolean;
  type?: 'text' | 'number' | 'email' | 'tel' | 'password';
  autoComplete?: 'on' | 'off';
  testId?: string;
  min?: number;
}

const Input: React.FC<InputPropsInterface> = ({
  name,
  className,
  isRequired,
  lineClass,
  label,
  low,
  wide,
  labelPostfix,
  isHorizontal,
  postfix,
  labelLink,
  size = 'Normal',
  value,
  notValid,
  type = 'text',
  testId,
  ...props
}) => {
  const sizeClass = classes[size];
  const currentValue = !value && value !== 0 ? '' : value;

  return (
    <InputLine
      isRequired={isRequired}
      name={name}
      lineClass={lineClass}
      label={label}
      isHorizontal={isHorizontal}
      labelPostfix={labelPostfix}
      labelLink={labelLink}
      postfix={postfix}
      low={low}
      wide={wide}
    >
      <input
        id={name}
        className={`${classes.Input} ${sizeClass} ${notValid ? classes.Error : ''}  ${
          className ? className : ''
        }`}
        value={currentValue}
        name={name}
        type={type ? type : 'text'}
        data-cy={testId}
        {...props}
      />
    </InputLine>
  );
};

export default Input;
