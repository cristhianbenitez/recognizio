import React, { useState } from 'react';
import axios from 'axios';
import { Navbar, ImageForm, FaceRecognition, Entries } from '../components';
import ParticlesBkg from '../utils/ParticlesBkg';
import { calculateFaceLocation } from '../helpers/';

export const Home = ({ user, onRouteChange }) => {
  const { id, entries, name } = user;
  const [count, setCount] = useState(entries);
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [box, setBox] = useState('');

  const faceBoxes = (boxLocation) => {
    setBox(boxLocation);
  };

  const handleSubmit = (e) => {
    axios
      .post('https://intense-harbor-26195.herokuapp.com/imageurl', {
        input: input
      })
      .then(({ data }) => {
        const arrOfFaces = data.outputs[0].data.regions;
        if (data.status.description === 'Ok') {
          axios
            .put('https://intense-harbor-26195.herokuapp.com/image', {
              id: id
            })
            .then(({ data }) => {
              setCount(data);
            });
        }
        faceBoxes(calculateFaceLocation(arrOfFaces));
      });

    setImageUrl(input);
  };
  return (
    <>
      <ParticlesBkg />
      <Navbar>
        <Navbar.Logo />
        <Navbar.Container>
          <Navbar.Item
            onClick={() => {
              localStorage.removeItem('user');
              onRouteChange('signin');
            }}
          >
            Sign Out
          </Navbar.Item>
        </Navbar.Container>
      </Navbar>
      <Entries name={name} entries={count} />
      <ImageForm>
        <ImageForm.Text>
          This Magic Brain will detect faces in your pictures. Give it a try
        </ImageForm.Text>
      </ImageForm>
      <ImageForm.Container>
        <ImageForm.Input
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <ImageForm.Button onClick={handleSubmit}>Detect</ImageForm.Button>
      </ImageForm.Container>
      <FaceRecognition imageURL={imageUrl} boxes={box} />
    </>
  );
};
