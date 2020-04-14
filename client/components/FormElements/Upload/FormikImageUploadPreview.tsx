import React, { useEffect, useState } from 'react';
import classes from './FormikImageUploadPreview.module.css';

interface FormikImageUploadPreviewInterface {
  file: any;
  removeImageHandler: (index: number) => void;
  inline?: boolean;
  index: number;
}

const FormikImageUploadPreview: React.FC<FormikImageUploadPreviewInterface> = ({
  file = null,
  inline,
  index,
}) => {
  const [thumb, setThumb] = useState<string | ArrayBuffer | null>(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumb(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

  if (!file || !thumb) {
    return null;
  }

  const alt = file && file.name ? file.name : '';

  return (
    <div
      className={`${classes.Frame} ${inline ? classes.Inline : ''}`}
      data-cy={`file-preview-${index}`}
    >
      <div>
        <img src={`${thumb}`} alt={alt} width={150} height={150} />
      </div>
    </div>
  );
};

export default FormikImageUploadPreview;
