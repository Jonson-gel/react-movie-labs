import React from "react";
import { getUpComing } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PlayListAddIcon from "../components/cardIcons/playListAdd";

const UpComingPage = (props) => {

  const { data, error, isLoading, isError } = useQuery('discover', getUpComing)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <PlayListAddIcon movie={movie} />
      }}
    />
  );
};
export default UpComingPage;