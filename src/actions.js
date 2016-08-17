import {
  RECEIVE_EMPLOYEES,
  REQUEST_EMPLOYEES,
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
