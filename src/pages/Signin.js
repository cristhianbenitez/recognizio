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
  const { updateEmail, updateName, updateInput } = bindActionCreators(
    actions,
    dispatch
  );
  const { signInEmail, signInPassword } = useSelector(
    ({ signinReducer }) => signinReducer
  );
  console.log(signInEmail);

  const handleEmail = ({ target }) => {
    updateEmail(target.value);
  };
  const handlePassword = ({ target }) => {};

  // const handleSignIn = () => {
  //   axios
  //     .post('https://intense-harbor-26195.herokuapp.com/signin', {
  //       email: email,
  //       password: password
  //     })
  //     .then(({ data }) => {
  //       if (data === 'success') {
  //       }
  //     });
  // };

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
          onChange={(e) => updateEmail(e.target.value)}
        />
        <Form.Input
          label="Password"
          type="password"
          // onChange={handlePassword}
        />
        <Link to="/home" className="no-underline">
          {/* <Form.Button onClick={handleSignIn}>Sign In</Form.Button> */}
        </Link>
        <Link to="/signup" className="no-underline">
          <Form.SmallText>Sign Up</Form.SmallText>
        </Link>
      </Form>
    </>
  );
};

export default Signin;
