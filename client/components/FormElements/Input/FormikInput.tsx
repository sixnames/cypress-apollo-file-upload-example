import React from 'react';
import Input from './Input';
import { Field, FieldProps } from 'formik';
import { get } from 'lodash';
import FieldErrorMessage from '../FieldErrorMessage/FieldErrorMessage';

interface FormikInputPropsInterface {
  name: string;
  className?: string;
  lineClass?: string;
  frameClass?: string;
  label?: string;
  low?: boolean;
  wide?: boolean;
  isHorizontal?: boolean;
  labelPostfix?: any;
  postfix?: 'percent' | 'currency' | 'amount' | 'hours' | 'days' | 'human' | 'minutes';
  labelLink?: any;
  isRequired?: boolean;
  size?: 'Small' | 'Normal' | 'Big';
  value?: any;
  type?: 'text' | 'number' | 'email' | 'tel' | 'password';
  autoComplete?: 'on' | 'off';
  placeholder?: string;
  testId?: string;
  showInlineError?: boolean;
  min?: number;
}

const FormikInput: React.FC<FormikInputPropsInterface> = ({
  name,
  autoComplete = 'on',
  isRequired,
  type,
  showInlineError,
  frameClass,
  ...props
}) => {
  return (
    <Field name={name}>
      {({ field, form: { errors } }: FieldProps) => {
        const error = get(errors, name);
        const notValid = Boolean(error);
        const showError = showInlineError && notValid;

        return (
          <div className={frameClass ? frameClass : ''}>
            <Input
              {...field}
              {...props}
              type={type}
              isRequired={isRequired}
              autoComplete={autoComplete}
              notValid={notValid}
            />

            {showError && <FieldErrorMessage name={name} />}
          </div>
        );
      }}
    </Field>
  );
};

export default FormikInput;
