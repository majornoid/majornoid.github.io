import React from "react";
import logo from "../logo.png";
import { makeStyles } from "@mui/styles";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  logo: {
    height: "8vw",
    minHeight: "100px",
    minWidth: "100px",
    paddingTop: "1vh",
  },
  button: {
    width: "72%",
  },
});

export default function NavBar() {
  const classes = useStyles();
  return (
    <Box
      sx={{
        height: "100vh",
        width: "10vw",
        minWidth: "120px",
        zIndex: "1",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        alignItems: "center",
        gap: "2vmax",
        top: "0",
        left: "0",
      }}
    >
      <Link to="/">
        <img src={logo} alt="logo" className={classes.logo}></img>
      </Link>

      <Button
        component={Link}
        to={"/projects"}
        variant="outlined"
        className={classes.button}
        color="secondary"
      >
        Projects
      </Button>
      <Button
        component={Link}
        to={"/resume"}
        variant="outlined"
        className={classes.button}
        color="secondary"
      >
        Resume
      </Button>
    </Box>
  );
}
