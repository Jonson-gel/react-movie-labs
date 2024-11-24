import React from "react";
import Grid from "@mui/material/Grid2";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Spinner from '../spinner';
import { getActorImages } from "../../api/tmdb-api";

const TemplateActorPage = ({ id }) => {
    const { data, error, isLoading, isError } = useQuery(
        ["images", { id: id }],
        getActorImages
    );
    const navigate = useNavigate();

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const images = data.profiles.slice(0, 1);

    const handleImageClick = () => {
        navigate(`/actor/${id}`);
    };

    return (
        <>
            <Grid container spacing={5} style={{ padding: "15px" }}>
                <Grid size={{ xs: 3 }}>
                    <div
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-around",
                        }}
                    >
                        <ImageList
                            sx={{
                                height: "100vh",
                            }}
                            cols={1}
                        >
                            {images.map((image) => (
                                <ImageListItem key={image.file_path} cols={1}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                                        alt={`Actor Image`}
                                        style={{
                                            cursor: "pointer",
                                            borderRadius: "8px",
                                        }}
                                        onClick={handleImageClick}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateActorPage;
