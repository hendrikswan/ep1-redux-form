import React from 'react';
import './styles.css';
import { reduxForm } from 'redux-form';

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Please provide a name';
  }

  if (!values.surname) {
    errors.surname = 'Please provide a surname';
  }

  return errors;
}

const EmployeeForm = ({ addEmployee, fields: { name, surname}, handleSubmit }) => {
  return (
    <form
      className="EmployeeForm-form"
      onSubmit={handleSubmit(addEmployee)}
    >
      <div>
        <input
          type="text"
          placeholder="First Name"
          className="EmployeeForm-input"
          {...name}
        />
        {name.touched && name.error && <div className="EmployeeForm-error">{name.error}</div>}
      </div>
      <div>
        <input
          type="text"
          placeholder="Last Name"
          className="EmployeeForm-input"
          {...surname}
        />
        {surname.touched && surname.error && <div className="EmployeeForm-error">{surname.error}</div>}                  
      </div>
      <button
        type="submit"
        className="EmployeeForm-button"
      >
        Submit
      </button>
    </form>
  );
}

export default reduxForm({
  form: 'employee',
  fields: ['name', 'surname'],
  validate,
})(EmployeeForm);
