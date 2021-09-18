const initialState = {
  isPending: false,
  error: '',
  input: '',
  imageUrl: '',
  box: {}
};

export const faceReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return { ...state, input: action.payload };
    case 'UPDATE_IMAGEURL':
      return { ...state, imageUrl: action.payload };
    case 'UPDATE_BOX':
      return { ...state, box: [...action.payload] };

    default:
      return state;
  }
};
