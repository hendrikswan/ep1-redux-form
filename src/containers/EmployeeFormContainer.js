import { connect } from 'react-redux';
import EmployeeForm from '../components/EmployeeForm';
import React from 'react';
import { addEmployee } from '../actions';

class EmployeeFormContainer extends React.Component {
  render() {
    return (
      <EmployeeForm {...this.props}/>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  addEmployee: (evt) => {
    evt.preventDefault();
    dispatch(addEmployee());
  },
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(EmployeeFormContainer);
