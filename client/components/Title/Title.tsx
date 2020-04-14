import React from 'react';
import classes from './Title.module.css';

interface TitlePropsInterface {
  children: any;
  subtitle?: any;
  className?: string;
  light?: boolean;
  low?: boolean;
  tag?: keyof JSX.IntrinsicElements;
  size?: 'Small' | 'Normal' | 'Big';
}

const Title: React.FC<TitlePropsInterface> = ({
  children,
  subtitle,
  className,
  light,
  low,
  tag = 'h1',
  size = 'Normal',
}) => {
  const TagName = tag;

  return (
    <div
      className={`${classes.Title} ${classes[size]} ${light ? classes.Light : ''} ${
        low ? classes.Low : ''
      } ${className ? className : ''}`}
    >
      <TagName className={`${classes.TitleText}`}>{children}</TagName>
      {subtitle && <div className={classes.Subtitle}>{subtitle}</div>}
    </div>
  );
};

export default Title;
