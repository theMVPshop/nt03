import React from 'react';
import TextField from '@material-ui/core/TextField';

const ResumeProfessional = (props) => {
  // Stops page refresh
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=''>
      <form onSubmit={onSubmit} className='form-style' autoComplete='off'>
        <h2>Add Current and Past Dental Work Experience</h2>
        <br />
        <h3>Work Experience #1</h3>

        <TextField
          id='outlined-basic'
          label='Company'
          value={props.company}
          onChange={(e) => props.updateCompany(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='City, State, Country'
          value={props.location}
          onChange={(e) => props.updateLocation(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Position'
          value={props.position}
          onChange={(e) => props.updatePosition(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Start MM/YYYY'
          value={props.start}
          onChange={(e) => props.updateStart(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='End MM/YYYY'
          value={props.end}
          onChange={(e) => props.updateEnd(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Description'
          value={props.desc1}
          onChange={(e) => props.updateDesc1(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id='outlined-basic'
          label='Description'
          value={props.desc2}
          onChange={(e) => props.updateDesc2(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id='outlined-basic'
          label='Description'
          value={props.desc3}
          onChange={(e) => props.updateDesc3(e.target.value)}
          variant='outlined'
          style={{
            marginTop: 12,
            marginLeft: 8,
            marginRight: 8,
            marginBottom: 15,
          }}
        />

        <hr />

        {/* <Button
          variant='contained'
          color='secondary'
          type='submit'
          // onClick={addProfessional}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        >
          ADD
        </Button> */}
      </form>
      <form onSubmit={onSubmit} className='form-style' autoComplete='off'>
        <h3>Work Experience #2</h3>

        <TextField
          id='outlined-basic'
          label='Company'
          onChange={(e) => props.updateCompany2(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='City, State, Country'
          onChange={(e) => props.updateLocation2(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Position'
          onChange={(e) => props.updatePosition2(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Start MM/YYYY'
          onChange={(e) => props.updateStart2(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='End MM/YYYY'
          onChange={(e) => props.updateEnd2(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Description'
          onChange={(e) => props.updateDesc11(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id='outlined-basic'
          label='Description'
          onChange={(e) => props.updateDesc22(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id='outlined-basic'
          label='Description'
          onChange={(e) => props.updateDesc33(e.target.value)}
          variant='outlined'
          style={{
            marginTop: 12,
            marginLeft: 8,
            marginRight: 8,
            marginBottom: 15,
          }}
        />

        <hr />

        {/* <Button
          variant='contained'
          color='secondary'
          type='submit'
          // onClick={addProfessional}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        >
          ADD
        </Button> */}
      </form>
    </div>
  );
};

export default ResumeProfessional;
