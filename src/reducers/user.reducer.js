import { userConstants } from '../constants';

export const user = (state = {}, action) => {
  switch (action.type) {
    case userConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map((user) =>
          user.id === action.id ? { ...user, deleting: true } : user
        )
      };
    case userConstants.DELETE_SUCCESS:
      return {
        items: state.items.filter((user) => user.id !== action.id)
      };
    case userConstants.DELETE_FAILURE:
      return {
        ...state,
        items: state.items.map((user) => {
          if (user.id === action.id) {
            const { deleting, ...userCopy } = user;
            return { ...userCopy, deleteError: action.error };
          }
          return user;
        })
      };
    default:
      return state;
  }
};