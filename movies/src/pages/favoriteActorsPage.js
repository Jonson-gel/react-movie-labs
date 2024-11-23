import React, { useContext, useState } from "react";
import PageTemplate from "../components/templateFavoriteActorPage";
import { useQueries } from "react-query";
import { getActor, getFavoriteActors } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromFavoriteActors from "../components/cardIcons/removeFromFavoriteActors"
import { MoviesContext } from "../contexts/moviesContext";
import { Grid } from "@mui/material";

const FavoriteActorsPage = () => {
  const {favoriteActors: actorIds } = useContext(MoviesContext);

  return (
    <Grid container spacing={3} sx={{ padding: "20px" }}>
      {actorIds.map((id) => (
        <Grid
          key={id}
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={3}
        >
          <PageTemplate id={id} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FavoriteActorsPage;