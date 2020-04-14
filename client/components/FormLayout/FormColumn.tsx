import React from 'react';
import classes from './FormColumn.module.css';

interface FormColumnInterface {
  children: any;
  className?: string;
  alignTop?: boolean;
}

const FormColumn: React.FC<FormColumnInterface> = ({ className, children, alignTop }) => {
  return (
    <div
      className={`${classes.Column} ${className ? className : ''} ${
        alignTop ? classes.AlignTop : ''
      }`}
    >
      {children}
    </div>
  );
};

export default FormColumn;
