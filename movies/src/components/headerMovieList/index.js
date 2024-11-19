import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const Header = ({ title }) => {
  const navigate = useNavigate();

  return (
    <Paper
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 24px",
        marginBottom: "24px",
        borderRadius: "12px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <IconButton
        aria-label="go back"
        onClick={() => navigate(-1)}
        sx={{
          backgroundColor: "#e3f2fd",
          "&:hover": { backgroundColor: "#bbdefb" },
          padding: "12px",
        }}
      >
        <ArrowBackIcon color="primary" fontSize="medium" />
      </IconButton>

      <Typography
        variant="h4"
        component="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          flex: 1,
          margin: "0 16px",
          color: "#212121",
        }}
      >
        {title}
      </Typography>

      <IconButton
        aria-label="go forward"
        onClick={() => navigate(+1)}
        sx={{
          backgroundColor: "#e3f2fd",
          "&:hover": { backgroundColor: "#bbdefb" },
          padding: "12px",
        }}
      >
        <ArrowForwardIcon color="primary" fontSize="medium" />
      </IconButton>
    </Paper>
  );
};

export default Header;
