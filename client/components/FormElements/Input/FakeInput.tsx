import React from 'react';
import InputLine from './InputLine';
import classes from './FakeInput.module.css';

interface FakeInputInterface {
  className?: string;
  value: any;
  lineClass?: string;
  label?: any;
  low?: boolean;
  labelPostfix?: any;
  postfix?: 'percent' | 'currency' | 'amount' | 'hours' | 'days' | 'human' | 'minutes';
  labelLink?: any;
}

const FakeInput: React.FC<FakeInputInterface> = ({
  className,
  value,
  lineClass,
  label,
  low,
  labelPostfix,
  postfix,
  labelLink,
}) => {
  return (
    <InputLine
      isRequired={false}
      name={''}
      lineClass={lineClass}
      label={label}
      labelPostfix={labelPostfix}
      labelLink={labelLink}
      postfix={postfix}
      low={low}
    >
      <span className={`${classes.Input} ${className ? className : ''}`}>{value}</span>
    </InputLine>
  );
};

export default FakeInput;
