import React, { useState, useEffect } from 'react';
import { fetchEpisodes } from '../services/rickAndMortyAPI';
import EpisodeList from '../components/episodes/EpisodeList';
import { useEpisodes } from '../hooks/Episodes';

const AllEpisodes = () => {
  const { episodes } = useEpisodes();

  return <EpisodeList episodes={episodes} />;
};
export default AllEpisodes;
