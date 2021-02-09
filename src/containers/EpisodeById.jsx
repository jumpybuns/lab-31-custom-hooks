import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEpisode } from '../services/rickAndMortyAPI';
import EpisodeDetails from '../components/details/EpisodeDetails';

function EpsiodeById() {
  const { loading, setLoading } = useState(true);
  const [episodes, setEpisodes] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchEpisode(id).then((res) => {
      setEpisodes(res), setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <EpisodeDetails name={episodes.name} />
    </div>
  );
}

export default EpsiodeById;
