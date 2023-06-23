import React from 'react';
import { FormikContextType, FormikValues, useFormikContext } from 'formik';

const Step2: React.FC = () => {
  const { values, setFieldValue }: FormikContextType<FormikValues> = useFormikContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue('step2', event.target.value);
  };

  return (
    <div>
      <h2>Paso 2</h2>
      <input type="text" value={values.step2} onChange={handleChange} />
    </div>
  );
};

export default Step2;
