import { useState } from 'react';

const useClarifai = () => {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [box, setBox] = useState('');
  const [id, setId] = useState('');

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

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const displayFaceBox = (boxLocation) => {
    setBox(boxLocation);
  };

  const onButtonSubmit = (e) => {
    fetch('https://intense-harbor-26195.herokuapp.com/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: input
      })
    })
      .then((res) => res.json())
      .then(
        (res) => {
          fetch('https://intense-harbor-26195.herokuapp.com/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: id
            })
          })
            .then((res) => res.json())
            .then((count) => {
              console.log(count);
            })
            .catch(console.log);
          displayFaceBox(calculateFaceLocation(res));
        },
        (err) => console.log('error')
      );
    setImageUrl(input);
  };

  return {
    imageUrl,
    onInputChange,
    onButtonSubmit,
    box
  };
};

export default useClarifai;
