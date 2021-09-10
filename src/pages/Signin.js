import React from 'react';
import ParticlesBkg from '../utils/ParticlesBkg';
import Form from '../components/Form/Form';
import Navigation from '../components/Navigation/Navigation';

const Signin = () => {
  return (
    <>
      <ParticlesBkg />
      <Navigation isSigning={true} />
      <Form
        signValue='Sign In'
        isSigningIn={true}
        isSigningUp={false}
        linkedTo='/home'
      />
    </>
  );
};

export default Signin;
