import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import episodeByIdResponse from '../fixtures/episodeById.json';
import EpisodeById from './EpisodeById';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/episode/2', (req, res, ctx) => {
    return res(ctx.json(episodeByIdResponse));
  })
);

describe('EpisodeById container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and displays episode deets', async () => {
    render(
      <MemoryRouter>
        <EpisodeById match={{ params: { id: '2' } }} />
      </MemoryRouter>
    );

    screen.getAllByAltText('loading');

    const episode = await screen.findByTestId('episode');

    return waitFor(() => {
      expect(episode).not.toBeEmptyDOMElement();
    });
  });
});
