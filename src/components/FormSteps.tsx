import React from 'react';
import { useFormikContext, FormikValues, FormikErrors, FormikContextType } from 'formik';
import { Link, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

const FormSteps: React.FC = () => {
  const { values, validateForm }: FormikContextType<FormikValues> = useFormikContext();
  const navigate = useNavigate();
  const isDisabled = false;

  const handleNextStep = async (step: number) => {
    const errors: FormikErrors<FormikValues> = await validateForm();

    if (Object.keys(errors).length === 0) {
      navigate(`/step${step}`);
    }
  };

  return (
    <div>
      <ul>
        <li>
          <Link to="/step1">{values.firstName ? 'Diligenciado' : 'No diligenciado'}</Link>
        </li>
        <li>
          <span className={isDisabled ? 'disabled' : ''}>
            <Link to="/step2">{values.lastName ? 'Diligenciado' : 'No diligenciado'}</Link>
          </span>
        </li>
        <li>
          <span className={isDisabled ? 'disabled' : ''}>
            <Link to="/step3">{values.email ? 'Diligenciado' : 'No diligenciado'}</Link>
          </span>
        </li>
        <li>
          <span className={isDisabled ? 'disabled' : ''}>
            <Link to="/step4">{values.password ? 'Diligenciado' : 'No diligenciado'}</Link>
          </span>
        </li>
        <li>
          <span className={isDisabled ? 'disabled' : ''}>
            <Link to="/step5">{values.phoneNumber ? 'Diligenciado' : 'No diligenciado'}</Link>
          </span>
        </li>
      </ul>
      <Routes>
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/step5" element={<Step5 />} />
      </Routes>
      <button onClick={() => handleNextStep(1)}>Siguiente</button>
    </div>
  );
};

export default FormSteps;
