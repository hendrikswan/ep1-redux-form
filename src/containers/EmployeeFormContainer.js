import { connect } from 'react-redux';
import EmployeeForm from '../components/EmployeeForm';
import React from 'react';
import { addEmployee } from '../actions';

class EmployeeFormContainer extends React.Component {
  render() {
    return (
      <EmployeeForm wtf={true} {...this.props}/>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  // todo: rather get employee from state here and keep action nice and simple...
  addEmployee: () => dispatch(addEmployee()),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(EmployeeFormContainer);
