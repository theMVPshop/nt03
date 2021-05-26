import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ResumeEducation() {
  return (
    <div className=''>
      <form className='form-style' autoComplete='off'>
        <TextField
          id='outlined-basic'
          label='Institution'
          name='institution'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='City, State, Country'
          name='city'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Major'
          name='major'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Graduation Year'
          name='gradYear'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Additional Info'
          name='additional'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <Button
          variant='contained'
          color='secondary'
          type='submit'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        >
          ADD
        </Button>
      </form>
    </div>
  );
}

export default ResumeEducation;
