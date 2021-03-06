import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const SignIn = (props) => {
  const { getUser, signIn } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    //saving user info to redux

    axios
      .post('/auth/login', { username: email, password })
      .then((response) => {
        const {
          data: {
            msg,
            userProfile: { userId, username },
          },
        } = response;
        if (msg == 'Login successful') {
          console.log('Log in Successful');
          //saves user info to redux state
          getUser({ userId, username });
          //changes sign in status to true in redux state
          signIn();
          document.cookie = 'loggedIn=true;';
          console.log(userId);
          history.push('/');
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className='sign-in-container'>
      <div className='login-form'>
        <form onSubmit={handleSubmit}>
          <h2 className='text-center'>Sign In</h2>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Email'
              required='required'
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              placeholder='Password'
              required='required'
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className='form-group button-box'>
            <button type='submit' className='btn btn-primary btn-block'>
              Sign In
            </button>
          </div>
          <div className='clearfix'>
            <a href='#' className='pull-right'>
              Forgot Password?
            </a>
          </div>
        </form>
        <p className='text-center'>
          <a href='/sign-up'>Don't have an account? Sign Up here.</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
