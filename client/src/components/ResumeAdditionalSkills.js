import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ResumeAdditionalSkills() {
  return (
    <div className=''>
      <form className='form-style' autoComplete='off'>
        <TextField
          id='outlined-basic'
          label=''
          name='skill1'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label=''
          name='skill2'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label=''
          name='skill3'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label=''
          name='skill4'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label=''
          name='skill5'
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

export default ResumeAdditionalSkills;
