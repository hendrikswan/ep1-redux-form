import { combineReducers } from 'redux';
import { RECEIVE_NAMES, REQUEST_NAMES } from './constants';

function mainReducer(state = {}, action) {
    switch (action.type) {
    case RECEIVE_NAMES:
        return {};
    case REQUEST_NAMES:
        return {};
    default:
        return state;
    }
}


const reducer = combineReducers({
    main: mainReducer,
});

export default reducer;
