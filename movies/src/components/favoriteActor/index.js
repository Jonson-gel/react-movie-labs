import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import { getActorImages } from "../../api/tmdb-api";
import { useNavigate } from 'react-router-dom';
import Grid from "@mui/material/Grid";

const FavoriteActor = (id) => {
    const navigate = useNavigate();

    const { data, error, isLoading, isError } = useQuery(
        ["images", { id: id }],
        getActorImages
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const handleImageClick = () => {
        navigate(`/actors/${id}`);
    };

    const images = data.profiles.slice(0, 1);

    return (
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
                            height: "80vh",
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

    )
}

export default FavoriteActor;