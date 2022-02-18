import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "40vmin",
    maxWidth: "90vmin",
    height: "40vmin",
    maxHeight: "70vmin",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0E0E0E",
    textDecoration: "none",
    color: "inherit",
    alignItems: "center",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
  image: {
    width: "90%",
    height: "100%",
    maxHeight: "30vmin",
    objectFit: "contain",
  },

  
});

export default function ProjectCard(props) {
  const classes = useStyles();
  return (
    <a className={classes.root} href={props.url}>
      <img src={props.src} className={classes.image} alt=""/>
      <Box>
        <Typography sx={{ fontSize: "4vmin" }}>{props.title}</Typography>
        <Typography sx={{ fontSize: "2vmin" }}>{props.children}</Typography>
      </Box>
    </a>
  );
}
