import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const ResumeHeader = (props) => {
  // useEffect(() => {
  //   const nameData = localStorage.getItem('name');
  //   const addressData = localStorage.getItem('address');
  //   const cityData = localStorage.getItem('city');
  //   const stateData = localStorage.getItem('state');
  //   const zipData = localStorage.getItem('zip');
  //   const phoneData = localStorage.getItem('phone');
  //   const emailData = localStorage.getItem('email');
  //   const summaryData = localStorage.getItem('summary');

  //   if (
  //     (nameData,
  //     addressData,
  //     cityData,
  //     stateData,
  //     zipData,
  //     phoneData,
  //     emailData,
  //     summaryData)
  //   ) {
  //     props.updateName(JSON.parse(nameData));
  //     props.updateAddress(JSON.parse(addressData));
  //     props.updateCity(JSON.parse(cityData));
  //     props.updateState(JSON.parse(stateData));
  //     props.updateZip(JSON.parse(zipData));
  //     props.updatePhone(JSON.parse(phoneData));
  //     props.updateEmail(JSON.parse(emailData));
  //     props.updateSummary(JSON.parse(summaryData));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('name', JSON.stringify(props.name));
  //   localStorage.setItem('address', JSON.stringify(props.address));
  //   localStorage.setItem('city', JSON.stringify(props.city));
  //   localStorage.setItem('state', JSON.stringify(props.state));
  //   localStorage.setItem('zip', JSON.stringify(props.zip));
  //   localStorage.setItem('phone', JSON.stringify(props.phone));
  //   localStorage.setItem('email', JSON.stringify(props.email));
  //   localStorage.setItem('summary', JSON.stringify(props.summary));
  // });

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

        <TextField
          id='outlined-basic'
          label='City'
          value={props.city}
          onChange={(e) => props.updateCity(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='State'
          value={props.state}
          onChange={(e) => props.updateState(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
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
        <p>
          Write a small blurb or say a little bit about yourself. (Make it
          professional!)
        </p>
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
    </div>
  );
};

export default ResumeHeader;
