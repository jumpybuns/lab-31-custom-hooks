import React from 'react';
import { Link } from 'react-router-dom';
import Episode from './Episode';
import PropTypes from 'prop-types';

const EpisodeList = ({ episodes }) => {
  const episodeElements = episodes.map((episode) => (
    <li key={episode.id}>
      <Link to={`/episodes/${episode.id}`}>
        <Episode name={episode.name} url={episode.url} />
      </Link>
    </li>
  ));
  return (
    <div>
      <ul>{episodeElements}</ul>
    </div>
  );
};

export default EpisodeList;

EpisodeList.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
