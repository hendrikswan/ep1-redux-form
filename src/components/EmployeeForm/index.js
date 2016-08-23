import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import './styles.css';

class EmployeeForm extends Component {
  render() {
    const { fields: { name, surname }, handleSubmit } = this.props;
    return (
      <form
        onSubmit={handleSubmit}
        className="EmployeeForm-form"
      >
        <div>
          <input
            type="text"
            placeholder="First Name"
            {...name}
            className="EmployeeForm-input"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            {...surname}
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
}

EmployeeForm = reduxForm({
  form: 'employee',
  fields: ['name', 'surname']
})(EmployeeForm);

export default EmployeeForm;
