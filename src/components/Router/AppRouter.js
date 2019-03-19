import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import DashboardView from '../../views/DashboardView/DashboardView';
import CreateSongView from '../../views/CreateSongView/CreateSongView';

export const history = createHistory();

const AppRouter = () => (
  <div>
    <Switch>
      <Route exact path="/dashboard" component={DashboardView} />
      <Route exact path="/create-song" component={CreateSongView} />
    </Switch>
  </div>
);

export default AppRouter;
