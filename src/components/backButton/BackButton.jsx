import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class BackButton extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route to="/">Home</Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
