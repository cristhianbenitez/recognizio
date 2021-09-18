// import axios from 'axios';
// import { actions } from '../state/index';
// import { useSelector, useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';

const DisplayFaceLocations = () => {
  // const dispatch = useDispatch();
  // const { updateImageUrl, updateBox } = bindActionCreators(actions, dispatch);
  // const input = useSelector(({ faceReducer }) => faceReducer);
  // const id = useSelector(({ userReducer }) => userReducer);

  const calculateFaceLocation = (data) => {
    const image = document.getElementById('image');
    const width = Number(image.width);
    const height = Number(image.height);
    const arrOfFaces = data.outputs[0].data.regions;
    const faceLocations = arrOfFaces.map(
      (faces) => faces.region_info.bounding_box
    );
    const boxLocations = faceLocations.map((box) => {
      const { top_row, left_col, bottom_row, right_col } = box;
      return {
        topRow: top_row * height,
        leftCol: left_col * width,
        bottomRow: height - bottom_row * height,
        rightCol: width - right_col * width
      };
    });
    return boxLocations;
  };

  const faceBoxes = (boxLocation) => {
    updateBox(boxLocation);
  };

  const faceLocations = (e) => {
    axios
      .post('https://intense-harbor-26195.herokuapp.com/imageurl', {
        input: input
      })
      .then((res) => {
        console.log(res);
        if (res.data) {
          axios
            .put('https://intense-harbor-26195.herokuapp.com/image', {
              id: id
            })
            .then((count) => {
              console.log(count);
            });
        }
        faceBoxes(calculateFaceLocation(res.data));
      });
  };

  return faceLocations;
};

export default DisplayFaceLocations;
