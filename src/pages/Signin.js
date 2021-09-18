import React from 'react';
import ParticlesBkg from '../utils/ParticlesBkg';
import { Form } from '../components/Form/Form';
import { Navbar } from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { actions } from '../state/index';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const Signin = () => {
  const dispatch = useDispatch();
  const { updateSignInInfo, updateUser } = bindActionCreators(
    actions,
    dispatch
  );
  const { email, password } = useSelector((state) => state.signinReducer);

  const handleSignIn = () => {
    axios
      .post('https://intense-harbor-26195.herokuapp.com/signin', {
        email: email,
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
        <Form.Title>Sign In</Form.Title>
        <Form.Input
          label="Email"
          onChange={(e) => updateSignInInfo({ email: e.target.value })}
        />
        <Form.Input
          label="Password"
          type="password"
          onChange={(e) => updateSignInInfo({ password: e.target.value })}
        />
        <Link to="/signin" className="no-underline">
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
