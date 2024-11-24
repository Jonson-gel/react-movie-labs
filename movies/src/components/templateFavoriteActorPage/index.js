import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import FilterCard from "../filterMoviesCard";
import Header from "../headerMovieList";
import FavoriteActor from "../favoriteActor";

const TemplateActorPage = ({ actors, ids, title, action }) => {
    const [nameFilter, setNameFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("0");

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

                <Grid container spacing={5} style={{ padding: "15px" }}>
                    <Grid size={{ xs: 3 }}>
                        <div
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "space-around",
                            }}
                        >
                            {ids.map((actorId) => {
                                <FavoriteActor actorId={actorId} />
                            })}
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TemplateActorPage;