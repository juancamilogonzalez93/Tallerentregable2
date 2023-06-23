import React from 'react';
import { FormikContextType, FormikValues, useFormikContext } from 'formik';

const Step1: React.FC = () => {
  const { values, setFieldValue }: FormikContextType <FormikValues> = useFormikContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue('step1', event.target.value);
  };

  return (
    <div>
      <h2>Paso 1</h2>
      <input type="text" value={values.step1} onChange={handleChange} />
    </div>
  );
};

export default Step1;
