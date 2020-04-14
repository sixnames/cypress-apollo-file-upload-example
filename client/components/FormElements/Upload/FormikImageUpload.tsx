import React, { ChangeEvent } from 'react';
import { Field, FieldProps } from 'formik';
import Icon from '../../Icon/Icon';
import InputLine from '../Input/InputLine';
import TTip from '../../TTip/TTip';
import FormikImageUploadPreview from './FormikImageUploadPreview';
import classes from './FormikImageUpload.module.css';

interface FormikImageUploadInterface {
  name: string;
  lineClass?: string;
  label?: string;
  low?: boolean;
  wide?: boolean;
  labelPostfix?: any;
  postfix?: 'percent' | 'currency' | 'amount' | 'hours' | 'days' | 'human' | 'minutes';
  labelLink?: any;
  isRequired?: boolean;
  tooltip?: any;
}

const FormikImageUpload: React.FC<FormikImageUploadInterface> = ({
  name,
  label,
  isRequired,
  lineClass,
  labelPostfix,
  labelLink,
  low,
  tooltip,
}) => {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => {
        const { setFieldValue } = form;

        function setImageHandler(files: FileList | null) {
          if (files) {
            setFieldValue(name, files[0]);
          }
        }

        function removeImageHandler() {
          setFieldValue(name, undefined);
        }

        return (
          <InputLine
            isRequired={isRequired}
            name={name}
            lineClass={lineClass}
            label={label}
            labelPostfix={labelPostfix}
            labelLink={labelLink}
            low={low}
          >
            <TTip title={tooltip} className={classes.Frame}>
              <label className={classes.InputFrame}>
                <input
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setImageHandler(event.target.files)
                  }
                  className={classes.Input}
                  type={'file'}
                  name={name}
                  id={name}
                />
              </label>
              <Icon name={'no-image'} className={classes.NoImage} />
              <FormikImageUploadPreview removeFile={removeImageHandler} file={field.value} />
            </TTip>
          </InputLine>
        );
      }}
    </Field>
  );
};

export default FormikImageUpload;
