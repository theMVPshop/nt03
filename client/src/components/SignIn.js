import React from 'react';

const SignIn = () => {
  return (
    <div className='sign-in-container'>
      <div className='login-form'>
        <form action='/examples/actions/confirmation.php' method='post'>
          <h2 className='text-center'>Sign In</h2>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Email'
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
