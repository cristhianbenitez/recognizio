import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognizition/FaceRecognition';
import ParticlesBkg from './utils/ParticlesBkg';
import Clarifai from 'clarifai';

function App() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const faceDetector = new Clarifai.App({
    apiKey: '44d26e4f7eae45b4b173903dfb9e8ca8',
  });

  const onInputChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setInput(e.target.value);
  };
  const onButtonSubmit = (e) => {
    e.preventDefault();
    faceDetector.models.predict('f76196b43bbd45c99b4f3cd8e8b40a8a', input).then(
      function (res) {
        console.log(res.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function (err) {
        console.log('error');
      }
    );
    setImageUrl(input);
  };
  return (
    <div className='App'>
      <ParticlesBkg />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      <FaceRecognition imageURL={imageUrl} />
    </div>
  );
}

export default App;
