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
  useEffect(() => {
    const nameData = localStorage.getItem('name');
    const addressData = localStorage.getItem('address');
    const cityData = localStorage.getItem('city');
    const stateData = localStorage.getItem('state');
    const zipData = localStorage.getItem('zip');
    const phoneData = localStorage.getItem('phone');
    const emailData = localStorage.getItem('email');
    const summaryData = localStorage.getItem('summary');
    const companyData = localStorage.getItem('company');
    const locationData = localStorage.getItem('location');
    const positionData = localStorage.getItem('position');
    const startData = localStorage.getItem('start');
    const endData = localStorage.getItem('end');
    const desc1Data = localStorage.getItem('desc1');
    const desc2Data = localStorage.getItem('desc2');
    const desc3Data = localStorage.getItem('desc3');

    if (
      (nameData,
      addressData,
      cityData,
      stateData,
      zipData,
      phoneData,
      emailData,
      summaryData,
      companyData,
      locationData,
      positionData,
      startData,
      endData,
      desc1Data,
      desc2Data,
      desc3Data)
    ) {
      setName(JSON.parse(nameData));
      setAddress(JSON.parse(addressData));
      setCity(JSON.parse(cityData));
      setState(JSON.parse(stateData));
      setZip(JSON.parse(zipData));
      setPhone(JSON.parse(phoneData));
      setEmail(JSON.parse(emailData));
      setSummary(JSON.parse(summaryData));
      setCompany(JSON.parse(companyData));
      setLocation(JSON.parse(locationData));
      setPosition(JSON.parse(positionData));
      setStart(JSON.parse(startData));
      setEnd(JSON.parse(endData));
      setDesc1(JSON.parse(desc1Data));
      setDesc2(JSON.parse(desc2Data));
      setDesc3(JSON.parse(desc3Data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
    localStorage.setItem('address', JSON.stringify(address));
    localStorage.setItem('city', JSON.stringify(city));
    localStorage.setItem('state', JSON.stringify(state));
    localStorage.setItem('zip', JSON.stringify(zip));
    localStorage.setItem('phone', JSON.stringify(phone));
    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('summary', JSON.stringify(summary));
    localStorage.setItem('company', JSON.stringify(company));
    localStorage.setItem('location', JSON.stringify(location));
    localStorage.setItem('position', JSON.stringify(position));
    localStorage.setItem('start', JSON.stringify(start));
    localStorage.setItem('end', JSON.stringify(end));
    localStorage.setItem('desc1', JSON.stringify(desc1));
    localStorage.setItem('desc2', JSON.stringify(desc2));
    localStorage.setItem('desc3', JSON.stringify(desc3));
  });

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
  const [company2, setCompany2] = useState('');
  const [location, setLocation] = useState('');
  const [location2, setLocation2] = useState('');
  const [position, setPosition] = useState('');
  const [position2, setPosition2] = useState('');
  const [start, setStart] = useState('');
  const [start2, setStart2] = useState('');
  const [end, setEnd] = useState('');
  const [end2, setEnd2] = useState('');
  const [desc1, setDesc1] = useState('');
  const [desc11, setDesc11] = useState('');
  const [desc2, setDesc2] = useState('');
  const [desc22, setDesc22] = useState('');
  const [desc3, setDesc3] = useState('');
  const [desc33, setDesc33] = useState('');

  // Professional function to add to ProData
  // const addProfessional = () => {
  //   const id = uuidv4();
  //   const items = [...proData];
  //   items.push({
  //     id,
  //     company,
  //     location,
  //     position,
  //     start,
  //     end,
  //     desc1,
  //     desc2,
  //     desc3,
  //   });

  //   setCompany('');
  //   setLocation('');
  //   setPosition('');
  //   setStart('');
  //   setEnd('');
  //   setDesc1('');
  //   setDesc2('');
  //   setDesc3('');
  //   setProData(items);
  // };

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
  // CHECKBOXES
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    let skills = [
      { id: 1, name: 'Patient Care' },
      { id: 2, name: 'X-Ray Skills' },
      { id: 3, name: '4-Handed Dentistry' },
      { id: 4, name: 'Great Attitude' },
      { id: 5, name: 'Compassion' },
      { id: 6, name: 'Detail Oriented' },
      { id: 7, name: 'Efficiency' },
      { id: 8, name: 'Organization' },
      { id: 9, name: 'Motivated' },
      { id: 10, name: 'Teamwork' },
      { id: 11, name: 'Interpersonal Skills' },
      { id: 12, name: 'Customer Service' },
      { id: 13, name: 'Dental Procedure Preparation' },
      { id: 14, name: 'Patient Communication' },
      { id: 15, name: 'Digital X-Ray Skills' },
      { id: 16, name: 'Dental Equipment Operation' },
      { id: 17, name: 'Dental Equipment Maintenance' },
      { id: 18, name: 'Eaglesoft Dental Software' },
      { id: 19, name: 'Invisalign' },
      { id: 20, name: 'Cerec' },
      { id: 21, name: 'CPR' },
      { id: 22, name: 'Electronic Medical Records' },
      { id: 23, name: 'Record Keeping' },
      { id: 24, name: 'Payment Processing' },
    ];

    setSkills(
      skills.map((d) => {
        return { select: false, id: d.id, name: d.name };
      })
    );
  }, []);

  console.log(skills);
  // let skill = [...document.querySelectorAll('.checkBox')];
  // console.log(skill);

  // function getChecked(e) {
  //   let getChex = skill
  //     .filter((item) => item.checked)
  //     .map((item) => item.value);
  //   // let getChexMap = getChex.map((item) => item.value);
  //   // .map((item) => item.value);
  //   // console.log(getChexMap);
  //   console.log(getChex);
  // }

  // skill.forEach((item) => item.addEventListener('change', getChecked));

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
              company2={company2}
              updateCompany={setCompany}
              updateCompany2={setCompany2}
              location={location}
              location2={location2}
              updateLocation={setLocation}
              updateLocation2={setLocation2}
              position={position}
              position2={position2}
              updatePosition={setPosition}
              updatePosition2={setPosition2}
              start={start}
              start2={start2}
              updateStart={setStart}
              updateStart2={setStart2}
              end={end}
              end2={end2}
              updateEnd={setEnd}
              updateEnd2={setEnd2}
              desc1={desc1}
              desc11={desc11}
              updateDesc1={setDesc1}
              updateDesc11={setDesc11}
              desc2={desc2}
              desc22={desc22}
              updateDesc2={setDesc2}
              updateDesc22={setDesc22}
              desc3={desc3}
              desc33={desc33}
              updateDesc3={setDesc3}
              updateDesc33={setDesc33}
            />
            {/* <Button
              variant='contained'
              color='secondary'
              type='submit'
              onClick={addProfessional}
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            >
              ADD
            </Button> */}
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
            {/* <div>
              {skills.map((d, i) => (
                <ul key={d.id}>
                  <input
                    onChange={(event) => {
                      let checked = event.target.checked;
                      setSkills(
                        skills.map((data) => {
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
            </div> */}

            <ResumeAdditionalSkills
              addSkillsData={addSkillsData}
              updateSkillsData={setAddSkillsData}
              skills={skills}
              setSkills={setSkills}
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
        company2={company2}
        location2={location2}
        position2={position2}
        start2={start2}
        end2={end2}
        desc11={desc11}
        desc22={desc22}
        desc33={desc33}
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
        skills={skills}
        setSkills={setSkills}
        // isChecked={isChecked}
        // formData={formData}
      />
    </div>
  );
}
