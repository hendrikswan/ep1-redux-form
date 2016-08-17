import React from 'react';
import Employee from './Employee';

const EmployeeList = ({ employees }) => {
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
};

export default EmployeeList;
