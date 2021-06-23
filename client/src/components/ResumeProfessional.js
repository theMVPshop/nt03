import React from 'react';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

const ResumeProfessional = (props) => {
  // Stops page refresh
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const clearWork1 = () => {
    props.updateCompany('');
    props.updateLocation('');
    props.updatePosition('');
    props.updateStart('');
    props.updateEnd('');
    props.updateDesc1('');
    props.updateDesc2('');
    props.updateDesc3('');
  };

  const clearWork2 = () => {
    props.updateCompany2('');
    props.updateLocation2('');
    props.updatePosition2('');
    props.updateStart2('');
    props.updateEnd2('');
    props.updateDesc11('');
    props.updateDesc22('');
    props.updateDesc33('');
  };

  const clearWork3 = () => {
    props.updateCompany3('');
    props.updateLocation3('');
    props.updatePosition3('');
    props.updateStart3('');
    props.updateEnd3('');
    props.updateDesc111('');
    props.updateDesc222('');
    props.updateDesc333('');
  };

  return (
    <div className=''>
      <div className='resume-navigation resume-clear'>
        <Button
          variant='contained'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          onClick={props.clearWork}
        >
          Clear
        </Button>
        <div>
          <Button
            variant='contained'
            color='secondary'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            onClick={props.goBack}
          >
            Back
          </Button>
          <Button
            variant='contained'
            className='next-btn'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            onClick={props.onClick}
          >
            Next
          </Button>
        </div>
      </div>

      <div className='form-box'>
        <form onSubmit={onSubmit} className='form-style' autoComplete='off'>
          <h2>Add Current and Past Dental Work Experience</h2>
          <br />
          <div className='work-form-title'>
            <h3>Work Experience #1</h3>
            <Button onClick={clearWork1}>Clear</Button>
          </div>

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
            label='Location (City and State)'
            value={props.location}
            onChange={(e) => props.updateLocation(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />

          <TextField
            id='outlined-basic'
            label='Job Title'
            value={props.position}
            onChange={(e) => props.updatePosition(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />
          <div className='small-field-box'>
            <TextField
              className='small-field'
              id='outlined-basic'
              label='Start (MM/YYYY)'
              value={props.start}
              onChange={(e) => props.updateStart(e.target.value)}
              variant='outlined'
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            />

            <TextField
              className='small-field'
              id='outlined-basic'
              label='End (MM/YYYY)'
              value={props.end}
              onChange={(e) => props.updateEnd(e.target.value)}
              variant='outlined'
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            />
          </div>
          <p className='job-desc'>Job Description</p>
          <TextField
            id='outlined-basic'
            label='#1'
            value={props.desc1}
            onChange={(e) => props.updateDesc1(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />
          <TextField
            id='outlined-basic'
            label='#2'
            value={props.desc2}
            onChange={(e) => props.updateDesc2(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />
          <TextField
            id='outlined-basic'
            label='#3'
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
        </form>
        <form onSubmit={onSubmit} className='form-style' autoComplete='off'>
          <div className='work-form-title'>
            <h3>Work Experience #2</h3>
            <Button onClick={clearWork2}>Clear</Button>
          </div>

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
            label='Location (City and State)'
            value={props.location2}
            onChange={(e) => props.updateLocation2(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />

          <TextField
            id='outlined-basic'
            label='Job Title'
            value={props.position2}
            onChange={(e) => props.updatePosition2(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />
          <div className='small-field-box'>
            <TextField
              className='small-field'
              id='outlined-basic'
              label='Start (MM/YYYY)'
              value={props.start2}
              onChange={(e) => props.updateStart2(e.target.value)}
              variant='outlined'
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            />

            <TextField
              className='small-field'
              id='outlined-basic'
              label='End (MM/YYYY)'
              value={props.end2}
              onChange={(e) => props.updateEnd2(e.target.value)}
              variant='outlined'
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            />
          </div>
          <p className='job-desc'>Job Description</p>

          <TextField
            id='outlined-basic'
            label='#1'
            value={props.desc11}
            onChange={(e) => props.updateDesc11(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />
          <TextField
            id='outlined-basic'
            label='#2'
            value={props.desc22}
            onChange={(e) => props.updateDesc22(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />
          <TextField
            id='outlined-basic'
            label='#3'
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
        </form>
        <form onSubmit={onSubmit} className='form-style' autoComplete='off'>
          <div className='work-form-title'>
            <h3>Work Experience #3</h3>
            <Button onClick={clearWork3}>Clear</Button>
          </div>

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
            label='Location (City and State)'
            value={props.location3}
            onChange={(e) => props.updateLocation3(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />

          <TextField
            id='outlined-basic'
            label='Job Title'
            value={props.position3}
            onChange={(e) => props.updatePosition3(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />
          <div className='small-field-box'>
            <TextField
              className='small-field'
              id='outlined-basic'
              label='Start (MM/YYYY)'
              value={props.start3}
              onChange={(e) => props.updateStart3(e.target.value)}
              variant='outlined'
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            />

            <TextField
              className='small-field'
              id='outlined-basic'
              label='End (MM/YYYY)'
              value={props.end3}
              onChange={(e) => props.updateEnd3(e.target.value)}
              variant='outlined'
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            />
          </div>
          <p className='job-desc'>Job Description</p>

          <TextField
            id='outlined-basic'
            label='#1'
            value={props.desc111}
            onChange={(e) => props.updateDesc111(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />
          <TextField
            id='outlined-basic'
            label='#2'
            value={props.desc222}
            onChange={(e) => props.updateDesc222(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />
          <TextField
            id='outlined-basic'
            label='#3'
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
        </form>
        <div className='resume-clear'>
          <Button
            variant='contained'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            onClick={props.clearWork}
          >
            Clear
          </Button>
          <div>
            <Button
              variant='contained'
              color='secondary'
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
              onClick={props.goBack}
            >
              Back
            </Button>
            <Button
              variant='contained'
              className='next-btn'
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
              onClick={props.onClick}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeProfessional;
