import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from '.';
import { history } from '../helpers';

export const userActions = {
  signin,
  logout,
  signup,
  getAll
  // delete: _delete
};

function signin(username, password) {
  return (dispatch) => {
    dispatch(request({ username }));

    userService.signin(username, password).then(
      (user) => {
        dispatch(success(user));
        history.push('/home');
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.SIGNIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.SIGNIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.SIGNIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function signup(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.signup(user).then(
      (user) => {
        dispatch(success());
        history.push('/signin');
        dispatch(alertActions.success('Registration successful'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.SIGNUP_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.SIGNUP_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.SIGNUP_FAILURE, error };
  }
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    userService.getAll().then(
      (users) => dispatch(success(users)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.GETALL_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GETALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error };
  }
}

// TO ADD

// prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//   return (dispatch) => {
//     dispatch(request(id));

//     userService.delete(id).then(
//       (user) => dispatch(success(id)),
//       (error) => dispatch(failure(id, error.toString()))
//     );
//   };

//   function request(id) {
//     return { type: userConstants.DELETE_REQUEST, id };
//   }
//   function success(id) {
//     return { type: userConstants.DELETE_SUCCESS, id };
//   }
//   function failure(id, error) {
//     return { type: userConstants.DELETE_FAILURE, id, error };
//   }
// }
