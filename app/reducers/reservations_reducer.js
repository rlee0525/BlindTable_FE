import { merge } from 'lodash';
import {
  RECEIVE_RESERVATIONS,
  CLEAR_RESERVATIONS } from "../actions/reservations_actions.js"

let _defaultState = [
  {
    "rid":2,
    "name":"Thirsty Bear",
    "address":"661 Howard St.",
    "address2":"",
    "city":"San Francisco",
    "state":"CA",
    "country":"US",
    "latitude":"37.7856500",
    "longitude":"-122.3997340",
    "postal_code":"94105",
    "phone_number":"4159740905",
    "metro_name":"San Francisco Bay Area",
    "reservation_url":"http://www.opentable.com/restaurant/profile/2",
    "profile_url":"http://www.opentable.com/restaurant/profile/2",
    "is_restaurant_in_group":false
  },
  {
    "rid":4,
    "name":"One Market Restaurant",
    "address":"1 Market Street",
    "address2":"",
    "city":"San Francisco",
    "state":"CA",
    "country":"US",
    "latitude":"37.7938190",
    "longitude":"-122.3950890",
    "postal_code":"94105",
    "phone_number":"4157775577x",
    "metro_name":"San Francisco Bay Area",
    "reservation_url":"http://www.opentable.com/restaurant/profile/4",
    "profile_url":"http://www.opentable.com/restaurant/profile/4",
    "is_restaurant_in_group":false
  }
];

const reservationsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RESERVATIONS:
      return merge([], state, action.reservations);
    case CLEAR_RESERVATIONS:
      return [];
    default:
      return state;
  }
};

export default reservationsReducer;
