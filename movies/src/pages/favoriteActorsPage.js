import React, { useContext, useState } from "react";
import PageTemplate from "../components/templateFavoriteActorPage";
import { useQueries } from "react-query";
import { getActor, getFavoriteActors } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromFavoriteActors from "../components/cardIcons/removeFromFavoriteActors"
import { MoviesContext } from "../contexts/moviesContext";
import { Grid } from "@mui/material";

const FavoriteActorsPage = () => {
  const { favoriteActors: actorIds } = useContext(MoviesContext);

  const favoriteActorsQueries = useQueries(
    actorIds.map((actorId) => {
      return {
        queryKey: ["movie", { id: actorId }],
        queryFn: getActor,
      };
    })
  );

  const isLoading = favoriteActorsQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const actors = favoriteActorsQueries.map((q) => {
    q.data.genre_ids = q.data.also_known_as.map(g => g.id)
    return q.data
  });

  return (
    <Grid container spacing={3} sx={{ padding: "20px" }}>
      <PageTemplate
        actors={actors}
        ids={actorIds}
        title="Favorite Actors"
        action={(movie) => {
          return (
            <>
              <RemoveFromFavoriteActors movie={movie} />
            </>
          );
        }}
      />
    </Grid>
  );
};

export default FavoriteActorsPage;