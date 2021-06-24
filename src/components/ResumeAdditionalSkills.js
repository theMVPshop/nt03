import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const ResumeAdditionalSkills = (props) => {
  // Stops page refresh
  const onSubmit = (e) => {
    var frm = document.getElementsByName('additional')[0];
    e.preventDefault();
    frm.reset();
  };

  return (
    <div className='additional-container'>
      <div className='resume-navigation resume-clear'>
        <button
          className='sm-btn resume-btn clear'
          onClick={props.clearAdditional}
        >
          Clear
        </button>
        <button className='sm-btn resume-btn back' onClick={props.goBack}>
          Back
        </button>
      </div>
      <div className='form-box'>
        <h2>Add skills that are unique to you.</h2>
        <form
          name='additional'
          onSubmit={onSubmit}
          className='form-style small-field-box'
          autoComplete='off'
        >
          <TextField
            className='small-field-add'
            id='outlined-basic'
            label=''
            onChange={(e) => props.updateSkill1(e.target.value)}
            variant='outlined'
            style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          />{' '}
          <Button
            variant='contained'
            type='submit'
            onClick={props.addSkills}
            style={{ marginTop: 6, height: 60, fontSize: 18 }}
          >
            add
          </Button>
        </form>
        <h3>Additional Skills:</h3>
        <div className='checkbox-container'>
          {props.skills.map((d, i) => (
            <ul key={d.id}>
              <input
                onChange={(event) => {
                  let checked = event.target.checked;
                  props.setSkills(
                    props.skills.map((data) => {
                      if (d.id === data.id) {
                        data.select = checked;
                      }
                      return data;
                    })
                  );
                }}
                type='checkbox'
                checked={d.select}
              />
              <span>{d.name}</span>
            </ul>
          ))}
        </div>
        <div className='resume-clear'>
          <button
            className='sm-btn resume-btn clear'
            onClick={props.clearAdditional}
          >
            Clear
          </button>
          <button className='sm-btn resume-btn back' onClick={props.goBack}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeAdditionalSkills;
