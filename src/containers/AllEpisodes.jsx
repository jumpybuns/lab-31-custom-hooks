import React from 'react';
import Loading from '../components/loading/Loading';
import EpisodeList from '../components/episodes/EpisodeList';
import { useEpisodes } from '../hooks/Episodes';

const AllEpisodes = () => {
  const { loading, episodes } = useEpisodes();

  if (loading) return <Loading />;
  return <EpisodeList episodes={episodes} />;
};
export default AllEpisodes;
