import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const ResumeProfessional = () => {
  // Array that holds each chunk of Professional info
  const [proData, setProData] = useState([]);

  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [position, setPosition] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [desc1, setDesc1] = useState('');
  const [desc2, setDesc2] = useState('');
  const [desc3, setDesc3] = useState('');

  // function that adds current Professional info to array
  const addProfessional = () => {
    const items = [...proData];
    items.push({
      company,
      location,
      position,
      start,
      end,
      desc1,
      desc2,
      desc3,
    });

    setCompany('');
    setLocation('');
    setPosition('');
    setStart('');
    setEnd('');
    setDesc1('');
    setDesc2('');
    setDesc3('');
    setProData(items);
  };

  // Stops page refresh
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=''>
      <form onSubmit={onSubmit} className='form-style' autoComplete='off'>
        <h3>Add Professional Experience</h3>
        <TextField
          id='outlined-basic'
          label='Company'
          name='company'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          variant='outlined'
        />

        <TextField
          id='outlined-basic'
          label='City, State, Country'
          name='location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Position'
          name='position'
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Start MM/YYYY'
          name='start'
          value={start}
          onChange={(e) => setStart(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='End MM/YYYY'
          name='end'
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Description'
          name='desc1'
          value={desc1}
          onChange={(e) => setDesc1(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id='outlined-basic'
          label='Description'
          name='desc2'
          value={desc2}
          onChange={(e) => setDesc2(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id='outlined-basic'
          label='Description'
          name='desc3'
          value={desc3}
          onChange={(e) => setDesc3(e.target.value)}
          variant='outlined'
          style={{
            marginTop: 12,
            marginLeft: 8,
            marginRight: 8,
            marginBottom: 15,
          }}
        />

        <hr />

        <Button
          variant='contained'
          color='secondary'
          type='submit'
          onClick={addProfessional}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        >
          ADD
        </Button>
      </form>
    </div>
  );
};

export default ResumeProfessional;
