import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';

const validate = (values) => {
  const errors = {};
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userName)) {
    errors.userName = 'Must be a valid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length > 8) {
    errors.password = 'Must be 8 characters or less';
  }
  if (!values.passwordTwo) {
    errors.passwordTwo = 'Required';
  } else if (values.passwordTwo !== values.password) {
    errors.passwordTwo = 'Paswords do not match';
  }

  return errors;
};

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
      passwordTwo: '',
    },
    validate,
    onSubmit: (values) => {
      axios
        .post('/users', {
          username: values.userName,
          password: values.password,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

      formik.resetForm();
      // history.push("/");
    },
  });

  return (
    <div className='sign-in-container'>
      <div className='login-form'>
        <form onSubmit={formik.handleSubmit}>
          <h2 className='text-center'>Sign Up</h2>
          <div className='form-group'>
            <input
              type='email'
              id='userName'
              className='form-control'
              placeholder='Enter Email'
              required='required'
              value={formik.values.userName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.userName && formik.errors.userName ? (
              <div className='validation-error'>{formik.errors.userName}</div>
            ) : null}
          </div>
          <div className='form-group'>
            <input
              type='password'
              id='password'
              className='form-control'
              placeholder='Password'
              required='required'
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className='validation-error'>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className='form-group'>
            <input
              type='password'
              id='passwordTwo'
              className='form-control'
              placeholder='Re-Enter Password'
              required='required'
              value={formik.values.passwordTwo}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.passwordTwo && formik.errors.passwordTwo ? (
              <div className='validation-error'>
                {formik.errors.passwordTwo}
              </div>
            ) : null}
          </div>
          <div className='form-group button-box'>
            <button
              onClick={formik.handleSubmit}
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
