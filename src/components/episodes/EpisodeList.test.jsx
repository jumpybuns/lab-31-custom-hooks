import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EpisodeList from './EpisodeList';
import { MemoryRouter } from 'react-router-dom';

describe('EpisodeList component', () => {
  afterEach(() => cleanup());
  it('renders EpisodeList', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <EpisodeList
          episodes={[
            {
              id: 1,
              name: 'Pilot',
              url: 'https://rickandmortyapi.com/api/episode/1',
            },
          ]}
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
