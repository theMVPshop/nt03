import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ResumeHeader from './ResumeHeader';
import ResumePreview from './ResumePreview';
import ResumeProfessional from './ResumeProfessional';
import ResumeEducation from './ResumeEducation';
import ResumeAdditionalSkills from './ResumeAdditionalSkills';
import ResumeContextProvider from './ResumeContextProvider';

export default function ResumeBuilder() {
  //   const classes = useStyles();
  const [tab, setTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
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
        {tab === 0 && <ResumeHeader />}
        {tab === 1 && <ResumeProfessional />}
        {tab === 2 && <ResumeEducation />}
        {tab === 3 && <ResumeAdditionalSkills />}
        {/* </ResumeContextProvider> */}
      </div>
      {/* <div className='preview-container'> */}
      {/* <ResumeContextProvider> */}
      <ResumePreview />
      {/* </ResumeContextProvider> */}
      {/* </div> */}
    </div>
  );
}
