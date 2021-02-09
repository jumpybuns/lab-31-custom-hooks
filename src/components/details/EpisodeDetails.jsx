import React from 'react';
import PropTypes from 'prop-types';

function EpisodeDetails({ name }) {
  return (
    <figure>
      <h2>{name}</h2>
    </figure>
  );
}

EpisodeDetails.propTypes = {
  name: PropTypes.string.isRequired,
};

export default EpisodeDetails;
