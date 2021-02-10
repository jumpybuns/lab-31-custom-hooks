import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import allEpisodesAPIResponse from '../fixtures/episodes.json';
import AllEpisodes from './AllEpisodes';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/episode', (req, res, ctx) => {
    return res(ctx.json(allEpisodesAPIResponse));
  })
);

describe('All Episodes Container Test', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders All Episodes', async () => {
    render(
      <MemoryRouter>
        <AllEpisodes />
      </MemoryRouter>
    );
    screen.getAllByAltText('loading');

    const listOfEpisodes = await screen.findByTestId('episodes');

    return waitFor(() => {
      expect(listOfEpisodes).not.toBeEmptyDOMElement();
    });
  });
});
