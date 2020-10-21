import React from 'react';
import { TVShowsModalDetails } from './components/TVShowsModalDetails';
import { TVShowsResults } from './components/TVShowsResults';
import { TVShowsSearch } from './components/TVShowsSearch';
import { useTVShow } from './hooks/useTVShow';

function App() {

  const { series, search, movieClick, details, closeModal } = useTVShow();

  return (
    <div>
      <TVShowsSearch search={search} />
      <TVShowsResults result={series} movieClick={movieClick} />
      <TVShowsModalDetails show={details} onClose={closeModal} />
    </div>
  );
}

export default App;