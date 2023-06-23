import React from 'react';
import { FormikContextType, FormikValues, useFormikContext } from 'formik';

const Step5: React.FC = () => {
  const { values, setFieldValue }: FormikContextType<FormikValues> = useFormikContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue('step5', event.target.value);
  };

  return (
    <div>
      <h2>Paso 5</h2>
      <input type="text" value={values.step5} onChange={handleChange} />
    </div>
  );
};

export default Step5;
