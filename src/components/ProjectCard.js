import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "45vw",
    minWidth: "90vmin",
    height: "35vw",
    minHeight: "70vmin",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0E0E0E",
    alignItems: "center",
  },
  image: {
    width: "45vw",
    minWidth: "90vmin",
    height: "15vw",
    minHeight: "30vmin",
    objectFit: "cover",
  },
  info: {
    height: "25vmax",
  },
});

export default function ProjectCard(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img src={props.src} className={classes.image} alt=""/>
      <Box className={classes.info}>
        <Typography sx={{ fontSize: "4vmin" }}>{props.title}</Typography>
        <Typography sx={{ fontSize: "2vmin" }}>{props.children}</Typography>
      </Box>
    </Box>
  );
}
