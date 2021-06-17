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
          value={props.company2}
          onChange={(e) => props.updateCompany2(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='City, State, Country'
          value={props.location2}
          onChange={(e) => props.updateLocation2(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Position'
          value={props.position2}
          onChange={(e) => props.updatePosition2(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Start MM/YYYY'
          value={props.start2}
          onChange={(e) => props.updateStart2(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='End MM/YYYY'
          value={props.end2}
          onChange={(e) => props.updateEnd2(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Description'
          value={props.desc11}
          onChange={(e) => props.updateDesc11(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id='outlined-basic'
          label='Description'
          value={props.desc22}
          onChange={(e) => props.updateDesc22(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id='outlined-basic'
          label='Description'
          value={props.desc33}
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
      <form onSubmit={onSubmit} className='form-style' autoComplete='off'>
        <h3>Work Experience #3</h3>

        <TextField
          id='outlined-basic'
          label='Company'
          value={props.company3}
          onChange={(e) => props.updateCompany3(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='City, State, Country'
          value={props.location3}
          onChange={(e) => props.updateLocation3(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Position'
          value={props.position3}
          onChange={(e) => props.updatePosition3(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Start MM/YYYY'
          value={props.start3}
          onChange={(e) => props.updateStart3(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='End MM/YYYY'
          value={props.end3}
          onChange={(e) => props.updateEnd3(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label='Description'
          value={props.desc111}
          onChange={(e) => props.updateDesc111(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id='outlined-basic'
          label='Description'
          value={props.desc222}
          onChange={(e) => props.updateDesc222(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id='outlined-basic'
          label='Description'
          value={props.desc333}
          onChange={(e) => props.updateDesc333(e.target.value)}
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