import { combineReducers } from 'redux';
import { RECEIVE_EMPLOYEES, REQUEST_EMPLOYEES, START_EMPLOYEE_ADD } from './constants';

function mainReducer(state = {
  employees: [],
  loadingEmployees: true,
  addingEmployee: false,
}, action) {
    switch (action.type) {
    case RECEIVE_EMPLOYEES:
        return Object.assign({}, state, {
          employees: action.employees,
          loadingEmployees: false,
        });
    case REQUEST_EMPLOYEES:
        return Object.assign({}, state, {
          loadingEmployees: true,
        });
    case START_EMPLOYEE_ADD:
        return Object.assign({}, state, {
          addingEmployee: true,
        });
    default:
        return state;
    }
}


const reducer = combineReducers({
    main: mainReducer,
});

export default reducer;
