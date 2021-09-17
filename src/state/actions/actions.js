export const updateEmail = (email) => {
  return {
    type: 'UPDATE_EMAIL',
    payload: email
  };
};

export const updateName = (name) => {
  return {
    type: 'UPDATE_NAME',
    payload: name
  };
};

export const updateInput = (input) => {
  return {
    type: 'UPDATE_INPUT',
    payload: input
  };
};

export const updatePassword = (password) => {
  return {
    type: 'UPDATE_PASSWORD',
    payload: password
  };
};

// export const updateSignInEmail = (email) => {
//   return {
//     type: 'UPDATE_SIGNIN_EMAIL',
//     payload: email
//   };
// };
