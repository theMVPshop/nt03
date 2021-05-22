import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ResumeHeader from './ResumeHeader';
import ResumePreview from './ResumePreview';

export default function ResumeBuilder() {
  //   const classes = useStyles();
  const [tab, setTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div>
      <div className='resume-container'>
        <div className='tab-bar' position='static'>
          <Tabs value={tab} onChange={handleChange}>
            <Tab label='Header' />
            <Tab label='Professional' />
            <Tab label='Item Three' />
          </Tabs>
        </div>
        {tab === 0 && <ResumeHeader />}
      </div>
      <div className='preview-container'>{/* <ResumePreview /> */}</div>
    </div>
  );
}
