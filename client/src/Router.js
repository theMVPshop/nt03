import React, { useState } from 'react';
import { Switch, Route } from 'react-router';
import Landing from '../src/components/Landing';
import JobSearch from '../src/components/JobSearch';
import ClinicSearch from '../src/components/ClinicSearch';
import SignIn from '../src/components/SignIn';
import SignUp from '../src/components/SignUp';
import AddressBook from './components/AddressBook';
import ClinicSearchResults from './components/ClinicSearchResults';
import ResumeBuilder from './components/ResumeBuilder';

function Router() {
  const [clinicSearch, setClinicSearch] = useState('');

  return (
    <Switch>
      <Route exact path='/' component={Landing}></Route>
      <Route path='/job-search' component={JobSearch}></Route>
      <Route path='/clinic-search'>
        <ClinicSearch setClinicSearch={setClinicSearch} />
      </Route>
      <Route path='/clinic-results'>
        <ClinicSearchResults clinicSearch={clinicSearch} />
      </Route>
      <Route path='/sign-in' component={SignIn}></Route>
      <Route path='/sign-up' component={SignUp}></Route>
      <Route path='/address-book' component={AddressBook}></Route>
      <Route path='/resume-builder' component={ResumeBuilder}></Route>
    </Switch>
  );
}

export default Router;
