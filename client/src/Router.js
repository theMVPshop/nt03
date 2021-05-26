import React, { useState } from 'react';
import { Switch, Route } from 'react-router';
import Landing from '../src/components/Landing';
import JobSearch from '../src/components/JobSearch';
import ClinicSearch from '../src/components/ClinicSearch';
import JobPostings from '../src/components/JobPostings';

function Router() {
  const [jobSearch, setJobSearch] = useState({});

  return (
    <Switch>
      <Route exact path='/' component={Landing}></Route>
      <Route path='/job-search'>
        <JobSearch setJobSearch={setJobSearch} />
      </Route>
      <Route path='/clinic-search' component={ClinicSearch}></Route>
      <Route path='/job-postings'>
        <JobPostings jobSearch={jobSearch} />
      </Route>
    </Switch>
  );
}

export default Router;
