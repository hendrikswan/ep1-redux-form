import { combineReducers } from 'redux';
import { RECEIVE_EMPLOYEES, REQUEST_EMPLOYEES } from './constants';

function mainReducer(state = {
  employees: [],
  loadingEmployees: true,
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
    default:
        return state;
    }
}


const reducer = combineReducers({
    main: mainReducer,
});

export default reducer;
