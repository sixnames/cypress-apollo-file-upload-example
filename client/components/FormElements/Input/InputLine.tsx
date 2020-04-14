import React from 'react';
import classes from './InputLine.module.css';

interface InputLinePropsInterface {
  name: string;
  lineClass?: string;
  label?: string;
  low?: boolean;
  children: any;
  isHorizontal?: boolean;
  wide?: boolean;
  labelPostfix?: any;
  postfix?: 'percent' | 'currency' | 'amount' | 'hours' | 'days' | 'human' | 'minutes';
  labelLink?: any;
  isRequired?: boolean;
}

const InputLine: React.FC<InputLinePropsInterface> = ({
  name,
  lineClass,
  label,
  low,
  children,
  wide,
  labelPostfix,
  postfix,
  labelLink,
  isRequired,
  isHorizontal,
}) => {
  const showInputPostfix = (postfix: string | undefined) => {
    switch (postfix) {
      case 'percent':
        return <div className={classes.LinePostfix}>%</div>;
      case 'currency':
        return <div className={classes.LinePostfix}>р.</div>;
      case 'amount':
        return <div className={classes.LinePostfix}>шт.</div>;
      case 'hours':
        return <div className={classes.LinePostfix}>ч.</div>;
      case 'minutes':
        return <div className={classes.LinePostfix}>мин.</div>;
      case 'human':
        return <div className={classes.LinePostfix}>чел.</div>;
      case 'days':
        return <div className={classes.LinePostfix}>дн.</div>;
      default:
        return null;
    }
  };

  return (
    <div
      className={`${classes.Line} ${isHorizontal ? classes.Horizontal : ''} ${
        wide ? classes.Wide : ''
      } ${low ? classes.Low : ''} ${lineClass ? lineClass : ''}`}
    >
      {label && (
        <label htmlFor={name} className={classes.Label}>
          {label}
          {labelPostfix && <span className={classes.LabelPostfix}>{labelPostfix}</span>}
          {labelLink && <span className={classes.LabelLink}>{labelLink}</span>}
          {isRequired && <sup>*</sup>}
        </label>
      )}
      <div className={classes.LineHolder}>
        <div className={classes.LineContent}>{children}</div>
        {showInputPostfix(postfix)}
      </div>
    </div>
  );
};

export default InputLine;
