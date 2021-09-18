import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { ImageForm } from '../components/ImageForm/ImageForm';
import Rank from '../components/Rank/Rank';
import { FaceRecognition } from '../components/FaceRecognition/FaceRecognition';
import ParticlesBkg from '../utils/ParticlesBkg';
import { actions } from '../state/index';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestFaceLocations } from '../state/actions/requestFaceLocations';

const Home = () => {
  const dispatch = useDispatch();
  const facesLocations = bindActionCreators(requestFaceLocations, dispatch);
  const { updateInput } = bindActionCreators(actions, dispatch);
  const { input, imageUrl, box } = useSelector(
    ({ faceReducer }) => faceReducer
  );

  return (
    <>
      <ParticlesBkg />
      <Navbar>
        <Navbar.Logo />
        <Navbar.Container>
          <Navbar.Item link="/signin">Sign Out</Navbar.Item>
        </Navbar.Container>
      </Navbar>
      <Rank />
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
        <ImageForm.Button>Detect</ImageForm.Button>
      </ImageForm.Container>
      {/* <FaceRecognition imageURL={imageUrl} boxes={box} /> */}
    </>
  );
};

export default Home;
