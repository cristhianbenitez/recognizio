const initialState = {
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
};

export const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'UPDATE_EMAIL':
      return { ...state, user: { ...state.user, email: action.payload } };
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
// case 'UPDATE_INPUT':
//   return { ...state, input: action.payload };

//  input: '',
//   imageUrl: '',
//   box: {},

//   route: 'signin',
//   isSignedIn: false,
