import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCompare, setPasswordCompare] = useState('');

  const validateMail = (inputText) => {
    const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (inputText.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const mail = email;
    let check = validateMail(mail);
    if (password !== passwordCompare) {
      console.log('Pasword do not match');
    }
    if (password.length < 8) {
      console.log('password too short');
    }
    if (!check) {
      console.log(`${email} is not in the correct format`);
    } else {
      console.log('passwords match');
      console.log(email);

      axios
        .post('/users/users', { username: email, password })
        .then((response) => console.log(response))
        .catch((errors) => console.log(errors));
    }
  };

  return (
    <div className='sign-in-container'>
      <div className='login-form'>
        <form onSubmit={handleSubmit}>
          <h2 className='text-center'>Sign Up</h2>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Enter Email'
              required='required'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              placeholder='Password'
              required='required'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              placeholder='Re-Enter Password'
              required='required'
              onChange={(e) => setPasswordCompare(e.target.value)}
            />
          </div>
          <div className='form-group button-box'>
            <button
              onClick={handleSubmit}
              type='submit'
              className='btn btn-primary btn-block'
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className='text-center'>
          <a href='/sign-in'>Already have an account? Sign In here.</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
