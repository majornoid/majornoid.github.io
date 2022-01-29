import React from "react";
import profileImage from "../ProfileImage.jpg";
import "./Home.css";
import StandardPage from "../components/StandardPage";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <StandardPage>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "8vw",
          padding: "4vw",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            width: "40vw",
            textAlign: "left",
          }}
        >
          <Typography variant="h3">Hi, I'm Morgan</Typography>
          <Typography>
            Welcome to my portfolio! This portfolio is a project I recently
            started to better showcase my current and future projects, as well
            as give me more experience with web development. It is still in very
            early development, but I have added some of the basic content!
          </Typography>
        </Box>
        <img
          src={profileImage}
          alt="Me"
          style={{
            width: "20vmax",
            borderRadius: "2vmax",
            height: "26vmax",
            objectFit: "cover",
          }}
        />
      </Box>
      <footer className="Home-version">
        <Link to="/changelog" style={{ color: "#FFF", textDecoration: "none" }}>
          Alpha 1.0.1
        </Link>
      </footer>
    </StandardPage>
  );
}
