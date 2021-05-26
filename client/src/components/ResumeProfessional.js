import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ResumeProfessional() {
  return (
    <div className=''>
      <form className='form-style' autoComplete='off'>
        <h4>Company 1</h4>
        <TextField
          id='outlined-basic'
          label='Company'
          name='company1'
          variant='outlined'
        />

        <TextField
          id='outlined-basic'
          label='City, State, Country'
          name='local1'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Position'
          name='position1'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Start MM/YYYY'
          name='start1'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='End MM/YYYY'
          name='end1'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Description'
          name='desc1[0]'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id='outlined-basic'
          label='Description'
          name='desc1[1]'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id='outlined-basic'
          label='Description'
          name='desc1[2]'
          variant='outlined'
          style={{
            marginTop: 12,
            marginLeft: 8,
            marginRight: 8,
            marginBottom: 15,
          }}
        />

        <hr />

        <h4>Company 2</h4>

        <TextField
          id='outlined-basic'
          label='Company'
          name='company2'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='City, State, Country'
          name='local2'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Position'
          name='position2'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Start MM/YYYY'
          name='start2'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='End MM/YYYY'
          name='end2'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Description'
          name='desc2[0]'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id='outlined-basic'
          label='Description'
          name='desc2[1]'
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id='outlined-basic'
          label='Description'
          name='desc2[2]'
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

export default ResumeProfessional;
