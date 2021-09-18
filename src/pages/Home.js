import React from 'react';
import axios from 'axios';
import { Navbar } from '../components/Navbar/Navbar';
import { ImageForm } from '../components/ImageForm/ImageForm';
import Entries from '../components/Entries/Entries';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import ParticlesBkg from '../utils/ParticlesBkg';
import { actions } from '../state/';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { calculateFaceLocation } from '../helpers/';

const Home = () => {
  const dispatch = useDispatch();
  const { updateInput, updateUser, updateBox, updateImageUrl, updateEntries } =
    bindActionCreators(actions, dispatch);
  const { input, imageUrl, box } = useSelector((state) => state.faceReducer);
  const { name, entries, id } = useSelector((state) => state.userReducer);

  const faceBoxes = (boxLocation) => {
    updateBox(boxLocation);
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
              updateEntries({ entries });
            });
        }
        faceBoxes(calculateFaceLocation(arrOfFaces));
      });

    updateImageUrl(input);
  };
  return (
    <>
      <ParticlesBkg />
      <Navbar>
        <Navbar.Logo />
        <Navbar.Container>
          <Navbar.Item link="/signin" onClick={() => updateUser({})}>
            Sign Out
          </Navbar.Item>
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
            updateInput(e.target.value);
          }}
        />
        <ImageForm.Button onClick={handleSubmit}>Detect</ImageForm.Button>
      </ImageForm.Container>
      <FaceRecognition imageURL={imageUrl} boxes={box} />
    </>
  );
};

export default Home;
