import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const ResumeHeader = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');

  // Stops page refresh
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=''>
      <br />
      <form onSubmit={onSubmit} className='form-style'>
        <TextField
          id='outlined-basic'
          label='Full Name'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Address'
          name='address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='City'
          name='city'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='State'
          name='state'
          value={state}
          onChange={(e) => setState(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Zip Code'
          name='zip'
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Phone'
          name='phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='E-mail'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-multiline-static'
          label='Summary'
          name='summary'
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
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
