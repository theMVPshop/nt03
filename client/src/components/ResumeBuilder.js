import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import ResumeHeader from './ResumeHeader';
import ResumePaper from './ResumePaper';
import ResumeProfessional from './ResumeProfessional';
import ResumeEducation from './ResumeEducation';
import ResumeAdditionalSkills from './ResumeAdditionalSkills';

export default function ResumeBuilder() {
  //   const classes = useStyles();
  const [tab, setTab] = React.useState(0);

  // Tab State
  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  // ---------HEADER STATE VARIABLES-----------
  // Header Form State
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');

  // --------PROFESSIONAL STATE VARIABLES AND FUNCTIONS--------
  // Professional Form State
  const [proData, setProData] = useState([]);

  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [position, setPosition] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [desc1, setDesc1] = useState('');
  const [desc2, setDesc2] = useState('');
  const [desc3, setDesc3] = useState('');

  // Professional function to add to ProData
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

  // --------EDUCATION STATE VARIABLES AND FUNCTIONS--------
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

  // --------SKILLS STATE VARIABLES AND FUNCTIONS--------
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

  return (
    <div className='resume-box'>
      <div className='resume-container'>
        <div className='tab-bar' position='static'>
          <Tabs value={tab} onChange={handleChange}>
            <Tab label='Header' />
            <Tab label='Professional' />
            <Tab label='Education' />
            <Tab label='+ Additional Skills'></Tab>
          </Tabs>
        </div>
        {tab === 0 && (
          <ResumeHeader
            name={name}
            updateName={setName}
            address={address}
            updateAddress={setAddress}
            city={city}
            updateCity={setCity}
            state={state}
            updateState={setState}
            zip={zip}
            updateZip={setZip}
            phone={phone}
            updatePhone={setPhone}
            email={email}
            updateEmail={setEmail}
            summary={summary}
            updateSummary={setSummary}
          />
        )}
        {tab === 1 && (
          <div>
            <ResumeProfessional
              proData={proData}
              updateProData={setProData}
              company={company}
              updateCompany={setCompany}
              location={location}
              updateLocation={setLocation}
              position={position}
              updatePosition={setPosition}
              start={start}
              updateStart={setStart}
              end={end}
              updateEnd={setEnd}
              desc1={desc1}
              updateDesc1={setDesc1}
              desc2={desc2}
              updateDesc2={setDesc2}
              desc3={desc3}
              updateDesc3={setDesc3}
            />
            <Button
              variant='contained'
              color='secondary'
              type='submit'
              onClick={addProfessional}
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            >
              ADD
            </Button>
          </div>
        )}
        {tab === 2 && (
          <div>
            <ResumeEducation
              eduData={eduData}
              updateEduData={setEduData}
              institute={institute}
              updateInstitute={setInstitute}
              instLocation={instLocation}
              updateInstLocation={setInstLocation}
              major={major}
              updateMajor={setMajor}
              graduation={graduation}
              updateGraduation={setGraduation}
              info={info}
              updateInfo={setInfo}
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
          </div>
        )}
        {tab === 3 && (
          <div>
            <ResumeAdditionalSkills
              addSkillsData={addSkillsData}
              updateSkillsData={setAddSkillsData}
              skill1={skill1}
              updateSkill1={setSkill1}
              skill2={skill2}
              updateSkill2={setSkill2}
              skill3={skill3}
              updateSkill3={setSkill3}
              skill4={skill4}
              updateSkill4={setSkill4}
              skill5={skill5}
              updateSkill5={setSkill5}
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
          </div>
        )}
      </div>

      <ResumePaper
        // HEADER
        name={name}
        address={address}
        city={city}
        state={state}
        zip={zip}
        phone={phone}
        email={email}
        summary={summary}
        // PROFESSIONAL
        proDate={proData}
        company={company}
        location={location}
        position={position}
        start={start}
        end={end}
        desc1={desc1}
        desc2={desc2}
        desc3={desc3}
        // EDUCATION
        eduData={eduData}
        institute={institute}
        instLocation={instLocation}
        major={major}
        graduation={graduation}
        info={info}
        // ADDITIONAL SKILLS
        addSkillsData={addSkillsData}
        skill1={skill1}
        skill2={skill2}
        skill3={skill3}
        skill4={skill4}
        skill5={skill5}
      />
    </div>
  );
}
