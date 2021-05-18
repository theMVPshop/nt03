import React, { useState } from 'react';
import { Switch, Route } from 'react-router';
import Landing from '../src/components/Landing';
import JobSearch from '../src/components/JobSearch';
import ClinicSearch from '../src/components/ClinicSearch';
import SignIn from '../src/components/SignIn';
import SignUp from '../src/components/SignUp';
import AddressBook from './components/AddressBook';

function Router() {
  const [clinicSearch, setClinicSearch] = useState("")

  return (
    <Switch>
      <Route exact path='/' component={Landing}></Route>
      <Route path='/job-search' component={JobSearch}></Route>
      <Route path='/clinic-search' component={ClinicSearch}></Route>
      <Route path='/sign-in' component={SignIn}></Route>
      <Route path='/sign-up' component={SignUp}></Route>
      <Route path='/address-book' component={AddressBook}></Route>
    </Switch>
  );
}

export default Router;
