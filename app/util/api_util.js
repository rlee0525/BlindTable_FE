const baseUrl = 'http://localhost:3000/api';

export const registerUser = user => (
  fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user
    })
  })
);

export const authenticateUser = user => (
  fetch(`${baseUrl}/session`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user
    })
  })
);

export const fetchReservations = query => (
  fetch(`${baseUrl}/reservations`, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query
    })
  })
);

export const createReservation = query => (
  fetch(`${baseUrl}/reservations`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query
    })
  })
);
