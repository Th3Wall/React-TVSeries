import React from 'react';
import css from './App.module.css';
import TVShowsResults from './components/TVShowsResults';
import TVShowsSearch from './components/TVShowsSearch';
import { useTVShow } from './hooks/useTVShow';

function App() {

  const { series, search, movieClick} = useTVShow();

  return (
    <div>
      <TVShowsSearch search={search} />
      <TVShowsResults result={series} movieClick={movieClick} />
    </div>
  );
}

export default App;

export const NoImage = () => {
  return <div className={css.noImage}></div>;
}