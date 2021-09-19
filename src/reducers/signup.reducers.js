import { userConstants } from '../constants';

export const signup = (state = {}, action) => {
  switch (action.type) {
    case userConstants.SIGNUP_REQUEST:
      return {
        issigningup: true
      };
    case userConstants.SIGNUP_SUCCESS:
      return {};
    case userConstants.SIGNUP_FAILURE:
      return {};

    default:
      return state;
  }
};
