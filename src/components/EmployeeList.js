import React from 'react';
import Employee from './Employee';
import './EmployeeList.css';

const EmployeeList = ({ employees, onAdd }) => {
  console.log(employees);

  const employeeNodes = employees.map(employee => (
      <Employee
          key={employee.name + employee.surname}
          {...employee}
      />
  ));

  return (
      <div>
          <ul>
              {employeeNodes}
          </ul>

          <button
            className="EmployeeList-addButton"
            onClick={onAdd}
          >
            Add
          </button>
      </div>
  );
};

EmployeeList.propTypes = {
  employees: React.PropTypes.arrayOf(
      React.PropTypes.shape({
          name: React.PropTypes.string.isRequired,
          surname: React.PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  onAdd: React.PropTypes.func.isRequired,
};

export default EmployeeList;
