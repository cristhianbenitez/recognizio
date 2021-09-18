import axios from 'axios';

export const requestFaceLocations = (input, id) => (dispatch) => {
  dispatch({ type: 'REQUEST_FACES_PENDING' });
  axios
    .post('https://intense-harbor-26195.herokuapp.com/imageurl', {
      input: input
    })
    .then((res) => {
      axios
        .put('https://intense-harbor-26195.herokuapp.com/image', {
          id: id
        })
        .then(
          dispatch({ type: 'REQUEST_FACES_SUCCESS', payload: res.data }).catch(
            (error) => {
              dispatch({ type: 'REQUEST_FACES_FAILED', payload: error });
            }
          )
        );
    });
};
