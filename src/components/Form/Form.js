import React from 'react';
import { Link } from 'react-router-dom';

const Form = ({ signValue, isSigningIn, isSigningUp, linkedTo }) => {
  return (
    <article className='br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
      <main className='pa4 ma3 black-80'>
        <div className='measure tc'>
          <fieldset
            id={isSigningIn === true ? 'sign_in' : 'sign_up'}
            className='ba b--transparent ph0 mh0'
          >
            <legend className='f1 fw6 ph0 mh0'>
              {isSigningIn === true ? 'Sign In' : 'Sign Up'}
            </legend>
            <div className='mt3'>
              <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                Email
              </label>
              <input
                className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                type='email'
                name='email-address'
                id='email-address'
              />
            </div>
            {isSigningUp === true ? (
              <div className='mv3'>
                <label className='db fw6 lh-copy f6' htmlFor='password'>
                  Name
                </label>
                <input
                  className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='text'
                  name='user-name'
                  id='user-name'
                />
              </div>
            ) : null}
            <div className='mv3'>
              <label className='db fw6 lh-copy f6' htmlFor='password'>
                Password
              </label>
              <input
                className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                type='password'
                name='password'
                id='password'
              />
            </div>
          </fieldset>
          <Link to={linkedTo}>
            <input
              className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
              type='submit'
              value={signValue}
            />
          </Link>

          {isSigningIn ? (
            <div className='lh-copy mt3'>
              <a href='/signup' className='f6 link dim black db'>
                Sign up
              </a>
            </div>
          ) : null}
        </div>
      </main>
    </article>
  );
};

export default Form;
