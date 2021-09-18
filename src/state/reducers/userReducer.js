const initialState = {
  route: 'signin',
  isSignedIn: false,
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
    case 'UPDATE_USER':
      return { ...state, user: { ...action.payload } };
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
// export const userReducer = (state = initialState, action = {}) => {
//   switch (action.type) {
//     case 'UPDATE_ROUTE':
//       return { ...state, route: action.payload };
//     case 'UPDATE_ID':
//       return {
//         ...state,
//         isSignedIn: true,
//         user: { ...state.user, id: action.payload }
//       };
//     case 'UPDATE_NAME':
//       return { ...state, user: { ...state.user, name: action.payload } };
//     case 'UPDATE_EMAIL':
//       return { ...state, user: { ...state.user, email: action.payload } };
//     case 'UPDATE_ENTRIES':
//       return { ...state, user: { ...state.user, entries: action.payload } };
//     case 'UPDATE_JOINED':
//       return { ...state, user: { ...state.user, joined: action.payload } };
//     default:
//       return state;
//   }
// };
