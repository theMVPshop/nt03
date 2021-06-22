import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

import ResumeHeader from './ResumeHeader';
import ResumePaper from './ResumePaper';
import ResumeProfessional from './ResumeProfessional';
import ResumeEducation from './ResumeEducation';
import ResumeAdditionalSkills from './ResumeAdditionalSkills';

const useStyles = makeStyles((theme) => ({
  indicator: {
    backgroundColor: '#28c47d',
  },
}));

export default function ResumeBuilder() {
  const classes = useStyles();

  useEffect(() => {
    const nameData = localStorage.getItem('name');
    const addressData = localStorage.getItem('address');
    const cityData = localStorage.getItem('city');
    const stateData = localStorage.getItem('state');
    const zipData = localStorage.getItem('zip');
    const phoneData = localStorage.getItem('phone');
    const emailData = localStorage.getItem('email');
    const summaryData = localStorage.getItem('summary');

    // Work 1
    const companyData = localStorage.getItem('company');
    const locationData = localStorage.getItem('location');
    const positionData = localStorage.getItem('position');
    const startData = localStorage.getItem('start');
    const endData = localStorage.getItem('end');
    const desc1Data = localStorage.getItem('desc1');
    const desc2Data = localStorage.getItem('desc2');
    const desc3Data = localStorage.getItem('desc3');
    // Work 2
    const companyData2 = localStorage.getItem('company2');
    const locationData2 = localStorage.getItem('location2');
    const positionData2 = localStorage.getItem('position2');
    const startData2 = localStorage.getItem('start2');
    const endData2 = localStorage.getItem('end2');
    const desc1Data2 = localStorage.getItem('desc11');
    const desc2Data2 = localStorage.getItem('desc22');
    const desc3Data2 = localStorage.getItem('desc33');
    // Work 3
    const companyData3 = localStorage.getItem('company3');
    const locationData3 = localStorage.getItem('location3');
    const positionData3 = localStorage.getItem('position3');
    const startData3 = localStorage.getItem('start3');
    const endData3 = localStorage.getItem('end3');
    const desc1Data3 = localStorage.getItem('desc111');
    const desc2Data3 = localStorage.getItem('desc222');
    const desc3Data3 = localStorage.getItem('desc333');

    // EDU 1
    const instituteData = localStorage.getItem('institute');
    const instLocationData = localStorage.getItem('instLocation');
    const majorData = localStorage.getItem('major');
    const graduationData = localStorage.getItem('graduation');
    const infoData = localStorage.getItem('info');

    // EDU 2
    const instituteData2 = localStorage.getItem('institute2');
    const instLocationData2 = localStorage.getItem('instLocation2');
    const majorData2 = localStorage.getItem('major2');
    const graduationData2 = localStorage.getItem('graduation2');
    const infoData2 = localStorage.getItem('info2');

    // EDU 3
    const instituteData3 = localStorage.getItem('institute3');
    const instLocationData3 = localStorage.getItem('instLocation3');
    const majorData3 = localStorage.getItem('major3');
    const graduationData3 = localStorage.getItem('graduation3');
    const infoData3 = localStorage.getItem('info3');

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
      desc3Data,
      companyData2,
      locationData2,
      positionData2,
      startData2,
      endData2,
      desc1Data2,
      desc2Data2,
      desc3Data2,
      companyData3,
      locationData3,
      positionData3,
      startData3,
      endData3,
      desc1Data3,
      desc2Data3,
      desc3Data3,
      instituteData,
      instLocationData,
      majorData,
      graduationData,
      infoData,
      instituteData2,
      instLocationData2,
      majorData2,
      graduationData2,
      infoData2,
      instituteData3,
      instLocationData3,
      majorData3,
      graduationData3,
      infoData3)
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

      setCompany2(JSON.parse(companyData2));
      setLocation2(JSON.parse(locationData2));
      setPosition2(JSON.parse(positionData2));
      setStart2(JSON.parse(startData2));
      setEnd2(JSON.parse(endData2));
      setDesc11(JSON.parse(desc1Data2));
      setDesc22(JSON.parse(desc2Data2));
      setDesc33(JSON.parse(desc3Data2));

      setCompany3(JSON.parse(companyData3));
      setLocation3(JSON.parse(locationData3));
      setPosition3(JSON.parse(positionData3));
      setStart3(JSON.parse(startData3));
      setEnd3(JSON.parse(endData3));
      setDesc111(JSON.parse(desc1Data3));
      setDesc222(JSON.parse(desc2Data3));
      setDesc333(JSON.parse(desc3Data3));

      setInstitute(JSON.parse(instituteData));
      setInstLocation(JSON.parse(instLocationData));
      setMajor(JSON.parse(majorData));
      setGraduation(JSON.parse(graduationData));
      setInfo(JSON.parse(infoData));

      setInstitute2(JSON.parse(instituteData2));
      setInstLocation2(JSON.parse(instLocationData2));
      setMajor2(JSON.parse(majorData2));
      setGraduation2(JSON.parse(graduationData2));
      setInfo2(JSON.parse(infoData2));

      setInstitute3(JSON.parse(instituteData3));
      setInstLocation3(JSON.parse(instLocationData3));
      setMajor3(JSON.parse(majorData3));
      setGraduation3(JSON.parse(graduationData3));
      setInfo3(JSON.parse(infoData3));
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

    // Work 1
    localStorage.setItem('company', JSON.stringify(company));
    localStorage.setItem('location', JSON.stringify(location));
    localStorage.setItem('position', JSON.stringify(position));
    localStorage.setItem('start', JSON.stringify(start));
    localStorage.setItem('end', JSON.stringify(end));
    localStorage.setItem('desc1', JSON.stringify(desc1));
    localStorage.setItem('desc2', JSON.stringify(desc2));
    localStorage.setItem('desc3', JSON.stringify(desc3));
    // Work 2
    localStorage.setItem('company2', JSON.stringify(company2));
    localStorage.setItem('location2', JSON.stringify(location2));
    localStorage.setItem('position2', JSON.stringify(position2));
    localStorage.setItem('start2', JSON.stringify(start2));
    localStorage.setItem('end2', JSON.stringify(end2));
    localStorage.setItem('desc11', JSON.stringify(desc11));
    localStorage.setItem('desc22', JSON.stringify(desc22));
    localStorage.setItem('desc33', JSON.stringify(desc33));
    // Work 3
    localStorage.setItem('company3', JSON.stringify(company3));
    localStorage.setItem('location3', JSON.stringify(location3));
    localStorage.setItem('position3', JSON.stringify(position3));
    localStorage.setItem('start3', JSON.stringify(start3));
    localStorage.setItem('end3', JSON.stringify(end3));
    localStorage.setItem('desc111', JSON.stringify(desc111));
    localStorage.setItem('desc222', JSON.stringify(desc222));
    localStorage.setItem('desc333', JSON.stringify(desc333));

    // // EDU 1
    localStorage.setItem('institute', JSON.stringify(institute));
    localStorage.setItem('instLocation', JSON.stringify(instLocation));
    localStorage.setItem('major', JSON.stringify(major));
    localStorage.setItem('graduation', JSON.stringify(graduation));
    localStorage.setItem('info', JSON.stringify(info));

    // // EDU 2
    localStorage.setItem('institute2', JSON.stringify(institute2));
    localStorage.setItem('instLocation2', JSON.stringify(instLocation2));
    localStorage.setItem('major2', JSON.stringify(major2));
    localStorage.setItem('graduation2', JSON.stringify(graduation2));
    localStorage.setItem('info2', JSON.stringify(info2));

    // // EDU 3
    localStorage.setItem('institute3', JSON.stringify(institute3));
    localStorage.setItem('instLocation3', JSON.stringify(instLocation3));
    localStorage.setItem('major3', JSON.stringify(major3));
    localStorage.setItem('graduation3', JSON.stringify(graduation3));
    localStorage.setItem('info3', JSON.stringify(info3));
  });

  const handleDeleteData = () => {
    localStorage.clear();
    setName('');
    setAddress('');
    setCity('');
    setState('');
    setZip('');
    setPhone('');
    setEmail('');
    setSummary('');

    setCompany('');
    setLocation('');
    setPosition('');
    setStart('');
    setEnd('');
    setDesc1('');
    setDesc2('');
    setDesc3('');

    setCompany2('');
    setLocation2('');
    setPosition2('');
    setStart2('');
    setEnd2('');
    setDesc11('');
    setDesc22('');
    setDesc33('');

    setCompany3('');
    setLocation3('');
    setPosition3('');
    setStart3('');
    setEnd3('');
    setDesc111('');
    setDesc222('');
    setDesc333('');

    setInstitute('');
    setInstLocation('');
    setMajor('');
    setGraduation('');
    setInfo('');

    setInstitute2('');
    setInstLocation2('');
    setMajor2('');
    setGraduation2('');
    setInfo2('');

    setInstitute3('');
    setInstLocation3('');
    setMajor3('');
    setGraduation3('');
    setInfo3('');

    setAddSkillsData([]);
    setSkills(
      skills.map((d) => {
        return { select: false, id: d.id, name: d.name };
      })
    );
  };

  const clearHeader = () => {
    setName('');
    setAddress('');
    setCity('');
    setState('');
    setZip('');
    setPhone('');
    setEmail('');
    setSummary('');
  };

  const clearWork = () => {
    setCompany('');
    setLocation('');
    setPosition('');
    setStart('');
    setEnd('');
    setDesc1('');
    setDesc2('');
    setDesc3('');

    setCompany2('');
    setLocation2('');
    setPosition2('');
    setStart2('');
    setEnd2('');
    setDesc11('');
    setDesc22('');
    setDesc33('');

    setCompany3('');
    setLocation3('');
    setPosition3('');
    setStart3('');
    setEnd3('');
    setDesc111('');
    setDesc222('');
    setDesc333('');
  };

  const clearEdu = () => {
    setInstitute('');
    setInstLocation('');
    setMajor('');
    setGraduation('');
    setInfo('');

    setInstitute2('');
    setInstLocation2('');
    setMajor2('');
    setGraduation2('');
    setInfo2('');

    setInstitute3('');
    setInstLocation3('');
    setMajor3('');
    setGraduation3('');
    setInfo3('');
  };

  const clearAdditional = () => {
    setAddSkillsData([]);
    setSkills(
      skills.map((d) => {
        return { select: false, id: d.id, name: d.name };
      })
    );
  };

  // Tab State
  const [tab, setTab] = React.useState(0);
  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  // Event handler for going to next tab
  const nextButton = () => {
    setTab(tab + 1);
  };

  // Event handler for going to previous tab
  const prevButton = () => {
    setTab(tab - 1);
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
  const [company, setCompany] = useState('');
  const [company2, setCompany2] = useState('');
  const [company3, setCompany3] = useState('');
  const [location, setLocation] = useState('');
  const [location2, setLocation2] = useState('');
  const [location3, setLocation3] = useState('');
  const [position, setPosition] = useState('');
  const [position2, setPosition2] = useState('');
  const [position3, setPosition3] = useState('');
  const [start, setStart] = useState('');
  const [start2, setStart2] = useState('');
  const [start3, setStart3] = useState('');
  const [end, setEnd] = useState('');
  const [end2, setEnd2] = useState('');
  const [end3, setEnd3] = useState('');
  const [desc1, setDesc1] = useState('');
  const [desc11, setDesc11] = useState('');
  const [desc111, setDesc111] = useState('');
  const [desc2, setDesc2] = useState('');
  const [desc22, setDesc22] = useState('');
  const [desc222, setDesc222] = useState('');
  const [desc3, setDesc3] = useState('');
  const [desc33, setDesc33] = useState('');
  const [desc333, setDesc333] = useState('');

  // --------EDUCATION STATE VARIABLES AND FUNCTIONS--------
  const [institute, setInstitute] = useState('');
  const [institute2, setInstitute2] = useState('');
  const [institute3, setInstitute3] = useState('');
  const [instLocation, setInstLocation] = useState('');
  const [instLocation2, setInstLocation2] = useState('');
  const [instLocation3, setInstLocation3] = useState('');
  const [major, setMajor] = useState('');
  const [major2, setMajor2] = useState('');
  const [major3, setMajor3] = useState('');
  const [graduation, setGraduation] = useState('');
  const [graduation2, setGraduation2] = useState('');
  const [graduation3, setGraduation3] = useState('');
  const [info, setInfo] = useState('');
  const [info2, setInfo2] = useState('');
  const [info3, setInfo3] = useState('');

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
          <Tabs
            classes={{
              indicator: classes.indicator,
            }}
            // {/* indicatorColor={{ background: '#28c47d' }} */}
            value={tab}
            onChange={handleChange}
          >
            <Tab label='Header' />
            <Tab label='Work Experience' />
            <Tab label='Education' />
            <Tab label='+ Additional Skills'></Tab>
          </Tabs>
        </div>
        {tab === 0 && (
          <div>
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
              onClick={nextButton}
              clearHeader={clearHeader}
            />
          </div>
        )}
        {tab === 1 && (
          <div>
            <ResumeProfessional
              company={company}
              company2={company2}
              company3={company3}
              updateCompany={setCompany}
              updateCompany2={setCompany2}
              updateCompany3={setCompany3}
              location={location}
              location2={location2}
              location3={location3}
              updateLocation={setLocation}
              updateLocation2={setLocation2}
              updateLocation3={setLocation3}
              position={position}
              position2={position2}
              position3={position3}
              updatePosition={setPosition}
              updatePosition2={setPosition2}
              updatePosition3={setPosition3}
              start={start}
              start2={start2}
              start3={start3}
              updateStart={setStart}
              updateStart2={setStart2}
              updateStart3={setStart3}
              end={end}
              end2={end2}
              end3={end3}
              updateEnd={setEnd}
              updateEnd2={setEnd2}
              updateEnd3={setEnd3}
              desc1={desc1}
              desc11={desc11}
              desc111={desc111}
              updateDesc1={setDesc1}
              updateDesc11={setDesc11}
              updateDesc111={setDesc111}
              desc2={desc2}
              desc22={desc22}
              desc222={desc222}
              updateDesc2={setDesc2}
              updateDesc22={setDesc22}
              updateDesc222={setDesc222}
              desc3={desc3}
              desc33={desc33}
              desc333={desc333}
              updateDesc3={setDesc3}
              updateDesc33={setDesc33}
              updateDesc333={setDesc333}
              onClick={nextButton}
              goBack={prevButton}
              clearWork={clearWork}
            />
          </div>
        )}
        {tab === 2 && (
          <div>
            <ResumeEducation
              // EDU 1
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
              // EDU 2
              institute2={institute2}
              updateInstitute2={setInstitute2}
              instLocation2={instLocation2}
              updateInstLocation2={setInstLocation2}
              major2={major2}
              updateMajor2={setMajor2}
              graduation2={graduation2}
              updateGraduation2={setGraduation2}
              info2={info2}
              updateInfo2={setInfo2}
              // EDU 3
              institute3={institute3}
              updateInstitute3={setInstitute3}
              instLocation3={instLocation3}
              updateInstLocation3={setInstLocation3}
              major3={major3}
              updateMajor3={setMajor3}
              graduation3={graduation3}
              updateGraduation3={setGraduation3}
              info3={info3}
              updateInfo3={setInfo3}
              onClick={nextButton}
              goBack={prevButton}
              clearEdu={clearEdu}
            />
          </div>
        )}
        {tab === 3 && (
          <div>
            <ResumeAdditionalSkills
              addSkills={addSkills}
              addSkillsData={addSkillsData}
              updateSkillsData={setAddSkillsData}
              skills={skills}
              setSkills={setSkills}
              skill1={skill1}
              updateSkill1={setSkill1}
              goBack={prevButton}
              clearAdditional={clearAdditional}
            />
          </div>
        )}
      </div>
      <div>
        {/* RESUME RENDER */}
        <ResumePaper
          handleDeleteData={handleDeleteData}
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
          // JOB 1
          company={company}
          location={location}
          position={position}
          start={start}
          end={end}
          desc1={desc1}
          desc2={desc2}
          desc3={desc3}
          // JOB 2
          company2={company2}
          location2={location2}
          position2={position2}
          start2={start2}
          end2={end2}
          desc11={desc11}
          desc22={desc22}
          desc33={desc33}
          // JOB 3
          company3={company3}
          location3={location3}
          position3={position3}
          start3={start3}
          end3={end3}
          desc111={desc111}
          desc222={desc222}
          desc333={desc333}
          // EDUCATION
          // EDU 1
          institute={institute}
          instLocation={instLocation}
          major={major}
          graduation={graduation}
          info={info}
          // EDU 2
          institute2={institute2}
          instLocation2={instLocation2}
          major2={major2}
          graduation2={graduation2}
          info2={info2}
          // EDU 3
          institute3={institute3}
          instLocation3={instLocation3}
          major3={major3}
          graduation3={graduation3}
          info3={info3}
          // ADDITIONAL SKILLS
          addSkillsData={addSkillsData}
          skill1={skill1}
          skills={skills}
          setSkills={setSkills}
        />
      </div>
    </div>
  );
}
