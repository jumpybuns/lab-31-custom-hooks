export const fetchEpisodes = () => {
  return fetch('https://rickandmortyapi.com/api/episode')
    .then((res) => res.json())
    .then(({ results }) =>
      results.map((result) => ({
        id: result.id,
        name: result.name,
        url: results.url,
      }))
    );
};

export const fetchEpisode = (id) => {
  return fetch(`https://rickandmortyapi.com/api/episode/${id}`).then((res) =>
    res.json()
  );
};
