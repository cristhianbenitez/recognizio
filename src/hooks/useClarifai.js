import { useState } from 'react';
import Clarifai from 'clarifai';
const useClarifai = () => {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [box, setBox] = useState('');

  const faceDetector = new Clarifai.App({
    apiKey: '44d26e4f7eae45b4b173903dfb9e8ca8',
  });

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
        rightCol: width - right_col * width,
      };
    });
    return boxLocations;
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const displayFaceBox = (boxLocation) => {
    setBox(boxLocation);
  };

  const onButtonSubmit = (e) => {
    faceDetector.models.predict('f76196b43bbd45c99b4f3cd8e8b40a8a', input).then(
      (res) => displayFaceBox(calculateFaceLocation(res)),
      (err) => console.log('error')
    );
    setImageUrl(input);
  };

  return { imageUrl, onInputChange, onButtonSubmit, box };
};

export default useClarifai;
