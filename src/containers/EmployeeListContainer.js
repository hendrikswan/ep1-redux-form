import { connect } from 'react-redux';
import EmployeeList from '../components/EmployeeList';
import React from 'react';
import { requestEmployees, startEmployeeAdd } from '../actions';

class EmployeeListContainer extends React.Component {
  componentWillMount() {
    if (!this.props.employees || !this.props.employees.length) {
      this.props.requestEmployees();
    }
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
  onAdd: () => dispatch(startEmployeeAdd()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeeListContainer);
