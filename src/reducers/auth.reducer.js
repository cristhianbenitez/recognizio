import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.SIGNIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.SIGNIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.SIGIN_FAILURE:
      return {};
    case userConstants.SIGNOUT:
      return {};
    default:
      return state;
  }
};
