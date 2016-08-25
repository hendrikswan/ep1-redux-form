import {
  RECEIVE_EMPLOYEES,
  REQUEST_EMPLOYEES,
  START_EMPLOYEE_ADD,
  ADD_EMPLOYEE,
} from './constants';

export function requestEmployees() {
  return (dispatch) => {
    dispatch({
      type: REQUEST_EMPLOYEES,
    });

    fetch('http://uinames.com/api/?amount=25')
    .then((response) => response.json())
    .then((employees) => dispatch(receiveEmployees(employees)));
  }
}

export function receiveEmployees(employees) {
  return {
    type: RECEIVE_EMPLOYEES,
    employees,
  };
}

export function startEmployeeAdd() {
  return {
    type: START_EMPLOYEE_ADD,
  };
}


export function addEmployee() {
  return (dispatch, getState) => {
    const form = getState().form;
    const employee = {
      name: form.employee.name.value,
      surname: form.employee.surname.value,
    };
    dispatch({
      type: ADD_EMPLOYEE,
      employee,
    });
  };
}
