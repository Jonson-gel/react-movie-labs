import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

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
    const [drawerOpen, setDrawerOpen] = useState(false);

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
                {actor.also_known_as.map((n) => (
                    <li key={n.name}>
                        <Chip label={n.name} sx={{ ...chip }} />
                    </li>
                ))}
            </Paper>
        </>
    );
};
export default ActorDetails;