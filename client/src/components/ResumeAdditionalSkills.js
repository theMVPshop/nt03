import React from 'react';
import TextField from '@material-ui/core/TextField';

const ResumeAdditionalSkills = (props) => {
  // const checked = props.skills.checked;

  // const toggleSkill = (e) => {
  //   props.setSkills({ checked: e.target.checked });
  // };
  // Stops page refresh

  const onSubmit = (e) => {
    e.preventDefault();
  };
  console.log(props);
  return (
    <div className=''>
      {/* {props.skills.map((skill) => (
        <div>
          <input
            checked={checked}
            key={skill.id}
            type='checkbox'
            // onChange={toggleSkill}
          />
          <span>{skill.title}</span>
        </div>
      ))} */}
      {/* <input type='checkbox'>Patient Care</input> */}
      <form onSubmit={onSubmit} className='form-style' autoComplete='off'>
        <TextField
          id='outlined-basic'
          label=''
          onChange={(e) => props.updateSkill1(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
      </form>
    </div>
  );
};

export default ResumeAdditionalSkills;
