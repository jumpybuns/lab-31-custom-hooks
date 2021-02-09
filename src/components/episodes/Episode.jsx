import React from 'react';
import PropTypes from 'prop-types';

const Episode = ({ name, url }) => (
  <figure>
    <h1>{name}</h1>
    <h2>{url}</h2>
  </figure>
);

Episode.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Episode;
