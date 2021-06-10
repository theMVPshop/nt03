import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const ResumeHeader = (props) => {
  // Stops page refresh
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=''>
      <h2>Create a header for your resume</h2>
      <p>The header is where you should add your contact information.</p>

      <form onSubmit={onSubmit} className='form-style'>
        <TextField
          id='outlined-basic'
          label='Full Name'
          onChange={(e) => props.updateName(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Address'
          onChange={(e) => props.updateAddress(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='City'
          onChange={(e) => props.updateCity(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='State'
          onChange={(e) => props.updateState(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Zip Code'
          onChange={(e) => props.updateZip(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Phone'
          onChange={(e) => props.updatePhone(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='E-mail'
          onChange={(e) => props.updateEmail(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <br />
        <p>
          Write a small blurb or say a little bit about yourself. (Make it
          professional!)
        </p>
        <TextField
          id='outlined-multiline-static'
          label='Summary'
          onChange={(e) => props.updateSummary(e.target.value)}
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
};

export default ResumeHeader;
