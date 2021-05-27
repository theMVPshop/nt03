import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const ResumeAdditionalSkills = () => {
  // Array that holds all additional skills
  const [addSkillsData, setAddSkillsData] = useState([]);

  const [skill1, setSkill1] = useState('');
  const [skill2, setSkill2] = useState('');
  const [skill3, setSkill3] = useState('');
  const [skill4, setSkill4] = useState('');
  const [skill5, setSkill5] = useState('');

  // function that adds current list of skills to array
  const addSkills = () => {
    const items = [...addSkillsData];
    items.push({
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
    });

    setSkill1('');
    setSkill2('');
    setSkill3('');
    setSkill4('');
    setSkill5('');

    setAddSkillsData(items);
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
          label=''
          name='skill1'
          value={skill1}
          onChange={(e) => setSkill1(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label=''
          name='skill2'
          value={skill2}
          onChange={(e) => setSkill2(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label=''
          name='skill3'
          value={skill3}
          onChange={(e) => setSkill3(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label=''
          name='skill4'
          value={skill4}
          onChange={(e) => setSkill4(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id='outlined-basic'
          label=''
          name='skill5'
          value={skill5}
          onChange={(e) => setSkill5(e.target.value)}
          variant='outlined'
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <Button
          variant='contained'
          color='secondary'
          type='submit'
          onClick={addSkills}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        >
          ADD
        </Button>
      </form>
    </div>
  );
};

export default ResumeAdditionalSkills;
