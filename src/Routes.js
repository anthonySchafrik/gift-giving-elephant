import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AccountSetting from './components/AccountSetting';
import AssignedPerson from './components/AssignedPerson';
import Group from './components/Group';
import HomePage from './components/HomePage';
import SignUp from './components/Signup';

const Routes = () => {
  return (
    <Switch>
      <Route path="/Account" component={AccountSetting} />
      <Route path="/Assigned" component={AssignedPerson} />
      <Route path="/Group" component={Group} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default Routes;
