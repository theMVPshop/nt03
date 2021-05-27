import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const ResumeEducation = () => {
  // Array that holds each chunk of Education info
  const [eduData, setEduData] = useState([]);

  const [institute, setInstitute] = useState('');
  const [instLocation, setInstLocation] = useState('');
  const [major, setMajor] = useState('');
  const [graduation, setGraduation] = useState('');
  const [info, setInfo] = useState('');

  // function that adds current Education info to array
  const addEducation = () => {
    const items = [...eduData];
    items.push({
      institute,
      instLocation,
      major,
      graduation,
      info,
    });

    setInstitute('');
    setInstLocation('');
    setMajor('');
    setGraduation('');
    setInfo('');

    setEduData(items);
  };

  // Stops page refresh
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=''>
      <form onSubmit={onSubmit} className='form-style' autoComplete='off'>
        <TextField
          id='outlined-basic'
          label='Institution'
          name='institution'
          value={institute}
          onChange={(e) => setInstitute(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='City, State, Country'
          name='city'
          value={instLocation}
          onChange={(e) => setInstLocation(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Major'
          name='major'
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Graduation Year'
          name='gradYear'
          value={graduation}
          onChange={(e) => setGraduation(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Additional Info'
          name='additional'
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <Button
          variant='contained'
          color='secondary'
          type='submit'
          onClick={addEducation}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        >
          ADD
        </Button>
      </form>
    </div>
  );
};

export default ResumeEducation;
