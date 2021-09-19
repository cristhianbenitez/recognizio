import { userConstants } from '../constants';
import { userService } from '../../services';
import { alertActions } from '.';
import { history } from '../../helpers/history';

export const userActions = {
  signin,
  signout,
  signup,
  detele: _delete
};

const signin = (email, password) => {
  return (dispatch) => {
    dispatch(request({ email }));

    userService.login(email, password).then(
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
    return { type: userConstants.SIGNIN_REQUEST, user };
  }
  function failure(error) {
    return { type: userConstants.SIGNIN_FAILURE, error };
  }
};

const signout = () => {
  userService.logout();
  return { type: userConstants };
};

const signup = (user) => {
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
    return { type: userConstants.SIGNUP_REQUEST, user };
  }
  function failure(error) {
    return { type: userConstants.SIGNUP_FAILURE, error };
  }
};

// prefixed function name with underscore because delete is a reserved word in javascript
const _delete = (id) => {
  return (dispatch) => {
    dispatch(request(id));

    userService.delete(id).then(
      (user) => dispatch(success(id)),
      (error) => dispatch(failure(id, error.toString()))
    );
  };

  function request(id) {
    return { type: userConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: userConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: userConstants.DELETE_FAILURE, id, error };
  }
};
