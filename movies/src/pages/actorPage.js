import React from "react";
import { getMovieActors } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const ActorPage = (props) => {

  const { data, error, isLoading, isError } = useQuery('actors', getMovieActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const actor = data.results;

  const favorites = actor.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <PageTemplate
      title="Discover Actors"
      actor={actor}
    />
  );
};
export default ActorPage;