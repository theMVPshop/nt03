import React from 'react';
import { Switch, Route } from 'react-router';
import Landing from '../src/components/Landing';
import JobSearch from '../src/components/JobSearch';
import ClinicSearch from '../src/components/ClinicSearch';


function Router() {
  return (
    <Switch>
      <Route exact path='/' component={Landing}></Route>
      <Route path='/job-search' component={JobSearch}></Route>
      <Route path='/clinic-search' component={ClinicSearch}></Route>

    </Switch>
  );
}

export default Router;
