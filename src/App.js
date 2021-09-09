import React from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ParticlesBkg from './utils/ParticlesBkg';
import useClarifai from './hooks/useClarifai';
function App() {
  const { imageUrl, onInputChange, onButtonSubmit, box } = useClarifai();

  return (
    <div className='App'>
      <ParticlesBkg />
      <Navigation />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      <FaceRecognition imageURL={imageUrl} boxes={box} />
    </div>
  );
}

export default App;
