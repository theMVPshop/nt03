import React from 'react';
import { Switch, Route } from 'react-router';
import Landing from '../src/components/Landing';

function Router() {
  return (
    <Switch>
      <Route exact path='/' component={Landing}></Route>
    </Switch>
  );
}

export default Router;
