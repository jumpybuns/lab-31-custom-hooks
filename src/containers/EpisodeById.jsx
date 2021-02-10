import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/loading/Loading';
import { useEpisode } from '../hooks/Episodes';
import EpisodeDetails from '../components/details/EpisodeDetails';

const EpisodeById = ({ match }) => {
  const { loading, episode } = useEpisode(match.params.id);

  if (loading) return <Loading />;
  return <EpisodeDetails name={episode.name} air_date={episode.air_date} />;
};

EpisodeById.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EpisodeById;
