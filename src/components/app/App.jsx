import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../../components/header/Header';
import AllEpisodes from '../../containers/AllEpisodes';
import EpsiodeById from '../../containers/EpisodeById';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={AllEpisodes} />
            <Route path="/episodes/:id" component={EpsiodeById} />
          </Switch>
        </Router>
      </div>
    );
  }
}
