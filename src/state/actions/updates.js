export const updateUser = (user) => {
  return {
    type: 'UPDATE_USER',
    payload: user
  };
};
export const updateSignInInfo = (signInInfo) => {
  return {
    type: 'UPDATE_SIGNIN_INFO',
    payload: signInInfo
  };
};
export const updateSignUpInfo = (signUpInfo) => {
  return {
    type: 'UPDATE_SIGNUP_INFO',
    payload: signUpInfo
  };
};

export const updateInput = (input) => {
  return {
    type: 'UPDATE_INPUT',
    payload: input
  };
};

export const updateImageUrl = (imageUrl) => {
  return {
    type: 'UPDATE_IMAGEURL',
    payload: imageUrl
  };
};

export const updateBox = (box) => {
  return {
    type: 'UPDATE_BOX',
    payload: box
  };
};

export const updateRoute = (route) => {
  return {
    type: 'UPDATE_ROUTE',
    payload: route
  };
};
