import { combineReducers } from 'redux';
import authenticationReducer from './authentication_reducer';
import reservationsReducer from './reservations_reducer';

const rootReducer = combineReducers({
  session: authenticationReducer,
  reservations: reservationsReducer
});

export default rootReducer;
