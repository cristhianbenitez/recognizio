//UPDATE USER ALL
export const updateUser = (user) => ({ type: 'UPDATE_USER', payload: user });

// UPDATE USER SPECIFIC
export const updateId = (id) => ({ type: 'UPDATE_ID', payload: id });

export const updateName = (name) => ({ type: 'UPDATE_NAME', payload: name });

export const updateEmail = (email) => ({
  type: 'UPDATE_EMAIL',
  payload: email
});

export const updateEntries = (entries) => ({
  type: 'UPDATE_ENTRIES',
  payload: entries
});
export const updateJoined = (joined) => ({
  type: 'UPDATE_JOINED',
  payload: joined
});

//SIGN IN INFORMATION
export const updateSignInEmail = (email) => ({
  type: 'UPDATE_SIGNIN_EMAIL',
  payload: email
});
export const updateSignInPassword = (password) => ({
  type: 'UPDATE_SIGNIN_PASSWORD',
  payload: password
});

// SIGN UP INFORMATION
export const updateSignUpName = (name) => ({
  type: 'UPDATE_SIGNUP_NAME',
  payload: name
});
export const updateSignUpEmail = (email) => ({
  type: 'UPDATE_SIGNUP_EMAIL',
  payload: email
});
export const updateSignUpPassword = (password) => ({
  type: 'UPDATE_SIGNUP_PASSWORD',
  payload: password
});

// HOMEPAGE STATES

// INPUT FIELDS
export const updateInput = (input) => ({
  type: 'UPDATE_INPUT',
  payload: input
});

// HOME FACE RECOGNITION IMGURL AND BOX OF FACES
export const updateImageUrl = (imageUrl) => ({
  type: 'UPDATE_IMAGEURL',
  payload: imageUrl
});

export const updateBox = (box) => ({ type: 'UPDATE_BOX', payload: box });

// UPDATE ROUTE USER IS IN
export const updateRoute = (route) => ({
  type: 'UPDATE_ROUTE',
  payload: route
});
