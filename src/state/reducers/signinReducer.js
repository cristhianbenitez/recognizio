const initialState = {
  email: '',
  password: ''
};

export const signinReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'UPDATE_SIGNIN_INFO':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
