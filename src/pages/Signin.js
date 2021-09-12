import React from 'react';
import ParticlesBkg from '../utils/ParticlesBkg';
import { Form } from '../components/Form/Form';
import Navigation from '../components/Navigation/Navigation';

const Signin = () => {
  return (
    <>
      <ParticlesBkg />
      <Navigation isSigning={true} />
      <Form>
        <Form.Title>Sign In</Form.Title>
        <Form.Input label="Email" />
        <Form.Input label="Password" />
        <Form.Button>Sign In</Form.Button>
      </Form>
    </>
  );
};

export default Signin;
