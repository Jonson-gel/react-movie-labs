import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => m.title.toLowerCase().includes(nameFilter.toLowerCase()))
    .filter((m) => (genreId > 0 ? m.genre_ids.includes(genreId) : true));

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container spacing={3} sx={{ padding: "20px" }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={3}>
          <Paper
            elevation={3}
            sx={{
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <FilterCard
              onUserInput={handleChange}
              titleFilter={nameFilter}
              genreFilter={genreFilter}
            />
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          sm={10}
          md={9}
          sx={{
            maxHeight: "90vh",
            overflowY: "auto",
            padding: "20px",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#fff",
            }}
          >
            <MovieList action={action} movies={displayedMovies} />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MovieListPageTemplate;
