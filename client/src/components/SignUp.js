import React from 'react';

const SignUp = () => {
  return (
    <div className='sign-in-container'>
      <div className='login-form'>
        <form action='/examples/actions/confirmation.php' method='post'>
          <h2 className='text-center'>Sign Up</h2>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Enter Email'
              required='required'
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              placeholder='Password'
              required='required'
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              placeholder='Re-Enter Password'
              required='required'
            />
          </div>
          <div className='form-group button-box'>
            <button type='submit' className='btn btn-primary btn-block'>
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
