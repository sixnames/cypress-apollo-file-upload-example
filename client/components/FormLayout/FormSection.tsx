import React from 'react';
import classes from './FormSection.module.css';

interface FormSectionInterface {
  className?: string;
  title?: string;
  children?: any;
  low?: boolean;
  isWarning?: boolean;
}

const FormSection: React.FC<FormSectionInterface> = ({
  className,
  title,
  children,
  low,
  isWarning,
}) => {
  return (
    <section
      className={`${classes.Section} ${className ? className : ''} ${low ? classes.Low : ''}`}
    >
      {title && (
        <div className={`${classes.Title} ${isWarning ? classes.TitleRed : ''}`}>
          <h2 className={classes.TitleName}>{title}</h2>
        </div>
      )}
      {children}
    </section>
  );
};

export default FormSection;
