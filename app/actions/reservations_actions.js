import * as APIUtil from '../util/api_util';
import { receiveErrors } from './authentication_actions';

export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const CLEAR_RESERVATIONS = 'CLEAR_RESERVATIONS';

export const receiveReservations = reservations => ({
  type: RECEIVE_RESERVATIONS,
  reservations
});

export const clearReservations = () => ({
  type: CLEAR_RESERVATIONS
});

export const fetchReservations = query => dispatch => (
  APIUtil.fetchReservations(query)
    .then(response => response.json())
    .then(responseData => dispatch(receiveReservations(responseData)))
    .catch(err => dispatch(receiveErrors(err.responseJSON)))
);
