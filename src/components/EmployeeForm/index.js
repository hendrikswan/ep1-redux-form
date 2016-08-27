import React from 'react';
import './styles.css';

const EmployeeForm = ({ addEmployee }) => (
  <form
    className="EmployeeForm-form"
    onSubmit={addEmployee}
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

export default EmployeeForm;
