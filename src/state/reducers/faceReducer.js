const initialState = {
  input: '',
  imageUrl: '',
  box: {}
};

export const faceReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return { ...state, input: action.payload };
    default:
      return state;
  }
};

// route: 'signin',
// isSignedIn: false
