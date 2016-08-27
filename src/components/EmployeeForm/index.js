import React from 'react';
import './styles.css';
import { reduxForm } from 'redux-form';

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
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Last Name"
          className="EmployeeForm-input"
        />
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
})(EmployeeForm);
