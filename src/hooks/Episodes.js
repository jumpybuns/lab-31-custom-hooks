import { useState, useEffect } from 'react';
import { fetchEpisode, fetchEpisodes } from '../services/rickAndMortyAPI';

export const useEpisodes = () => {
  const [loading, setLoading] = useState(true);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetchEpisodes().then((episodes) => {
      setEpisodes(episodes);
      setLoading(false);
    });
  }, []);

  return {
    loading,
    episodes,
  };
};

export const useEpisode = (id) => {
  const [loading, setLoading] = useState(true);
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    fetchEpisode(id).then((episode) => {
      setEpisode(episode);
      setLoading(loading);
    });
  }, [id]);

  return {
    loading,
    episode,
  };
};
