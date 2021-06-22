import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const ResumeHeader = (props) => {
  // Stops page refresh
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const clearSummary = () => {
    props.updateSummary('');
  };
  return (
    <div>
      <div className='resume-clear-top'>
        <Button
          variant='contained'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          onClick={props.clearHeader}
        >
          Clear
        </Button>
        <Button
          variant='contained'
          color='primary'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          onClick={props.onClick}
        >
          Next
        </Button>
      </div>

      <div className='form-box'>
        <h2>Create a header for your resume</h2>
        <p>The header is where you should add your contact information.</p>

        <form onSubmit={onSubmit} className='form-style'>
          <TextField
            id='outlined-basic'
            label='Full Name'
            value={props.name}
            onChange={(e) => props.updateName(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />

          <TextField
            id='outlined-basic'
            label='Address'
            value={props.address}
            onChange={(e) => props.updateAddress(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />
          <div className='small-field-box'>
            <TextField
              className='small-field'
              id='outlined-basic'
              label='City'
              value={props.city}
              onChange={(e) => props.updateCity(e.target.value)}
              variant='outlined'
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            />

            <TextField
              className='small-field'
              id='outlined-basic'
              label='State'
              value={props.state}
              onChange={(e) => props.updateState(e.target.value)}
              variant='outlined'
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            />
          </div>

          <TextField
            className='small-field'
            id='outlined-basic'
            label='Zip Code'
            value={props.zip}
            onChange={(e) => props.updateZip(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />

          <TextField
            id='outlined-basic'
            label='Phone'
            value={props.phone}
            onChange={(e) => props.updatePhone(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />

          <TextField
            id='outlined-basic'
            label='E-mail'
            value={props.email}
            onChange={(e) => props.updateEmail(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />
          <br />
          <div className='work-form-title'>
            <p>
              Write a small blurb or say a little bit about yourself. (Make it
              professional!)
            </p>
            <Button onClick={clearSummary}>Clear</Button>
          </div>
          <TextField
            id='outlined-multiline-static'
            label='Summary'
            value={props.summary}
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
        </form>
        <div className='resume-clear'>
          <Button
            variant='contained'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            onClick={props.clearHeader}
          >
            Clear
          </Button>
          <Button
            variant='contained'
            color='primary'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            onClick={props.onClick}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
