import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormSteps from './components/FormSteps';
import { Formik, FormikContext, FormikProps } from 'formik';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phoneNumber: '',
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                // Agrega la lógica de envío del formulario aquí
              }}
              validateOnChange={false}
              validateOnBlur={false}
            >
              {(formikProps: FormikProps<any>) => (
                <FormikContext.Provider value={formikProps}>
                  <FormSteps />
                </FormikContext.Provider>
              )}
            </Formik>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;