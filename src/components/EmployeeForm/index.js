import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import './styles.css';


const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Please provide a name';
  }

  if (!values.surname) {
    errors.surname = 'Please provide a surname';
  }

  return errors;
}

class EmployeeForm extends Component {
  onSubmit = () => {
    this.props.addEmployee();
  }

  render() {
    const { fields: { name, surname }, handleSubmit } = this.props;
    return (
      <form
        onSubmit={handleSubmit(this.onSubmit)}
        className="EmployeeForm-form"
      >
        <div>
          <input
            type="text"
            placeholder="First Name"
            {...name}
            className="EmployeeForm-input"
          />
          {name.touched && name.error && <div className="EmployeeForm-error">{name.error}</div>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            {...surname}
            className="EmployeeForm-input"
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
}

EmployeeForm = reduxForm({
  form: 'employee',
  fields: ['name', 'surname'],
  validate,
})(EmployeeForm);

export default EmployeeForm;
