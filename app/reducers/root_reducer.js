import { combineReducers } from 'redux';
import authenticationReducer from './authentication_reducer';

const rootReducer = combineReducers({
  currentUser: authenticationReducer,
});

export default rootReducer;
