import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"
import { getActorCredits, getMovieActors } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {
    const navigate = useNavigate();

    return (
        <>
            <Typography variant="h4" component="h3" fontWeight="bold">
                {actor.name}
            </Typography>

            <Typography variant="h6" component="p">
                {actor.biography}
            </Typography>

            <Paper
                component="ul"
                sx={{ ...root }}
            >
                <li>
                    <Chip label="Other_name" sx={{ ...chip }} color="primary" />
                </li>
                {actor.also_known_as.map((n, id) => (
                    <li key={id}>
                        <Chip label={n} sx={{ ...chip }} />
                    </li>
                ))}
            </Paper>

            <Fab
                color="secondary"
                variant="extended"
                onClick={() => navigate(`/credits/${actor.id}`)}
                sx={{
                    position: 'fixed',
                    bottom: '1em',
                    right: '1em'
                }}
            >
                <NavigationIcon />
                Credits
            </Fab>
        </>
    );
};
export default ActorDetails;