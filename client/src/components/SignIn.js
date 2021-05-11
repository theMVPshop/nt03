import React from 'react';

const SignIn = () => {
  return (
    <div class='login-form'>
      <form action='/examples/actions/confirmation.php' method='post'>
        <h2 class='text-center'>Sign In</h2>
        <div class='form-group'>
          <input
            type='text'
            class='form-control'
            placeholder='Email'
            required='required'
          />
        </div>
        <div class='form-group'>
          <input
            type='password'
            class='form-control'
            placeholder='Password'
            required='required'
          />
        </div>
        <div class='form-group button-box'>
          <button type='submit' class='btn btn-primary btn-block'>
            Sign In
          </button>
        </div>
        <div class='clearfix'>
          <a href='#' class='pull-right'>
            Forgot Password?
          </a>
        </div>
      </form>
      <p class='text-center'>
        <a href='/sign-up'>Don't have an account? Sign Up here.</a>
      </p>
    </div>
  );
};

export default SignIn;
