import React, { useState, useEffect } from 'react';
import { fetchEpisodes } from '../services/rickAndMortyAPI';
import EpisodeList from '../components/episodes/EpisodeList';

function AllEpisodes() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEpisodes().then((res) => {
      setEpisodes(res), setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <EpisodeList episodes={episodes} />
    </>
  );
}

export default AllEpisodes;
