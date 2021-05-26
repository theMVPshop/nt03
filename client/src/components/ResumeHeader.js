import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ResumeHeader() {
  return (
    <div className=''>
      <br />
      <form className='form-style'>
        <TextField
          id='outlined-basic'
          label='Full Name'
          name='name'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Address'
          name='address'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='City'
          name='city'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='State'
          name='state'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Zip Code'
          name='zip'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Phone'
          name='phone'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='E-mail'
          name='email'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-multiline-static'
          label='Summary'
          name='summary'
          multiline
          rows={7}
          variant='outlined'
          style={{
            marginTop: 20,
            marginBottom: 15,
            marginLeft: 8,
            marginRight: 8,
          }}
        />
        <Button variant='contained' type='submit' style={{ margin: 8 }}>
          Update
        </Button>
      </form>
    </div>
  );
}

export default ResumeHeader;
