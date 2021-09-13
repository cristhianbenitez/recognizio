import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { ImageForm } from '../components/ImageForm/ImageForm';
import Rank from '../components/Rank/Rank';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import ParticlesBkg from '../utils/ParticlesBkg';
import useClarifai from '../hooks/useClarifai';

const Home = () => {
  const { imageUrl, onInputChange, onButtonSubmit, box } = useClarifai();
  return (
    <>
      <ParticlesBkg />
      <Navbar>
        <Navbar.Logo />
        <Navbar.Container>
          <Navbar.Item>Sign Out</Navbar.Item>
        </Navbar.Container>
      </Navbar>
      <Rank />
      <ImageForm>
        <ImageForm.Text>
          This Magic Brain will detect faces in your pictures. Give it a try
        </ImageForm.Text>
      </ImageForm>
      <ImageForm.Container>
        <ImageForm.Input onChange={onInputChange} />
        <ImageForm.Button onClick={onButtonSubmit}>Detect</ImageForm.Button>
      </ImageForm.Container>
      <FaceRecognition imageURL={imageUrl} boxes={box} />
    </>
  );
};

export default Home;
