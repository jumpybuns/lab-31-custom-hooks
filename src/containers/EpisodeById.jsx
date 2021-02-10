import React from 'react';
import Loading from '../components/loading/Loading';
import { useEpisode } from '../hooks/Episodes';
import EpisodeDetails from '../components/details/EpisodeDetails';

const EpisodeById = ({ match }) => {
  const { loading, episode } = useEpisode(match.params.id);
  console.log(episode);
  if (loading) return <Loading />;
  return <EpisodeDetails name={episode.name} air_date={episode.air_date} />;
};
export default EpisodeById;
