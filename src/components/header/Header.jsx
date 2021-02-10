import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>Rick and Morty Episodes</h1>
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
    );
  }
}
