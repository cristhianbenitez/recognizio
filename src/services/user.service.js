import { authHeader } from '../helpers/auth-header';
import axios from 'axios';

export const userService = {
  signin,
  signout,
  signup
  // update,                 toadd
  // delete: _delete         toadd
};

function signin(email, password) {
  axios
    .post('https://intense-harbor-26195.herokuapp.com/signin', {
      email: email,
      password: password
    })
    .then(handleResponse)
    .then((user) => {
      // store user to localStorage
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    });
}

function signout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function signup(email, name, password) {
  return axios
    .post('https://intense-harbor-26195.herokuapp.com/signup', {
      name: email,
      email: name,
      password: password
    })
    .then(handleResponse);
}

/*  Not ready in the back end yet

function update(user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(
    handleResponse
  );
} 



--- prefixed const name with underscore because delete is a reserved word in javascript

function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(
    handleResponse
  );
}
 */

function handleResponse(response) {
  const { statusText, data, status } = response;
  if (statusText !== 'Ok') {
    console.log(data);
    if (status === 401) {
      signout();
      // eslint-disable-next-line no-restricted-globals
      location.reload(true);
    }
  }

  return data;
}
