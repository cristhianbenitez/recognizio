const initialState = {
  signInEmail: '',
  signInPassword: ''
};

export const signinReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'UPDATE_EMAIL':
      return { ...state, signInEmail: action.payload };
    case 'UPDATE_PASSWORD':
      return { ...state, signInPassword: action.payload };
    default:
      return state;
  }
};
