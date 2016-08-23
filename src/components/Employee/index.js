import React from 'react';
import './styles.css';

const Employee = ({ name, surname }) => {
  return (
    <li
      className="Employee-item"
    >
        {name} {surname}
    </li>
  );
};

Employee.propTypes = {
  name: React.PropTypes.string.isRequired,
  surname: React.PropTypes.string.isRequired,
};

export default Employee;
