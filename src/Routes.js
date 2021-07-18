import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Nav} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
