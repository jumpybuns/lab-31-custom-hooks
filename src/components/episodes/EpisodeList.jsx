import React from 'react';
import { Link } from 'react-router-dom';

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
      <p>{episodeElements}</p>
    </div>
  );
};

export default EpisodeList;
