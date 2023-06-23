import React from 'react';
import { FormikContextType, FormikValues, useFormikContext } from 'formik';

const Step3: React.FC = () => {
  const { values, setFieldValue }: FormikContextType<FormikValues> = useFormikContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue('step3', event.target.value);
  };

  return (
    <div>
      <h2>Paso 3</h2>
      <input type="text" value={values.step3} onChange={handleChange} />
    </div>
  );
};

export default Step3;
