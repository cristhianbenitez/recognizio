import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar, ImageForm, FaceRecognition, Entries } from '../components';
import ParticlesBkg from '../utils/ParticlesBkg';
import { calculateFaceLocation } from '../helpers/';

const testImage =
  'https://static01.nyt.com/images/2020/11/19/us/artificial-intelligence-fake-people-faces-promo-1605818328743/artificial-intelligence-fake-people-faces-promo-1605818328743-videoSixteenByNineJumbo1600-v3.jpg';

export const Home = ({ user, onRouteChange }) => {
  const { id, entries, name } = user;
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [box, setBox] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const faceBoxes = (boxLocation) => {
    setBox(boxLocation);
  };
  useEffect(() => {
    if (entries) setCount(entries);
  }, [entries]);

  const detectFaces = (inputImage) => {
    axios
      .post('https://intense-harbor-26195.herokuapp.com/imageurl', {
        input: inputImage
      })
      .then(({ data }) => {
        const arrOfFaces = data.outputs[0].data.regions;
        if (data.status.description === 'Ok' && user.name) {
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
    setImageUrl(inputImage);
  };

  const generateRandom = () => {
    detectFaces(testImage);
    setTimeout(() => {
      setIsBtnDisabled(false);
    }, 5000);
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
        <ImageForm.Button onClick={() => detectFaces(input)}>
          Detect
        </ImageForm.Button>
      </ImageForm.Container>
      {!user.name ? (
        <div className="w-20 justify-center center mt1 ">
          <ImageForm.Button onClick={generateRandom} disabled={isBtnDisabled}>
            Use Test Image
          </ImageForm.Button>
        </div>
      ) : null}
      ;
      <FaceRecognition imageURL={imageUrl} boxes={box} />
    </>
  );
};
