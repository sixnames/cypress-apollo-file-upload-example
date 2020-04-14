import React from 'react';
import classes from './FormRowWide.module.css';

interface FormRowWideInterface {
  children: any;
  className?: string;
}

const FormRowWide: React.FC<FormRowWideInterface> = ({ className, children }) => {
  return <div className={`${classes.Wide} ${className ? className : ''}`}>{children}</div>;
};

export default FormRowWide;
