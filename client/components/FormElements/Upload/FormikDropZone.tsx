import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import InputLine from '../Input/InputLine';
import FormikDropZonePreview from './FormikDropZonePreview';
import { Field, FieldProps } from 'formik';
import classes from './FormikDropZone.module.css';
import ButtonSecondarySmall from '../../Buttons/ButtonSecondarySmall';
import ButtonPrimarySmall from '../../Buttons/ButtonPrimarySmall';
import { NEGATIVE_INDEX } from '../../../../config';
import { get } from 'lodash';
import FieldErrorMessage from '../FieldErrorMessage/FieldErrorMessage';

interface FormikDropZoneInterface {
  format?: string;
  name: string;
  label?: string;
  lineClass?: string;
  frameClass?: string;
  low?: boolean;
  tooltip?: string;
  wide?: boolean;
  labelPostfix?: any;
  labelLink?: any;
  isRequired?: boolean;
  testId?: string;
  showInlineError?: boolean;
}

interface FormikDropZoneConsumerInterface {
  format?: string;
  name: string;
  label?: string;
  lineClass?: string;
  setFieldValue: (name: string, value: any) => void;
  low?: boolean;
  tooltip?: string;
  value: any[];
  wide?: boolean;
  labelPostfix?: any;
  labelLink?: any;
  isRequired?: boolean;
  testId?: string;
}

const FormikDropZoneConsumer: React.FC<FormikDropZoneConsumerInterface> = ({
  format = 'image/jpeg',
  name,
  label,
  isRequired,
  lineClass,
  setFieldValue,
  labelPostfix,
  labelLink,
  low,
  tooltip,
  value = [],
  testId,
}) => {
  const [removeIndex, setRemoveIndex] = useState<number>(NEGATIVE_INDEX);
  const onDrop = useCallback(
    (acceptedFiles) => {
      setFieldValue(name, [...value, ...acceptedFiles]);
    },
    [name, setFieldValue, value],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: format,
  });

  function removeImageHandler(index: number) {
    setRemoveIndex(index);
  }

  function removeImageDecline() {
    setRemoveIndex(NEGATIVE_INDEX);
  }

  function removeImageConfirm(removeIndex: number | null) {
    const processedData = value.filter((_, index) => index !== removeIndex);
    setFieldValue(name, processedData);
    setRemoveIndex(NEGATIVE_INDEX);
  }

  return (
    <InputLine
      isRequired={isRequired}
      name={name}
      lineClass={`${classes.InputLine} ${lineClass ? lineClass : ''}`}
      label={label}
      labelPostfix={labelPostfix}
      labelLink={labelLink}
      low={low}
    >
      <div className={classes.Holder}>
        <div className={classes.Frame} {...getRootProps()} data-cy={testId}>
          <div title={tooltip}>
            <div className={classes.FrameText}>Drag your files here. Or click for select.</div>

            <input {...getInputProps()} className={classes.Input} />
          </div>
        </div>

        <FormikDropZonePreview
          files={value}
          name={name}
          setFieldValue={setFieldValue}
          removeImageHandler={removeImageHandler}
        />

        {removeIndex > NEGATIVE_INDEX && (
          <div className={classes.Prompt}>
            <div className={classes.PromptTitle}>Are you sure?</div>
            <div className={classes.PromptButtons}>
              <ButtonSecondarySmall
                onClick={() => removeImageConfirm(removeIndex)}
                testId={'remove-image-confirm'}
              >
                Да
              </ButtonSecondarySmall>
              <ButtonPrimarySmall onClick={removeImageDecline} testId={'remove-image-decline'}>
                Нет
              </ButtonPrimarySmall>
            </div>
          </div>
        )}
      </div>
    </InputLine>
  );
};

const FormikDropZone: React.FC<FormikDropZoneInterface> = (props) => {
  const { frameClass, name, showInlineError } = props;
  return (
    <Field name={name}>
      {({ field, form: { setFieldValue, errors } }: FieldProps<any[]>) => {
        const error = get(errors, name);
        const notValid = Boolean(error);
        const showError = showInlineError && notValid;
        const value: any[] = field.value;

        return (
          <div className={frameClass ? frameClass : ''}>
            <FormikDropZoneConsumer value={value} setFieldValue={setFieldValue} {...props} />

            {showError && <FieldErrorMessage name={name} />}
          </div>
        );
      }}
    </Field>
  );
};

export default FormikDropZone;
