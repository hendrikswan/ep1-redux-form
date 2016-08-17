import { connect } from 'react-redux';
import EmployeeList from '../components/EmployeeList';
import React from 'react';
import { requestEmployees } from '../actions';

class EmployeeListContainer extends React.Component {
  componentWillMount() {
    this.props.requestEmployees();
  }

  render() {
    return (
      <EmployeeList {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => ({
  employees: state.main.employees,
});

const mapDispatchToProps = (dispatch) => ({
  requestEmployees: () => dispatch(requestEmployees()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeeListContainer);
