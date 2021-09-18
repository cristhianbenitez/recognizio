const initialState = {
  isPending: false,
  error: '',
  input: '',
  imageUrl: '',
  box: {}
};

export const requestFaceLocations = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'REQUEST_FACES_PENDING':
      return { ...state, isPending: true };
    case 'REQUEST_FACES_SUCCESS':
      return { ...state, box: { input: action.payload }, isPending: false };
    case 'REQUEST_FACES_FAILED':
      return { ...state, error: action.payload, isPending: false };

    default:
      return state;
  }
};
