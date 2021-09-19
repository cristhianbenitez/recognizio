import React, { useState } from 'react';
import axios from 'axios';
import { Navbar, ImageForm, FaceRecognition, Entries } from '../components';

import ParticlesBkg from '../utils/ParticlesBkg';
import { actions } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { calculateFaceLocation } from '../helpers/';

export const Home = () => {
  const [name, setName] = useState('');
  const [entries, setEntries] = useState('');
  const [id, setId] = useState(1);
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
        if (data.description === 'ok') {
          axios
            .put('https://intense-harbor-26195.herokuapp.com/image', {
              id: id
            })
            .then(({ entries }) => {
              setEntries({ entries });
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
          <Navbar.Item link="/signin">Sign Out</Navbar.Item>
        </Navbar.Container>
      </Navbar>
      <Entries name={name} entries={entries} />
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
