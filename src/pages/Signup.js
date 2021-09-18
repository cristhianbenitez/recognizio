import React, { useState } from 'react';
import ParticlesBkg from '../utils/ParticlesBkg';
import { Form } from '../components/Form/Form';
import { Navbar } from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { actions } from '../state/index';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const Signup = () => {
  const dispatch = useDispatch();
  const { updateSignUpInfo, updateUser } = bindActionCreators(
    actions,
    dispatch
  );
  const { email, name, password } = useSelector((state) => state.signupReducer);

  const handleSignUp = () => {
    axios
      .post('https://intense-harbor-26195.herokuapp.com/signup', {
        name: email,
        email: name,
        password: password
      })
      .then(({ data }) => {
        if (data.id) {
          updateUser({
            id: data.id,
            name: data.name,
            email: data.email,
            entries: data.entries,
            joined: data.joined
          });
        }
      });
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
        <Form.Title>Sign Up</Form.Title>
        <Form.Input
          label="Name"
          onChange={(e) => updateSignUpInfo({ name: e.target.value })}
        />
        <Form.Input
          label="Email"
          id="outlined-adornment-password"
          onChange={(e) => updateSignUpInfo({ email: e.target.value })}
        />
        <Form.Input
          label="Password"
          type="password"
          onChange={(e) => updateSignUpInfo({ password: e.target.value })}
        />
        <Link to="/signun" className="no-underline">
          <Form.Button onClick={handleSignUp}>Sign Up</Form.Button>
        </Link>
      </Form>
    </>
  );
};

export default Signup;
