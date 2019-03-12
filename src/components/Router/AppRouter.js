import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Dashboard from '../../views/Dashboard/Dashboard';
import CreateSong from '../../views/CreateSong/CreateSong';

export const history = createHistory();

const AppRouter = () => (
  <div>
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/create-song" component={CreateSong} />
    </Switch>
  </div>
);

export default AppRouter;
