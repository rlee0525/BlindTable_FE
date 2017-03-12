import { merge } from 'lodash';
import {
  RECEIVE_RESERVATIONS,
  CLEAR_RESERVATIONS } from "../actions/reservations_actions.js"

let _defaultState = {};

const reservationsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RESERVATIONS:
      return merge({}, state, action.reservations);
    case CLEAR_RESERVATIONS:
      return {};
    default:
      return state;
  }
};

export default reservationsReducer;
