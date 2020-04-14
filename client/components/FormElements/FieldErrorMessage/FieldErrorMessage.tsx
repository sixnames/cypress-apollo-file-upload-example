import React from 'react';
import classes from './FieldErrorMessage.module.css';
import { ErrorMessage } from 'formik';

interface FieldErrorMessageInterface {
  name: string;
  className?: string;
}

const FieldErrorMessage: React.FC<FieldErrorMessageInterface> = ({ name, className }) => {
  return (
    <div className={`${classes.Error} ${className ? className : ''}`} data-cy={`${name}-error`}>
      <ErrorMessage name={name} />
    </div>
  );
};

export default FieldErrorMessage;
