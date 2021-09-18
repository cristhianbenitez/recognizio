import config from 'config';
import { authHeader } from '../helpers/auth-header';
import axios from 'axios';

export const userService = {
  signin,
  signout,
  signup
  // update,
  // delete: _delete
};

function signin(email, password) {
  axios
    .post('https://intense-harbor-26195.herokuapp.com/signin', {
      email: email,
      password: password
    })
    .then(({ data }) => {
      if (data.id) {
        console.log(data);
        localStorage.setItem('user', JSON.stringify(data));
        return data;
      }
    })
    .catch((err) => console.log(err));
}

function signout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function signup(email, name, password) {
  axios
    .post('https://intense-harbor-26195.herokuapp.com/signup', {
      name: email,
      email: name,
      password: password
    })
    .then(({ data }) => {
      if (data.id) {
        localStorage.setItem('user', JSON.stringify(data));
        return data;
      }
    });
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
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
