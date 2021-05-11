import React from 'react';

const SignUp = () => {
  return (
    <div class='login-form'>
      <form action='/examples/actions/confirmation.php' method='post'>
        <h2 class='text-center'>Sign Up</h2>
        <div class='form-group'>
          <input
            type='text'
            class='form-control'
            placeholder='Enter Email'
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
        <div class='form-group'>
          <input
            type='password'
            class='form-control'
            placeholder='Re-Enter Password'
            required='required'
          />
        </div>
        <div class='form-group button-box'>
          <button type='submit' class='btn btn-primary btn-block'>
            Sign Up
          </button>
        </div>
      </form>
      <p class='text-center'>
        <a href='/sign-in'>Already have an account? Sign In here.</a>
      </p>
    </div>
  );
};

export default SignUp;
