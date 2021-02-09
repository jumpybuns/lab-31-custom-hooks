import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../components/home/Home';
import Header from '../../components/header/Header';
import AllEpisodes from '../../containers/AllEpisodes';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={AllEpisodes} />
          </Switch>
        </Router>
      </div>
    );
  }
}
