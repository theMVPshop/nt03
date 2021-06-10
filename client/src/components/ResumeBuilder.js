import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import ResumeHeader from './ResumeHeader';
import ResumePaper from './ResumePaper';
import ResumeProfessional from './ResumeProfessional';
import ResumeEducation from './ResumeEducation';
import ResumeAdditionalSkills from './ResumeAdditionalSkills';

const id = uuidv4();
// const skills = [
//   { name: 'Patient Care' },
//   { name: 'X-Ray Skills' },
//   { name: '4-Handed Dentistry' },
//   { name: 'Great Attitude' },
//   { name: 'Compassion' },
//   { name: 'Detail Oriented' },
//   { name: 'Efficiency' },
//   { name: 'Organization' },
//   { name: 'Motivated' },
//   { name: 'Teamwork' },
//   { name: 'Interpersonal Skills' },
//   { name: 'Customer Service' },
//   { name: 'Dental Procedure Preparation' },
//   { name: 'Patient Communication' },
//   { name: 'Digital X-Ray Skills' },
//   { name: 'Dental Equipment Operation' },
//   { name: 'Dental Equipment Maintenance' },
//   { name: 'Eaglesoft Dental Software' },
//   { name: 'Invisalign' },
//   { name: 'Cerec' },
//   { name: 'CPR' },
//   { name: 'Electronic Medical Records' },
//   { name: 'Record Keeping' },
//   { name: 'Payment Processing' },
// ];

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
    const id = uuidv4();
    const items = [...proData];
    items.push({
      id,
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
    const id = uuidv4();
    const items = [...eduData];
    items.push({
      id,
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
  // const [skill, setSkill] = useState([]);

  // CHECKBOXES
  // const [skills, setSkills] = useState([]);
  // console.log(skills);
  console.log('hi');

  // useEffect(() => {
  //   setSkill([...document.querySelectorAll('.checkBox')]);
  // }, []);

  let skill = [...document.querySelectorAll('.checkBox')];
  console.log(skill);

  function getChecked(e) {
    let getChex = skill
      .filter((item) => item.checked)
      .map((item) => item.value);
    // let getChexMap = getChex.map((item) => item.value);
    // .map((item) => item.value);
    // console.log(getChexMap);
    console.log(getChex);
  }

  skill.forEach((item) => item.addEventListener('change', getChecked));
  // useEffect(() => {

  // }, [skill]);

  // const updateSkill = (item) => {
  //   if (skills.includes(item)) {
  //     setSkills(skills.filter((skill) => skill.value != item));
  //   } else {
  //     setSkills([...skills, item]);
  //   }
  // };

  // const checkHandler = (e) => {
  //   const skill = skills;
  //   const value = e.target.value;
  //   updateSkill(value);
  // };

  // function that adds current list of skills to array
  const addSkills = () => {
    const id = uuidv4();
    const items = [...addSkillsData];
    items.push({
      id,
      skill1,
    });

    setSkill1('');

    setAddSkillsData(items);
  };

  return (
    <div className='resume-box'>
      <div className='resume-container'>
        <div className='tab-bar' position='static'>
          <Tabs value={tab} onChange={handleChange}>
            <Tab label='Header' />
            <Tab label='Work Experience' />
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
            <div>
              <li>
                <input
                  type='checkbox'
                  value='Patient Care'
                  id={id + 1}
                  className='checkBox'
                  // onChange={getChecked}
                />{' '}
                <span>Patient Care</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='X-Ray Skills'
                  id={id + 2}
                  className='checkBox'
                />{' '}
                <span>X-Ray Skills</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='4-Handed Dentistry'
                  id={id + 3}
                  className='checkBox'
                />{' '}
                <span>4-Handed Dentist</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='Great Attitude'
                  id={id + 4}
                  className='checkBox'
                />{' '}
                <span>Great Attitude</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='Compassion'
                  id={id + 5}
                  className='checkBox'
                />{' '}
                <span>Compassion</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='Detail Oriented'
                  id={id + 6}
                  className='checkBox'
                />{' '}
                <span>Detail Oriented</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='Efficiency'
                  id={id + 7}
                  className='checkBox'
                />{' '}
                <span>Efficiency</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='Organization'
                  id={id + 8}
                  className='checkBox'
                />{' '}
                <span>Organization</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='Motivated'
                  id={id + 9}
                  className='checkBox'
                />{' '}
                <span>Motivated</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='Teamwork'
                  id={id + 10}
                  className='checkBox'
                />{' '}
                <span>Teamwork</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='Interpersonal Skills'
                  id={id + 11}
                  className='checkBox'
                />{' '}
                <span>Interpersonal Skills</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='Customer Service'
                  id={id + 12}
                  className='checkBox'
                />{' '}
                <span>Customer Service</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='Dental Procedure Preparation'
                  id={id + 13}
                  className='checkBox'
                />{' '}
                Dental Procedure Preparation
              </li>
              <li>
                <input
                  type='checkbox'
                  value='Patient Communication'
                  id={id + 14}
                  className='checkBox'
                />{' '}
                <span>Patient Communication</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='Digital X-Ray Skills'
                  id={id + 15}
                  className='checkBox'
                />{' '}
                <span>Digital X-Ray Skills</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='Dental Equipment Operation'
                  id={id + 16}
                  className='checkBox'
                />{' '}
                <span>Dental Equipment Operation</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='Dental Equipment Maintenance'
                  id={id + 17}
                  className='checkBox'
                />{' '}
                <span>Dental Equipment Maintenance</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='Eaglesoft Dental Software'
                  id={id + 18}
                  className='checkBox'
                />{' '}
                <span>Eaglesoft Dental Software</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='Invisalign'
                  id={id + 19}
                  className='checkBox'
                />{' '}
                <span>Invisalign</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='Cerec'
                  id={id + 20}
                  className='checkBox'
                />{' '}
                <span>Cerec</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='CPR'
                  id={id + 21}
                  className='checkBox'
                />{' '}
                <span>CPR</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='Electronic Medical Records'
                  id={id + 22}
                  className='checkBox'
                />{' '}
                <span>Electronic Medical Records</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='Record Keeping'
                  id={id + 23}
                  className='checkBox'
                />{' '}
                <span>Record Keeping</span>
              </li>
              <li>
                <input
                  type='checkbox'
                  value='Payment Processing'
                  id={id + 24}
                  className='checkBox'
                />{' '}
                <span>Payment Processing</span>
              </li>
            </div>

            <ResumeAdditionalSkills
              addSkillsData={addSkillsData}
              updateSkillsData={setAddSkillsData}
              // skills={skills}
              // setSkills={setSkills}
              skill1={skill1}
              updateSkill1={setSkill1}
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

      {/* RESUME RENDER */}
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
        proData={proData}
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
        // isChecked={isChecked}
        // formData={formData}
      />
    </div>
  );
}
