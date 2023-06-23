import React from 'react';
import { FormikContextType, FormikValues, useFormikContext } from 'formik';

const Step4: React.FC = () => {
  const { values, setFieldValue }: FormikContextType<FormikValues> = useFormikContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue('step4', event.target.value);
  };

  return (
    <div>
      <h2>Paso 4</h2>
      <input type="text" value={values.step4} onChange={handleChange} />
    </div>
  );
};

export default Step4;
