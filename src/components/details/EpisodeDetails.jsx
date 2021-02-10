import React from 'react';
import PropTypes from 'prop-types';

function EpisodeDetails({ name, air_date }) {
  return (
    <figure>
      <h2>{name}</h2>
      <h3>{air_date}</h3>
    </figure>
  );
}

EpisodeDetails.propTypes = {
  name: PropTypes.string.isRequired,
  air_date: PropTypes.string.isRequired,
};

export default EpisodeDetails;
