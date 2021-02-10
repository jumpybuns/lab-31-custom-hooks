import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEpisode } from '../services/rickAndMortyAPI';
import EpisodeDetails from '../components/details/EpisodeDetails';
import Loading from '../components/loading/Loading';

function EpsiodeById() {
  const { loading, setLoading } = useState(true);
  const [episodes, setEpisodes] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchEpisode(id).then((res) => {
      setEpisodes(res), setLoading(false);
    });
  }, []);

  if (loading) return <Loading />;
  return (
    <div>
      <EpisodeDetails name={episodes.name} air_date={episodes.air_date} />
    </div>
  );
}

export default EpsiodeById;
