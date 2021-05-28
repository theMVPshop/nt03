import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import ResumeHeader from './ResumeHeader';
// import ResumePreview from './ResumePreview';
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

  // Header Form State
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');

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
        {/* <ResumeContextProvider> */}
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
              proDate={proData}
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
        {tab === 2 && <ResumeEducation />}
        {tab === 3 && <ResumeAdditionalSkills />}
        {/* </ResumeContextProvider> */}
      </div>
      {/* <div className='preview-container'> */}
      {/* <ResumeContextProvider> */}
      <ResumePaper
        name={name}
        address={address}
        city={city}
        state={state}
        zip={zip}
        phone={phone}
        email={email}
        summary={summary}
        proDate={proData}
        company={company}
        location={location}
        position={position}
        start={start}
        end={end}
        desc1={desc1}
        desc2={desc2}
        desc3={desc3}
      />
      {/* </ResumeContextProvider> */}
      {/* </div> */}
    </div>
  );
}
