import React from 'react';
import { Switch, Route } from 'react-router';
import Landing from '../src/components/Landing';
import SearchForm from '../src/components/SearchForm';

function Router() {
  return (
    <Switch>
      <Route exact path='/' component={Landing}></Route>
      <Route path='/job-search' component={SearchForm}></Route>
    </Switch>
  );
}

export default Router;
