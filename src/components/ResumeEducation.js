import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const ResumeEducation = (props) => {
  // Stops page refresh
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const clearEdu1 = () => {
    props.updateInstitute('');
    props.updateInstLocation('');
    props.updateMajor('');
    props.updateGraduation('');
    props.updateInfo('');
  };
  const clearEdu2 = () => {
    props.updateInstitute2('');
    props.updateInstLocation2('');
    props.updateMajor2('');
    props.updateGraduation2('');
    props.updateInfo2('');
  };

  const clearEdu3 = () => {
    props.updateInstitute3('');
    props.updateInstLocation3('');
    props.updateMajor3('');
    props.updateGraduation3('');
    props.updateInfo3('');
  };

  return (
    <div className=''>
      <div className='resume-navigation resume-clear'>
        <button className='sm-btn resume-btn clear' onClick={props.clearEdu}>
          Clear
        </button>
        <div className='next-back'>
          <button className='sm-btn resume-btn back' onClick={props.goBack}>
            Back
          </button>
          <button className='sm-btn resume-btn next' onClick={props.onClick}>
            Next
          </button>
        </div>
      </div>
      <div className='form-box'>
        <h2>Add Current and Past Education</h2>
        <p>
          Add Highschool, College, or any relevant education you have completed.
        </p>
        {/* EDU FORM 1 */}
        <form onSubmit={onSubmit} className='form-style' autoComplete='off'>
          <div className='work-form-title'>
            <h3>Institute #1</h3>
            <Button onClick={clearEdu1}>Clear</Button>
          </div>
          <TextField
            id='outlined-basic'
            label='Institution'
            value={props.institute}
            onChange={(e) => props.updateInstitute(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />

          <TextField
            id='outlined-basic'
            label='City, State, Country'
            value={props.location}
            onChange={(e) => props.updateInstLocation(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />

          <TextField
            id='outlined-basic'
            label='Major'
            value={props.major}
            onChange={(e) => props.updateMajor(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />

          <TextField
            id='outlined-basic'
            label='Graduation Year'
            value={props.graduation}
            onChange={(e) => props.updateGraduation(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />

          <TextField
            id='outlined-basic'
            label='Additional Info'
            value={props.info}
            onChange={(e) => props.updateInfo(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />
        </form>
        {/* EDU FORM 2 */}
        <form onSubmit={onSubmit} className='form-style' autoComplete='off'>
          <div className='work-form-title'>
            <h3>Institute #2</h3>
            <Button onClick={clearEdu2}>Clear</Button>
          </div>
          <TextField
            id='outlined-basic'
            label='Institution'
            value={props.institute2}
            onChange={(e) => props.updateInstitute2(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />

          <TextField
            id='outlined-basic'
            label='City, State, Country'
            value={props.location2}
            onChange={(e) => props.updateInstLocation2(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />

          <TextField
            id='outlined-basic'
            label='Major'
            value={props.major2}
            onChange={(e) => props.updateMajor2(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />

          <TextField
            id='outlined-basic'
            label='Graduation Year'
            value={props.graduation2}
            onChange={(e) => props.updateGraduation2(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />

          <TextField
            id='outlined-basic'
            label='Additional Info'
            value={props.info2}
            onChange={(e) => props.updateInfo2(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />
        </form>
        {/* EDU FORM 3 */}
        <form onSubmit={onSubmit} className='form-style' autoComplete='off'>
          <div className='work-form-title'>
            <h3>Institute #3</h3>
            <Button onClick={clearEdu3}>Clear</Button>
          </div>
          <TextField
            id='outlined-basic'
            label='Institution'
            value={props.institute3}
            onChange={(e) => props.updateInstitute3(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />

          <TextField
            id='outlined-basic'
            label='City, State, Country'
            value={props.location3}
            onChange={(e) => props.updateInstLocation3(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />

          <TextField
            id='outlined-basic'
            label='Major'
            value={props.major3}
            onChange={(e) => props.updateMajor3(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />

          <TextField
            id='outlined-basic'
            label='Graduation Year'
            value={props.graduation3}
            onChange={(e) => props.updateGraduation3(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />

          <TextField
            id='outlined-basic'
            label='Additional Info'
            value={props.info3}
            onChange={(e) => props.updateInfo3(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />
        </form>
        <div className='resume-clear'>
          <button className='sm-btn resume-btn clear' onClick={props.clearEdu}>
            Clear
          </button>
          <div className='next-back'>
            <button className='sm-btn resume-btn back' onClick={props.goBack}>
              Back
            </button>
            <button className='sm-btn resume-btn next' onClick={props.onClick}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeEducation;
