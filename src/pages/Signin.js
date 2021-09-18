import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form } from '../components/Form/Form';
import { Navbar } from '../components/Navbar/Navbar';
import ParticlesBkg from '../utils/ParticlesBkg';

const Signin = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const handleSignIn = () => {
    axios
      .post('https://intense-harbor-26195.herokuapp.com/signin', {
        email: inputs.email,
        password: inputs.password
      })
      .then(({ data }) => {
        if (data.id) {
          console.log(data);
          localStorage.setItem('user', JSON.stringify(data));
          return data;
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <ParticlesBkg />
      <Navbar>
        <Navbar.Logo />
        <Navbar.Container>
          <Navbar.Item link="/signin">Sign In</Navbar.Item>
          <Navbar.Item link="/signup">Sign Up</Navbar.Item>
        </Navbar.Container>
      </Navbar>
      <Form>
        <Form.Title>Sign In</Form.Title>
        <Form.Input
          label="Email"
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        />
        <Form.Input
          label="Password"
          type="password"
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <Link to="/home" className="no-underline">
          <Form.Button onClick={handleSignIn}>Sign In</Form.Button>
        </Link>
        <Link to="/signup" className="no-underline">
          <Form.SmallText>Sign Up</Form.SmallText>
        </Link>
      </Form>
    </>
  );
};

export default Signin;
