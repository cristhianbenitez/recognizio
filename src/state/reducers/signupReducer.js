const initialState = {
  email: '',
  password: '',
  name: ''
};

export const signupReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'UPDATE_SIGNUP_INFO':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
