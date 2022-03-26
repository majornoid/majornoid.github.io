import React from "react";
import profileImage from "../assets/ProfileImage.jpg";
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
          flexWrap: "wrap",
          gap: "4vw",
          padding: "2vw",
          justifyContent: "center",
          maxWidth: "90vw",
        }}
      >
        <Box
          sx={{
            width: "60vmin",
            textAlign: "left",
          }}
        >
          <Typography variant="h3">Hi, <br/>I'm Morgan</Typography>
          <br/>
          <Typography>
            Welcome to my portfolio! This portfolio is a project I 
            started to better showcase my current and future projects, as well
            as give me more experience with web development. I plan to add more 
            features and polish as I develop my design skills!
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
    </StandardPage>
  );
}
