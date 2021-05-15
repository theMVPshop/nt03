import React from 'react';
import { Switch, Route } from 'react-router';
import Landing from '../src/components/Landing';
import JobSearch from '../src/components/JobSearch';
import ClinicSearch from '../src/components/ClinicSearch';
import JobPostings from '../src/components/JobPostings';
import ClinicSearchResults from './components/ClinicSearchResults'

function Router() {
  return (
    <Switch>
      <Route exact path='/' component={Landing}></Route>
      <Route path='/job-search' component={JobSearch}></Route>
      <Route path='/clinic-search' component={ClinicSearch}></Route>
      <Route path='/clinic-results' component={ClinicSearchResults}></Route>
      <Route path='/job-postings' component={JobPostings}></Route>
    </Switch>
  );
}

export default Router;
